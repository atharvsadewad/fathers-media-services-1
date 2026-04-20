"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Pawan Infra Developer",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    slug: "pawan-infra",
    link: "https://pawaninfradeveloper.in/",
  },
  {
    title: "Client Portfolio",
    category: "Personal Branding",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1200&q=80",
    slug: "krishna-portfolio",
    link: "https://krishna-portfolio-ruby.vercel.app/",
  },
  {
    title: "Chamber Platform",
    category: "Legal Tech",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    slug: "chamber",
    link: "https://chamber-frontend-i2lc.vercel.app/",
  },
  {
    title: "Voter Data System",
    category: "Data Intelligence",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    slug: "voter-data",
    link: "https://voterlist-webtool.vercel.app/",
  },
  {
    title: "Luxury Resort Demo",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f8?w=1200&q=80",
    slug: "luxury-resort",
    link: "https://pune-luxury-resort.vercel.app/",
  },
];

export default function PortfolioGrid() {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">

      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="group relative overflow-hidden cursor-pointer"
        >
          {/* CLICKABLE CASE STUDY */}
          <Link href={`/portfolio/${project.slug}`} className="absolute inset-0 z-10" />

          {/* IMAGE */}
          <div
            className="h-[400px] bg-cover bg-center transition duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

          {/* TEXT */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <p className="text-amber-400 text-xs tracking-widest uppercase">
              {project.category}
            </p>

            <h3 className="text-white text-2xl font-serif mt-2">
              {project.title}
            </h3>

            {/* HOVER CTA */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-300">
              <span className="text-white text-sm tracking-wide">
                View Case Study →
              </span>
            </div>

            {/* LIVE LINK */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-block mt-2 text-amber-400 text-xs hover:underline relative z-30"
            >
              View Live ↗
            </a>
          </div>
        </motion.div>
      ))}

    </div>
  );
}
