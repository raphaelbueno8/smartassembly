
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-12">
        <Section background="white" className="py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-company-darkBlue">Termos de Uso</h1>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Bem-vindo aos Termos de Uso da Smart Assembly. Ao acessar ou utilizar nossos serviços, 
                  você concorda com os termos e condições descritos neste documento. Por favor, leia 
                  atentamente antes de utilizar nossa plataforma.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-company-blue">1. Aceitação dos Termos</h2>
                <p className="text-gray-700">
                  Ao acessar ou utilizar qualquer parte do site da Smart Assembly, você concorda em 
                  cumprir estes Termos de Uso. Se você não concorda com todos os termos e condições deste acordo, 
                  você não pode acessar o site ou utilizar quaisquer serviços.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-company-blue">2. Modificações nos Termos</h2>
                <p className="text-gray-700">
                  A Smart Assembly reserva-se o direito de modificar ou substituir estes Termos de Uso 
                  a qualquer momento. Modificações substanciais serão notificadas através de uma atualização 
                  em nosso site. Seu uso continuado do site após tais modificações constitui sua aceitação 
                  dos novos Termos de Uso.
                </p>
              </div>
                        
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-company-blue">3. Propriedade Intelectual</h2>
                <p className="text-gray-700">
                  O serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão 
                  propriedade exclusiva da Smart Assembly. O serviço é protegido por direitos autorais, 
                  marcas registradas e outras leis de propriedade intelectual do Brasil e de outros países.
                </p>
                <p className="text-gray-700">
                  Nosso conteúdo não pode ser baixado, copiado, reproduzido, distribuído, transmitido, 
                  transmitido, exibido, vendido, licenciado ou explorado para qualquer finalidade sem 
                  nosso consentimento prévio por escrito.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-company-blue">4. Links para Outros Sites</h2>
                <p className="text-gray-700">
                  Nosso Serviço pode conter links para sites de terceiros que não são de propriedade 
                  ou controlados pela Smart Assembly. A Smart Assembly não tem controle sobre, 
                  e não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou 
                  práticas de quaisquer sites ou serviços de terceiros.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-company-blue">5. Rescisão</h2>
                <p className="text-gray-700">
                  Podemos encerrar ou suspender o acesso ao nosso Serviço imediatamente, sem aviso prévio 
                  ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os 
                  Termos de Uso.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-company-blue">6. Limitação de Responsabilidade</h2>
                <p className="text-gray-700">
                  Em nenhum caso a Smart Assembly, seus diretores, funcionários, parceiros, agentes, 
                  fornecedores ou afiliados serão responsáveis por quaisquer danos indiretos, incidentais, 
                  especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, 
                  uso, boa vontade, ou outras perdas intangíveis, resultantes de seu acesso ou uso ou 
                  incapacidade de acessar ou usar o Serviço.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-company-blue">7. Lei Aplicável</h2>
                <p className="text-gray-700">
                  Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem consideração 
                  aos seus conflitos de disposições legais.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                <h2 className="text-2xl font-semibold text-company-blue mb-4">Entre em Contato</h2>
                <p className="text-gray-700">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <div className="mt-4">
                  <p className="text-gray-700"><strong>E-mail:</strong> contato@smartassembly.com</p>
                  <p className="text-gray-700"><strong>Telefone:</strong> 19 9 9678-9762</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
