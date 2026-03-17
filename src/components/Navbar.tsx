import Logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-20 h-20 text-primary" />
            <span className="text-xl font-bold text-dark">StrixDev</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Servicios
            </a>
            <a
              href="#proyectos"
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Proyectos
            </a>
            <a
              href="#tecnologias"
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Tecnologías
            </a>
            <a
              href="#nosotros"
              className="text-dark hover:text-primary transition-colors font-medium"
            >
              Nosotros
            </a>
          </div>

          <a
            href="#contacto"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Contactanos
          </a>
        </div>
      </div>
    </nav>
  );
}
