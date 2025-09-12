"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          className="object-cover -z-10 brightness-75"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-responsive text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white dark:text-white">
            Father’s Media — Building Brands Online
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200 dark:text-gray-300">
            We help businesses stand out with strategy, creative and paid growth.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Let’s Work Together
            </Link>
            <Link href="/services" className="btn-outline">
              Our Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-white dark:bg-gray-900 transition-colors">
        <div className="container-responsive">
          <h2 className="section-title text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="section-subtitle mt-2 text-gray-600 dark:text-gray-300">
            Everything you need to grow online.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Social Media Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Strategy, content calendars, community management, and analytics.
              </p>
            </div>

            <div className="card p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Branding & Strategy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Positioning, brand voice, and cohesive visual identity.
              </p>
            </div>

            <div className="card p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Paid Ads & Promotions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                ROI-focused campaigns across Meta, Google, and more.
              </p>
            </div>

            <div className="card p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Content Creation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Reels, shoots, and campaigns that convert attention into action.
              </p>
            </div>

            <div className="card p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Influencer Marketing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Creator partnerships that drive reach and credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US + CTA */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container-responsive grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left side */}
          <div>
            <h2 className="section-title text-gray-900 dark:text-white">
              Why Choose Us
            </h2>
            <ul className="mt-4 grid gap-3 text-gray-700 dark:text-gray-300">
              <li>✅ Proven results with SMBs and growing brands</li>
              <li>✅ Full-funnel marketing from strategy to creative</li>
              <li>✅ Transparent reporting and communication</li>
              <li>✅ Fast, reliable, and collaborative</li>
            </ul>
          </div>

          {/* Right side */}
          <div className="card p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg">
            <blockquote className="text-lg text-gray-700 dark:text-gray-200 italic">
              “Father’s Media helped us 2x our online leads within 90 days.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              — Happy Client
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
