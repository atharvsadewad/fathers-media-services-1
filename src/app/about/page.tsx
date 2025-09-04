import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Father’s Media – our story, mission, and vision to build brands online.",
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-responsive grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-6">
          <h1 className="section-title">Our Story</h1>
          <p className="text-gray-700">
            Father’s Media was founded to help businesses show up with clarity and consistency online. We combine strategy, storytelling, and performance to deliver growth.
          </p>
          <h2 className="text-xl font-semibold">Mission</h2>
          <p className="text-gray-700">To empower brands with effective digital presence and measurable results.</p>
          <h2 className="text-xl font-semibold">Vision</h2>
          <p className="text-gray-700">To be a trusted partner for businesses scaling their online brand.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card h-40" />
          <div className="card h-40" />
          <div className="card h-40" />
          <div className="card h-40" />
        </div>
      </div>
    </div>
  );
}



