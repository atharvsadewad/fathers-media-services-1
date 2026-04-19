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
    <form onSubmit={handleSubmit} className="space-y-5">

      <input
        required
        name="name"
        placeholder="Your name"
        className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/10 dark:border-white/20 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-amber-500 transition"
      />

      <input
        required
        type="email"
        name="email"
        placeholder="Your email"
        className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/10 dark:border-white/20 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-amber-500 transition"
      />

      <textarea
        required
        name="message"
        rows={5}
        placeholder="Your message"
        className="w-full px-4 py-3 rounded-lg bg-transparent border border-black/10 dark:border-white/20 text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-amber-500 transition"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-amber-500 text-black py-3 text-sm font-semibold tracking-wide hover:bg-amber-400 transition rounded-lg"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-500 text-center mt-2 animate-pulse">
          ✓ Message sent successfully
        </p>
      )}

      {status === "error" && (
        <p className="text-red-500 text-center mt-2">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}