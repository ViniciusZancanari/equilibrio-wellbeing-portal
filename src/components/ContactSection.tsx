
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, MapPin, Clock, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Equilíbrio Clínica Multiprofissional.', '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Para atendimento mais rápido, use nosso WhatsApp.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 gradient-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-arquitecta font-bold text-white mb-6">
              Agende Sua Consulta e
              <span className="block text-green-accent">Encontre Seu Equilíbrio</span>
            </h2>
            <div className="w-24 h-1 bg-green-accent mx-auto mb-8"></div>
            <p className="text-xl font-arciform text-white/90 max-w-3xl mx-auto">
              Estamos prontos para atendê-lo! Clique no botão abaixo para falar diretamente 
              conosco via WhatsApp e agendar sua consulta ou esclarecer suas dúvidas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <MessageCircle className="h-16 w-16 text-green-accent mx-auto mb-4" />
                <h3 className="text-2xl font-arquitecta font-bold text-white mb-4">
                  Atendimento Rápido via WhatsApp
                </h3>
                <p className="font-arciform text-white/80 mb-6">
                  Fale diretamente com nossa equipe e agende sua consulta de forma prática e rápida.
                </p>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-accent hover:bg-green-accent/90 text-white font-arquitecta text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 w-full"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-white">
                  <MapPin className="h-6 w-6 text-green-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-arquitecta font-semibold mb-1">Endereço</h4>
                    <p className="font-arciform text-white/80">
                      Rua das Flores, 123, Centro<br />
                      São Bernardo do Campo - SP, Brasil
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-white">
                  <Clock className="h-6 w-6 text-green-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-arquitecta font-semibold mb-1">Horário de Funcionamento</h4>
                    <p className="font-arciform text-white/80">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-white">
                  <Phone className="h-6 w-6 text-green-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-arquitecta font-semibold mb-1">Telefone</h4>
                    <p className="font-arciform text-white/80">
                      (11) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-white">
                  <Mail className="h-6 w-6 text-green-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-arquitecta font-semibold mb-1">E-mail</h4>
                    <p className="font-arciform text-white/80">
                      contato@equilibrioclinica.com.br
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-arquitecta font-bold text-white mb-6">
                Ou envie uma mensagem
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 font-arciform"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 font-arciform"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Seu telefone (opcional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 font-arciform"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 font-arciform min-h-[120px]"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-white/20 hover:bg-white/30 text-white font-arquitecta w-full backdrop-blur-sm border border-white/30"
                >
                  Enviar Mensagem
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="font-arciform text-white/60 text-sm">
                  Preferência por WhatsApp para resposta mais rápida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
