import Image from "next/image";
import Container from "../ui/Container";

const clients = [
  { name: "Reliance", logo: "/clients/rel.png" },
  { name: "HCL", logo: "/clients/hcl.png" },
  { name: "IBM", logo: "/clients/ibm.png" },
  { name: "CRIF", logo: "/clients/crif.png" },
  { name: "ADP", logo: "/clients/adp.svg" },
  { name: "Bayer", logo: "/clients/bayer.svg" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-14 md:py-18">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Our Proven{" "}
            <span className="text-[#287ae3]">Partnerships</span>
          </h2>

          <p className="mt-4 text-base font-semibold">
            Successful Collaborations With the{" "}
            <span className="text-[#287ae3]">Industry&apos;s Best</span>
          </p>
        </div>

        {/* Desktop */}
        <div className="mt-16 hidden items-center justify-between lg:flex">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex h-28 w-40 items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={170}
                height={90}
                className="h-auto max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Tablet */}
        <div className="mt-14 hidden grid-cols-3 gap-y-10 md:grid lg:hidden">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={170}
                height={90}
                className="h-auto max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="mt-12 overflow-hidden md:hidden">
          <div className="marquee flex">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-8 flex h-24 min-w-30 items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={80}
                  className="h-auto max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}