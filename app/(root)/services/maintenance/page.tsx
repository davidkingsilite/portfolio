export default function MaintenancePage() {
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-bevietnam text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Website Maintenance & Support</h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          We keep your website secure, updated, and running smoothly — so you can focus on growing your business while we handle the tech.
        </p>
  
        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🔧 What’s Included</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Content updates & page edits</li>
            <li>Plugin, CMS, and theme updates</li>
            <li>Website backups (daily/weekly)</li>
            <li>Security scans & malware protection</li>
            <li>Performance optimization & bug fixes</li>
            <li>Monthly reports and uptime monitoring</li>
          </ul>
        </section>
  
        {/* Why It Matters */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">🛡️ Why Maintenance Is Important</h2>
          <p className="text-gray-700 mb-6">
            A website is never truly &quot;done.&quot; Without regular updates, it becomes vulnerable to hackers, outdated for users, and slow for visitors. Ongoing maintenance ensures:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Security & Protection</h3>
              <p className="text-gray-600">
                We scan for vulnerabilities, apply patches, and keep your site protected.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Faster Load Times</h3>
              <p className="text-gray-600">
                We optimize images, scripts, and caching to keep your site lightning fast.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">SEO Health</h3>
              <p className="text-gray-600">
                Search engines favor websites that are regularly maintained and updated.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Peace of Mind</h3>
              <p className="text-gray-600">
                You get a dedicated partner ensuring your site stays online and optimized.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Ongoing Website Support?</h2>
          <p className="text-gray-600 mb-6">
            Get affordable maintenance packages tailored to your needs. No stress, no downtime.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition font-medium"
          >
            Request a Maintenance Quote
          </a>
        </section>
      </main>
    );
  }
  