const Index = () => {
  const lastUpdated = "March 25, 2026";
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500 text-center mb-8">
            Last Updated: {lastUpdated}
          </p>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                1. Introduction
              </h2>
              <p>
                Welcome to my portfolio. By accessing this website, you agree to
                be bound by these Terms and Conditions, all applicable laws and
                regulations, and agree that you are responsible for compliance
                with any applicable local laws.
              </p>
            </section>

            <hr className="border-gray-100" />

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                2. Intellectual Property Rights
              </h2>
              <p>
                Unless otherwise stated, I own the intellectual property rights
                for all material on this website, including code snippets,
                design elements, and project documentation. You may view this
                for personal, non-commercial use, but you must not:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Republish material from this site without credit.</li>
                <li>Sell, rent, or sub-license material from the website.</li>
                <li>
                  Reproduce, duplicate, or copy material for commercial
                  purposes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                3. User Restrictions
              </h2>
              <p>You are specifically restricted from:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  Using this website in any way that is damaging to this
                  website.
                </li>
                <li>
                  Using this website contrary to applicable laws and
                  regulations.
                </li>
                <li>
                  Engaging in any data mining, data harvesting, or data
                  extracting.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                4. Disclaimer
              </h2>
              <p>
                The materials on this website are provided on an 'as is' basis.
                I make no warranties, expressed or implied, and hereby disclaim
                and negate all other warranties including, without limitation,
                implied warranties or conditions of merchantability or fitness
                for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                5. External Links
              </h2>
              <p>
                This portfolio contains links to external websites (e.g.,
                GitHub, LinkedIn). I have not reviewed all of the sites linked
                to this website and am not responsible for the contents of any
                such linked site.
              </p>
            </section>

            <section className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
              <h2 className="text-lg font-semibold text-blue-900 mb-1">
                6. Contact Information
              </h2>
              <p className="text-blue-800">
                If you have any questions about these Terms, please feel free to
                reach out via the contact form on this site.
              </p>
            </section>
          </div>
        </div>

        <div className="bg-gray-100 px-6 py-4 text-center">
          <button
            onClick={() => window.history.back()}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            ← Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
