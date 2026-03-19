import { FaJava } from "react-icons/fa";

import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiDocker,
    SiSpringboot,
    SiN8N,
    SiAngular,
    SiLaravel,
    SiPhp,
    SiJavascript,
    SiFigma,
    SiVite,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: <SiReact color="#61DAFB" size={28} /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={28} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" size={28} /> },
  { name: "Docker",  icon: <SiDocker color="#2496ED" size={28} /> },
  { name: "Java", icon: <FaJava color="#ED8B00" size={28} /> },
  { name: "Spring Boot",icon: <SiSpringboot color="#6DB33F" size={28} /> },
  { name: "n8n", icon: <SiN8N size={28} /> },
  { name: "Angular", icon: <SiAngular color="#DD0031" size={28} /> },
  { name: "Laravel", icon: <SiLaravel color="#FF2D20" size={28} /> },
  { name: "PHP", icon: <SiPhp color="#777BB4" size={28} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={28} /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" size={28} /> },
  { name: "Vite", icon: <SiVite color="#646CFF" size={28} /> },
];

export function Technologies() {
  return (
    <section
      id="tecnologias"
      className="py-20 bg-[#F4F6FF] overflow-hidden scroll-mt-24 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="Plus Jakarta Sans text-3xl sm:text-4xl text-foreground mb-4">
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
                    {tech.icon}  {/* antes era <span className="text-2xl">{tech.icon}</span> */}
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


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
