import { motion } from "framer-motion";
// import { Zap } from "lucide-react";
// import hero from "@/assets/hero-pantalla.png";
import image from "@/assets/Eseste.png";

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
            href="#trabajos"
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

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex justify-center items-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-border rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-primary/20 rounded-full"
        />
        <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-violet-lg relative z-10">
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-background flex items-center justify-center">
            <Zap size={64} className="text-primary fill-primary/10" />
          </div>
        </div>
      </motion.div> */}
      <div className="w-full h-full object-cover lg:scale-150">
        {/* <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/40 via-secondary/30 to-transparent blur-3xl opacity-80" /> */}
        <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

        {/* Agranda 10% */}
        <img
          src={image}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default Hero;
