import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-background"
              >
                <path
                  d="M50 10L20 35V55L50 80L80 55V35L50 10Z"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <path
                  d="M50 15L25 37V53L50 75L75 53V37L50 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="38" cy="42" r="6" fill="#67E8F9" />
                <circle cx="62" cy="42" r="6" fill="#67E8F9" />
                <path d="M50 52L44 46H56L50 52Z" fill="currentColor" />
              </svg>
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
              href="https://instagram.com"
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
