import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our work — cinematic storytelling, branding, and digital experiences.",
};

export default function PortfolioPage() {
  return (
    <section className="relative bg-[var(--bg)]">

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-24 text-center">
        <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4">
          Portfolio
        </p>

        <h1 className="font-serif text-[clamp(2.8rem,6vw,5rem)] text-[var(--text)] leading-tight">
          We don’t just create.
          <br />
          We create impact.
        </h1>

        <p className="text-[var(--muted)] mt-6 max-w-xl mx-auto">
          A curated selection of projects that define brands,
          build authority, and drive real-world results.
        </p>
      </div>

      {/* GRID */}
      <PortfolioGrid />

      {/* CTA */}
      <div className="text-center py-32 px-6">
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[var(--text)]">
          Ready to be our next success story?
        </h2>

        <a
          href="/contact"
          className="inline-block mt-8 bg-amber-500 text-black px-8 py-4 text-sm tracking-wide font-semibold hover:bg-amber-400 transition"
        >
          Start a Project
        </a>
      </div>

    </section>
  );
}