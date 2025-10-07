"use client";


import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, UIEvent } from "react"; // Added UIEvent for proper type
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

// ... (services array and useScrollLock hook remain the same) ...
// The useScrollLock hook is correct for locking the body scroll
function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = "hidden";
      // Optional: Prevent main scroll from jumping when lock is applied
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      // Store current scroll position to restore it later
      const scrollY = window.scrollY; 
      document.body.style.top = `-${scrollY}px`;
      document.body.setAttribute('data-scroll-y', scrollY.toString());
      
    } else {
      const scrollY = document.body.getAttribute('data-scroll-y');
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
        document.body.removeAttribute('data-scroll-y');
      }
    }
    return () => {
      // Cleanup for when component unmounts
      const scrollY = document.body.getAttribute('data-scroll-y');
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
        document.body.removeAttribute('data-scroll-y');
      }
    };
  }, [locked]);
}

const services = [
  // ... (Your services array here) ...
  {
    id: "01",
    title: "Website Development",
    desc: "Modern, responsive websites designed to convert visitors into customers.",
    icon: <FaCode className="text-6xl text-yellow-500" />,
  },
  {
    id: "02",
    title: "Google Business Listing",
    desc: "Boost visibility and credibility with a verified Google Business profile.",
    icon: <FaGlobe className="text-6xl text-yellow-500" />,
  },
  {
    id: "03",
    title: "SEO Optimization",
    desc: "Improve your search rankings with tailored SEO strategies.",
    icon: <FaSearch className="text-6xl text-yellow-500" />,
  },
  {
    id: "04",
    title: "Social Media Management",
    desc: "Strategy, calendars, community management, and analytics.",
    icon: <FaUsers className="text-6xl text-yellow-500" />,
  },
  {
    id: "05",
    title: "Branding & Strategy",
    desc: "Positioning, voice and cohesive visual identity.",
    icon: <FaPaintBrush className="text-6xl text-yellow-500" />,
  },
  {
    id: "06",
    title: "Paid Ads & Promotions",
    desc: "ROI-focused campaigns across Meta, Google and more.",
    icon: <FaChartLine className="text-6xl text-yellow-500" />,
  },
  {
    id: "07",
    title: "Content Creation",
    desc:
      "Reels, shoots, campaigns that convert attention into action.",
    icon: <FaVideo className="text-6xl text-yellow-500" />,
  },
  {
    id: "08",
    title: "Influencer Marketing",
    desc:
      "Creator partnerships that drive reach and credibility.",
    icon: <FaBullhorn className="text-6xl text-yellow-500" />,
  },
];


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  // 1. CHANGE: Initialize 'locked' to false so the page scrolls normally at first.
  const [locked, setLocked] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useScrollLock(locked);

  // 2. NEW LOGIC: Use Intersection Observer to lock the scroll when the section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only lock when the entire section is fully in the viewport (intersectionRatio 1)
        // and when the user is scrolling DOWN (which is harder to determine with IO)
        // A simpler approach is to lock when it enters view (entry.isIntersecting)
        if (entry.isIntersecting) {
            // Check if section is *mostly* visible (e.g., more than 80%)
            // This is more reliable than checking for exact 1.0, and helps trigger the scroll-lock effect
            if (entry.intersectionRatio > 0.8) {
                // User has scrolled down to this section, now lock the body scroll
                setLocked(true);
            }
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.8, // Trigger when 80% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  // Handle scroll for the WHAT WE DO section container
  // This logic is mostly correct for internal section scroll-locking
  function handleSectionScroll(e: React.UIEvent<HTMLDivElement>) {
    const target = e.currentTarget;
    const isAtBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 2;

    // 3. MODIFICATION: Set locked to FALSE ONLY when at the very bottom
    // and if the user scrolls back up, the body scroll should NOT re-lock immediately.
    // However, for the desired effect (scroll-to-unlock), the existing logic is often used:
    if (isAtBottom) {
      setLocked(false);
      // Optional: Scroll to the next section or adjust main window scroll slightly to indicate unlock
      // window.scrollTo({ top: window.scrollY + 10, behavior: 'smooth' }); 
    } else {
      // Re-lock the body scroll if the user is scrolling the section internally,
      // ensuring the section's scroll is prioritized.
      setLocked(true);
    }

    // Calculate active card index (Keep as is)
    const cardHeight = 420; 
    let idx = Math.floor(target.scrollTop / cardHeight);
    if (idx < 0) idx = 0;
    if (idx > services.length - 1) idx = services.length - 1;
    setActiveIndex(idx);
  }

  // Card bottom spacing
  const cardSpacing = "mb-10";

  return (
    <div>
      {/* ... (Your HERO and TAGLINE sections are fine) ... */}
      
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* ... HERO content ... */}
      </section>
      
      <section className="section-padding text-center">
        {/* ... TAGLINE content ... */}
      </section>

      {/* WHAT WE DO - scroll-lock section */}
      <section
        id="services"
        ref={sectionRef} // The Intersection Observer watches this ref
        onScroll={handleSectionScroll}
        // This style is crucial for the internal scroll of this section
        style={{ height: "100vh", overflowY: "scroll", position: "relative" }}
        className="section-padding relative overflow-hidden font-['DM_Sans']"
      >
        {/* ... Content remains the same ... */}
        <div className="container-responsive text-left">
          {/* ... Headings ... */}
          
          {/* IMPORTANT: Add padding to the bottom of the content to allow scrolling to the end card */}
          <div
            className="relative flex flex-col items-center"
            // The minHeight needs to be adjusted to accommodate the cards and spacing
            style={{ 
              minHeight: "420px", 
              // Add enough bottom padding to allow scrolling past the last card
              paddingBottom: `${services.length * 420}px` 
            }}
          >
            <AnimatePresence initial={false}>
              {services.map((s, i) =>
                i === activeIndex ? (
                  <motion.div
                    key={s.id}
                    // ... (motion props) ...
                    className={`w-full flex flex-row items-center justify-between gap-8 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg hover:shadow-2xl transition-all duration-700 ${cardSpacing}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                    }}
                  >
                    {/* ... Card Content ... */}
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
            {/* Create invisible anchor elements to make the section scrollable */}
            {services.map((s, i) => (
              // This acts as a scroll target to make the total scroll height larger
              // without relying on the absolute positioned card to provide the height.
              <div 
                key={`scroll-anchor-${s.id}`} 
                style={{ height: "420px" }} // Same as card height
                className="w-full relative" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="section-padding">
        <div className="container-responsive">
          <h2 className="section-title text-center text-gray-900 dark:text-white">
            Plans & Pricing
          </h2>
          <p className="section-subtitle text-center mt-2 text-gray-600 dark:text-gray-300">
            Enquire to get a custom quote.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Basic",
                features: [
                  "Strategy Consulting",
                  "Digital Marketing & Management ",
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
                  "Includes Basic",
                  "Brand Building - Complete",
                  "8 Reels 12 Posts 12 Stories/M ",
                  "Paid Promotions(2 Ads)",
                ],
              },
              {
                name: "Premium",
                features: [
                  "Includes Standard",
                  "Multi-platform Media Handling",
                  "12 Reels 16 Posts 16 Stories/M",
                  "Website Development",
                  "SEO",
                  "Paid Promotions(4 Ads)",
                ],
              },
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
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span>✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-primary mt-6 text-center">
                  Enquire Now
                </a>
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
                desc:
                  "Track record of scaling SMBs and brands with measurable outcomes.",
                img: "/images/results.jpg",
              },
              {
                title: "Full-Funnel Approach",
                desc:
                  "From strategy to creative to paid growth — we handle it all.",
                img: "/images/funnel.jpg",
              },
              {
                title: "Transparent Reporting",
                desc:
                  "We believe in clarity — expect transparent reports and real progress.",
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
          <h2 className="section-title text-gray-900 dark:text-white">
            Showcasing Creativity
          </h2>
          <p className="section-subtitle mt-2 text-gray-600 dark:text-gray-300">
            From brand identities to web apps — a glimpse of our work.
          </p>
        </div>
        <div
          className="relative overflow-hidden mt-12"
          onMouseEnter={(e) => e.currentTarget.classList.add("pause")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("pause")}
        >
          <div className="flex animate-scroll-x gap-6 px-4">
            {[
              "/portfolio/work1.png",
              "/portfolio/work2.png",
              "/portfolio/work3.png",
              "/portfolio/work4.png",
              "/portfolio/work5.png",
              "/portfolio/chamber-screenshot.png",
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover"
                />
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
          <div id="contact-form" className="mt-10 max-w-xl mx-auto text-left space-y-4">
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
