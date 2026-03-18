import salasimg from "@/assets/projects/salas.png";
import cgaimg from "@/assets/projects/cga.png";
import youtubeRojo from "@/assets/icons/youtube-rojo.svg";
import { useState } from "react";

const projects = [
  {
    name: "Sistema de Gestión de Stock Animal",
    description:
      "Sistema de gestión para control de stock animal y reportes médicos, enfocado en evitar olvidos de carga de datos.",
    category: "Sistema",
    gradient: "from-primary/20 to-secondary/20",
    image: salasimg,
    url: "rYUH2OcRMlk",
  },
  {
    name: "Estudio CGA – Gestión de Casos y Documentos",
    description:
      "Desarrollo de una web para un estudio jurídico y un sistema interno para la gestión de casos, clientes y documentos, con acceso diferenciado por roles.",
    category: "Web y sistema de gestión",
    gradient: "from-secondary/20 to-light-violet",
    image: cgaimg,
    url: "zxMMSZWPzDI",
  },
  // {
  //   name: "Automatización de Marketing",
  //   description:
  //     "Sistema de automatización de leads con integración a WhatsApp, email y CRM.",
  //   category: "Automatización",
  //   gradient: "from-light-violet to-primary/20",
  //   image: salasimg,
  //   url: "https://youtu.be/rYUH2OcRMlk",
  // },
];

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);

  const handleYoutubeClick = (youtubeId: string) => {
    setActiveYoutubeId(youtubeId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setActiveYoutubeId(null);
  };

  return (
    <section id="proyectos" className="py-24 px-6 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl Plus Jakarta Sans text-dark text-center mb-10">
          Trabajos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border-2 border-light-violet hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                  <button
                    type="button"
                    className="z-10 flex items-center justify-center"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleYoutubeClick(project.url);
                    }}
                  >
                    <img
                      src={youtubeRojo}
                      alt=""
                      className="h-20 w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </button>
                </div>

                <div className="w-full h-full absolute inset-0 bg-black opacity-30 pointer-events-none" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
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
      {isModalOpen && activeYoutubeId && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={handleModalClose}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${activeYoutubeId}?autoplay=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
