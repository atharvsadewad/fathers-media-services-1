import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Twitter, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-300">
      <div className="container-responsive py-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo + About */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Father’s Media Logo" width={40} height={40} />
            <span className="font-bold text-xl text-white">Father’s Media</span>
          </Link>
          <p className="text-sm mt-3 leading-relaxed max-w-xs text-gray-400">
            Crafting impactful strategies, design, and media to help brands grow in the digital era.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold text-white">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Connect */}
        <div>
          <h5 className="font-semibold text-white">Connect</h5>
          <div className="mt-3 flex gap-3">
            {[
              { href: "https://instagram.com/fathers_media", icon: Instagram, color: "hover:text-pink-500" },
              { href: "https://facebook.com/fathersmedia", icon: Facebook, color: "hover:text-blue-500" },
              { href: "https://linkedin.com/company/fathers_media", icon: Linkedin, color: "hover:text-blue-400" },
              { href: "https://x.com/fathers_media", icon: Twitter, color: "hover:text-gray-400" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors ${item.color}`}
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold text-white">Contact</h5>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:contact@fathersmedia.com" className="hover:text-yellow-400 transition-colors">
                contact@fathersmedia.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/9112059735"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-green-500 transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10">
        <div className="container-responsive py-6 text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-gray-400">
            © 2025 Father’s Media. All rights reserved.
          </span>
          <span className="text-gray-500">Made with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
}
