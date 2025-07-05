'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Anna Fox',
    role: 'Business Woman',
    rating: 5,
    message:
      '"Working with ilite.dev was a game changer. The project was delivered on time, with attention to detail, and exceeded our expectations. Highly recommended!"',
    image: '/alex-starnes.jpg', // Replace with actual image URL or static import
  },
  {
    name: 'Claire Whitmore',
    role: 'Business Woman',
    rating: 5,
    message:
      '"Professional, creative, and reliable. They understood exactly what we needed and brought our vision to life perfectly."',
    image: '/christina-wocin.jpg', // Replace with actual image URL or static import
  },
  {
    name: 'Emily Carter',
    role: 'Tech Startup Founder',
    rating: 5,
    message:
      '"One of the best collaborators I’ve worked with. The quality, communication, and dedication were top-notch from start to finish."',
    image: '/olga-zhura.jpg', // Replace with actual image URL or static import
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const { name, role, rating, message, image } = testimonials[current];

  return (
    <section className="py-20 px-4 bg-white font-bevietnam">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left: Heading */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-4">
            Feedback About Their <br /> Experience With Us
          </h2>
          <p className="text-gray-500 max-w-md mb-8">
          What People Are Saying About Us We take pride in delivering exceptional work that speaks for itself—but don’t just take our word for it. Here’s what some of our clients have to say:          </p>

          <div className="flex gap-4">
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
        <div className="relative">
          <div className="rounded-2xl border-2 border-black p-6 flex flex-col sm:flex-row items-start gap-6 bg-white shadow-md overflow-hidden">
            <Image
               src={image}
               alt={name}
               width={130}
               height={200}
               className=' rounded-xl object-cover'
            />
            
            <div className='relative'>
               <div className="flex-1">
                 <h3 className="text-lg font-semibold">{name}</h3>
                 <p className="text-sm text-gray-500">{role}</p>

               <div className="flex items-center gap-1 my-2">
                 {Array.from({ length: rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
               </div>
                 <p className="text-gray-600 text-sm">{message}</p>
            </div>

               <div className="absolute top-4 right-4 bg-gray-950 rounded-md p-2">
                  <Quote className="text-white" size={24} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
