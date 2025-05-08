
import { Section } from "@/components/ui/section";

export function ClientsSection() {
  const logos = Array(4).fill(0).map((_, i) => i + 1);

  return (
    <Section id="clients" background="white">
      <div className="section-title">Nossos Clientes</div>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto animate-on-scroll">
        Somos orgulhosos de trabalhar com uma ampla variedade de empresas, desde startups até grandes corporações, ajudando-as a alcançar seus objetivos de negócio.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll">
        {logos.map((logo) => (
          <div key={logo} className="flex items-center justify-center">
            <div className="bg-gray-200 w-full aspect-[3/2] rounded-lg flex items-center justify-center">
              <div className="text-gray-500 font-semibold">Cliente {logo}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
