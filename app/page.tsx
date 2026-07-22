'use client';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import AccredianEdge from "@/components/sections/AccredianEdge";
import CAT from "@/components/sections/CAT";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQs from "@/components/sections/FAQs";
import Testimonials from "@/components/sections/Testimonials";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/forms/EnquiryModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero onEnquire={() => setIsModalOpen(true)} />
        <Stats />
        <Clients />
        <AccredianEdge />
        <CAT />
        <HowItWorks />
        <FAQs onEnquire={() => setIsModalOpen(true)} />
        <Testimonials onEnquire={() => setIsModalOpen(true)} />
      </main>
      <Footer onEnquire={() => setIsModalOpen(true)} />
      <EnquiryModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}