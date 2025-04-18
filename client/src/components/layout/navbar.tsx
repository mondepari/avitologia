import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Logo from '@/components/ui/logo';
import { Menu, X, MessageCircle, Phone, ChevronRight } from 'lucide-react';
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
      {/* Top header line */}
      <div className="w-full border-b border-white/10">
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-14 xl:px-16 max-w-[1400px] flex items-center justify-between py-1.5 text-white">
          <div className="text-xs hidden md:block whitespace-nowrap">
            Сертифицированный специалист по Яндекс Директ и Авито Ads
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <div className="flex items-center text-white">
              <svg className="h-4 w-4 text-white mr-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Работаю удаленно по всей РФ и миру</span>
            </div>
            <div className="flex items-center space-x-2">
              <a href="#" className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center">
                <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center">
                <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center">
                <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 w-6 h-6 rounded-full flex items-center justify-center">
                <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-14 xl:px-16 max-w-[1400px] py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNavLinkClick('services')} className="text-white hover:text-white/80 font-medium transition-colors">
              Контекстная реклама
            </button>
            <button onClick={() => handleNavLinkClick('services')} className="text-white hover:text-white/80 font-medium transition-colors">
              Авито реклама
            </button>
            <button onClick={() => handleNavLinkClick('services')} className="text-white hover:text-white/80 font-medium transition-colors">
              Разработка сайтов
            </button>
            <Link href="/cases">
              <a className="text-white hover:text-white/80 font-medium transition-colors">
                Кейсы
              </a>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <ContactPopup>
                <button className="text-white flex items-center font-medium">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-base">+7(937) 343-45-43</span>
                </button>
              </ContactPopup>
            </div>
            
            <div className="md:hidden">
              <button 
                type="button" 
                onClick={toggleMobileMenu}
                className="focus:outline-none text-white"
                aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
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
