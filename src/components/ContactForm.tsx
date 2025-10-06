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
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-center mt-2">
          ✅ Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center mt-2">
          ❌ Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
}
