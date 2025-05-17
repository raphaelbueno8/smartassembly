
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Clientes", href: "#clients" },
  { name: "Contato", href: "#contact" }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img
              src={scrolled ? "/Logo-Header-01.png" : "/Logo-Header-02.png"}
              alt="Logo"
              className="h-14 md:h-14 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-company-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-company-blue hover:bg-company-darkBlue">
                Fale Conosco
              </Button>
            </a>
          </nav>

          {/* Mobile Navigation */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden bg-white mt-4 py-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-company-blue transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-company-blue hover:bg-company-darkBlue">
                  Fale Conosco
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header >
  );
}
