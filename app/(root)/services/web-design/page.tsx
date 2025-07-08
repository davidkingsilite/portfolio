
export default function WebDesignPage() {
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-bevietnam text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Web Design Services</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          We craft beautiful, user-focused designs that blend creativity with functionality — helping your brand stand out and engage users effectively.
        </p>
  
        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🎨 What’s Included</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Modern UI/UX design tailored to your brand</li>
            <li>Responsive design for mobile, tablet, and desktop</li>
            <li>High-converting landing pages & homepages</li>
            <li>Wireframes, mockups, and interactive prototypes</li>
            <li>Figma, Adobe XD, or Webflow-ready files</li>
          </ul>
        </section>
  
        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">💡 Why Choose ilite.dev?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">User-First Approach</h3>
              <p className="text-gray-600">
                Every design decision is made with your audience in mind. We prioritize intuitive layouts and clear navigation.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Custom & Unique</h3>
              <p className="text-gray-600">
                No cookie-cutter templates. We create designs that reflect your brand identity and business goals.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Collaboration at Every Step</h3>
              <p className="text-gray-600">
                From wireframes to final mockups, we involve you throughout the process for feedback and approval.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-2">Conversion-Focused</h3>
              <p className="text-gray-600">
                We design not just for looks — but to convert visitors into customers through smart layout and messaging.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to elevate your online presence?</h2>
          <p className="text-gray-600 mb-6">
            Let’s create something stunning together. Get in touch and let’s design your next digital experience.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition font-medium"
          >
            Request a Free Quote
          </a>
        </section>
      </main>
    );
  }
  