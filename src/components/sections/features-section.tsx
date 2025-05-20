import React, { useEffect, useRef } from 'react';
import { Code, Plug, Bolt, Bot, Cog } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  imageSrc?: string;
}

const ServiceCard = ({
  icon, title, description, delay, bgColor, iconColor, borderColor, imageSrc
}: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col justify-between bg-white rounded-xl p-6 shadow-sm border-t-4 ${borderColor} transform transition-all duration-500 opacity-0 translate-y-4 hover:shadow-xl hover:-translate-y-2`}
    >
      <div className="flex flex-col flex-grow">
        <div className={`w-12 h-12 flex items-center justify-center ${bgColor} rounded-lg mb-4`}>
          <div className={iconColor}>{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 min-h-[56px]">{title}</h3>
        <p className="text-gray-800 mb-4 min-h-[120px]">{description}</p>
      </div>
      {imageSrc && (
        <div className="mt-4 overflow-hidden rounded-lg">
          <AspectRatio ratio={16 / 9}>
            <img src={imageSrc} alt={title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" />
          </AspectRatio>
        </div>
      )}
    </div>
  );
};

export const FeaturesSection = () => {
  const services = [
    {
      icon: <Plug />,
      title: "Montagem de painés elétricos",
      description: "Montagem de painéis elétricos sob medida desde o desenvolvimento de projeto elétrico, montagem, integração à máquina ou processo e comissionamento, respeitando as normas vigentes e garantindo sistemas seguros, eficientes e otimizados para atender as necessidades da sua empresa",
      delay: 0,
      bgColor: "bg-company-lightBlue",
      iconColor: "text-company-blue",
      borderColor: "border-company-blue",
      imageSrc: "/Painel-Eletrico.png"
    },
    {
      icon: <Code />,
      title: "Desenvolvimento de softwares",
      description: "Softwares para PLCs, IHMs, supervisórios, redes industriais, motion control, desenvolvidos de maneira customizada para automação industrial focando sempre na otimização de processos e eficiência operacional",
      delay: 200,
      bgColor: "bg-company-lightBlue",
      iconColor: "text-company-blue",
      borderColor: "border-company-blue",
      imageSrc: "/Programação-PLC.jpg"
    },
    {
      icon: <Bolt />,
      title: "Robôs industriais",
      description: "Configuração, parametrização, programação e teching de robôs industriais para executar tarefas automatizadas com precisão, aumentando a eficiência e segurança na produção.",
      delay: 400,
      bgColor: "bg-company-lightBlue",
      iconColor: "text-company-blue",
      borderColor: "border-company-blue",
      imageSrc: "/Robos-Industriais.jpg"
    },
    {
      icon: <Bot />,
      title: "Manutenção industrial",
      description: "Serviços de manutenção preventiva, corretiva e preditiva conforme demanda do cliente, serviços especializados de manutenção como: lubrificação de robôs, implementação de self maintenance (sistemas de limpeza e lubrificação automatizada, automação de checagens periódicas).",
      delay: 600,
      bgColor: "bg-company-lightBlue",
      iconColor: "text-company-blue",
      borderColor: "border-company-blue",
      imageSrc: "/Motion-Control.jpg"
    },
    {
      icon: <Cog />,
      title: "Consultoria",
      description: "Análise e orientação especializada para melhorar a manutenção e gerenciamento de máquinas e recursos, aumentando a disponibilidade dos equipamentos e reduzindo custos operacionais",
      delay: 800,
      bgColor: "bg-company-lightBlue",
      iconColor: "text-company-blue",
      borderColor: "border-company-blue",
      imageSrc: "/Consultoria-Industrial.jpg"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 transform transition-opacity duration-500 opacity-0"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nossos serviços</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-company-blue to-company-darkBlue mb-6 rounded-full"></div>
          <p className="text-gray-800 text-lg">
            Oferecemos soluções avançadas em automação industrial, desenvolvidas para otimizar processos, aumentar a eficiência e impulsionar a produtividade da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

