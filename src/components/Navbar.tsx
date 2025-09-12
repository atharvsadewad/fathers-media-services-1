"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container-responsive flex items-center justify-between h-16">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Father’s Media Logo" 
            width={36} 
            height={36} 
            priority
          />
          <span className="text-lg font-semibold">Father’s Media</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link>
          <Link href="/contact" className="btn-primary h-10">Let’s Work Together</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container-responsive py-3 flex flex-col gap-3 text-sm">
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
            <Link href="/contact" className="btn-primary text-center" onClick={() => setOpen(false)}>Let’s Work Together</Link>
          </div>
        </div>
      )}
    </header>
  );
}
