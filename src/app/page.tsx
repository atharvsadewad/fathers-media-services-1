"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { 
  FaCode, FaGlobe, FaSearch, FaBullhorn, FaChartLine, 
  FaUsers, FaPaintBrush, FaVideo, FaLightbulb, 
  FaCheckCircle, FaUsersCog, FaArrowRight
} from "react-icons/fa";

// --- DATA CONSTANTS ---

const clients = [
  { name: "Chamber", logo: "/clients/chamber.png", url: "https://chamber-frontend-i2lc.vercel.app/" },
  { name: "Pawan Infra", logo: "/clients/PId logo 6.png", url: "https://pawaninfradeveloper.in" },
  { name: "Voter Data Tool", logo: "/clients/vm.png", url: "https://pvt.in" },
  { name: "Governance Tool", logo: "/clients/w-16.png", url: "https://pvt.in" }
];

const services = [
  { id: "01", title: "Website Development", desc: "Modern, responsive websites designed to convert visitors into customers.", color: "bg-blue-50 dark:bg-blue-900/20", icon: <FaCode className="text-7xl text-blue-500" /> },
  { id: "02", title: "Google Business Listing", desc: "Boost visibility and credibility with a verified Google Business profile.", color: "bg-red-50 dark:bg-red-900/20", icon: <FaGlobe className="text-7xl text-red-500" /> },
  { id: "03", title: "SEO Optimization", desc: "Improve your search rankings with tailored SEO strategies.", color: "bg-green-50 dark:bg-green-900/20", icon: <FaSearch className="text-7xl text-green-500" /> },
  { id: "04", title: "Social Media Mgmt", desc: "Strategy, calendars, community management, and analytics.", color: "bg-purple-50 dark:bg-purple-900/20", icon: <FaUsers className="text-7xl text-purple-500" /> },
  { id: "05", title: "Branding & Strategy", desc: "Positioning, voice and cohesive visual identity.", color: "bg-orange-50 dark:bg-orange-900/20", icon: <FaPaintBrush className="text-7xl text-orange-500" /> },
  { id: "06", title: "Paid Ads & Promotions", desc: "ROI-focused campaigns across Meta, Google and more.", color: "bg-pink-50 dark:bg-pink-900/20", icon: <FaChartLine className="text-7xl text-pink-500" /> },
  { id: "07", title: "Content Creation", desc: "Reels, shoots, campaigns that convert attention into action.", color: "bg-yellow-50 dark:bg-yellow-900/20", icon: <FaVideo className="text-7xl text-yellow-500" /> },
  { id: "08", title: "Influencer Marketing", desc: "Creator partnerships that drive reach and credibility.", color: "bg-teal-50 dark:bg-teal-900/20", icon: <FaBullhorn className="text-7xl text-teal-500" /> },
];

const plans = [
    { name: "Basic", features: ["Strategy Consulting", "Digital Marketing & Management ", "Content Writing", "Photo & Video Shoot", "Editing", "Graphic Posts", "4 Reels 8 Post 8 Stories/M", "Google Business Listing" ] },
    { name: "Standard", features: ["Includes Basic", "Brand Building - Complete", "8 Reels 12 Posts 12 Stories/M ", "Paid Promotions(2 Ads)"] },
    { name: "Premium", features: ["Includes Standard", "Multi-platform Media Handling", "12 Reels 16 Posts 16 Stories/M", "Website Development", "SEO", "Paid Promotions(4 Ads)"] },
];

const whyChooseUsData = [
  { title: "Proven Results", desc: "We have a track record of scaling SMBs and brands with measurable outcomes.", icon: <FaChartLine className="text-yellow-500 text-3xl" /> },
  { title: "Full-Funnel Approach", desc: "From initial strategy to final paid growth campaigns, we handle it all.", icon: <FaLightbulb className="text-yellow-500 text-3xl" /> },
  { title: "Transparent Reporting", desc: "Expect detailed, transparent reports and collaborative check-ins.", icon: <FaCheckCircle className="text-yellow-500 text-3xl" /> },
  { title: "Client-Centric", desc: "We ditch generic packages for fully customized plans tailored to you.", icon: <FaUsersCog className="text-yellow-500 text-3xl" /> },
];

