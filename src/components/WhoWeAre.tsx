import lucaimg from "@/assets/nosotros/luca.jpeg";
import valenimg from "@/assets/nosotros/valen.png";

const team = [
  {
    name: "Luca Lanfranqui",
    role: "Desarrollador Full Stack",
    image: lucaimg,
  },
  {
    name: "Valentín Caminos Martínez",
    role: "Desarrollador Full Stack",
    image: valenimg,
  },
];

export default function WhoWeAre() {
  return (
    <section
      id="nosotros"
      className="py-24 px-6 bg-white relative overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-light-violet/40 rounded-full blur-3xl -z-0"></div>
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-0"></div> */}

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl Plus Jakarta Sans font-bold text-dark text-center mb-8">
          Quiénes Somos
        </h2>

        <p className="text-center text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-16">
          Creamos software y automatizaciones que hacen que los negocios
          funcionen mejor. En Strix Dev nos enfocamos en resolver problemas
          reales: desde sistemas de gestión hasta integraciones y procesos
          automatizados que ahorran tiempo y mejoran resultados. Nuestro
          objetivo no es solo desarrollar, sino aportar soluciones que impulsen
          el crecimiento de cada cliente.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border-2 border-light-violet hover:border-primary transition-all duration-300 hover:shadow-xl text-center group"
            >
              <div className="w-32 h-32 mx-auto mt-6 mb-6 rounded-full bg-gradient-to-br from-light-violet to-secondary/40 flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_10%] rounded-full"
                />
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
