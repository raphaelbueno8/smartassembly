
import { Section } from "@/components/ui/section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function ClientsSection() {
  const logos = Array(1).fill(0).map((_, i) => i + 1);

  return (
    <Section id="clients" background="white">
      <div className="section-title">Nossos Clientes</div>
      <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto animate-on-scroll">
        Somos orgulhosos de trabalhar com uma ampla variedade de empresas, desde startups até grandes corporações, ajudando-as a alcançar seus objetivos de negócio.
      </p>

      <div className="animate-on-scroll w-full max-w-5xl mx-auto px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {logos.map((logo) => (
              <CarouselItem key={logo} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-2">
                  <div className="aspect-[3/2] rounded-lg flex items-center justify-center">
                    <div className="text-gray-500 font-semibold">
                      <img src={`cliente-logo-${logo}.png`}
                        alt={`Logo ${logo}`}
                        className="h-16 w-auto" /></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="static translate-y-0 bg-white" />
            <CarouselNext className="static translate-y-0 bg-white" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
}
