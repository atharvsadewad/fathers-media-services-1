import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-responsive py-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/logo.png" alt="Father’s Media" className="h-10 w-auto mb-2" />
          <p className="text-sm text-gray-600 max-w-xs">
            Social media and marketing agency helping businesses grow online.
          </p>
        </div>

        <div>
          <h5 className="font-semibold text-brand">Quick Links</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-brand">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand">About</Link></li>
            <li><Link href="/services" className="hover:text-brand">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-brand">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-brand">Connect</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brand">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-brand">Facebook</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand">LinkedIn</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-brand">X</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-brand">Contact</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="mailto:hello@fathersmedia.com" className="hover:text-brand">hello@fathersmedia.com</a></li>
            <li><a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hover:text-brand">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container-responsive py-4 text-xs text-gray-600 flex items-center justify-between">
          <span>© 2025 Father’s Media. All rights reserved.</span>
          <span className="text-brand">Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
