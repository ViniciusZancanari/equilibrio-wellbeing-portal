
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Users, Shield } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Equilíbrio Clínica Multiprofissional.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and abstract elements */}
      <div className="absolute inset-0 gradient-purple">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/lovable-uploads/1918d2cd-a0b4-4d02-99b9-dde8b85b493d.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-accent/20 rounded-full blur-lg float" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/94bc294d-5cb1-4e0c-b374-d66e8ac37681.png" 
              alt="Equilíbrio Clínica Multiprofissional" 
              className="h-20 w-auto mx-auto mb-6"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-arquitecta font-bold mb-6 animate-slide-up leading-tight">
            Sua Jornada ao
            <span className="block text-green-accent">Bem-estar</span>
            Começa Aqui
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl font-arciform mb-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Equilíbrio Clínica Multiprofissional: Cuidado Holístico e Humanizado
          </p>

          {/* Value proposition */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="h-5 w-5 text-green-accent" />
              <span className="font-arciform">Cuidado Humanizado</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="h-5 w-5 text-green-accent" />
              <span className="font-arciform">Profissionais Qualificados</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="h-5 w-5 text-green-accent" />
              <span className="font-arciform">Ambiente Acolhedor</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-accent hover:bg-green-accent/90 text-white font-arquitecta text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale Conosco via WhatsApp
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
