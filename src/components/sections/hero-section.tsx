
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-company-blue to-company-darkBlue text-white pt-20">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Soluções Tecnológicas para Seu Negócio
          </h1> */}
          <img src="/Logo-03-Branco.png" alt="Logo" className="mx-auto mb-8 animate-fade-in" />
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
          Transformando máquinas em soluções inteligentes.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in">
            <Button size="lg" className="bg-white text-company-blue hover:bg-gray-100 hover:text-company-darkBlue font-semibold text-lg">
              <a href="#services">Nossos Serviços</a>
            </Button>
            <Button size="lg" className="border border-white bg-transparent hover:bg-white hover:text-company-blue font-semibold text-lg">
              <a href="#contact">Fale Conosco</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
