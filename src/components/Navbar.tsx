"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-white/90 backdrop-blur shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container-responsive flex items-center justify-between">
        <Link href="/"><Image src="/logo.png" alt="Logo" width={110} height={32} /></Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/services" className="hover:text-brand">Services</Link>
          <Link href="/contact" className="btn-primary">Enquire</Link>
        </nav>
        {/* mobile menu button... */}
      </div>
    </header>
  );
}
