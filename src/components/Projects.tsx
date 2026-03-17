const projects = [
  {
    name: "Sistema de Gestión Empresarial",
    description:
      "Plataforma completa para gestión de turnos, personal y clientes con panel de administración.",
    category: "Sistema",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    name: "E-commerce de Moda",
    description:
      "Tienda online con catálogo de productos, carrito de compras y pasarela de pagos integrada.",
    category: "Ecommerce",
    gradient: "from-secondary/20 to-light-violet",
  },
  {
    name: "Automatización de Marketing",
    description:
      "Sistema de automatización de leads con integración a WhatsApp, email y CRM.",
    category: "Automatización",
    gradient: "from-light-violet to-primary/20",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark text-center mb-16">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border-2 border-light-violet hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
                <div className="text-6xl font-serif font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                  0{index + 1}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="inline-block px-3 py-1 bg-light-violet text-primary text-xs font-semibold rounded-full">
                  {project.category}
                </div>

                <h3 className="text-xl font-bold text-dark font-sans">
                  {project.name}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
