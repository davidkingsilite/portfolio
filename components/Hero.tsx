'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-2 md:px-16 py-2 md:py-16">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-black">
          Hello, I&apos;m David — <br />
          A FullStack Web Developer
        </h1>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-base">
          I craft responsive, performant, and visually engaging web experiences using modern technologies like Next.js, Tailwind CSS, and TypeScript.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-black text-black rounded hover:bg-black hover:text-white transition"
          >
            Hire Me
          </Link>
         
  
         <Link
           href="https://wa.me/2347063234954?text=Hi%20David,%20I%20visited%20ilite.dev%20and%20would%20like%20to%20discuss%20a%20project."
           target="_blank"
           rel="noopener noreferrer"
           className="fixed bottom-4 left-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition z-100"
           >
          Chat on WhatsApp
        </Link>
  

        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center w-auto h-auto">
        <Image
          src="/dav1.jpg" // <-- Replace with your actual image path in /public
          alt="David Nwachukwu"
          width={350}
          height={350}
          className="rounded-full shadow-lg object-cover"
          priority
        />
      </div>
    </section>
  );
}
