"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine, FaUsers, FaCamera, FaAd } from "react-icons/fa";

export default function Home() {
  const services = [
    { title: "Social Media Management", desc: "Strategy, calendars, community management, and analytics.", icon: <FaUsers className="text-3xl text-yellow-500" /> },
    { title: "Branding & Strategy", desc: "Positioning, voice and cohesive visual identity.", icon: <FaChartLine className="text-3xl text-yellow-500" /> },
    { title: "Paid Ads & Promotions", desc: "ROI focused campaigns across Meta, Google and more.", icon: <FaAd className="text-3xl text-yellow-500" /> },
    { title: "Content Creation", desc: "Reels, shoots, campaigns that convert attention into action.", icon: <FaCamera className="text-3xl text-yellow-500" /> },
    { title: "Influencer Marketing", desc: "Creator partnerships that drive reach and credibility.", icon: <FaBullhorn className="text-3xl text-yellow-500" /> },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="container-responsive"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-black">
            Father’s Media — Building Brands Online
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
            We help businesses stand out with strategy, creative and paid growth.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="#contact" className="btn-primary">Get In Touch</Link>
            <Link href="#services" className="btn-outline">Our Services</Link>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding">
        <div className="container-responsive">
          <h2 className="section-title text-center text-gray-900">Our Services</h2>
          <p className="section-subtitle text-center mt-2 text-gray-600">
            Everything you need to grow online.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                className="card p-6 flex flex-col items-start"
              >
                {s.icon}
                <h3 className="mt-4 font-semibold text-lg text-gray-900">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="section-padding bg-gray-50 dark:bg-gray-950 transition-colors">
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
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                className="card p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{plan.name}</h3>
                <ul className="text-sm text-gray-700 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><span>✔</span>{f}</li>
                  ))}
                </ul>
                <Link href="#contact" className="btn-primary mt-6 text-center">Enquire Now</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding">
        <div className="container-responsive grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="section-title text-gray-900">Why Choose Us</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
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
            whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 6px 18px rgba(0,0,0,0.15)" }}
            className="card p-6"
          >
            <blockquote className="text-lg text-gray-700 italic">
              “Father’s Media helped us 2x our online leads within 90 days.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-500">— Happy Client</p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-responsive text-center">
          <h2 className="section-title text-gray-900">Let’s Work Together</h2>
          <p className="mt-2 text-gray-600">Reach out and let’s start building something great.</p>
          <Link href="/contact" className="btn-primary mt-6 inline-block">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
