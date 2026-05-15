"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const domains = [
  "Web Development",
  "App Development",
  "SEO & Optimization",
  "AI & Automation",
  "Digital Marketing",
  "Branding & Strategy",
  "Content Creation",
  "Video Editing",
];

const perks = [
  "Internship Certificate",
  "Letter of Recommendation",
  "Flexible Remote Work",
  "Portfolio Building",
  "Startup Exposure",
  "Networking Opportunities",
  "Real Execution Experience",
  "Collaborative Environment",
];

export default function InternshipPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[var(--bg)] text-[var(--text)]">

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      {/* HERO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28 text-center">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-6"
        >
          Internship Program
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-serif text-[clamp(3.5rem,9vw,8rem)] leading-[0.95]"
        >
          Build products.
          <br />
          Scale ideas.
          <br />
          <span className="text-amber-400 italic">
            Create impact.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mt-10 text-[var(--muted)] text-lg"
        >
          Join Father’s Media and gain practical exposure in
          technology, branding, digital systems, and creative
          execution.
        </motion.p>

      </div>

      {/* DOMAINS */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4">
            Open Domains
          </p>

          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)]">
            Explore opportunities
            <br />
            across multiple disciplines.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, i) => (
            <motion.div
              key={domain}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl hover:border-amber-500/40 transition"
            >
              <h3 className="text-lg font-medium">
                {domain}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHY JOIN */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div>

          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4">
            Why Join Us
          </p>

          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-tight">
            This isn’t just
            <br />
            another internship.
          </h2>

          <p className="text-[var(--muted)] mt-8 text-lg max-w-xl">
            This is a learning-focused internship designed for
            students and early builders looking to gain practical
            experience, improve their portfolio, and work on
            meaningful projects.
          </p>

          <div className="mt-10 space-y-4 text-[var(--muted)]">
            <p>• Work on execution-focused projects</p>
            <p>• Build production-ready skills</p>
            <p>• Collaborate with ambitious creators</p>
            <p>• Gain startup & organizational exposure</p>
          </div>

        </div>

        {/* RIGHT */}
        <div className="grid sm:grid-cols-2 gap-5">
          {perks.map((perk, i) => (
            <motion.div
              key={perk}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl"
            >
              <p className="text-lg">{perk}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* APPLICATION */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>

            <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4">
              Apply Now
            </p>

            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-tight">
              Start your journey
              <br />
              with Father’s Media.
            </h2>

            <p className="text-[var(--muted)] mt-8 max-w-lg text-lg">
              We’re looking for curious builders, creators,
              developers, designers, and marketers eager to learn
              and contribute.
            </p>

            <div className="mt-10 text-sm text-[var(--muted)] space-y-3">
              <p>✓ Remote & flexible work culture</p>
              <p>✓ Collaborative environment</p>
              <p>✓ Real-world execution experience</p>
              <p>✓ Performance-based recognition</p>
            </div>

          </div>

          {/* FORM */}
          <div className="p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                required
                name="name"
                placeholder="Full name"
                className="w-full px-5 py-4 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full px-5 py-4 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition"
              />

              <input
                required
                name="phone"
                placeholder="Phone number"
                className="w-full px-5 py-4 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition"
              />

              <input
                required
                name="college"
                placeholder="College / University"
                className="w-full px-5 py-4 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition"
              />

              <select
                required
                name="domain"
                className="w-full px-5 py-4 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 text-[var(--text)] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition"
              >
                <option value="">Select domain</option>

                {domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>

              <input
                name="portfolio"
                placeholder="Portfolio / LinkedIn (optional)"
                className="w-full px-5 py-4 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition"
              />

              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us about yourself"
                className="w-full px-5 py-4 rounded-xl resize-none bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40 transition"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-amber-500 text-black py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-amber-400 hover:shadow-[0_8px_30px_rgba(245,158,11,0.25)] transition duration-300"
              >
                {status === "loading"
                  ? "Submitting..."
                  : "Submit Application"}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-sm text-center">
                  ✓ Application submitted successfully
                </p>
              )}

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}

            </form>
          </div>

        </div>

        {/* DISCLAIMER */}
        <p className="mt-16 text-center text-xs text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
          Father’s Media reserves the right to select candidates
          based on application quality, role availability, and
          organizational requirements. This is currently an unpaid,
          learning-focused internship program intended for skill
          development and practical exposure.
        </p>

      </div>
    </section>
  );
}
