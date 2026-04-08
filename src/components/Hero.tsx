import { motion } from "framer-motion";
// import { Zap } from "lucide-react";
// import hero from "@/assets/hero-pantalla.png";
import image from "@/assets/Eseste.png";
import { handleSectionNavClick } from "@/lib/scrollToSection";

const Hero = () => (
  <section
    id="inicio"
    className="pt-32 pb-20 min-h-screen flex items-center bg-background"
  >
    <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-5xl md:text-7xl text-foreground mb-8 leading-[1.1] tracking-tight">
          Transformamos ideas en <span className="text-primary">productos</span>{" "}
          digitales
        </h1>
        <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-lg leading-relaxed font-sans">
          Creamos ecosistemas digitales de alto rendimiento que escalan tu
          negocio mediante código limpio y procesos automatizados.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="#/"
            onClick={(e) => handleSectionNavClick(e, "trabajos")}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:bg-violet-glow transition-colors duration-300"
          >
            Ver nuestros trabajos
          </motion.a>
          <motion.a
            href="mailto:strixcore1@gmail.com?subject=Consulta%20desde%20StrixCore&body=Hola%20StrixCore%2C%20quiero%20mas%20informacion.
"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-accent/30 transition-colors duration-300"
          >
            Solicitar presupuesto
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex w-full justify-center lg:justify-end"
      >
        {/* Mancha decorativa: anclada a la columna (como antes), no a la caja de la imagen */}
        <div
          aria-hidden
          className="pointer-events-none absolute z-0 -bottom-10 -right-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
        />
        <div className="relative z-10 w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <img
            src={image}
            alt="Ilustración StrixCore"
            className="mx-auto block h-auto w-full max-h-[min(58vh,560px)] sm:max-h-[min(62vh,600px)] lg:max-h-[min(72vh,680px)] object-contain object-bottom"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
