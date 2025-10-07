"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaGlobe,
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaPaintBrush,
  FaVideo,
} from "react-icons/fa";

const services = [
  { id: "01", title: "Website Development", desc: "Modern, responsive websites designed to convert visitors into customers.", icon: <FaCode className="text-6xl text-yellow-500" /> },
  { id: "02", title: "Google Business Listing", desc: "Boost visibility and credibility with a verified Google Business profile.", icon: <FaGlobe className="text-6xl text-yellow-500" /> },
  { id: "03", title: "SEO Optimization", desc: "Improve your search rankings with tailored SEO strategies.", icon: <FaSearch className="text-6xl text-yellow-500" /> },
  { id: "04", title: "Social Media Management", desc: "Strategy, calendars, community management, and analytics.", icon: <FaUsers className="text-6xl text-yellow-500" /> },
  { id: "05", title: "Branding & Strategy", desc: "Positioning, voice and cohesive visual identity.", icon: <FaPaintBrush className="text-6xl text-yellow-500" /> },
  { id: "06", title: "Paid Ads & Promotions", desc: "ROI-focused campaigns across Meta, Google and more.", icon: <FaChartLine className="text-6xl text-yellow-500" /> },
  { id: "07", title: "Content Creation", desc: "Reels, shoots, campaigns that convert attention into action.", icon: <FaVideo className="text-6xl text-yellow-500" /> },
  { id: "08", title: "Influencer Marketing", desc: "Creator partnerships that drive reach and credibility.", icon: <FaBullhorn className="text-6xl text-yellow-500" /> },
];

