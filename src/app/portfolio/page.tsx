import type { Metadata } from "next";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore selected client campaigns, content, and testimonials from Father’s Media.",
};

export default function PortfolioPage() {
  return (
    <div className="section-padding space-y-12">
      <div className="container-responsive">
        <h1 className="section-title">Portfolio</h1>
        <p className="section-subtitle mt-2">Selected campaign snapshots and results.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card h-48" />
          ))}
        </div>
      </div>
      <div className="bg-gray-50 py-12">
        <div className="container-responsive grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Testimonial quote="Our engagement rate jumped 65% in two months." author="Retail Brand" />
          <Testimonial quote="High-quality content and smart ads—great ROI." author="Local Clinic" />
          <Testimonial quote="Professional, fast, and collaborative team." author="Startup Founder" />
        </div>
      </div>
    </div>
  );
}



