"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* INPUT STYLE BASE */}
      {/* NAME */}
      <input
        required
        name="name"
        placeholder="Your name"
        className="w-full px-5 py-4 rounded-xl 
        bg-white/40 dark:bg-white/5 backdrop-blur-xl
        border border-black/10 dark:border-white/10
        text-[var(--text)] placeholder:text-[var(--muted)]
        focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40
        transition duration-300"
      />

      {/* EMAIL */}
      <input
        required
        type="email"
        name="email"
        placeholder="Your email"
        className="w-full px-5 py-4 rounded-xl 
        bg-white/40 dark:bg-white/5 backdrop-blur-xl
        border border-black/10 dark:border-white/10
        text-[var(--text)] placeholder:text-[var(--muted)]
        focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40
        transition duration-300"
      />

      {/* MESSAGE */}
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Your message"
        className="w-full px-5 py-4 rounded-xl 
        bg-white/40 dark:bg-white/5 backdrop-blur-xl
        border border-black/10 dark:border-white/10
        text-[var(--text)] placeholder:text-[var(--muted)]
        focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40
        transition duration-300 resize-none"
      />

      {/* BUTTON */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-amber-500 text-black py-4 text-sm font-semibold tracking-wide 
        rounded-xl transition duration-300
        hover:bg-amber-400 hover:shadow-[0_8px_30px_rgba(245,158,11,0.25)]
        active:scale-[0.98]"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {/* SUCCESS */}
      {status === "success" && (
        <p className="text-green-500 text-center text-sm">
          ✓ Message sent successfully
        </p>
      )}

      {/* ERROR */}
      {status === "error" && (
        <p className="text-red-500 text-center text-sm">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
