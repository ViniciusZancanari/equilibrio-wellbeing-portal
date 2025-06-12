
import { Heart, Users, Home, Stethoscope } from "lucide-react";

const WhoWeAreSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Você está no centro de toda atenção."
    },
    {
      icon: Stethoscope,
      title: "Excelência Profissional",
      description: "Os melhores especialistas ao seu alcance."
    },
    {
      icon: Home,
      title: "Ambiente Acolhedor",
      description: "Sinta-se em casa, sinta-se cuidado."
    },
    {
      icon: Users,
      title: "Saúde Holística",
      description: "Olhamos para você como um todo."
    }
  ];

  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-arquitecta font-bold text-purple-secondary mb-6">
              Sua Saúde em Boas Mãos:
              <span className="block text-gray-700">Conheça a Equilíbrio Clínica</span>
            </h2>
            <div className="w-24 h-1 bg-green-accent mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div className="space-y-8 text-center">
              <p className="text-lg font-arciform text-gray-700 leading-relaxed">
                Na <strong className="text-purple-secondary">Equilíbrio Clínica Multiprofissional</strong>, 
                acreditamos que o cuidado com a saúde vai além de diagnósticos. Somos um espaço 
                dedicado ao seu bem-estar integral, oferecendo atendimento humanizado e personalizado 
                em diversas especialidades.
              </p>
              
              <p className="text-lg font-arciform text-gray-700 leading-relaxed">
                Nossa missão é proporcionar um ambiente acolhedor e profissionais altamente 
                qualificados para que você possa encontrar o equilíbrio em todas as áreas da sua vida.
              </p>

              {/* Values Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-purple-primary/10 to-purple-secondary/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="bg-green-accent/10 p-3 rounded-full group-hover:bg-green-accent/20 transition-colors">
                        <value.icon className="h-6 w-6 text-green-accent" />
                      </div>
                      <div>
                        <h3 className="font-arquitecta font-semibold text-purple-secondary mb-2">
                          {value.title}
                        </h3>
                        <p className="font-arciform text-gray-600 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
