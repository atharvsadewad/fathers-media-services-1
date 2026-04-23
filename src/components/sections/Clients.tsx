"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const clients = [
  {
    name: "Chamber",
    logo: "/clients/chamber.png",
    link: "https://chamber-frontend-i2lc.vercel.app/",
  },
  {
    name: "Pawan Infra Developer",
    logo: "/clients/pawan.png",
    link: "https://pawaninfradeveloper.in/",
  },
  {
    name: "Voter Data Management",
    logo: "/clients/voter.png",
    link: "https://voterlist-webtool.vercel.app/",
  },
  {
    name: "Client Portfolio",
    logo: "/clients/governance.png",
    link: "https://krishna-portfolio-ruby.vercel.app/",
  },
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative bg-[var(--bg)] py-32">
      <div className="max-w-[1100px] mx-auto px-8 text-center">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-4">
            Our Clients
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-[var(--text)]">
            Brands that trust us.
          </h2>
        </motion.div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, i) => (
            <motion.a
              key={i}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="p-6 border border-black/10 dark:border-white/10 bg-[var(--bg-soft)] backdrop-blur-sm hover:border-amber-500/40 transition flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={40}
                className="object-contain opacity-70 group-hover:opacity-100 dark:invert transition duration-300"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
