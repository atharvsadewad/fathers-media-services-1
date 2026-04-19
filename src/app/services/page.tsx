import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the services offered by Father’s Media.",
};

const services = [
  {
    title: "Brand Building",
    desc: "We craft strong brand identities that position you as a leader in your market.",
  },
  {
    title: "Social Media Management",
    desc: "Complete handling of your social presence with content, strategy, and growth.",
  },
  {
    title: "Content Creation",
    desc: "High-quality reels, posts, and visuals that capture attention and drive engagement.",
  },
  {
    title: "Website Development",
    desc: "Modern, fast, and responsive websites designed for performance and conversions.",
  },
  {
    title: "SEO & Growth",
    desc: "Optimize your presence to rank higher and reach the right audience organically.",
  },
  {
    title: "Paid Advertising",
    desc: "Strategic ad campaigns designed to maximize ROI and scale your business.",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-[var(--bg)] text-[var(--text)]">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24 text-center">
        <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4">
          Services
        </p>

        <h1 className="font-serif text-[clamp(2.8rem,6vw,5rem)] leading-tight">
          What we do,
          <br />
          exceptionally well.
        </h1>

        <p className="text-[var(--muted)] mt-6 max-w-xl mx-auto">
          We provide end-to-end digital solutions designed to elevate brands,
          drive growth, and deliver measurable results.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">

        {services.map((service, i) => (
          <div
            key={i}
            className="group p-8 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl hover:border-amber-500/40 transition"
          >
            <h3 className="text-xl font-serif mb-4">
              {service.title}
            </h3>

            <p className="text-[var(--muted)] text-sm leading-relaxed">
              {service.desc}
            </p>

            <div className="mt-6 text-amber-500 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition">
              Learn More →
            </div>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center pb-32 px-6">
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)]">
          Let’s build your brand.
        </h2>

        <Link
          href="/contact"
          className="inline-block mt-8 bg-amber-500 text-black px-8 py-4 text-sm tracking-wide font-semibold hover:bg-amber-400 transition"
        >
          Get Started
        </Link>
      </div>

    </section>
  );
}