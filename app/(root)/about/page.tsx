'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 font-sans">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-lg text-gray-600">
          I’m a passionate web developer with a focus on building clean, user-friendly interfaces.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/dav1.jpg" // Replace with your image in /public
            alt="Your profile picture"
            width={300}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 space-y-6 text-gray-700 leading-relaxed">
          <p>
            I specialize in building dynamic, responsive web applications using technologies like <strong>Next.js</strong>, <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>MongoDB</strong>. My passion lies in turning complex problems into elegant and performant solutions.
          </p>
          <p>
            Whether it’s a sleek portfolio, a custom CMS, or a SaaS dashboard, I’m committed to writing maintainable code and delivering top-tier digital experiences.
          </p>
          <p>
            When I’m not coding, I enjoy exploring design systems, reading about clean architecture, and learning new tools to stay sharp in this ever-evolving industry.
          </p>

          <p>
            Let’s work together to bring your vision to life.
          </p>

          {/* Optional: CTA */}
          <Link
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
