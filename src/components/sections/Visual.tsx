"use client";
 
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
 
export default function Visual() {
  const containerRef = useRef<HTMLDivElement>(null);
 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
 
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.6, 0.45, 0.65]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.9], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.9], ["40px", "0px", "0px", "-30px"]);
  const taglineOpacity = useTransform(scrollYProgress, [0.2, 0.45, 0.7, 0.9], [0, 1, 1, 0]);
 
  return (
    <section
      ref={containerRef}
      className="relative bg-[#0c0a09]"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background image with zoom */}
        <motion.div
          className="absolute inset-0"
          style={{ scale }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1800&q=85&auto=format')`,
            }}
          />
        </motion.div>
 
        {/* Gradient overlay — dark edges, less dark center */}
        <motion.div
          className="absolute inset-0"
          style={{ opacity: overlayOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09] via-transparent to-[#0c0a09]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/60 via-transparent to-[#0c0a09]/60" />
          <div className="absolute inset-0 bg-[#0c0a09]/30" />
        </motion.div>
 
        {/* Centered text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.p
            style={{ opacity: taglineOpacity, y: textY }}
            className="text-amber-400 text-xs tracking-[0.35em] uppercase mb-6 font-medium"
          >
            Our Philosophy
          </motion.p>
 
          <motion.h2
            style={{ opacity: textOpacity, y: textY }}
            className="font-serif text-[clamp(2.8rem,7vw,7.5rem)] font-normal leading-[1.05] text-stone-50 max-w-5xl"
          >
            The screen is a
            <br />
            <em className="text-amber-400 not-italic">stage.</em> We direct
            <br />
            what happens on it.
          </motion.h2>
 
          <motion.div
            style={{
              opacity: taglineOpacity,
              y: useTransform(scrollYProgress, [0.25, 0.5], ["20px", "0px"]),
            }}
            className="mt-10 w-16 h-px bg-amber-500/60"
          />
        </div>
 
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0c0a09] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}