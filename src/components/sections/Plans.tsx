"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Basic",
    features: [
      "Strategy Consulting",
      "Digital Marketing & Management",
      "Content Writing",
      "Photo & Video Shoot",
      "Editing",
      "Graphic Posts",
      "4 Reels, 8 Posts, 8 Stories / Month",
      "Google Business Listing",
    ],
  },
  {
    name: "Standard",
    features: [
      "Includes Basic",
      "Brand Building - Complete",
      "8 Reels, 12 Posts, 12 Stories / Month",
      "Paid Promotions (2 Ads)",
    ],
  },
  {
    name: "Premium",
    features: [
      "Includes Standard",
      "Multi-platform Media Handling",
      "12 Reels, 16 Posts, 16 Stories / Month",
      "Website Development",
      "SEO",
      "Paid Promotions (4 Ads)",
    ],
  },
];

export default function Plans() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[var(--bg)] py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-16">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4">
            Plans & Pricing
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[var(--text)]">
            Choose your growth plan.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="p-8 border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] backdrop-blur-sm hover:border-amber-500/50 transition"
            >
              <h3 className="text-xl text-[var(--text)] mb-6 font-serif">
                {plan.name}
              </h3>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-[var(--muted)] text-sm">
                    ✓ {f}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-amber-500 text-black py-3 text-sm font-semibold hover:bg-amber-400 transition">
                Enquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}