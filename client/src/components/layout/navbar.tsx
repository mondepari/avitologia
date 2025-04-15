import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Logo from '@/components/ui/logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    
    // Smooth scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || mobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <div className={`ml-6 text-sm hidden lg:block ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <p>Сертифицированный специалист по Яндекс.Директ и Google.Ads</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNavLinkClick('services')} className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary`}>Услуги</button>
            <button onClick={() => handleNavLinkClick('about')} className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary`}>О себе</button>
            <button onClick={() => handleNavLinkClick('portfolio')} className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary`}>Кейсы</button>
            <button onClick={() => handleNavLinkClick('process')} className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-primary`}>Как я работаю</button>
            
            <button 
              onClick={() => handleNavLinkClick('contact')} 
              className="bg-primary text-white font-medium px-6 py-2.5 rounded-full hover:bg-primary/90 transition duration-300"
            >
              Пишите
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className={`focus:outline-none ${scrolled ? 'text-gray-800' : 'text-white'}`}
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => handleNavLinkClick('services')} className="text-gray-800 hover:text-primary py-2">Услуги</button>
              <button onClick={() => handleNavLinkClick('about')} className="text-gray-800 hover:text-primary py-2">О себе</button>
              <button onClick={() => handleNavLinkClick('portfolio')} className="text-gray-800 hover:text-primary py-2">Кейсы</button>
              <button onClick={() => handleNavLinkClick('process')} className="text-gray-800 hover:text-primary py-2">Как я работаю</button>
              <button onClick={() => handleNavLinkClick('contact')} className="text-gray-800 hover:text-primary py-2">Контакты</button>
            </div>
            <div className="pt-2">
              <button 
                onClick={() => handleNavLinkClick('contact')} 
                className="w-full bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition duration-300"
              >
                Пишите
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
