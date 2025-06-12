
import { User, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProfessionalsSection = () => {
  const professionals = [
    {
      name: "Dra. Ana Silva",
      specialty: "Psicóloga Clínica",
      description: "Oferecendo apoio emocional e ferramentas para autoconhecimento.",
      image: "/placeholder.svg",
      rating: 4.9,
      experience: "8 anos"
    },
    {
      name: "Dr. João Mendes", 
      specialty: "Nutricionista Esportivo",
      description: "Transformando hábitos para uma vida mais saudável e ativa.",
      image: "/placeholder.svg",
      rating: 4.8,
      experience: "6 anos"
    },
    {
      name: "Dra. Carolina Lima",
      specialty: "Fisioterapeuta",
      description: "Reabilitando movimentos e promovendo bem-estar físico.",
      image: "/placeholder.svg",
      rating: 4.9,
      experience: "10 anos"
    },
    {
      name: "Dr. Pedro Santos",
      specialty: "Cardiologista",
      description: "Cuidando da saúde do seu coração com expertise e dedicação.",
      image: "/placeholder.svg",
      rating: 4.7,
      experience: "12 anos"
    },
    {
      name: "Dra. Mariana Costa",
      specialty: "Endocrinologista",
      description: "Equilibrando hormônios para uma vida mais saudável.",
      image: "/placeholder.svg",
      rating: 4.8,
      experience: "9 anos"
    },
    {
      name: "Dr. Rafael Oliveira",
      specialty: "Ortopedista",
      description: "Especialista em tratamentos ortopédicos e medicina esportiva.",
      image: "/placeholder.svg",
      rating: 4.9,
      experience: "15 anos"
    }
  ];

  return (
    <section id="professionals" className="py-20 bg-gradient-to-br from-purple-primary/5 to-purple-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-arquitecta font-bold text-purple-secondary mb-6">
              Nossa Equipe de Especialistas:
              <span className="block text-gray-700">Dedicação e Conhecimento</span>
            </h2>
            <div className="w-24 h-1 bg-green-accent mx-auto mb-8"></div>
            <p className="text-lg font-arciform text-gray-700 max-w-3xl mx-auto">
              Conte com uma equipe multidisciplinar experiente e apaixonada por cuidar de pessoas. 
              Nossos profissionais estão prontos para oferecer o melhor atendimento em suas respectivas áreas.
            </p>
          </div>

          {/* Professionals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((professional, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-6">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-secondary to-purple-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <User className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-green-accent text-white px-3 py-1 rounded-full text-xs font-arquitecta font-semibold">
                        {professional.experience}
                      </div>
                    </div>
                  </div>

                  {/* Professional Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-arquitecta font-bold text-purple-secondary mb-2">
                      {professional.name}
                    </h3>
                    <p className="text-green-accent font-arciform font-semibold mb-3">
                      {professional.specialty}
                    </p>
                    <p className="text-gray-600 font-arciform text-sm mb-4 leading-relaxed">
                      {professional.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(professional.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-arciform text-gray-600">
                        {professional.rating}
                      </span>
                    </div>

                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 bg-green-accent/10 text-green-accent px-3 py-1 rounded-full text-xs font-arciform">
                      <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse"></div>
                      Disponível para agendamento
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg font-arciform text-gray-700 mb-6">
              Encontre o especialista ideal para suas necessidades
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-arquitecta font-bold text-purple-secondary mb-4">
                Precisa de uma especialidade específica?
              </h3>
              <p className="font-arciform text-gray-600 mb-6">
                Entre em contato conosco e iremos direcionar você para o profissional mais adequado
                para seu caso específico.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as especialidades disponíveis na Equilíbrio Clínica.', '_blank')}
                className="bg-green-accent hover:bg-green-accent/90 text-white font-arquitecta px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Consultar Especialidades
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
