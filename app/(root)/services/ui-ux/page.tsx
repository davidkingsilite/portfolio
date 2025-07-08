import Link from "next/link";

export default function UIUXPage() {
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-bevietnam text-gray-800">
        <h1 className="text-4xl font-bold mb-4">UI/UX Design Services</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          We design seamless, intuitive digital experiences that help your users succeed — whether it’s a mobile app, dashboard, or full-scale SaaS product.
        </p>
  
        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🔍 What’s Included</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Wireframes & interactive prototypes</li>
            <li>User flows, journey mapping & information architecture</li>
            <li>Custom UI design (Figma or Adobe XD)</li>
            <li>Design systems and reusable components</li>
            <li>UX research, testing & iteration</li>
          </ul>
        </section>
  
        {/* Why It Matters */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🎯 Why UI/UX Design Matters</h2>
          <p className="text-gray-700 mb-4">
            Great design isn’t just about aesthetics — it&apos;s about guiding users effortlessly toward their goals. Whether it&apos;s booking a service or managing data, our design puts clarity and usability first.
          </p>
  
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">User-Centered Approach</h3>
              <p className="text-gray-600">
                We conduct user research to ensure we’re solving real problems for real users.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Design with Function</h3>
              <p className="text-gray-600">
                Every screen is designed for clarity, speed, and usability across all devices.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Prototyping & Testing</h3>
              <p className="text-gray-600">
                We create interactive prototypes and test them to validate design decisions early.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Developer-Ready Handoff</h3>
              <p className="text-gray-600">
                Our deliverables are pixel-perfect, consistent, and easy to implement by dev teams.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Let’s Design Something That Works</h2>
          <p className="text-gray-600 mb-6">
            Whether you&apos;re building an MVP, redesigning an app, or scaling your product — we’re ready to partner with you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition font-medium"
          >
            Request a Free Quote
          </Link>
        </section>
      </main>
    );
  }
  