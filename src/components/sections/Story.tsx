"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

interface Scene {
  label: string;
  heading: string;
  body: string;
}

const scenes = [
  {
    label: "Our Approach",
    heading: "Your Brand,\nOur Strategy.",
    body:
      "At Father’s Media, we understand how vital creativity and strategy are in building strong brands online.",
  },
  {
    label: "What We Do",
    heading: "We combine design,\ncontent & insights.",
    body:
      "By combining design, content, and data-driven insights, we craft digital experiences that truly connect.",
  },
  {
    label: "Our Mission",
    heading: "Growth that is\nmeasurable.",
    body:
      "Our mission is simple: to grow your brand, engage your audience, and deliver results that last.",
  },
  {
    label: "The Outcome",
    heading: "Results that\nactually matter.",
    body:
      "We don’t just create content — we build systems that generate attention, trust, and real business growth.",
  },
];

function SceneBlock({
  scene,
  progress,
  index,
  total,
}: {
  scene: Scene;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const center = start + segmentSize / 2;
  const end = start + segmentSize;

  const opacity = useTransform(
    progress,
    [
      Math.max(0, start - 0.02),
      start + segmentSize * 0.2,
      center,
      end - segmentSize * 0.2,
      Math.min(1, end + 0.02),
    ],
    [0, 1, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [Math.max(0, start - 0.02), start + segmentSize * 0.2, center, end],
    ["32px", "0px", "0px", "-24px"]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 lg:px-32 max-w-[1200px] mx-auto w-full"
    >
      <span className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-6 font-medium">
        {scene.label}
      </span>

      <h2 className="font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[1.1] text-[var(--text)] whitespace-pre-line mb-8">
        {scene.heading}
      </h2>

      <p className="text-[var(--muted)] text-xl leading-relaxed max-w-xl">
        {scene.body}
      </p>
    </motion.div>
  );
}

function ProgressPips({
  progress,
  total,
}: {
  progress: MotionValue<number>;
  total: number;
}) {
  return (
    <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
      {Array.from({ length: total }).map((_, i) => {
        const segmentSize = 1 / total;
        const start = i * segmentSize;
        const end = start + segmentSize;
        const pipOpacity = useTransform(progress, [start, end], [0.25, 1]);
        const pipScale = useTransform(progress, [start, end], [1, 1.4]);

        return (
          <motion.div
            key={i}
            style={{ opacity: pipOpacity, scale: pipScale }}
            className="w-1.5 h-1.5 rounded-full bg-amber-400"
          />
        );
      })}
    </div>
  );
}

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[var(--bg)]"
      style={{ height: `${scenes.length * 100}vh` }}
    >
      {/* Left border */}
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/20 dark:via-white/20 to-transparent" />

      {/* Sticky */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        {/* Ambient */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] rounded-full bg-amber-600/5 blur-[100px]" />
        </div>

        {/* Counter */}
        <motion.div className="absolute top-10 right-8 md:right-12 text-[var(--muted)] text-xs tracking-widest font-mono">
          {scenes.map((_, i) => {
            const segmentSize = 1 / scenes.length;
            const start = i * segmentSize;
            const end = start + segmentSize;
            const o = useTransform(scrollYProgress, [start, end], [0, 1]);
            return (
              <motion.span
                key={i}
                style={{ opacity: o, position: "absolute", right: 0 }}
              >
                0{i + 1} / 0{scenes.length}
              </motion.span>
            );
          })}
        </motion.div>

        {/* Scenes */}
        <div className="relative w-full h-full flex items-center">
          {scenes.map((scene, i) => (
            <SceneBlock
              key={i}
              scene={scene}
              progress={scrollYProgress}
              index={i}
              total={scenes.length}
            />
          ))}
        </div>

        {/* Pips */}
        <ProgressPips progress={scrollYProgress} total={scenes.length} />

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10 dark:bg-white/10">
          <motion.div
            className="h-full bg-amber-500"
            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
          />
        </div>
      </div>
    </section>
  );
}