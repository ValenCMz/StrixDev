const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Docker", icon: "🐳" },
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "n8n", icon: "⚡" },
  { name: "Angular", icon: "🅰️" },
  { name: "Laravel", icon: "🔺" },
  { name: "PHP", icon: "🐘" },
  { name: "JavaScript", icon: "JS" },
  { name: "Figma", icon: "🎨" },
  { name: "Vite", icon: "⚡" },
];

export function Technologies() {
  return (
    <section
      id="tecnologias"
      className="py-20 bg-secondary/30 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
            Tecnologías que usamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con las herramientas más modernas para crear soluciones
            robustas
          </p>
        </div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex-shrink-0 mx-6 px-6 py-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {technologies.map((tech) => (
            <div
              key={`${tech.name}-duplicate`}
              className="flex-shrink-0 mx-6 px-6 py-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground font-medium whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
