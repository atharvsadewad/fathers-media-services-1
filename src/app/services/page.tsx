"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Social Media Management",
      desc: "Strategy, content calendars, community management, and analytics.",
    },
    {
      title: "Branding & Strategy",
      desc: "Positioning, brand voice, and cohesive visual identity.",
    },
    {
      title: "Paid Ads & Promotions",
      desc: "ROI-focused campaigns across Meta, Google, and more.",
    },
    {
      title: "Content Creation",
      desc: "Reels, shoots, and campaigns that convert attention into action.",
    },
    {
      title: "Influencer Marketing",
      desc: "Creator partnerships that drive reach and credibility.",
    },
  ];

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
        "4 Reels 8 Post 8 Stories/M",
        "Google Business Listing",
      ],
    },
    {
      name: "Standard",
      features: [
        "Includes Basic Plan",
        "Brand Building - Complete",
        "8 Reels 12 Posts 12 Stories/M",
        "Paid Promotions (2 Ads)"
      ],
    },
    {
      name: "Premium",
      features: [
        "Includes Standard Plan",
        "Multi-Platform Media Handling",
        "12 Reels 16 Posts 16 Stories/M",
        "Website Development",
        "SEO",
        "Paid Promotions(4 Ads)",
      ],
    },
  ];

  return (
    <main className="container-responsive section-padding">
      <h1 className="section-title text-center mb-12 text-gray-900 dark:text-white">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.25, ease: "easeOut" }}
            className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                       transition-transform transform hover:scale-105"
          >
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
              {s.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Plans Section */}
      <h2 className="section-title text-center mb-12 text-gray-900 dark:text-white">
        Plans
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.3, ease: "easeOut" }}
            className="card p-6 flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                       transition-transform transform hover:scale-105"
          >
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
              {plan.name}
            </h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 flex-1 space-y-2">
              {plan.features.map((f) => (
                <li key={f}>✔ {f}</li>
              ))}
            </ul>
            <a href="/contact" className="btn-primary mt-6 text-center">
              Enquire Now
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

