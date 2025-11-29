"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FaCode, FaGlobe, FaSearch, FaBullhorn, FaChartLine, 
  FaUsers, FaPaintBrush, FaVideo, FaLightbulb, 
  FaCheckCircle, FaUsersCog 
} from "react-icons/fa";

const clients = [
  {
    name: "Chamber",
    logo: "/clients/chamber.png",
    url: "https://chamber-frontend-i2lc.vercel.app/" 
  },
  {
    name: "Pawan Infra Developer",
    logo: "/clients/PId logo 6.png",
    url: "https://pawaninfradeveloper.in"
  },
  {
    name: "Private Work",
    logo: "/clients/pvt.png",
    url: "https://pvt.in"
  },
];

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

const whyChooseUsData = [
  { title: "Proven Results", desc: "We have a track record of scaling SMBs and brands with measurable outcomes, focusing on ROI and sustainable growth.", icon: <FaChartLine className="text-yellow-500 text-4xl" /> },
  { title: "Full-Funnel Approach", desc: "From initial strategy and creative direction to final paid growth campaigns, we handle the entire process seamlessly.", icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
  { title: "Transparent Reporting", desc: "Expect detailed, transparent reports and collaborative check-ins to monitor real progress every step of the way.", icon: <FaCheckCircle className="text-yellow-500 text-4xl" /> },
  { title: "Client-Centric Customization", desc: "We ditch generic packages for fully customized plans tailored to your niche and objectives.", icon: <FaUsersCog className="text-yellow-500 text-4xl" /> },
];

export default function Home() {
  const [submitMessage, setSubmitMessage] = useState({ text: "", type: "" });

  return (
    <div className="font-[var(--font-dm-sans)]">

      {/* ✅ JSON-LD SEO STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Father’s Media",
            url: "https://fathersmedia.in",
            logo: "https://fathersmedia.in/web-app-manifest-512x512.png",
            sameAs: [
              "https://www.linkedin.com/company/fathersmedia/",
              "https://www.instagram.com/fathersmedia/",
              "https://x.com/fathersmedia",
            ],
            description:
              "Father’s Media is a creative social-media and marketing agency that helps brands grow through design, content, SEO, and paid advertising.",
          }),
        }}
      />

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-responsive text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white">
            Father’s Media — Building Brands Online
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            We help businesses stand out with strategy, creativity, and growth.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a href="#contact" className="btn-primary">Let’s Work Together</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </motion.div>
      </section>

      {/* TAGLINE */}
      <section className="section-padding text-center bg-gray-50 dark:bg-gray-900">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-12"
        >
          Your Brand, <span className="text-yellow-500">Our Strategy.</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto text-left w-full overflow-hidden">
          <p className="text-2xl sm:text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white break-words"> 
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

      {/* WHAT WE DO */}
      <section id="services" className="section-padding relative overflow-hidden">
        <div className="container-responsive text-center">
          <h2 className="section-title text-gray-900 dark:text-white">What We Do</h2>
          <p className="section-subtitle mt-2 text-gray-600 dark:text-gray-300">Turning ideas into impacts.</p>

          <div className="mt-12 space-y-8 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex justify-between items-center"
              >
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
                </div>
                <div className="ml-6">{s.icon}</div>
              </motion.div>
            ))}
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
          <h2 className="section-title text-center text-gray-900 dark:text-white">Why Choose Us</h2>
          <p className="section-subtitle text-center mt-2 text-gray-600 dark:text-gray-300">The Father’s Media Advantage.</p>

          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {whyChooseUsData.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                whileHover={{ scale: 1.01 }}
                className="p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 flex items-start gap-6 text-left"
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-base text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENTS SECTION ================= */}
<section className="section-padding bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
  <div className="container-responsive text-center">
    <h2 className="section-title text-gray-900 dark:text-white">
      Our Clients
    </h2>
    <p className="section-subtitle mt-2 text-gray-600 dark:text-gray-300">
      Brands that trusted us with their digital presence.
    </p>
  </div>

  {/* Marquee Animation */}
  <div className="overflow-hidden mt-12">
    <motion.div
      className="flex gap-12 items-center"
      animate={{
        x: ["0%", "-100%"]
      }}
      transition={{
        duration: 18,
        ease: "linear",
        repeat: Infinity
      }}
    >
      {[...clients, ...clients].map((client, i) => (
        <a
          key={i}
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-28 h-28 rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md group-hover:scale-105 transition">
            <img
              src={client.logo}
              alt={client.name}
              className="w-full h-full object-contain p-4"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-yellow-500 transition">
            {client.name}
          </p>
        </a>
      ))}
    </motion.div>
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

      {/* CONTACT (UI Message Display) */}
      <section id="contact" className="section-padding">
        <div className="container-responsive text-center">
          <h2 className="section-title text-gray-900 dark:text-white">Let’s Build Together</h2>
          <p className="section-subtitle mt-2 text-gray-600 dark:text-gray-300">
            Ready to grow your brand? Reach out and let’s talk strategy.
          </p>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ amount: 0.5 }} className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
            <a href="#contact-form-section" className="btn-primary">Contact Us</a>
            <a href="#services" className="btn-outline">Explore Services</a>
          </motion.div>

          <div id="contact-form-section" className="mt-10 max-w-xl mx-auto text-left">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitMessage({ text: 'Sending...', type: 'info' });

                const form = e.currentTarget;
                const formData = new FormData(form);

                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    body: formData,
                  });

                  if (res.ok) {
                    setSubmitMessage({ text: "✅ Your message has been sent successfully! We'll be in touch soon.", type: 'success' });
                    form.reset();
                  } else {
                    const errorText = await res.text();
                    setSubmitMessage({ text: `❌ Failed to send message: ${errorText || 'Server error.'}`, type: 'error' });
                  }
                } catch (error) {
                    setSubmitMessage({ text: `❌ Failed to connect to server. Please check your connection.`, type: 'error' });
                }
              }}
              className="space-y-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700" />
              <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700" />
              <textarea name="message" rows={4} placeholder="Your Message" required className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700" />
              <button type="submit" className="btn-primary w-full">Send Message</button>
              
              {/* Message Display */}
              {submitMessage.text && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-lg text-center text-sm ${
                    submitMessage.type === 'success' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' 
                      : submitMessage.type === 'error'
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300'
                  }`}
                >
                  {submitMessage.text}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
