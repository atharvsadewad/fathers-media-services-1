export default function ServicesPage() {
  return (
    <main className="container-responsive section-padding">
      <h1 className="section-title text-center mb-12">Our Services</h1>

      {/* Existing services grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Social Media Management</h3>
          <p className="text-sm text-gray-600">
            Strategy, content calendars, community management, and analytics.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Branding & Strategy</h3>
          <p className="text-sm text-gray-600">
            Positioning, brand voice, and cohesive visual identity.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Paid Ads & Promotions</h3>
          <p className="text-sm text-gray-600">
            ROI-focused campaigns across Meta, Google, and more.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Content Creation</h3>
          <p className="text-sm text-gray-600">
            Reels, shoots, and campaigns that convert attention into action.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold mb-2">Influencer Marketing</h3>
          <p className="text-sm text-gray-600">
            Creator partnerships that drive reach and credibility.
          </p>
        </div>
      </div>

      {/* Plans section */}
      <h2 className="section-title text-center mb-12">Plans</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card p-6 flex flex-col">
          <h3 className="font-semibold text-lg mb-4">Basic</h3>
          <ul className="text-sm text-gray-600 flex-1 space-y-2">
            <li>✔ Brand Building</li>
            <li>✔ Website</li>
            <li>✔ Google Business Listing</li>
            <li>✔ SEO Optimization</li>
          </ul>
          <a
            href="/contact"
            className="btn-primary mt-6 text-center"
          >
            Enquire Now
          </a>
        </div>
        <div className="card p-6 flex flex-col">
          <h3 className="font-semibold text-lg mb-4">Standard</h3>
          <ul className="text-sm text-gray-600 flex-1 space-y-2">
            <li>✔ Includes Basic Plan</li>
            <li>✔ Graphic Posts</li>
            <li>✔ Editing</li>
            <li>✔ Photoshoot & Video Shoot</li>
            <li>✔ Posting Calendar</li>
            <li>✔ Content Creation & Writing</li>
          </ul>
          <a
            href="/contact"
            className="btn-primary mt-6 text-center"
          >
            Enquire Now
          </a>
        </div>
        <div className="card p-6 flex flex-col">
          <h3 className="font-semibold text-lg mb-4">Premium</h3>
          <ul className="text-sm text-gray-600 flex-1 space-y-2">
            <li>✔ Includes Standard Plan</li>
            <li>✔ Multi-Platform Media Handling</li>
            <li>✔ Paid Promotions</li>
            <li>✔ Data Analysis & Monthly Reports</li>
            <li>✔ Campaign Strategy Optimization</li>
          </ul>
          <a
            href="/contact"
            className="btn-primary mt-6 text-center"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </main>
  );
}
