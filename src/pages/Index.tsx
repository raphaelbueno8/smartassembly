
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
// import { ServicesSection } from "@/components/sections/services-section";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ClientsSection } from "@/components/sections/clients-section";
import { ContactSection } from "@/components/sections/contact-section";
import { setupAnimations } from "@/components/animate-on-scroll";
import { WhatsAppButton } from "@/components/whatsapp-button";

const Index = () => {
  setupAnimations();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        {/* <ServicesSection /> */}
        <FeaturesSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="5599999999999" />
    </div>
  );
};

export default Index;
