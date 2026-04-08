import { Instagram } from "lucide-react";
import Logo from "@/assets/logo.png";
import { handleSectionNavClick } from "@/lib/scrollToSection";

const footerLinks = [
  { sectionId: "inicio", label: "Inicio" },
  { sectionId: "servicios", label: "Servicios" },
  { sectionId: "trabajos", label: "Trabajos" },
  { sectionId: "tecnologias", label: "Tecnologías" },
  { sectionId: "nosotros", label: "Nosotros" },
];

export function Footer() {
  return (
    <footer className="bg-[#222222] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg flex">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-10 h-10 text-primary  "
                />
              </div>
              <span className="font-serif text-xl text-background">
                StrixCore
              </span>
            </div>
            <p className="text-background/70 text-sm max-w-xs">
              Transformamos ideas en productos digitales. Soluciones optimizadas
              para tu negocio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.sectionId}
                href="#/"
                onClick={(e) => handleSectionNavClick(e, link.sectionId)}
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social & CTA */}
          <div className="flex items-center gap-4 md:justify-end">
            <a
              href="https://www.instagram.com/strix_dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-background" />
            </a>
            <a
              href="mailto:strixcore1@gmail.com?subject=Consulta%20desde%20StrixCore&body=Hola%20StrixCore%2C%20quiero%20mas%20informacion."
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contactanos
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-background/10">
          <p className="text-center text-sm text-background/50">
            © {new Date().getFullYear()} StrixCore. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
