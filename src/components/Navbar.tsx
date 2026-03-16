import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "Inicio",
  "Servicios",
  "Proyectos",
  "Tecnologías",
  "Nosotros",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg rotate-12" />
          <span className="font-serif text-2xl font-bold text-foreground">
            Strix<span className="text-primary">Dev</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/70 font-medium hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a
          href="#contacto"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-colors hover:bg-violet-glow"
        >
          Contactanos
        </motion.a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 font-medium hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contacto"
                className="inline-flex justify-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Contactanos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