// --- HELPER COMPONENTS ---

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-yellow-500 rounded-full pointer-events-none z-[9999] hidden sm:block mix-blend-difference"
        animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-yellow-500 rounded-full pointer-events-none z-[9998] hidden sm:block mix-blend-difference"
        animate={{ 
          x: mousePosition.x - 20, 
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 1 : 0.5
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
};

// --- STACK CARD COMPONENT ---
// This handles the sticky behavior for individual cards
const Card = ({ 
  i, 
  title, 
  description, 
  icon, 
  color, 
  progress, 
  range, 
  targetScale 
}: { 
  i: number; 
  title: string; 
  description: string; 
  icon: any; 
  color: string;
  progress: MotionValue<number>; 
  range: [number, number]; 
  targetScale: number; 
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className={`flex flex-col relative -top-[5%] h-[500px] w-[90%] md:w-[800px] rounded-3xl p-10 origin-top shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden`}
      >
        <div className="flex h-full flex-col md:flex-row gap-8 items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-[60%] flex flex-col justify-center gap-6">
            <span className="text-8xl font-black text-gray-100 dark:text-gray-700 absolute -top-4 -left-4 z-0 opacity-50 select-none">
              {i + 1 < 10 ? `0${i + 1}` : i + 1}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white z-10 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 z-10">
              {description}
            </p>
            <div className="mt-4 z-10">
              <a href="#contact" className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:gap-4 transition-all">
                Learn more <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Icon/Visual Content */}
          <div className={`w-full md:w-[40%] h-64 md:h-full rounded-2xl ${color} flex items-center justify-center relative overflow-hidden group`}>
            <motion.div style={{ scale: imageScale }} className="relative z-10 transition-transform duration-500 group-hover:scale-110">
              {icon}
            </motion.div>
             {/* Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};


const ScrollContainer = ({ children, speed = 1 }: { children: React.ReactNode; speed?: number }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationFrameId: number;
    const step = () => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth / 3) {
           container.scrollLeft = 0; 
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };
    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging, speed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    if(scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => { setIsDragging(false); setIsPaused(false); };
  const handleMouseUp = () => { setIsDragging(false); setIsPaused(false); };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto no-scrollbar w-full px-4 cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}
      onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}
    >
      {children}{children}{children}
    </div>
  );
};

// --- MAIN COMPONENT ---

export default function Home() {
  const [submitMessage, setSubmitMessage] = useState({ text: "", type: "" });
  
  // Reference for the card stack container
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div className="font-[var(--font-dm-sans)] min-h-screen relative overflow-x-hidden scroll-smooth bg-white dark:bg-black text-black dark:text-white">
      
      {/* JSON-LD SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Father’s Media",
            url: "https://fathersmedia.in",
            logo: "https://fathersmedia.in/web-app-manifest-512x512.png",
            description: "Creative agency helping brands grow through design, SEO, and ads.",
          }),
        }}
      />

      <CustomCursor />
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container-responsive text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Father’s Media
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building Brands. Crafting Stories. Driving Growth.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full transition-all transform hover:scale-105">Let’s Work Together</a>
            <a href="#services" className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">What We Do</a>
          </div>
        </motion.div>
      </section>

      {/* TAGLINE */}
      <section className="py-24 text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          Your Brand, <span className="text-yellow-500">Our Strategy.</span>
        </motion.h2>
        <p className="max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300"> 
          We combine creativity and data to build digital experiences that connect, convert, and last.
        </p>
      </section>

      {/* --- NEW STACKING SERVICES SECTION (LEO9 STYLE) --- */}
      <div ref={container} id="services" className="relative w-full bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="sticky top-0 h-[20vh] flex items-end justify-center pb-10 pointer-events-none z-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white uppercase tracking-wider opacity-20">Our Services</h2>
        </div>
        
        <div className="pb-[20vh]"> {/* Padding bottom to allow last card to be seen fully */}
          {services.map((service, i) => {
            // Dynamic scale calculation for the stack effect
            const targetScale = 1 - ((services.length - i) * 0.05);
            return (
              <Card 
                key={service.id} 
                i={i} 
                {...service} 
                progress={scrollYProgress} 
                range={[i * 0.1, 1]} 
                targetScale={targetScale} 
              />
            );
          })}
        </div>
      </div>

      {/* PLANS */}
      <section id="plans" className="py-24 px-4 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-12">Plans & Pricing</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div 
                key={plan.name} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#111] hover:border-yellow-500 dark:hover:border-yellow-500 transition-colors duration-300 relative group"
              >
                {i === 1 && <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl text-black">POPULAR</div>}
                <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
                <ul className="space-y-4 mb-8 text-gray-600 dark:text-gray-400">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <FaCheckCircle className="text-yellow-500 mt-1 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="block w-full text-center py-4 rounded-xl font-bold bg-black text-white dark:bg-white dark:text-black group-hover:bg-yellow-500 group-hover:text-black transition-all">Select Plan</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {whyChooseUsData.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="p-4 rounded-2xl bg-white dark:bg-[#151515] shadow-sm">{item.icon}</div>
                <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* CLIENTS */}
      <section className="py-24 text-center overflow-hidden">
        <h2 className="text-3xl font-bold mb-12">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 px-4">
          {clients.map((client, i) => (
            <motion.a 
              key={i} 
              href={client.url} 
              target="_blank"
              whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
              className="w-24 md:w-32 opacity-60 hover:opacity-100 grayscale transition-all duration-300"
            >
              <img src={client.logo} alt={client.name} className="w-full h-auto object-contain" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* PORTFOLIO SCROLL */}
      <section className="py-24 border-t border-gray-100 dark:border-gray-900">
        <h2 className="text-center text-4xl font-bold mb-12">Recent Works</h2>
        <ScrollContainer speed={1.5}>
          {[
            "/portfolio/w1.png", "/portfolio/w2.png", "/portfolio/w3.png", "/portfolio/w4.png", 
            "/portfolio/w5.png", "/portfolio/w6.png", "/portfolio/w7.png", "/portfolio/chamber-screenshot.png"
          ].map((src, i) => (
             <div key={i} className="flex-shrink-0 w-80 h-56 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-gray-100 relative group">
                <img src={src} alt="Portfolio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
             </div>
          ))}
        </ScrollContainer>
      </section>
      
      {/* CONTACT FORM */}
      <section id="contact" className="py-24 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Start a Project</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">Drop us a line and we'll get back to you immediately.</p>
        
        <form onSubmit={async (e) => {
            e.preventDefault();
            setSubmitMessage({ text: 'Sending...', type: 'info' });
            // Add your fetch logic here
            setSubmitMessage({ text: "✅ Message sent!", type: 'success' });
        }} className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111] focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
          <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111] focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
          <textarea rows={4} placeholder="Tell us about your project" className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#111] focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
          <button type="submit" className="w-full py-4 bg-yellow-500 font-bold rounded-xl hover:bg-yellow-400 transition-colors text-black">Send Message</button>
          {submitMessage.text && <p className="mt-4 font-medium text-green-600">{submitMessage.text}</p>}
        </form>
      </section>

    </div>
  );
}
