import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description: "Explore selected client campaigns, content, and testimonials from Father’s Media.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
