'use client';

import Link from 'next/link';
import { Facebook, Twitter, Github, Linkedin } from 'lucide-react';
import FooterNewsletter from './FooterNewsletter';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 md:py-10 font-bevietnam">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Logo / Branding */}
          <div>
            <h2 className="text-xl font-bold text-white p-1">ILITE.DEV</h2>
            <p className="text-sm text-gray-400 p-1">Building web experiences with modern tools.</p>
          </div>

          <div className="mx-0 flex flex-col md:flex-row gap-10 md:gap-16 p-4 text-nowrap">
        <div className="flex md:flex-col lg:flex-row gap-10">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about-us">Our Team</Link></li>
          </ul>
        </div>

        {/* Know More */}
        <div>
          <h3 className="font-semibold mb-4">Know More</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/support">Support</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-and-condition">Terms & conditions</Link></li>
          </ul>
        </div>
        </div>
        {/* Newsletter */}
        <div className="">
          <h3 className="font-semibold pb-4">Newsletter</h3>
          <FooterNewsletter />
        </div>
      </div>

          {/* Social Icons */}
          <div className="flex gap-4 pl-4 md:pt-20">
            <Link href="https://facebook.com" target="_blank" className="hover:text-white">
              <Facebook size={18} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-white">
              <Twitter size={18} />
            </Link>
            <Link href="https://github.com/davidkingsilite" target="_blank" className="hover:text-white">
              <Github size={18} />
            </Link>
            <Link href="https://www.linkedin.com/in/nwachukwu-david-b5391a8b?trk=contact-info" target="_blank" className="hover:text-white">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ILITE.dev — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
