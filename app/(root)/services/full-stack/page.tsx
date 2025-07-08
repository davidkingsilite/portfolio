export default function FullStackPage() {
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-bevietnam text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Full-Stack Web Development</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          From concept to deployment — we design, develop, and scale modern web applications using powerful technologies tailored to your goals.
        </p>
  
        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🛠️ What’s Included</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Frontend development (React, Next.js, Tailwind, etc.)</li>
            <li>Backend APIs (Node.js, Express, REST, GraphQL)</li>
            <li>Database design (MongoDB, PostgreSQL, Prisma, Supabase)</li>
            <li>Authentication & authorization (JWT, OAuth, NextAuth)</li>
            <li>Admin dashboards, user portals & CMS integration</li>
            <li>Deployment (Vercel, Render, Netlify, AWS)</li>
          </ul>
        </section>
  
        {/* Why Hire Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">💡 Why Work With Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Fast, Scalable Code</h3>
              <p className="text-gray-600">
                We build modern web apps optimized for speed, SEO, and growth — from MVPs to enterprise tools.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Built for Real Users</h3>
              <p className="text-gray-600">
                We craft responsive, intuitive interfaces that deliver seamless experiences across all devices.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">API-First Approach</h3>
              <p className="text-gray-600">
                We structure your backend for flexibility, making it easy to connect with apps, services, or mobile clients.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">
                We don’t just launch and vanish — we provide post-launch maintenance, improvements, and scaling strategies.
              </p>
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Let’s Build Something Powerful</h2>
          <p className="text-gray-600 mb-6">
            Need a complete web application built from scratch? We’re ready to be your full-stack partner.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition font-medium"
          >
            Request a Full-Stack Quote
          </a>
        </section>
      </main>
    );
  }
  