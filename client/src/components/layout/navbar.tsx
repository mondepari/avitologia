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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
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
            <div className={`flex items-center text-sm ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              <svg className="h-5 w-5 mr-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 11H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 1C13.5013 3.73835 14.9228 7.29203 15 11C14.9228 14.708 13.5013 18.2616 11 21C8.49872 18.2616 7.07725 14.708 7 11C7.07725 7.29203 8.49872 3.73835 11 1V1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Работаю удаленно по всей РФ и СНГ</span>
            </div>
            
            <button 
              onClick={() => handleNavLinkClick('contact')} 
              className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
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
            <div className="flex items-center text-sm text-gray-800 py-2">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 11H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 1C13.5013 3.73835 14.9228 7.29203 15 11C14.9228 14.708 13.5013 18.2616 11 21C8.49872 18.2616 7.07725 14.708 7 11C7.07725 7.29203 8.49872 3.73835 11 1V1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Работаю удаленно по всей РФ и СНГ</span>
            </div>
            <div className="pt-2">
              <button 
                onClick={() => handleNavLinkClick('contact')} 
                className="w-full bg-primary text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
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
