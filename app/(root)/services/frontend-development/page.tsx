export default function FrontendPage() {
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-bevietnam text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Frontend Development</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          We bring designs to life with responsive, accessible, and high-performance interfaces — ensuring your web application looks and works perfectly on every device.
        </p>
  
        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">💻 What We Build</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Landing pages & marketing websites</li>
            <li>Single Page Applications (SPA) & dashboards</li>
            <li>eCommerce stores & checkout pages</li>
            <li>Blog & CMS-integrated interfaces</li>
            <li>Progressive Web Apps (PWA)</li>
            <li>Custom UI components & animations</li>
          </ul>
        </section>
  
        {/* Tools & Technologies */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🧰 Tools & Technologies</h2>
          <p className="text-gray-700 mb-4">
            We use modern frameworks and libraries to build fast, scalable, and maintainable frontends:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-gray-700">
            <span>⚡ React.js / Next.js</span>
            <span>🎨 Tailwind CSS / SCSS</span>
            <span>🧱 Framer Motion / GSAP</span>
            <span>⚙️ TypeScript / JavaScript</span>
            <span>📦 Headless CMS (Sanity, Strapi)</span>
            <span>🧪 Unit & E2E Testing (Jest, Cypress)</span>
          </div>
        </section>
  
        {/* Why Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🚀 Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Pixel-Perfect Builds</h3>
              <p className="text-gray-600">
                We match your designs precisely, ensuring smooth interactions and flawless UI implementation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Responsive by Default</h3>
              <p className="text-gray-600">
                Your site will work perfectly across all screens — mobile, tablet, desktop, and beyond.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">SEO & Performance Focused</h3>
              <p className="text-gray-600">
                We optimize everything from load speed to accessibility to give users and search engines the best experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Developer Friendly Code</h3>
              <p className="text-gray-600">
                We write clean, maintainable code that scales with your project and team.
              </p>
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Frontend Help?</h2>
          <p className="text-gray-600 mb-6">
            Whether it’s a full redesign or a performance boost — we’ve got you covered.
          </p>
          <a
            href="/quote"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition font-medium"
          >
            Request a Frontend Quote
          </a>
        </section>
      </main>
    );
  }
  