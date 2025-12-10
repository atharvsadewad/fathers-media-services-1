"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaCode, FaGlobe, FaSearch, FaBullhorn, FaChartLine, 
  FaUsers, FaPaintBrush, FaVideo, FaLightbulb, 
  FaCheckCircle, FaUsersCog 
} from "react-icons/fa";

/* ================= CLIENT LIST ================== */
const clients = [
  { name: "Chamber", logo: "/clients/chamber.png", url: "https://chamber-frontend-i2lc.vercel.app/" },
  { name: "Pawan Infra Developer", logo: "/clients/PId logo 6.png", url: "https://pawaninfradeveloper.in" },
  { name: "Voter Data Management web Tool", logo: "/clients/vm.png", url: "https://pvt.in" },
  { name: "Governance & Public-Services Tool", logo: "/clients/w-16.png", url: "https://pvt.in" },
];

/* ================= CUSTOM CURSOR ================= */
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest("a") || !!target.closest("button")
      );
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#d4af37] rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#d4af37] pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      />
    </>
  );
};

/* ================= PORTFOLIO SCROLLER ================= */
const ScrollContainer = ({ children, speed = 1 }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = scrollRef.current;
    if (!container) return;

    let frame: number;

    const animate = () => {
      if (!isPaused) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth)
          container.scrollLeft = 0;
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused, speed]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="flex overflow-x-auto gap-6 no-scrollbar cursor-grab active:cursor-grabbing px-4"
    >
      {children}{children}{children}
    </div>
  );
};

/* ================= SERVICES ================= */
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

/* ================= WHY CHOOSE ================= */
const whyChooseUs = [
  { title: "Proven Results", desc: "We grow brands with measurable outcomes.", icon: <FaChartLine className="text-yellow-500 text-4xl" /> },
  { title: "Full-Funnel Approach", desc: "From strategy to paid growth execution.", icon: <FaLightbulb className="text-yellow-500 text-4xl" /> },
  { title: "Transparent Reporting", desc: "Monthly insights and ROI tracking.", icon: <FaCheckCircle className="text-yellow-500 text-4xl" /> },
  { title: "Client-Centric Plans", desc: "We tailor strategies uniquely per brand.", icon: <FaUsersCog className="text-yellow-500 text-4xl" /> },
];

export default function Home() {
  const [submitMessage, setSubmitMessage] = useState({ text: "", type: "" });
  const [scrollY, setScrollY] = useState(0);

  /* ================= SAFE SCROLL ================= */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const listen = () => setScrollY(window.scrollY / 350);
    window.addEventListener("scroll", listen);
    return () => window.removeEventListener("scroll", listen);
  }, []);

  return (
    <div className="relative min-h-screen font-[var(--font-dm-sans)]">

      <CustomCursor />

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center">
        <div className="container-responsive text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold dark:text-white text-black">
            Father’s Media — Building Brands Online
          </motion.h1>
        </div>
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

      {/* WHAT WE DO PREMIUM FIXED STACK */}
      <section id="services" className="relative bg-white dark:bg-black py-32">

        <h2 className="text-5xl text-center font-bold dark:text-white text-black mb-20">
          What We Do
        </h2>

        {/* Sticky animation wrapper */}
        <div className="sticky top-24 h-[480px] flex justify-center items-center">

          {/* SSR Protected */}
          {typeof window !== "undefined" &&
            services.map((s, i) => {
              const progress = scrollY - i * 1.3;

              return (
                <motion.div
                  key={s.id}
                  style={{ zIndex: services.length - i }}
                  className="absolute w-[420px] min-h-[420px] p-10 rounded-[30px] 
                    bg-white dark:bg-gray-900 shadow-2xl border dark:border-gray-700 flex flex-col gap-4"
                  animate={{
                    opacity: progress > -0.4 ? 1 : 0,
                    y: progress > 0 ? -progress * 140 : 0,
                    scale: progress > 0 ? 1 - progress * 0.1 : 1
                  }}
                  transition={{ duration: 0.45 }}
                >
                  <span className="text-yellow-500 font-bold">{s.id}</span>
                  <h3 className="text-3xl font-extrabold dark:text-white text-black">{s.title}</h3>
                  <p className="text-lg dark:text-gray-300 text-gray-600">{s.desc}</p>
                  <div className="absolute bottom-10 right-8 text-6xl">{s.icon}</div>
                </motion.div>
              );
            })}
        </div>

        {/* Spacer until last card truly disappears */}
        <div className="h-[550px]" />
      </section>

      {/* PLANS */}
      <section id="plans" className="section-padding">
        <div className="container-responsive">
          <h2 className="section-title text-center text-gray-900 dark:text-white">Plans & Pricing</h2>
          <p className="section-subtitle text-center mt-2 text-gray-600 dark:text-gray-300 opacity-90">
            Enquire to get a custom quote.
          </p>
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

       {/* ================= PREMIUM++ CLIENTS SECTION ================= */}
    <section className="section-padding relative">
      
      {/* Background Aura */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/5 to-transparent dark:via-gray-800/20"></div>
      
      <div className="container-responsive text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          Our Clients
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="section-subtitle mt-3 text-gray-600 dark:text-gray-300"
        >
          Brands that trust us to build, scale, and elevate their digital presence.
        </motion.p>
      </div>

      <div className="mt-14 max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 place-items-center">
        {clients.map((client, i) => (
          <motion.a
            key={i}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex flex-col items-center group justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.07 }}
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-2xl scale-110 opacity-0 group-hover:opacity-30 blur-xl 
                            transition-all duration-500 bg-yellow-500"></div>

            {/* Card */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white/70 dark:bg-gray-800/70 
                            backdrop-blur-xl shadow-lg border border-gray-200/40 dark:border-gray-700/40 
                            overflow-hidden flex items-center justify-center
                            group-hover:shadow-yellow-500/40 transition-all duration-300">
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 object-contain opacity-90 group-hover:opacity-100 transition"
              />
            </div>

            {/* Name */}
            <p className="client-name mt-4 text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-yellow-500 transition-all">
              {client.name}
            </p>
          </motion.a>
        ))}
      </div>
    </section>


      {/* PORTFOLIO / SHOWCASING CREATIVITY */}
      <section className="section-padding">
        <div className="container-responsive text-center">
          <h2 className="section-title text-gray-900 dark:text-white">Showcasing Creativity</h2>
          <p className="section-subtitle mt-2 text-gray-600 dark:text-gray-300">
            From brand identities to web apps — a glimpse of our work.
          </p>
        </div>

        {/* SCROLL CONTAINER */}
        <div className="mt-12 relative w-full">
          <ScrollContainer speed={1.5}> {/* Adjust speed here (higher = faster) */}
            {/* We duplicate the array 3 times to ensure smooth infinite scrolling */}
            {[
              "/portfolio/w1.png", "/portfolio/w2.png", "/portfolio/w3.png", "/portfolio/w4.png", 
              "/portfolio/w5.png", "/portfolio/w6.png", "/portfolio/w7.png", "/portfolio/chamber-screenshot.png"
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 select-none pointer-events-none" 
                // pointer-events-none prevents the image from being 'dragged' as a file, allowing the container to slide
              >
                <img src={src} alt={`Portfolio ${i}`} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </ScrollContainer>
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
