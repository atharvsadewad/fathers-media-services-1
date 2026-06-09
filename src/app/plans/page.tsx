import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plans",
  description:
    "Explore Father's Media branding, digital marketing, SEO and web development plans.",
};

const plans = [
  {
    name: "Basic",
    subtitle: "For businesses starting online",
    featured: false,
    features: [
      "Market & Product Research",
      "Campaign Planning",
      "Offer & Gift Strategy",
      "Instagram Management",
      "Content Writing",
      "Photoshoot & Video Shoot",
      "Editing & Graphic Design",
      "4 Short Videos",
      "8 Posts",
      "8 Stories",
      "Google Business Listing",
    ],
  },
  {
    name: "Standard",
    subtitle: "Most Popular",
    featured: true,
    features: [
      "Everything in Basic",
      "Brand Story Development",
      "Logo & Tagline Consultation",
      "Visiting Card Design",
      "Instagram & Facebook Management",
      "8 Short Videos",
      "12 Posts",
      "12 Stories",
      "2 Paid Advertising Campaigns",
      "Brand Positioning Guidance",
    ],
  },
  {
    name: "Premium",
    subtitle: "Complete Brand Building",
    featured: false,
    features: [
      "Everything in Standard",
      "Full Brand Identity System",
      "SEO Optimization",
      "Link Building",
      "Packaging Consultation",
      "Marketing Materials",
      "Instagram, Facebook & YouTube",
      "12 Short Videos",
      "16 Posts",
      "16 Stories",
      "4 Paid Advertising Campaigns",
      "Website Development Included*",
      "Google Business Optimization",
    ],
  },
];

export default function PlansPage() {
  return (
    <section className="relative min-h-screen bg-[var(--bg)] ambient-bg py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="text-amber-500 text-xs tracking-[0.35em] uppercase mb-4">
            Pricing & Plans
          </p>

          <h1 className="font-serif text-[clamp(3rem,6vw,5rem)] leading-tight text-[var(--text)]">
            Choose the right plan
            <br />
            for your growth.
          </h1>

          <p className="text-[var(--muted)] mt-6 max-w-2xl mx-auto">
            Whether you're launching a new brand, growing online,
            or building a complete digital presence, Father's Media
            has a plan tailored for your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2
              ${
                plan.featured
                  ? "border-amber-500 bg-amber-500/5"
                  : "border-black/10 dark:border-white/10 bg-white/30 dark:bg-white/5"
              }`}
            >

              {plan.featured && (
                <span className="absolute top-5 right-5 text-[10px] uppercase tracking-widest bg-amber-500 text-black px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              )}

              <h2 className="font-serif text-4xl text-[var(--text)]">
                {plan.name}
              </h2>

              <p className="text-amber-500 mt-2 tracking-wider uppercase text-xs">
                {plan.subtitle}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-[var(--muted)] text-sm"
                  >
                    <span className="text-amber-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block mt-10 text-center bg-amber-500 text-black py-3 rounded-lg font-medium hover:bg-amber-400 transition"
              >
                Enquire Now
              </Link>
            </div>
          ))}

        </div>

        <div className="mt-24 text-center">

          <p className="text-amber-500 text-xs tracking-[0.35em] uppercase mb-4">
            Need Something Custom?
          </p>

          <h2 className="font-serif text-5xl text-[var(--text)]">
            Let's build a tailored solution.
          </h2>

          <p className="text-[var(--muted)] mt-6 max-w-2xl mx-auto">
            Every business is unique. We can create a customized
            branding, marketing, SEO or development package based
            on your specific goals.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-amber-500 text-black px-8 py-4 rounded-lg font-medium hover:bg-amber-400 transition"
          >
            Schedule a Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}
