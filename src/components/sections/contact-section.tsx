
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { formatPhone } from "@/lib/utils";

const serviceId = "service_w6llmdz";
const templateId = "template_g7r8xj6";
const publicKey = "mq5Sc5a-UDicNwJ9G";

const FormValuesSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Telefone inválido"),
  subject: z.string().min(1, "Assunto é obrigatório"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

type FormValues = z.infer<typeof FormValuesSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormValuesSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {

    setIsSubmitting(true);

    const params = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    }

    await emailjs.send(serviceId, templateId, params, publicKey)
      .then(() => {
        toast({
          title: "Mensagem enviada",
          description: "Agradecemos pelo seu contato. Retornaremos em breve!",
          duration: 5000,
        });
        reset({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, () => {
        toast({
          title: "Erro ao enviar mensagem",
          description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.",
          variant: "destructive",
          duration: 5000
        });
      });

    setIsSubmitting(false);
  };

  return (
    <Section id="contact" background="blue">
      <div className="section-title text-white">Entre em Contato</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
          <p className="mb-8 text-white/80">
            Estamos prontos para atender às suas necessidades. Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudar sua empresa a crescer.
          </p>

          <div className="space-y-5">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 mr-4 text-white flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Endereço</h4>
                <p className="text-white/80">Indaiatuba, SP<br /></p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 mr-4 text-white flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Telefone</h4>
                <p className="text-white/80"> (19) 99710-1806</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-6 h-6 mr-4 text-white flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">E-mail</h4>
                <p className="text-white/80">contato@smartassembly.com.br</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-bold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/smart_assembly_automacao?igsh=cTgwbmtuZWZ0bmIx&utm_source=qr" className="bg-white/20 text-white hover:bg-white hover:text-company-blue p-2 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/smart-assembly/" className="bg-white/20 text-white hover:bg-white hover:text-company-blue p-2 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-8.5h2.5v8.5zm-1.25-9.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13 9.75h-2.5v-4.25c0-1.02-.02-2.34-1.43-2.34-1.43 0-1.65 1.11-1.65 2.26v4.33h-2.5v-8.5h2.4v1.16h.03c.33-.63 1.15-1.29 2.37-1.29 2.53 0 3 1.66 3 3.81v4.82z" />
                </svg>
              </a>

            </div>
          </div>
        </div>

        <div className="animate-on-scroll">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-company-blue mb-6">Envie uma Mensagem</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  placeholder="Nome"
                  maxLength={100}
                  {...register("name")}
                  className={`${errors.name ? "border-red-500" : ""} text-company-darkBlue`}
                  autoComplete="name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  maxLength={100}
                  {...register("email")}
                  className={`${errors.name ? "border-red-500" : ""} text-company-darkBlue`}
                  autoComplete="email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <Input
                  type="phone"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  {...register("phone")}
                  className={`${errors.name ? "border-red-500" : ""} text-company-darkBlue`}
                  autoComplete="phone"
                  onChange={(e => {
                    const formatted = formatPhone(e.target.value);
                    setValue("phone", formatted, { shouldValidate: true });
                  })}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
              </div>

              <div>
                <Input
                  placeholder="Assunto"
                  maxLength={50}
                  {...register("subject")}
                  className={`${errors.name ? "border-red-500" : ""} text-company-darkBlue`}
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
              </div>

              <div>
                <Textarea
                  placeholder="Mensagem"
                  rows={5}
                  maxLength={500}
                  {...register("message")}
                  className={`${errors.name ? "border-red-500" : ""} text-company-darkBlue`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-company-blue hover:bg-company-darkBlue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
