// import { notFound } from 'next/navigation';
// import { getBlogBySlug } from '@/lib/blog'; // Adjust based on your structure
// import type { Metadata } from 'next';

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const post = await getBlogBySlug(params.slug);
//   if (!post) return { title: 'Blog not found' };

//   return {
//     title: `${post.title} | My Portfolio`,
//     description: post.excerpt,
//   };
// }

// export default async function BlogPostPage({ params }: { params: { slug: string } }) {
//   const post = await getBlogBySlug(params.slug);

//   if (!post) return notFound();

//   return (
//     <article className="max-w-3xl mx-auto px-4 py-20 font-sans">
//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
//       <p className="text-gray-500 text-sm mb-6">
//         Posted on {new Date(post.date).toLocaleDateString()}
//       </p>
//       <div
//         className="prose prose-lg max-w-none"
//         dangerouslySetInnerHTML={{ __html: post.content }}
//       />
//     </article>
//   );
// }
 


// app/(root)/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Key } from 'react';
import { Blog } from '@/models/Blog';
import connectDB from '@/lib/connectDB';


// ✅ Optional: for static generation of known routes
export const dynamicParams = false;

// ✅ Optional: for static generation of known routes
export async function generateStaticParams() {

  await connectDB();

  const posts = await Blog.find({}, 'slug'); // only get slugs

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}


export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await connectDB();

  const post = await Blog.findOne({ slug });


  if (!post) return notFound();

  return (
    <main className="px-4 py-12 md:px-8 lg:px-20 font-bevietnam bg-white text-black-100 max-w-4xl mx-auto">
      <Link href="/blog" className="text-sm text-primary-green-100 hover:underline">
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        By <span className="font-medium text-black">{post.author}</span> · {post.date} ·{' '}
        <span className="text-primary-green-100">{post.category}</span>
      </div>

      <div className="w-full h-[250px] sm:h-[350px] relative rounded-xl overflow-hidden mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="rounded-xl object-cover"
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      </div>

      <article className="prose prose-sm sm:prose-base max-w-none prose-headings:font-semibold prose-p:text-gray-700 prose-li:text-gray-600">
        {post.content?.split('\n').map((line: string, i: Key) => (
          <p key={i}>{line.trim()}</p>
        ))}
      </article>
    </main>
  );
}
