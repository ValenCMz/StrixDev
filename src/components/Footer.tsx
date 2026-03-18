import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#nosotros", label: "Nosotros" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-10 h-10 text-primary" />
              <span className="font-serif text-xl text-background">
                StrixDev
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
                key={link.href}
                href={link.href}
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
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Contactanos
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-background/10">
          <p className="text-center text-sm text-background/50">
            © {new Date().getFullYear()} StrixDev. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
