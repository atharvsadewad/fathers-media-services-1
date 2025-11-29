import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Twitter, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black transition-colors">
      <div className="container-responsive py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo + About */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Father’s Media Logo" width={36} height={36} />
            <span className="font-semibold text-lg text-gray-900 dark:text-white">
              Father’s Media
            </span>
          </Link>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 max-w-xs">
            Social media and marketing agency helping businesses grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold text-gray-900 dark:text-white">Quick Links</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">Home</Link></li>
            <li><Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">About</Link></li>
            <li><Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">Services</Link></li>
            <li><Link href="/portfolio" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">Portfolio</Link></li>
            <li><Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-yellow-600">Contact</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="font-semibold text-gray-900 dark:text-white">Connect</h5>
          <ul className="mt-2 space-y-3 text-sm">
            <li>
              <a href="https://instagram.com/fathers_media" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-pink-500">
                <Instagram size={16} /> Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com/fathersmedia" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">
                <Facebook size={16} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/company/fathersmedia" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-700">
                <Linkedin size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/fathers_media" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-400">
                <Twitter size={16} /> X
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold text-gray-900 dark:text-white">Contact</h5>
          <ul className="mt-2 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Mail size={16} />
              <a href="mailto:fathersmediaservices@gmail.com">fathersmediaservices@gmail.com</a>
            </li>
            <li>
              <a href="https://wa.me/9112059735" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-500">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="container-responsive py-4 text-xs text-gray-700 dark:text-gray-400 flex items-center justify-between">
          <span>© 2025 Father’s Media. All rights reserved.</span>
          <span className="text-gray-600 dark:text-gray-400">Built by Father’s Media</span>
        </div>
      </div>
    </footer>
  );
}


