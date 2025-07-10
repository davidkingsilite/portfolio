'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Anna Fox',
    role: 'Business Owner, Chicago IL',
    rating: 5,
    message:
      '"Working with ilite.dev was a game changer. The project was delivered on time, with attention to detail, and exceeded our expectations. Highly recommended!"',
    image: '/alex-starnes.jpg', // Replace with actual image URL or static import
  },
  {
    name: 'Claire Whitmore',
    role: 'Small Business Owner, Chicago IL',
    rating: 5,
    message:
      '"Professional, creative, and reliable. They understood exactly what we needed and brought our vision to life perfectly."',
    image: '/christina-wocin.jpg', // Replace with actual image URL or static import
  },
  {
    name: 'Emily Carter',
    role: 'Tech Startup Founder, Chicago IL',
    rating: 5,
    message:
      '"One of the best collaborators I’ve worked with. The quality, communication, and dedication were top-notch from start to finish."',
    image: '/olga-zhura.jpg', // Replace with actual image URL or static import
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

    // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, [total]);


  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const { name, role, rating, message, image } = testimonials[current];

  return (
    <section className="py-10 px-4 sm:px-6 md:px-12 lg:px-24 bg-white font-bevietnam">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Heading */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Feedback About Their <br className="hidden sm:block" /> Experience With Us
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-6">
          What People Are Saying About Us We take pride in delivering exceptional work that speaks for itself—but don’t just take our word for it. Here’s what some of our clients have to say:          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-md border border-black text-black hover:bg-gray-200 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-md bg-black text-white hover:bg-gray-800 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right: Testimonial Card */}
        <div className="w-full lg:w-1/2">
        <div className="relative w-full max-w-md mx-auto bg-white border-2 border-black rounded-2xl shadow-md overflow-hidden">
        <div className="relative w-full h-[450px] sm:h-[450px] md:h-[550px] flex">
            <Image
               src={image}
               alt={name}
               fill
               className=' rounded-xl object-cover w-auto h-auto border-black'
               />
        
           
            <div className='relative flex self-end p-4'>
               <div className="flex-1">
                 <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold">{name}</h3>
                 <p className="text-sm sm:text-base md:text-lg text-white">{role}</p>

               <div className="flex items-center gap-1 my-2">
                 {Array.from({ length: rating }).map((_, i) => (
                   <span key={i} className="text-yellow-500 text-xl">★</span>
                   ))}
               </div>
                 <p className="text-white text-sm sm:text-base md:text-lg">{message}</p>
            </div>

               <div className="absolute top-4 right-4 bg-gray-950 rounded-md p-2">
                  <Quote className="text-white" size={24} />
               </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
// import Image from 'next/image';

// const testimonials = [
//   {
//     name: 'Anna Fox',
//     role: 'Business Owner',
//     rating: 5,
//     message:
//       '"Working with ilite.dev was a game changer. The project was delivered on time, with attention to detail, and exceeded our expectations. Highly recommended!"',
//     image: '/alex-starnes.jpg',
//   },
//   {
//     name: 'Claire Whitmore',
//     role: 'Business Owner',
//     rating: 5,
//     message:
//       '"Professional, creative, and reliable. They understood exactly what we needed and brought our vision to life perfectly."',
//     image: '/christina-wocin.jpg',
//   },
//   {
//     name: 'Emily Carter',
//     role: 'Tech Startup Founder',
//     rating: 5,
//     message:
//       '"One of the best collaborators I’ve worked with. The quality, communication, and dedication were top-notch from start to finish."',
//     image: '/olga-zhura.jpg',
//   },
// ];

// export default function Testimonials() {
//   const [current, setCurrent] = useState(0);
//   const total = testimonials.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [total]);

//   const handlePrev = () => {
//     setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
//   };

//   const { name, role, rating, message, image } = testimonials[current];

//   return (
//     <section className="py-10 px-4 sm:px-6 md:px-12 lg:px-24 bg-white font-bevietnam">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
//         {/* Left: Heading & Controls */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
//             Feedback About Their <br className="hidden sm:block" /> Experience With Us
//           </h2>
//           <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-6">
//             What People Are Saying About Us — we take pride in delivering exceptional work that speaks for itself. Here’s what our clients have to say:
//           </p>

//           <div className="flex justify-center lg:justify-start gap-4">
//             <button
//               onClick={handlePrev}
//               className="p-3 rounded-md border border-black text-black hover:bg-gray-200 transition"
//             >
//               <ArrowLeft size={20} />
//             </button>
//             <button
//               onClick={handleNext}
//               className="p-3 rounded-md bg-black text-white hover:bg-gray-800 transition"
//             >
//               <ArrowRight size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Right: Testimonial Card */}
//         <div className="w-full lg:w-1/2">
//           <div className="relative w-full max-w-md mx-auto bg-white border-2 border-black rounded-2xl shadow-md overflow-hidden">
//             <div className="relative w-full h-64 sm:h-80 md:h-96">
//               <Image
//                 src={image}
//                 alt={name}
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute top-4 right-4 bg-gray-950 rounded-md p-2 z-10">
//                 <Quote className="text-white" size={24} />
//               </div>
//             </div>

//             <div className="p-6 space-y-4 text-left">
//               <h3 className="text-lg md:text-2xl font-semibold">{name}</h3>
//               <p className="text-sm md:text-lg text-gray-500">{role}</p>

//               <div className="flex items-center gap-1">
//                 {Array.from({ length: rating }).map((_, i) => (
//                   <span key={i} className="text-yellow-500 text-lg">★</span>
//                 ))}
//               </div>

//               <p className="text-sm md:text-base text-gray-800">{message}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
