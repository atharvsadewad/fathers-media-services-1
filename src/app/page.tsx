"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
    name: "Voter Data Management web Tool",
    logo: "/clients/vm.png",
    url: "https://pvt.in"
  },
  {
    name: "Governance & Public-Services Tool",
    logo: "/clients/w-16.png",
    url: "https://pvt.in"
  }
];
const ScrollContainer = ({ children, speed = 1 }: { children: React.ReactNode; speed?: number }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 1. Auto-Scroll Logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const step = () => {
      // Only scroll if not paused and not dragging
      if (!isPaused && !isDragging) {
        container.scrollLeft += speed;
        
        // Infinite Loop Logic: If we scrolled halfway, reset to 0 (requires duplicated content)
        // Note: For a true infinite loop, we usually double the content. 
        // If it hits the end, we simply reset. 
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
           container.scrollLeft = 0; 
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging, speed]);

  // 2. Click & Drag Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    if(scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // *2 determines drag speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // 3. Duplicate Children for Infinite Effect
  // We render the children multiple times so the scroll has room to reset seamlessly
  const content = (
    <>
      {children}
      {children} 
      {children}
    </>
  );

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto no-scrollbar w-full px-4"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsPaused(true)} // Pause on mobile touch
      onTouchEnd={() => setIsPaused(false)}
    >
      {content}
    </div>
  );
};
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
