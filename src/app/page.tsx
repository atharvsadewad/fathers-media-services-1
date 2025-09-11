import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="section-padding bg-white">
        <div className="container-responsive grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Father’s Media – Building Brands Online
            </h1>
            <p className="text-lg text-gray-600 max-w-prose">
              We help businesses stand out with strategy, content, paid ads, and influencer collaborations.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn-primary">Let’s Work Together</Link>
              <Link href="/services" className="btn-outline">Our Services</Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="card h-64" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-responsive">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mt-2">Everything you need to grow online.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Social Media Management</h3>
              <p className="text-gray-600 mt-2">Strategy, content calendars, community management, and analytics.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Branding & Strategy</h3>
              <p className="text-gray-600 mt-2">Positioning, brand voice, and cohesive visual identity.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Paid Ads & Promotions</h3>
              <p className="text-gray-600 mt-2">ROI-focused campaigns across Meta, Google, and more.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Content Creation</h3>
              <p className="text-gray-600 mt-2">Reels, shoots, and campaigns that convert attention into action.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-lg">Influencer Marketing</h3>
              <p className="text-gray-600 mt-2">Creator partnerships that drive reach and credibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-responsive grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title">Why Choose Us</h2>
            <ul className="mt-4 grid gap-3 text-gray-700">
              <li>Proven results with SMBs and growing brands</li>
              <li>Full-funnel marketing from strategy to creative</li>
              <li>Transparent reporting and communication</li>
              <li>Fast, reliable, and collaborative</li>
            </ul>
          </div>
          <div className="card p-6">
            <blockquote className="text-lg text-gray-700">
              “Father’s Media helped us 2x our online leads within 90 days.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-500">— Happy Client</p>
          </div>
        </div>
      </section>
    </div>
  );
}
