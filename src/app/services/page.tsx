import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, branding, paid ads, content creation, and influencer marketing.",
};

const SERVICES = [
  {
    title: "Social Media Management",
    description:
      "Strategy, calendars, copy, creative direction, community, and analytics.",
  },
  {
    title: "Branding & Strategy",
    description: "Positioning, messaging, identity systems, and brand guidelines.",
  },
  {
    title: "Paid Ads & Promotions",
    description: "Performance marketing on Meta, Google, TikTok, and more.",
  },
  {
    title: "Content Creation",
    description: "Reels, photoshoots, landing pages, and campaign assets.",
  },
  {
    title: "Influencer Marketing",
    description: "Creator discovery, outreach, briefs, and performance tracking.",
  },
];

export default function ServicesPage() {
  return (
    <div className="section-padding">
      <div className="container-responsive">
        <h1 className="section-title">Services</h1>
        <p className="section-subtitle mt-2">Tailored solutions for your growth stage.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </div>
  );
}



