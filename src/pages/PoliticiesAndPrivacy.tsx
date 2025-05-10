
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";

const PoliciesAndPrivacy = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-24 pb-12">
                <Section background="white" className="py-12">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-company-darkBlue">Políticas e Privacidade</h1>

                        <div className="space-y-8">
                            {/* Política de Privacidade */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-company-blue">Política de Privacidade</h2>
                                <p className="text-gray-700">
                                    A Smart Assembly está comprometida em proteger sua privacidade. Esta política de privacidade explica como coletamos, usamos e protegemos suas informações pessoais.
                                </p>

                                <h3 className="text-xl font-medium text-company-darkBlue mt-4">Coleta de Informações</h3>
                                <p className="text-gray-700">
                                    Coletamos informações pessoais quando você:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700">
                                    <li>Visita nosso site</li>
                                    <li>Preenche nossos formulários de contato</li>
                                    <li>Inscreve-se para receber nossa newsletter</li>
                                    <li>Utiliza nossos serviços</li>
                                </ul>

                                <h3 className="text-xl font-medium text-company-darkBlue mt-4">Uso de Informações</h3>
                                <p className="text-gray-700">
                                    Utilizamos suas informações pessoais para:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700">
                                    <li>Fornecer, operar e manter nossos serviços</li>
                                    <li>Melhorar e personalizar sua experiência</li>
                                    <li>Compreender como você utiliza nossos serviços</li>
                                    <li>Desenvolver novos produtos e serviços</li>
                                    <li>Comunicar-nos com você, diretamente ou através de um de nossos parceiros</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-company-blue">Termos de Uso</h2>
                                <p className="text-gray-700">
                                    Ao acessar e utilizar este site, você concorda com os seguintes termos e condições:
                                </p>

                                <h3 className="text-xl font-medium text-company-darkBlue mt-4">Propriedade Intelectual</h3>
                                <p className="text-gray-700">
                                    Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade da Smart Assembly e está protegido por leis nacionais e internacionais de direitos autorais.
                                </p>

                                <h3 className="text-xl font-medium text-company-darkBlue mt-4">Limitação de Responsabilidade</h3>
                                <p className="text-gray-700">
                                    A Smart Assembly não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou incapacidade de uso dos nossos serviços ou conteúdos.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-company-blue">Política de Cookies</h2>
                                <p className="text-gray-700">
                                    Utilizamos cookies para melhorar sua experiência em nosso site. Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita nosso site.
                                </p>

                                <h3 className="text-xl font-medium text-company-darkBlue mt-4">Tipos de Cookies</h3>
                                <ul className="list-disc pl-6 text-gray-700">
                                    <li><strong>Cookies necessários:</strong> essenciais para o funcionamento básico do site</li>
                                    <li><strong>Cookies de preferências:</strong> permitem que o site lembre de suas escolhas</li>
                                    <li><strong>Cookies de estatísticas:</strong> nos ajudam a entender como os visitantes interagem com o site</li>
                                    <li><strong>Cookies de marketing:</strong> utilizados para rastrear os visitantes entre sites</li>
                                </ul>

                                <h3 className="text-xl font-medium text-company-darkBlue mt-4">Controle de Cookies</h3>
                                <p className="text-gray-700">
                                    Você pode controlar e/ou excluir cookies conforme desejar. Para mais informações sobre como fazer isso, visite aboutcookies.org. Você pode excluir todos os cookies já presentes em seu computador e pode configurar a maioria dos navegadores para impedir que sejam adicionados.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                                <h2 className="text-2xl font-semibold text-company-blue mb-4">Entre em Contato</h2>
                                <p className="text-gray-700">
                                    Se você tiver dúvidas ou preocupações sobre nossa política de privacidade ou termos de uso, entre em contato conosco:
                                </p>
                                <div className="mt-4">
                                    <p className="text-gray-700"><strong>E-mail: </strong> contato@smartassembly.com</p>
                                    <p className="text-gray-700"><strong>Telefone: </strong>19 9 9678-9762</p>
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

export default PoliciesAndPrivacy;