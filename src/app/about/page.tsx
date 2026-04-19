"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">

      {/* HERO */}
      <section className="h-[90vh] flex items-center justify-center text-center px-6">
        <div>
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-6">
            About Us
          </p>

          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[1.05]">
            We don’t just create content.
            <br />
            <span className="text-amber-500">We build presence.</span>
          </h1>
        </div>
      </section>

      {/* STORY SECTIONS */}
      <StoryBlock
        title="Who We Are"
        text="Father’s Media is a digital marketing and media agency focused on building powerful online identities. We combine creativity with strategy to help brands stand out in a crowded digital world."
      />

      <StoryBlock
        title="What We Do"
        text="From social media management to branding, content creation, and performance marketing—we handle everything required to grow your brand online."
      />

      <StoryBlock
        title="Our Approach"
        text="We believe in clarity, consistency, and creativity. Every project we take is treated as a long-term partnership, not just a service."
      />

      {/* PHILOSOPHY */}
      <section className="py-40 text-center px-6">
        <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-6">
          Our Philosophy
        </p>

        <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] max-w-4xl mx-auto">
          Growth isn’t luck.
          <br />
          <span className="text-amber-500">It’s engineered.</span>
        </h2>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h3 className="font-serif text-3xl mb-6">
          Let’s build something impactful.
        </h3>
        <a
          href="/contact"
          className="inline-block bg-amber-500 text-black px-8 py-4 text-sm font-semibold"
        >
          Start a Project
        </a>
      </section>

    </main>
  );
}






/* 🔥 REUSABLE STORY BLOCK */
function StoryBlock({ title, text }: { title: string; text: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-3xl mb-6">{title}</h2>
        <p className="text-[var(--muted)] text-lg leading-relaxed">
          {text}
        </p>
      </motion.div>
    </section>
  );
}