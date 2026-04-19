import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Father’s Media for partnerships, proposals, and inquiries.",
};

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-[var(--bg)] ambient-bg py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4">
            Contact
          </p>

          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[var(--text)] leading-tight">
            Let’s build something
            <br />
            remarkable.
          </h1>

          <p className="text-[var(--muted)] mt-6 max-w-md">
            Tell us about your vision, goals, or project.
            We’ll get back to you within 24 hours.
          </p>

          <div className="mt-10 space-y-3 text-sm">
            <p className="text-[var(--muted)]">
              WhatsApp:{" "}
              <a
                href="https://wa.me/9112059735"
                target="_blank"
                className="text-amber-500 hover:underline"
              >
                Message us
              </a>
            </p>

            <p className="text-[var(--muted)]">
              Email:{" "}
              <a
                href="mailto:fathersmediaservices@gmail.com"
                className="text-amber-500 hover:underline"
              >
                fathersmediaservices@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8 border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-xl">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}