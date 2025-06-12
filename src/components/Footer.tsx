
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/94bc294d-5cb1-4e0c-b374-d66e8ac37681.png" 
                alt="Equilíbrio Clínica Multiprofissional" 
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="font-arciform text-gray-300 text-sm">
                Cuidando da sua saúde e bem-estar com profissionalismo, 
                humanização e dedicação. Seu equilíbrio é nossa prioridade.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-arquitecta font-semibold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2 font-arciform text-sm">
                <li>
                  <button 
                    onClick={() => document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-green-accent transition-colors"
                  >
                    Quem Somos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('professionals')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-green-accent transition-colors"
                  >
                    Profissionais
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-green-accent transition-colors"
                  >
                    Contato
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                    className="text-gray-300 hover:text-green-accent transition-colors"
                  >
                    WhatsApp
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-arquitecta font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-2 font-arciform text-sm text-gray-300">
                <p>São Bernardo do Campo - SP</p>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p className="text-green-accent">(11) 99999-9999</p>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-arciform text-gray-400 text-sm">
                © 2024 Equilíbrio Clínica Multiprofissional. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-2 font-arciform text-gray-400 text-sm">
                <span>Feito com</span>
                <Heart className="h-4 w-4 text-green-accent fill-current" />
                <span>para seu bem-estar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
