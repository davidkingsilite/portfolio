import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TawkChat from "@/components/Tawkchat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-be-vietnam',
  display: 'swap',
});

// app/layout.tsx
export const metadata: Metadata = {
  title: 'Chicago Web Designer | ilite.dev',
  description: 'Professional web design and development services for small businesses in Chicago, Illinois. Mobile-first, SEO-ready websites built to grow your brand.',
  keywords: ['Chicago web designer', 'web development Illinois', 'affordable small business website', 'Chicago UI/UX designer'],
  metadataBase: new URL('https://www.ilite.dev'),
  openGraph: {
    title: 'Chicago Web Designer | ilite.dev',
    description: 'We help small businesses in Chicago grow with modern, responsive websites.',
    url: 'https://www.ilite.dev',
    siteName: 'ilite.dev',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ilite.dev',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beVietnam.variable} antialiased`}
      >
        <Navbar />
          <main className="min-h-screen">{children}</main>
          <TawkChat />
        <Footer />
      </body>
    </html>
  );
}
