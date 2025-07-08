export default function SupportPage() {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-bevietnam text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Support</h1>
  
        <p className="mb-6 text-gray-600">
          Need help with a project, technical issue, or have questions about working with us? We&apos;re here to support you. Use the options below to get in touch.
        </p>
  
        <section className="space-y-10">
          {/* Contact Support */}
          <div>
            <h2 className="text-xl font-semibold mb-2">📩 Contact Support</h2>
            <p className="text-gray-600 mb-2">
              Email us at <a href="mailto:support@ilite.dev" className="text-blue-600 underline">support@ilite.dev</a> and we’ll get back to you within 24–48 hours.
            </p>
          </div>
  
          {/* Project Help */}
          <div>
            <h2 className="text-xl font-semibold mb-2">💼 Project Assistance</h2>
            <p className="text-gray-600 mb-2">
              Already working with us and need help on your project? You can reach your dedicated developer directly or use the project communication channel (Slack, Trello, or Notion).
            </p>
          </div>
  
          {/* FAQ (optional) */}
          <div>
            <h2 className="text-xl font-semibold mb-2">❓ Frequently Asked Questions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>How long does it take to respond? → Typically within 24–48 hours</li>
              <li>Can I request revisions after launch? → Yes, depending on your package</li>
              <li>Do you offer ongoing maintenance? → Absolutely. We offer monthly support plans.</li>
            </ul>
          </div>
  
          {/* Support Form (optional) */}
          <div>
            <h2 className="text-xl font-semibold mb-4">📝 Send Us a Message</h2>
            <form className="space-y-4 max-w-xl">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input id="name" type="text" className="w-full px-4 py-2 border rounded" required />
              </div>
  
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input id="email" type="email" className="w-full px-4 py-2 border rounded" required />
              </div>
  
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border rounded" required />
              </div>
  
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    );
  }
  