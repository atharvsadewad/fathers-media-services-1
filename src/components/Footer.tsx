import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-responsive py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Logo + About */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Father’s Media Logo" 
              width={36} 
              height={36} 
            />
            <span className="font-semibold text-lg">Father’s Media</span>
          </Link>
          <p className="text-sm text-gray-600 mt-2 max-w-xs">
            Social media and marketing agency helping businesses grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="font-semibold">Connect</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="https://instagram.com/fathers_media" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com/fathers_media" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://linkedin.com/company/fathers_media" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://x.com/fathers_media" target="_blank" rel="noreferrer">X</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold">Contact</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="mailto:contact@fathersmedia.com">contact@fathersmedia.com</a></li>
            <li><a href="https://wa.me/9112059735" target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="container-responsive py-4 text-xs text-gray-600 flex items-center justify-between">
          <span>© 2025 Father’s Media. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}


