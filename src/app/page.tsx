import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Visual from "@/components/sections/Visual";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Plans from "@/components/sections/Plans";
import Clients from "@/components/sections/Clients";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Story />
      <Visual />
      <Services />
      <Plans />
      <Clients />
      <CTA />
    </main>
  );
}