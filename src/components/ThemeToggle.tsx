"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-7 rounded-full border border-black/10 dark:border-white/20 flex items-center px-1 transition"
    >
      {/* Track */}
      <div className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur" />

      {/* Knob */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative z-10 w-5 h-5 rounded-full bg-amber-500 shadow-md"
        style={{
          x: isDark ? 28 : 0,
        }}
      />

      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px]">
        <span className="text-[var(--muted)]">☀</span>
        <span className="text-[var(--muted)]">🌙</span>
      </div>
    </button>
  );
}