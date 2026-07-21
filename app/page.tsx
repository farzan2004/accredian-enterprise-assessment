import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import AccredianEdge from "@/components/sections/AccredianEdge";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
      </main>
    </>
  );
}