import { User } from "lucide-react";

const team = [
  {
    name: "Developer 1",
    role: "Full Stack Developer",
  },
  {
    name: "Developer 2",
    role: "Full Stack Developer",
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="nosotros"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-light-violet/40 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark text-center mb-8">
          Quiénes Somos
        </h2>

        <p className="text-center text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
          Somos dos desarrolladores full-stack apasionados por crear productos
          digitales que transforman negocios. Combinamos experiencia en
          desarrollo web y automatización para entregar soluciones de alta
          calidad que impulsan el crecimiento de nuestros clientes.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-light-violet hover:border-primary transition-all duration-300 hover:shadow-xl text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-light-violet to-secondary/40 flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <User className="w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-bold text-dark mb-2 font-sans">
                {member.name}
              </h3>

              <p className="text-primary font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
