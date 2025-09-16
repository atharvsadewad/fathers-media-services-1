"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBullhorn, FaPalette, FaAd, FaVideo, FaUsers } from "react-icons/fa";

export default function Home() {
  const services = [
    { title: "Social Media Management", desc: "Strategy, calendars, community management, and analytics.", icon: <FaBullhorn className="text-3xl text-yellow-500" /> },
    { title: "Branding & Strategy", desc: "Positioning, voice and cohesive visual identity.", icon: <FaPalette className="text-3xl text-yellow-500" /> },
    { title: "Paid Ads & Promotions", desc: "ROI focused campaigns across Meta, Google and more.", icon: <FaAd className="text-3xl text-yellow-500" /> },
    { title: "Content Creation", desc: "Reels, shoots, campaigns that convert attention into action.", icon: <FaVideo className="text-3xl text-yellow-500" /> },
    { title: "Influencer Marketing", desc: "Creator partnerships that drive reach and credibility.", icon: <FaUsers className="text-3xl text-yellow-500" /> },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500 dark:from-gray-900 dark:via-gray-800 dark:to-black">
        <Image 
          src="/hero.jpg" 
          alt="Hero" 
          fill 
          className="object-cover -z-10 opacity-60" 
        />

        {/* Text + CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="container-responsive text-center text-white"
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            Father’s Media — Building Brands Online
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            We help businesses stand out with strategy, creative and paid growth.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Let’s Work Together</Link>
            <Link href="/services" className="btn-outline">Our Services</Link>
          </div>
        </motion.div>

        {/* Moustache Divider */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-24 text-white dark:text-gray-900" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path 
            fill="currentColor" 
            d="M0,224 C360,400 1080,50 1440,224 L1440,320 L0,320 Z" 
          />
        </svg>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-black transition-colors">
        <div className="container-responsive">
          <h2 className="section-title text-center text-gray-900 dark:text-white">Our Services</h2>
          <p className="section-subtitle text-center mt-2 text-gray-600 dark:text-gray-300">
            Everything you need to grow online.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card overflow-hidden p-6 flex flex-col items-start"
              >
                {s.icon}
                <h3 className="font-semibold text-lg mt-4 text-gray-900 dark:text-white">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{s.desc}</p>
              </motion.article>
            ))}
          </div>

          {/* CTA button to Plans */}
          <div className="text-center mt-12">
            <a href="#plans" className="btn-primary">View Plans & Pricing</a>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="section-padding bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-950 dark:to-black transition-colors">
        <div className="container-responsive">
          <h2 className="section-title text-center text-gray-900 dark:text-white">Plans & Pricing</h2>
          <p className="section-subtitle text-center mt-2 text-gray-600 dark:text-gray-300">
            Enquire to get a custom quote.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: "Basic", features: ["Brand Building", "Website", "Google Business Listing", "SEO Optimization"] },
              { name: "Standard", features: ["Includes Basic", "Graphic Posts", "Editing", "Photoshoot & Video Shoot", "Posting Calendar"] },
              { name: "Premium", features: ["Includes Standard", "Multi-platform Media Handling", "Paid Promotions", "Data Analysis & Reports"] },
            ].map((plan, i) => (
              <motion.div 
                key={plan.name} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{plan.name}</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><span>✔</span>{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary mt-6 text-center">Enquire Now</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-white dark:from-gray-900 dark:to-black transition-colors">
        <div className="container-responsive grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="section-title text-gray-900 dark:text-white">Why Choose Us</h2>
            <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
              <li>Proven results with SMBs and growing brands</li>
              <li>Full-funnel marketing — from strategy to creative</li>
              <li>Transparent reporting & collaborative process</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="card p-6 shadow-lg"
          >
            <blockquote className="text-lg text-gray-700 dark:text-gray-200 italic">
              “Father’s Media helped us 2x our online leads within 90 days.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">— Happy Client</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
