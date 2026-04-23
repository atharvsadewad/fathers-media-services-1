"use client";

import { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

const wordVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeUp: Variants = {
  hidden: { y: 28, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8 + i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const headline = ["Father’s", "Media", "Building", "Brands", "Online"];

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--bg)]">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-600/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-stone-500/10 dark:bg-stone-700/20 blur-[80px]" />
      </div>

      {/* Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-16 py-8"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Father's Media"
            width={140}
            height={40}
            priority
            className="object-contain"
            />
        </Link>

        <ul className="hidden md:flex gap-8 text-[var(--muted)] text-sm tracking-widest uppercase">
          <li>
            <Link href="/about" className="hover:text-amber-400">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-amber-400">Services</Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-amber-400">Portfolio</Link>
          </li>
        </ul>

       <div className="flex items-center gap-4">
        <ThemeToggle />
        
        <Link href="/contact">
        <button className="text-xs tracking-widest uppercase text-[var(--text)] border border-black/10 dark:border-white/20 hover:border-amber-500 hover:text-amber-400 px-5 py-2.5 transition">
        Contact
        </button>
        </Link>
        </div>
        </motion.nav>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-[1400px] mx-auto w-full">

        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={controls}
          className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-8"
        >
          Premium Storytelling Studio
        </motion.p>

        <h1>
          <div className="flex flex-wrap gap-x-6">
            {headline.map((word, i) => (
              <div key={i} className="overflow-hidden py-1">
                <motion.span
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate={controls}
                  className="block font-serif text-[clamp(3.5rem,9vw,9rem)] leading-[1.0] text-[var(--text)]"
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
        </h1>

        <div className="mt-10 flex flex-col md:flex-row gap-8 md:gap-16">

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="max-w-md text-[var(--muted)] text-lg"
          >
            We help businesses stand out with strategy, creativity, and growth.
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="flex items-center gap-6"
          >
            <button className="bg-amber-500 text-black text-sm font-semibold px-8 py-4 hover:scale-105 transition">
              See Our Work
            </button>

            <button className="text-[var(--muted)] hover:text-amber-400 text-sm underline">
              Our Story ↓
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
