export default function PlansPage() {
  const plans = [
    {
      name: "Basic",
      features: [
        "Brand Building (one-time)",
        "Website (one-time)",
        "Google Business Listing (one-time)",
        "SEO Optimization (one-time)",
      ],
    },
    {
      name: "Standard",
      features: [
        "Includes Basic Plan",
        "Graphic Posts",
        "Editing",
        "Photoshoot & Video Shoot (one-time)",
        "Posting Calendar (posts, reels, stories)",
        "Content Creation & Writing",
      ],
    },
    {
      name: "Premium",
      features: [
        "Includes Standard Plan",
        "Multi-Platform Media Handling",
        "Paid Promotions (Meta Ads, Google Ads, Instagram, YouTube, Facebook, LinkedIn)",
        "Data Analysis & Monthly Reports",
        "Campaign Strategy Optimization",
      ],
    },
  ];

  return (
    <section className="section-padding container-responsive">
      <h2 className="section-title text-center mb-10">Plans & Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="card p-6 flex flex-col">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span>✔</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="btn-primary mt-6 text-center"
            >
              Enquire Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
