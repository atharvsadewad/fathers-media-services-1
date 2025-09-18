"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/portfolio/work1.png",
  "/portfolio/work2.png",
  "/portfolio/work3.png",
  "/portfolio/work4.png",
  "/portfolio/work5.png",
  "/portfolio/chamber-screenshot.png",
];

export default function PortfolioClient() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="section-padding container-responsive text-center">
      <h1 className="section-title">Showcasing Creativity</h1>
      <p className="section-subtitle mt-2">
        From brand identities to web apps — a glimpse of our work.
      </p>

      {/* Slideshow */}
      <div
        className="relative mt-12 h-[400px] w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Portfolio work ${index + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index
                ? "bg-yellow-500 scale-125"
                : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
