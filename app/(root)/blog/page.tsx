// import Link from 'next/link';
// import { getAllBlogs } from '@/lib/blog';

// export default async function BlogListPage() {
//   const posts = await getAllBlogs();

//   return (
//     <div className="max-w-4xl mx-auto py-16 px-4">
//       <h1 className="text-4xl font-bold mb-6">Blog</h1>
//       <ul className="space-y-8">
//         {posts.map((post) => (
//           <li key={post.slug}>
//             <Link href={`/blog/${post.slug}`}>
//               <h2 className="text-2xl font-semibold text-green-600 hover:underline">
//                 {post.title}
//               </h2>
//               <p className="text-gray-600 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
//               <p className="text-gray-800">{post.excerpt}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// } 



// app/blog/page.tsx
import connectDB from '@/lib/connectDB';
import {Blog} from '@/models/Blog';
import Image from 'next/image';
import Link from 'next/link';


 

const BlogPage = async () => {
  
  await connectDB();
  const posts = await Blog.find({}).sort({ date: 1 }).lean();



  return (
    <main className="px-4 py-12 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold mb-3">Our  Blog</h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Helpful tips, insights, and news from Ilite.dev — your go-to source for professional and tech advice.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white">
            <div className="w-full h-48 relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-t-xl object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <span className="text-xs text-primary-green-100 font-medium uppercase">{post.category}</span>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
              <div className="text-xs text-gray-400 mt-2">
                By <span className="text-black font-medium">{post.author}</span> · {post.date}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-primary-green-100 font-semibold text-sm hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-20 bg-primary-green-100/10 py-12 rounded-xl max-w-5xl mx-auto">
        <h2 className="text-xl font-bold mb-3">Want Tips in Your Inbox?</h2>
        <p className="text-sm text-gray-700 mb-6">
          Subscribe to our newsletter for regular updates and promotions.
        </p>
        <p className="inline-block bg-primary-green-100 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition">
          Subscribe Now
          </p>
      </section>
    </main>
  );
};

export default BlogPage;


