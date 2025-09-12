"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // menu icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container-responsive flex items-center justify-between h-16">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Father’s Media Logo" 
            width={36} 
            height={36} 
            priority
          />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Father’s Media
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
          <Link href="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Services</Link>
          <Link href="/portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Portfolio</Link>
          <Link href="/contact" className="btn-primary h-10">Let’s Work Together</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 animate-fade-in">
          <div className="container-responsive py-3 flex flex-col gap-3 text-sm">
            <Link href="/about" className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>About</Link>
            <Link href="/services" className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/portfolio" className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" onClick={() => setOpen(false)}>Portfolio</Link>
            <Link href="/contact" className="btn-primary text-center" onClick={() => setOpen(false)}>Let’s Work Together</Link>
          </div>
        </div>
      )}
    </header>
  );
}
