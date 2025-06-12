
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/94bc294d-5cb1-4e0c-b374-d66e8ac37681.png" 
              alt="Equilíbrio Clínica Multiprofissional" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('who-we-are')}
                className="font-arciform text-gray-700 hover:text-purple-secondary transition-colors"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('professionals')}
                className="font-arciform text-gray-700 hover:text-purple-secondary transition-colors"
              >
                Profissionais
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-arciform text-gray-700 hover:text-purple-secondary transition-colors"
              >
                Contato
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-light bg-white">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('who-we-are')}
                className="font-arciform text-gray-700 hover:text-purple-secondary transition-colors text-left"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('professionals')}
                className="font-arciform text-gray-700 hover:text-purple-secondary transition-colors text-left"
              >
                Profissionais
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="font-arciform text-gray-700 hover:text-purple-secondary transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