export default function Home() {
  // --- HERO & TAGLINE remain unchanged ---

  // --- WHAT WE DO (Stacked Animation Section) ---
  // Card spacing (reduced)
  const cardSpacing = "mb-10"; // was gap-24 → mb-10 for tighter stacking
  // For animation, activeIndex used to display one card at a time
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Calculate which card to show based on scroll position
  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY + window.innerHeight/2; // Center trigger
      const sectionTop = rect.top + window.scrollY;
      const cardHeight = 400; // adjust for card size, including margin
      let idx = Math.floor((scrollY - sectionTop) / cardHeight);
      if (idx < 0) idx = 0;
      if (idx > services.length - 1) idx = services.length - 1;
      setActiveIndex(idx);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container-responsive text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white">
            Father’s Media — Building Brands Online
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            We help businesses stand out with strategy, creativity, and growth.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Let’s Work Together
            </a>
            <a href="#services" className="btn-outline">
              Our Services
            </a>
          </div>
        </motion.div>
      </section>
      {/* TAGLINE */}
      <section className="section-padding text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-12"
        >
          Your Brand, <span className="text-yellow-500">Our Strategy.</span>
        </motion.h2>
        <div className="max-w-4xl mx-auto text-left">
          <p className="text-2xl sm:text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white">
            <motion.span initial={{ opacity: 0.3 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.7 }} transition={{ duration: 0.8, delay: 0.3 }}>
              At Father’s Media, we understand how vital creativity and strategy are in building strong brands online.
            </motion.span>{" "}
            <motion.span initial={{ opacity: 0.3 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.7 }} transition={{ duration: 0.8, delay: 0.6 }}>
              By combining design, content, and data-driven insights, we craft digital experiences that truly connect.
            </motion.span>{" "}
            <motion.span initial={{ opacity: 0.3 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.7 }} transition={{ duration: 0.8, delay: 0.9 }}>
              Our mission is simple: to grow your brand, engage your audience, and deliver results that last.
            </motion.span>
          </p>
        </div>
      </section>
      {/* WHAT WE DO (Stacked card animation inspired by Leo9 Studio) */}
      <section id="services" className="section-padding relative overflow-hidden font-['DM_Sans']">
        <div className="container-responsive text-left" ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-title text-gray-900 dark:text-white text-center mb-2"
          >
            What We Do
          </motion.h2>
          <p className="section-subtitle text-center text-gray-600 dark:text-gray-300 mb-8">
            Turning ideas into impact.
          </p>
          <div className="relative flex flex-col items-center" style={{ minHeight: "420px" }}>
            <AnimatePresence initial={false}>
              {services.map((s, i) =>
                i === activeIndex ? (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 80, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -80, scale: 0.92 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`w-full flex flex-row items-center justify-between gap-8 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg hover:shadow-2xl transition-all duration-700 ${cardSpacing}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    <div className="w-2/3">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {s.title}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                    <div className="text-7xl md:w-1/3 flex justify-center items-center">
                      {s.icon}
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* PLANS */}
      <section id="plans" className="section-padding">
        <div className="container-responsive">
          <h2 className="section-title text-center text-gray-900 dark:text-white">Plans & Pricing</h2>
          <p className="section-subtitle text-center mt-2 text-gray-600 dark:text-gray-300">Enquire to get a custom quote.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: "Basic", features: ["Strategy Consulting", "Digital Marketing & Management ", "Content Writing", "Photo & Video Shoot", "Editing", "Graphic Posts", "4 Reels 8 Post 8 Stories/M", "Google Business Listing" ] },
              { name: "Standard", features: ["Includes Basic", "Brand Building - Complete", "8 Reels 12 Posts 12 Stories/M ", "Paid Promotions(2 Ads)"] },
              { name: "Premium", features: ["Includes Standard", "Multi-platform Media Handling", "12 Reels 16 Posts 16 Stories/M", "Website Development", "SEO", "Paid Promotions(4 Ads)"] },
            ].map((plan, i) => (
              <motion.div 
                key={plan.name} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{plan.name}</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><span>✔</span>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary mt-6 text-center">Enquire Now</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-responsive">
          <h2 className="section-title text-center text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="section-subtitle text-center mt-2 text-gray-600 dark:text-gray-300">
            The Father’s Media Advantage.
          </p>
          <div className="mt-16 flex flex-col gap-20">
            {[
              {
                title: "Proven Results",
                desc: "Track record of scaling SMBs and brands with measurable outcomes.",
                img: "/images/results.jpg",
              },
              {
                title: "Full-Funnel Approach",
                desc: "From strategy to creative to paid growth — we handle it all.",
                img: "/images/funnel.jpg",
              },
              {
                title: "Transparent Reporting",
                desc: "We believe in clarity — expect transparent reports and real progress.",
                img: "/images/reporting.jpg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  i % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-3xl shadow-lg object-cover w-full h-72"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* PORTFOLIO */}
      <section className="section-padding">
        <div className="container-responsive text-center">
          <h2 className="section-title text-gray-900 dark:text-white">Showcasing Creativity</h2>
          <p className="section-subtitle mt-2 text-gray-600 dark:text-gray-300">
            From brand identities to web apps — a glimpse of our work.
          </p>
        </div>
        <div className="relative overflow-hidden mt-12" onMouseEnter={(e) => e.currentTarget.classList.add("pause")} onMouseLeave={(e) => e.currentTarget.classList.remove("pause")}>
          <div className="flex animate-scroll-x gap-6 px-4">
            {["/portfolio/work1.png","/portfolio/work2.png","/portfolio/work3.png","/portfolio/work4.png","/portfolio/work5.png","/portfolio/chamber-screenshot.png"].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-lg"
              >
                <img src={src} alt={`Portfolio ${i + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding">
        <div className="container-responsive text-center">
          <h2 className="section-title text-gray-900 dark:text-white">
            Let’s Build Together
          </h2>
          <p className="section-subtitle mt-2 text-gray-600 dark:text-gray-300">
            Ready to grow your brand? Reach out and let’s talk strategy.
          </p>
          <div
            id="contact-form"
            className="mt-10 max-w-xl mx-auto text-left space-y-4"
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const res = await fetch("/api/contact", {
                  method: "POST",
                  body: formData,
                });
                const msgBox = document.getElementById("submitMessage");
                if (res.ok) {
                  msgBox!.textContent =
                    "✅ Message sent successfully! We'll get back to you soon.";
                  msgBox!.classList.remove("text-red-500");
                  msgBox!.classList.add("text-green-500");
                  form.reset();
                } else {
                  msgBox!.textContent = "❌ Failed to send. Please try again.";
                  msgBox!.classList.remove("text-green-500");
                  msgBox!.classList.add("text-red-500");
                }
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              />
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
              <p id="submitMessage" className="text-center text-sm mt-3"></p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
