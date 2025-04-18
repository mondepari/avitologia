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
      scrolled || mobileMenuOpen ? 'bg-gradient-to-r from-[#6200EE] to-[#7A36DF] shadow-lg' : 'bg-gradient-to-r from-[#6200EE] to-[#7A36DF]'
    }`}>
      <div className="container py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <div className="ml-4 text-xs font-medium text-white/90 hidden lg:block">
              <p>Сертифицированный специалист по<br />Яндекс.Директ и Google.Ads</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center ml-auto">
            <div className="text-white flex items-center mr-4">
              <span className="mr-2 text-white/80 text-sm">Работаем удаленно по всей РФ и СНГ</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <ContactPopup>
                <button className="bg-white/10 text-white flex items-center rounded-full px-4 py-1.5 hover:bg-white/20 transition-all duration-300">
                  <span className="font-medium text-sm">Звоните, мы онлайн!</span>
                </button>
              </ContactPopup>
              
              <ContactPopup>
                <button className="bg-white/10 text-white flex items-center rounded-full px-4 py-1.5 hover:bg-white/20 transition-all duration-300">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium text-sm">+7(937) 343-45-43</span>
                </button>
              </ContactPopup>
            </div>
          </div>
          
          <div className="md:hidden ml-auto mr-2">
            <ContactPopup>
              <button className="bg-white/10 text-white flex items-center rounded-full px-3 py-1.5 mr-4 hover:bg-white/20 transition-all duration-300">
                <Phone className="h-4 w-4" />
              </button>
            </ContactPopup>
          </div>
          
          <button 
            type="button" 
            onClick={toggleMobileMenu}
            className="focus:outline-none text-white bg-white/10 p-2 rounded-md hover:bg-white/20 transition-all duration-300"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background">
          <div className="container pt-4 pb-6 space-y-6">
            <div className="flex flex-col">
              <span className="text-foreground/70 mb-2">Меню:</span>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary py-2 flex items-center border-b border-gray-800/30">
                Контекстная реклама
              </button>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary py-2 flex items-center border-b border-gray-800/30">
                Авито реклама
              </button>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary py-2 flex items-center border-b border-gray-800/30">
                Разработка сайтов
              </button>
              <Link href="/cases">
                <a className="text-foreground hover:text-primary py-2 flex items-center border-b border-gray-800/30">
                  Кейсы
                </a>
              </Link>
              <button onClick={() => handleNavLinkClick('testimonials')} className="text-foreground hover:text-primary py-2 flex items-center border-b border-gray-800/30">
                Отзывы
              </button>
              <button onClick={() => handleNavLinkClick('contact')} className="text-foreground hover:text-primary py-2 flex items-center border-b border-gray-800/30">
                Контакты
              </button>
            </div>
            
            <div className="flex flex-col">
              <span className="text-foreground/70 mb-2">Связаться:</span>
              <div className="flex items-center py-2 border-b border-gray-800/30">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-foreground">+7(937) 343-45-43</span>
              </div>
              <ContactPopup>
                <button 
                  className="mt-4 w-full btn-purple text-white font-medium py-3 rounded-full"
                >
                  <span>Заказать звонок</span>
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
