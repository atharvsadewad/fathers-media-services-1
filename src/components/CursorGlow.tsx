"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-40 h-40 rounded-full blur-3xl opacity-20"
      style={{
        left: pos.x - 80,
        top: pos.y - 80,
        background: "radial-gradient(circle, #f59e0b, transparent 60%)",
      }}
    />
  );
}