import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Father’s Media for partnerships, proposals, and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-responsive grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <h1 className="section-title">Let’s Work Together</h1>
          <p className="section-subtitle mt-2">Tell us about your goals—our team will get back within 24 hours.</p>
          <form action="/api/contact" method="post" className="mt-8 grid gap-4">
            <input required name="name" placeholder="Your name" className="border border-gray-300 rounded-lg px-4 py-3" />
            <input required type="email" name="email" placeholder="Your email" className="border border-gray-300 rounded-lg px-4 py-3" />
            <textarea required name="message" placeholder="Your message" rows={5} className="border border-gray-300 rounded-lg px-4 py-3" />
            <button className="btn-primary" type="submit">Send Message</button>
          </form>
          <div className="mt-6 text-sm text-gray-700 space-y-2">
            <p>
              WhatsApp: <a className="text-blue-600" href="https://wa.me/9112059735" target="_blank" rel="noreferrer">Message us</a>
            </p>
            <p>
              Email: <a className="text-blue-600" href="mailto:fathersmediaservices@gmail.com">fathersmediaservices@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="card h-72">
          {/* Optional: Google Maps embed placeholder */}
        </div>
      </div>
    </div>
  );
}




