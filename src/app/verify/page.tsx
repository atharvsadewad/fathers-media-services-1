"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Certificate = {
  id: string;
  name: string;
  domain: string;
  status: string;
};

export default function VerifyPage() {
  const [certificateId, setCertificateId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Certificate | null>(null);
  const [invalid, setInvalid] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    setInvalid(false);
    setResult(null);

    try {
      const res = await fetch("/data/certificates.json");
      const data: Certificate[] = await res.json();

      const match = data.find(
        (cert) =>
          cert.id.toUpperCase() ===
          certificateId.trim().toUpperCase()
      );

      if (match) {
        setResult(match);
      } else {
        setInvalid(true);
      }
    } catch {
      setInvalid(true);
    }

    setLoading(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--bg)] flex items-center justify-center px-6 py-32">

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-3xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4">
            Certificate Verification
          </p>

          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[1.0] text-[var(--text)]">
            Verify Internship
            <br />
            Credentials.
          </h1>

          <p className="mt-8 text-[var(--muted)] max-w-xl mx-auto text-lg">
            Validate the authenticity of internship certificates
            issued by Father’s Media.
          </p>

        </motion.div>

        {/* VERIFY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl p-8 md:p-12"
        >

          <div className="space-y-6">

            {/* INPUT */}
            <input
              type="text"
              value={certificateId}
              onChange={(e) =>
                setCertificateId(e.target.value)
              }
              placeholder="Enter Certificate ID"
              className="w-full px-5 py-4 rounded-xl 
              bg-white/40 dark:bg-white/5 backdrop-blur-xl
              border border-black/10 dark:border-white/10
              text-[var(--text)] placeholder:text-[var(--muted)]
              focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/40
              transition duration-300"
            />

            {/* BUTTON */}
            <button
              onClick={handleVerify}
              disabled={loading}
              className="w-full bg-amber-500 text-black py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-amber-400 hover:shadow-[0_8px_30px_rgba(245,158,11,0.25)] transition duration-300"
            >
              {loading ? "Verifying..." : "Verify Certificate"}
            </button>

          </div>

          {/* VERIFIED */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-2xl border border-green-500/20 bg-green-500/10 p-6"
            >

              <p className="text-green-400 text-xs tracking-[0.3em] uppercase mb-3">
                Verified
              </p>

              <h2 className="font-serif text-3xl text-[var(--text)]">
                Authentic Certificate
              </h2>

              <div className="mt-6 space-y-3 text-sm text-[var(--muted)]">

                <p>
                  Certificate ID:{" "}
                  <span className="text-[var(--text)]">
                    {result.id}
                  </span>
                </p>

                <p>
                  Name:{" "}
                  <span className="text-[var(--text)]">
                    {result.name}
                  </span>
                </p>

                <p>
                  Domain:{" "}
                  <span className="text-[var(--text)]">
                    {result.domain}
                  </span>
                </p>

                <p>
                  Status:{" "}
                  <span className="text-green-400">
                    {result.status}
                  </span>
                </p>

              </div>

            </motion.div>
          )}

          {/* INVALID */}
          {invalid && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-2xl border border-red-500/20 bg-red-500/10 p-6"
            >

              <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-3">
                Invalid
              </p>

              <h2 className="font-serif text-3xl text-[var(--text)]">
                Certificate Not Found
              </h2>

              <p className="mt-4 text-sm text-[var(--muted)]">
                The entered certificate ID does not exist in our
                verification records.
              </p>

            </motion.div>
          )}

        </motion.div>

        {/* FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-10 text-center text-xs text-[var(--muted)] max-w-2xl mx-auto leading-relaxed"
        >
          This verification portal is maintained by Father’s Media
          to validate internship credentials and preserve
          authenticity of issued certificates.
        </motion.p>

      </div>
    </section>
  );
}
