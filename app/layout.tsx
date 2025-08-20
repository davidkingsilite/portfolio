import type { Metadata } from "next";
import { Be_Vietnam_Pro, Geist, Geist_Mono, Lato, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TawkChat from "@/components/Tawkchat";
import Head from "next/head";

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

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // Add weights you need
  variable: '--font-lato', // Optional, for use with Tailwind
  display: 'swap',
});
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // Add weights you need
  variable: '--font-outfit', // Optional, for use with Tailwind
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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ilite",
              "description": "We provide web development and SEO services tailored for small businesses.",
              "url": "https://ilite.dev",
              "logo": "https://ilite.dev/logo.png",
              "telephone": "+00000000000",
              "areaServed": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chicago, Illinois",
                  "addressCountry": "US"
                }
              },
              "sameAs": [
                "https://www.linkedin.com/in/nwachukwu-david-b5391a8b?trk=contact-info",
                "https://github.com/davidkingsilite"
              ],
              "openingHours": "Mo-Fr 09:00-17:00",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+0000000000",
                "email": "ilite.dev@gmail.com || support@ilite.dev",
                "contactType": "Customer Service"
                
              }
            }),
          }}
        />
      </Head>
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
