"use client";

import type { Metadata } from "next";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore selected client campaigns, content, and testimonials from Father’s Media.",
};

export default function PortfolioPage() {
  const images = [
    "/work1.png",
    "/work2.png",
    "/work3.png",
    "/work4.png",
    "/work5.png",
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-play effect
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [paused, images.length]);

  return (
    <div className="section-padding space-y-16">
      {/* Showcasing Creativity */}
      <div className="container-responsive text-center">
        <h1 className="section-title">Showcasing Creativity</h1>
        <p className="section-subtitle mt-2">
          A glimpse into our design work — from brochures to logos to marketing materials.
        </p>

        {/* Slideshow */}
        <div
          className="mt-10 relative w-full max-w-3xl mx-auto h-80 md:h-[450px] overflow-hidden rounded-xl shadow-lg card"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={images[index]}
                alt={`Portfolio work ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Chamber Project Case Study */}
      <div className="container-responsive">
        <h2 className="section-title text-center">Case Study</h2>
        <div className="mt-8 card p-6 flex flex-col md:flex-row gap-6 items-center">
          {/* Screenshot */}
          <div className="w-full md:w-1/2">
            <Image
              src="/chamber-screenshot.png"
              alt="Chamber Project"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Chamber Project
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              A legal research platform built for students, lawyers, and the general
              public. It allows searching and exploring Indian constitutional laws by
              article number or keyword, providing a modern and user-friendly interface.
            </p>
            <Link
              href="https://chamber-frontend-i2lc.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-6 inline-block"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container-responsive grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Testimonial quote="Our engagement rate jumped 65% in two months." author="Retail Brand" />
          <Testimonial quote="High-quality content and smart ads—great ROI." author="Local Clinic" />
          <Testimonial quote="Professional, fast, and collaborative team." author="Startup Founder" />
        </div>
      </div>
    </div>
  );
}
