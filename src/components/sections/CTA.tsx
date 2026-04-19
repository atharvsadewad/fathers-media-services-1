"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[var(--bg)] py-40 md:py-56 overflow-hidden">
      {/* Background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-500/8 blur-[130px]" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-orange-600/6 blur-[100px]" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1100px] mx-auto px-8 md:px-16 text-center"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-8 font-medium"
        >
          Let’s Build Together
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-[clamp(3rem,8vw,8.5rem)] leading-[1.0] text-[var(--text)] mb-10"
        >
          Ready to grow your brand?
          <br />
          <span className="text-amber-400 italic">starts here.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[var(--muted)] text-xl max-w-lg mx-auto mb-14"
        >
          We work with a select number of partners each year. Let&apos;s find out if
          we&apos;re right for each other.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary */}
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group relative overflow-hidden bg-amber-500 text-black text-sm font-bold uppercase px-10 py-5"
          >
            <span className="relative z-10 group-hover:text-white transition">
              Start a Project
            </span>
            <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.button>

          {/* Secondary */}
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="text-[var(--muted)] hover:text-amber-400 text-sm uppercase border border-black/10 dark:border-white/10 px-10 py-5 transition"
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {[
            { stat: "10+", label: "Clients Served" },
            { stat: "50+", label: "Projects Delivered" },
            { stat: "100+", label: "Campaigns Managed" },
          ].map(({ stat, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-4xl text-[var(--text)] mb-1">{stat}</div>
              <div className="text-[var(--muted)] text-xs uppercase">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer line */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 md:px-16 py-8">
        <span className="font-serif text-amber-500/60 text-sm">Father’s Media</span>

        <span className="text-[var(--muted)] text-xs uppercase">
          © 2026 All rights reserved
        </span>

        <div className="flex gap-6">
          {["Instagram", "Facebook", "LinkedIn"].map((s) => (
            <span
              key={s}
              className="text-[var(--muted)] hover:text-amber-400 text-xs uppercase cursor-pointer transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}