'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navbarLinks } from '@/constants';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false); // Auto-close drawer on route change
  }, [pathname]);

  return (
    <header className="w-full z-50 sticky top-0 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex md:justify-between sm:justify-between items-center py-6 px-4 sm:px-6 lg:px-8 h-20 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div>
            <Image 
              src="/logoblack.png"
              alt='logo'
              width={40}
              height={40}
              className='rounded-full h-full w-full object-cover'
            >

            </Image>
          </div>
          <div className="text-left">
            <h1 className="font-bevietnam font-extrabold text-[24px]">
              Dev Portfolio
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6 font-bevietnam">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-[#4D4D4D] hover:text-primary-green-100 transition"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button onClick={() => setIsOpen(true)} className="lg:hidden text-gray-700 flex right-6 absolute">
          <Menu size={24} />
        </button>

        {/* Desktop CTA */}
        <button
            onClick={() => router.push('/contact')}
            className="hidden lg:flex px-6 py-3 border border-black text-white rounded bg-black hover:bg-gray-800 font-medium transition"
          >
            Hire Me
          </button>
      </nav>

      {/* Slide-in Drawer for Mobile */}
      <div
        className={`fixed top-0 pt-10 right-0 h-1.5/4 w-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-between items-center px-4 py-4 mr-5 border-b">
          <span className="text-lg font-bold text-primary-green-100">Menu</span>
          <button onClick={() => setIsOpen(false)} className='bg-gray-400 rounded-full'>
            <X size={28} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-8 py-4 gap-4 font-bevietnam">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-gray-700 hover:text-primary-green-100 py-2 border-b px-4"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          <button
            onClick={() => router.push('/contact')}
            className="px-6 py-3 border border-black text-white rounded bg-black hover:bg-gray-800 font-medium transition"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
