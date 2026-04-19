"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const services: Service[] = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive websites designed to convert visitors into customers.",
    tags: ["Web Design", "Development", "UI/UX"],
  },
  {
    number: "02",
    title: "Google Business Listing",
    description:
      "Boost visibility and credibility with a fully optimized Google Business profile.",
    tags: ["Local SEO", "Visibility", "Optimization"],
  },
  {
    number: "03",
    title: "SEO Optimization",
    description:
      "Improve your search rankings with tailored SEO strategies that drive organic traffic.",
    tags: ["SEO", "Ranking", "Growth"],
  },
  {
    number: "04",
    title: "Social Media Management",
    description:
      "Strategy, calendars, community management, and analytics for consistent growth.",
    tags: ["Content", "Engagement", "Analytics"],
  },
  {
    number: "05",
    title: "Branding & Strategy",
    description:
      "Positioning, voice, and cohesive visual identity that makes your brand stand out.",
    tags: ["Branding", "Strategy", "Identity"],
  },
  {
    number: "06",
    title: "Paid Ads & Promotions",
    description:
      "ROI-focused campaigns across Meta, Google, and more to scale your reach.",
    tags: ["Ads", "Performance", "ROI"],
  },
  {
    number: "07",
    title: "Content Creation",
    description:
      "Reels, shoots, and campaigns that convert attention into action.",
    tags: ["Reels", "Production", "Creative"],
  },
  {
    number: "08",
    title: "Influencer Marketing",
    description:
      "Creator partnerships that drive reach, trust, and credibility.",
    tags: ["Influencers", "Reach", "Brand"],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: "easeOut" } }}
      className="group relative p-8 md:p-10 border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] backdrop-blur-sm cursor-default overflow-hidden transition-colors duration-500 hover:border-amber-500/50"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/5 group-hover:to-amber-600/8 transition-all duration-500 pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/60 transition-all duration-500" />

      {/* Number */}
      <span className="block font-mono text-[var(--muted)] group-hover:text-amber-600 text-sm mb-8 transition-colors duration-300">
        {service.number}
      </span>

      {/* Title */}
      <h3 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] text-[var(--text)] leading-tight mb-5">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[var(--muted)] text-base leading-relaxed mb-8">
        {service.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] tracking-widest uppercase text-[var(--muted)] group-hover:text-amber-500/70 border border-black/10 dark:border-white/10 group-hover:border-amber-500/30 px-3 py-1 transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow indicator */}
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <span className="text-amber-400 text-lg">→</span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-[var(--bg)] py-32 md:py-40">
      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-black/10 dark:bg-white/10" />

      <div className="max-w-[1300px] mx-auto px-8 md:px-16">
        {/* Section header */}
        <div ref={headingRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4 font-medium"
          >
            What We Do
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-[var(--text)] leading-tight max-w-xl"
            >
              Craft without
              <br />
              compromise.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              className="text-[var(--muted)] text-base leading-relaxed max-w-xs"
            >
              Four disciplines, one singular commitment: your story, told exceptionally well.
            </motion.p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}