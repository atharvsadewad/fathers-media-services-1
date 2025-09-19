export default function PlansPage() {
  const plans = [
    {
      name: "Basic Plan",
      features: [
        "Strategy Consulting: Market Research, Product Research, Campaign Planning, Offers & Gift Strategy",
        "Digital Marketing: Instagram Management, Content Writing, Photoshoot & Video Shoot, Editing, Graphic Posts, Posting Calendar",
        "Content Package: 4 Short Videos, 8 Posts, 8 Stories",
        "Google Business Listing",
      ],
    },
    {
      name: "Standard Plan",
      features: [
        "Brand Building: Brand Storytelling, Name, Logo, Tagline, Visiting Card",
        "Strategy Consulting: Market Research, Product Research, Campaign Planning, Offers & Gift Strategy",
        "Digital Marketing: Instagram & Facebook Management, Content Writing, Photoshoot & Video Shoot, Editing, Graphic Posts, Posting Calendar",
        "Content Package: 8 Short Videos, 12 Posts, 12 Stories",
        "Google Business Listing",
        "Paid Promotions: 2 Ads",
      ],
    },
    {
      name: "Premium Plan",
      features: [
        "Brand Building: Storytelling, Name, Logo, Tagline, Business Collateral (Cards, Brochures, Hoardings, Pamphlets), Brand Tone & Identity (trust, power, theme, text, colors), Link Building, Packaging & Staff Uniform",
        "Strategy Consulting: Market Research, Product Research, Campaign Planning, Offers & Gift Strategy",
        "Digital Marketing: Social Media Marketing (Instagram, YouTube, Facebook), Content Writing, Photoshoot & Video Shoot, Editing, Graphic Posts, Posting Calendar",
        "Content Package: 12 Short Videos, 16 Posts, 16 Stories",
        "Website Development: Free (with 6-month agreement) – Includes Home, About Us, Products, Services, Feedback, Contacts, Gallery, Certificates & Licensing, Founders pages",
        "SEO",
        "Google Business Listing",
        "Paid Promotions: 4 Ads",
      ],
    },
  ];

  return (
    <section className="section-padding container-responsive">
      <h2 className="section-title text-center mb-10">Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="card p-6 flex flex-col">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 flex-1 dark:text-gray-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span>✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="/contact" className="btn-primary mt-6 text-center">
              Enquire Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
