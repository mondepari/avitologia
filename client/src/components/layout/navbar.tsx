import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Logo from '@/components/ui/logo';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

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
      scrolled || mobileMenuOpen ? 'bg-white shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <div className="ml-6 text-xs font-medium text-gray-600 hidden lg:block">
              <p>Сертифицированный специалист по<br />Яндекс.Директ и Google Ads</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-between flex-grow">
            <div className="flex items-center space-x-6 ml-8">
              <button onClick={() => handleNavLinkClick('services')} className="text-gray-800 hover:text-primary font-medium transition-colors">
                Услуги
              </button>
              <button onClick={() => handleNavLinkClick('portfolio')} className="text-gray-800 hover:text-primary font-medium transition-colors">
                Портфолио
              </button>
              <button onClick={() => handleNavLinkClick('about')} className="text-gray-800 hover:text-primary font-medium transition-colors">
                Обо мне
              </button>
              <button onClick={() => handleNavLinkClick('contact')} className="text-gray-800 hover:text-primary font-medium transition-colors">
                Контакты
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="tel:+73433454343" className="bg-primary/10 text-primary flex items-center rounded-full px-4 py-1.5">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium text-sm">+7(937) 343-45-43</span>
              </a>
              
              <button 
                onClick={() => handleNavLinkClick('contact')} 
                className="bg-primary text-white flex items-center font-medium px-4 py-1.5 rounded-full hover:bg-primary/90 transition duration-300"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                <span className="text-sm">Пишите</span>
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="focus:outline-none text-gray-800"
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-4 pb-6 space-y-6">
            <div className="flex flex-col">
              <span className="text-gray-600 mb-2">Навигация:</span>
              <button onClick={() => handleNavLinkClick('services')} className="text-gray-800 hover:text-primary py-2 flex items-center">
                Услуги
              </button>
              <button onClick={() => handleNavLinkClick('portfolio')} className="text-gray-800 hover:text-primary py-2 flex items-center">
                Портфолио
              </button>
              <button onClick={() => handleNavLinkClick('about')} className="text-gray-800 hover:text-primary py-2 flex items-center">
                Обо мне
              </button>
              <button onClick={() => handleNavLinkClick('contact')} className="text-gray-800 hover:text-primary py-2 flex items-center">
                Контакты
              </button>
            </div>
            
            <div className="flex flex-col">
              <span className="text-gray-600 mb-2">Мои услуги:</span>
              <button onClick={() => handleNavLinkClick('services')} className="text-gray-800 hover:text-primary py-2">Яндекс.Директ</button>
              <button onClick={() => handleNavLinkClick('services')} className="text-gray-800 hover:text-primary py-2">Google Ads</button>
              <button onClick={() => handleNavLinkClick('services')} className="text-gray-800 hover:text-primary py-2">Аналитика</button>
            </div>
            
            <div className="flex flex-col">
              <span className="text-gray-600 mb-2">Связаться:</span>
              <a href="tel:+73433454343" className="flex items-center py-2">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+7(937) 343-45-43</span>
              </a>
              <button 
                onClick={() => handleNavLinkClick('contact')} 
                className="mt-3 w-full bg-primary text-white flex items-center justify-center px-4 py-2.5 rounded-full hover:bg-primary/90 transition duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>Написать</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
