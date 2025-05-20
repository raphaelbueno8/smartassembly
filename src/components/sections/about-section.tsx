
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section id="about" background="white">
      <div className="section-title">Sobre a Smart Assembly</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold text-company-blue mb-4">Nossa História</h3>
          <p className="text-lg text-gray-700 mb-6">
            Fundada em 2025, a Smart Assembly nasceu com o propósito de difundir uma cultura de excelência adquirida pelo seu fundador ao longo
            dos anos na maior montadora de automóveis do mundo. Nossa missão é resolver problemas complexos, propor soluções inovadoras e
            se estabelecer como referência no segmento de automação e manutenção industrial, sempre focado na excelência de atendimento elevando a
            qualidade dos serviços prestados a níveis surpreendentes para os clientes.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Somos especialistas em equipamentos do setor de montagem industrial, sendo eles: transportadores de arraste,
            transportadores aéreos, esteiras automatizadas, equipamentos de enchimento hidráulico, sistemas de gerenciamento
            de modelos (Poka-Yoke), células robotizadas com foco em material handling, sistemas eletrônicos de aperto e fixação de parafusos,
            sistemas de veículos industriais autônomos (AGV), entre outros.
          </p>
          <p className="text-lg text-gray-700">
            Nosso foco é a prestação de serviços em automação e manutenção industrial primando a satisfação do cliente, no tempo certo,
            ao valor justo, otimizando os processos e impulsionando os resultados, sempre pensando no cliente em primeiro lugar
          </p>
        </div>
        <img
          src="/Logo-Sobre.png"
          alt="Sobre a Smart Assembly"
          className="w-full h-auto rounded-lg transform"
        />
      </div>
    </Section >
  );
}
