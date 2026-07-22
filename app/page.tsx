import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import AccredianEdge from "@/components/sections/AccredianEdge";
import CAT from "@/components/sections/CAT";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQs from "@/components/sections/FAQs";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <CAT />
        <HowItWorks />
        <FAQs />
        <Testimonials />
      </main>
    </>
  );
}