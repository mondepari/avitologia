import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Logo from '@/components/ui/logo';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { ContactPopup } from '@/components/ui/contact-popup';

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
      scrolled || mobileMenuOpen ? 'bg-background shadow-lg' : 'bg-background'
    }`}>
      <div className="w-full px-6 md:px-14 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <div className="ml-6 text-xs font-medium text-foreground/70 hidden lg:block">
              <p>Сертифицированный специалист по<br />Яндекс.Директ</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-between flex-grow">
            <div className="flex items-center space-x-6 ml-8">
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary font-medium transition-colors">
                Контекстная реклама
              </button>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary font-medium transition-colors">
                Авито реклама
              </button>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary font-medium transition-colors">
                Разработка сайтов
              </button>
              <Link href="/cases">
                <a className="text-foreground hover:text-primary font-medium transition-colors">
                  Кейсы
                </a>
              </Link>
              <button onClick={() => handleNavLinkClick('testimonials')} className="text-foreground hover:text-primary font-medium transition-colors">
                Отзывы
              </button>
              <button onClick={() => handleNavLinkClick('contact')} className="text-foreground hover:text-primary font-medium transition-colors">
                Контакты
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <ContactPopup>
                <button className="bg-primary/10 text-primary flex items-center rounded-full px-4 py-1.5">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium text-sm">+7(937) 343-45-43</span>
                </button>
              </ContactPopup>
              
              <ContactPopup>
                <button 
                  className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white flex items-center font-medium px-4 py-1.5 rounded-full hover:from-[#5500D8] hover:to-[#6A26CF] transition duration-300 shadow-sm"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  <span className="text-sm">Пишите</span>
                </button>
              </ContactPopup>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="focus:outline-none text-foreground"
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-gray-800">
          <div className="w-full px-6 md:px-14 pt-4 pb-6 space-y-6">
            <div className="flex flex-col">
              <span className="text-foreground/70 mb-2">Навигация:</span>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary py-2 flex items-center">
                Контекстная реклама
              </button>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary py-2 flex items-center">
                Авито реклама
              </button>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary py-2 flex items-center">
                Разработка сайтов
              </button>
              <Link href="/cases">
                <a className="text-foreground hover:text-primary py-2 flex items-center">
                  Кейсы
                </a>
              </Link>
              <button onClick={() => handleNavLinkClick('testimonials')} className="text-foreground hover:text-primary py-2 flex items-center">
                Отзывы
              </button>
              <button onClick={() => handleNavLinkClick('contact')} className="text-foreground hover:text-primary py-2 flex items-center">
                Контакты
              </button>
            </div>
            
            <div className="flex flex-col">
              <span className="text-foreground/70 mb-2">Связаться:</span>
              <ContactPopup>
                <button className="flex items-center py-2 w-full text-left text-foreground">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <span>+7(937) 343-45-43</span>
                </button>
              </ContactPopup>
              <ContactPopup>
                <button 
                  className="mt-3 w-full bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white flex items-center justify-center px-4 py-2.5 rounded-full hover:from-[#5500D8] hover:to-[#6A26CF] transition duration-300 shadow-sm"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>Написать</span>
                </button>
              </ContactPopup>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
