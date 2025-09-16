"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine, FaPenNib, FaUsers, FaCamera } from "react-icons/fa";

export default function Home() {
  const services = [
    { title: "Social Media Management", desc: "Strategy, calendars, community management, and analytics.", icon: <FaChartLine className="text-yellow-500 text-2xl" /> },
    { title: "Branding & Strategy", desc: "Positioning, voice and cohesive visual identity.", icon: <FaPenNib className="text-yellow-500 text-2xl" /> },
    { title: "Paid Ads & Promotions", desc: "ROI focused campaigns across Meta, Google and more.", icon: <FaBullhorn className="text-yellow-500 text-2xl" /> },
    { title: "Content Creation", desc: "Reels, shoots, campaigns that convert attention into action.", icon: <FaCamera className="text-yellow-500 text-2xl" /> },
    { title: "Influencer Marketing", desc: "Creator partnerships that drive reach and credibility.", icon: <FaUsers className="text-yellow-500 text-2xl" /> },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="container-responsive text-white"
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Father’s Media — Building Brands Online
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            We help businesses stand out with strategy, creativity and paid growth.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold">Let’s Work Together</Link>
            <Link href="/services" className="btn-outline border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">Our Services</Link>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors">
        <div className="container-responsive">
          <h2 className="section-title text-center text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="section-subtitle text-center mt-2 text-gray-600 dark:text-gray-300">
            Everything you need to grow online.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 25px rgba(0,0,0,0.25)" }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white border border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  {s.icon}
                  <h3 className="font-semibold text-lg bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    {s.title}
                  </h3>
                </div>
                <p className="text-gray-300">{s.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="section-padding bg-gradient-to-b from-gray-100 to-white dark:from-gray-950 dark:to-black transition-colors">
        <div className="container-responsive">
          <h2 className="section-title text-center text-gray-900 dark:text-white">Plans & Pricing</h2>
          <p className="section-subtitle text-center mt-2 text-gray-600 dark:text-gray-300">Choose a plan that fits your brand.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 12px 28px rgba(0,0,0,0.3)" }}
                className="p-6 flex flex-col rounded-xl bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white border border-yellow-500"
              >
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">{plan.name}</h3>
                <ul className="text-sm text-gray-300 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">✔ {f}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary mt-6 text-center bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold">Enquire Now</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black transition-colors">
        <div className="container-responsive grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="section-title text-gray-900 dark:text-white">Why Choose Us</h2>
            <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li>✨ Proven results with SMBs and growing brands</li>
              <li>✨ Full-funnel marketing — from strategy to creative</li>
              <li>✨ Transparent reporting & collaborative process</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 10px 24px rgba(0,0,0,0.25)" }}
            className="p-6 rounded-xl bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border border-yellow-500"
          >
            <blockquote className="text-lg italic">
              “Father’s Media helped us 2x our online leads within 90 days.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-400">— Happy Client</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
