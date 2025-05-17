
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section id="about" background="white">
      <div className="section-title">Sobre a Smart Assembly</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold text-company-blue mb-4">Nossa História</h3>
          <p className="text-lg text-gray-700 mb-6">
            A nossa empresa é uma empresa especializada em fornecer soluções tecnológicas de alta qualidade para empresas de todos os portes. Desde nossa fundação, temos nos dedicado a entender as necessidades específicas de cada cliente para oferecer soluções personalizadas que impulsionam o crescimento e a eficiência dos negócios.
          </p>
          <p className="text-lg text-gray-700">
            Com uma equipe de profissionais altamente qualificados e experientes, garantimos que cada projeto seja desenvolvido com o máximo de excelência, utilizando as mais modernas tecnologias disponíveis no mercado.
          </p>
        </div>
        <img
          src="/Logo-Sobre.png"
          alt="Sobre a Smart Assembly"
          className="w-full h-auto rounded-lg transform scale-x-[-1]"
        />
      </div>
    </Section>
  );
}
