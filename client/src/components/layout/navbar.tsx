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
      <div className="container py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <div className="ml-4 text-xs font-medium text-foreground/70 hidden lg:block">
              <p>Сертифицированный специалист по<br />Яндекс.Директ и Google.Ads</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center ml-auto">
            <div className="text-foreground/80 flex items-center mr-4">
              <span className="mr-2 text-sm">Работаем удаленно по всей РФ и СНГ</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <a href="https://t.me/username" target="_blank" rel="noopener" className="flex items-center justify-center w-8 h-8 bg-accent/80 rounded-full hover:bg-accent transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.085.34.157.451.214.719.365 1.314.461 1.694.325.379-.136.654-.511.824-1.122.069-.25.142-.592.221-1.027.079-.436.114-.812.114-1.129 0-.306-.035-.599-.114-.879-.07-.281-.168-.498-.291-.653-.124-.154-.3-.281-.521-.379-.224-.097-.469-.145-.734-.145-.128 0-.428.019-.896.055-.47.037-.836.067-1.096.091-.259.023-.566.055-.918.096-.353.04-.605.072-.755.091-.165.024-.481.067-.947.145-.467.075-.745.12-.835.135-.181.030-.572.111-1.175.24-.603.13-1.053.227-1.35.296-.297.068-.609.177-.936.325-.328.147-.505.294-.531.436.4.544.17.647.361.647.127 0 .313-.046.562-.136.249-.095.457-.142.625-.142.127 0 .217.048.268.144s.089.296.117.6c.031.388.05.793.061 1.212.008.42-.004.797-.044 1.133-.035.343-.127.57-.268.684-.142.114-.406.171-.788.171-.127 0-.249-.018-.361-.053-.112-.035-.181-.078-.209-.127-.026-.05-.039-.196-.039-.438 0-.173.015-.413.044-.717.03-.306.044-.523.044-.654 0-.153-.053-.275-.159-.367-.107-.091-.216-.138-.33-.138-.157 0-.308.07-.452.205-.145.137-.243.302-.296.497-.052.194-.079.51-.079.946 0 .358.056.639.17.84.112.204.215.341.312.416z"/>
                  </svg>
                </a>
                <a href="https://wa.me/7937343453" target="_blank" rel="noopener" className="flex items-center justify-center w-8 h-8 bg-accent/80 rounded-full hover:bg-accent transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                <a href="https://avito.ru/profile" target="_blank" rel="noopener" className="flex items-center justify-center w-8 h-8 bg-accent/80 rounded-full hover:bg-accent transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M9.5 1c.8 1.3 1.5 2.7 2.3 4h-2.3v6.5c0 4.1 3.4 7.5 7.5 7.5v-4c-1.9 0-3.5-1.6-3.5-3.5v-6.5h6.5v-4h-10.5z"/>
                    <path d="M5 5v4c-1.9 0-3.5 1.6-3.5 3.5v6.5h-1.5v4h10.5c-.8-1.3-1.5-2.7-2.3-4h2.3v-6.5c0-4.1-3.4-7.5-7.5-7.5z"/>
                  </svg>
                </a>
              </div>
              
              <ContactPopup>
                <button className="bg-primary/10 text-primary flex items-center rounded-full px-4 py-1.5">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium text-sm">+7(937) 343-45-43</span>
                </button>
              </ContactPopup>
            </div>
          </div>
          
          <div className="md:hidden ml-auto mr-2">
            <ContactPopup>
              <button className="bg-primary/10 text-primary flex items-center rounded-full px-3 py-1.5 mr-1">
                <Phone className="h-4 w-4" />
              </button>
            </ContactPopup>
          </div>
          
          <button 
            type="button" 
            onClick={toggleMobileMenu}
            className="focus:outline-none text-foreground bg-accent p-2 rounded-md hover:bg-accent/80 transition-all duration-300"
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
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary py-3 flex items-center border-b border-gray-800/30">
                Контекстная реклама
              </button>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary py-3 flex items-center border-b border-gray-800/30">
                Авито реклама
              </button>
              <button onClick={() => handleNavLinkClick('services')} className="text-foreground hover:text-primary py-3 flex items-center border-b border-gray-800/30">
                Разработка сайтов
              </button>
              <button onClick={() => handleNavLinkClick('portfolio')} className="text-foreground hover:text-primary py-3 flex items-center border-b border-gray-800/30">
                Портфолио
              </button>
              <button onClick={() => handleNavLinkClick('testimonials')} className="text-foreground hover:text-primary py-3 flex items-center border-b border-gray-800/30">
                Отзывы
              </button>
              <button onClick={() => handleNavLinkClick('contact')} className="text-foreground hover:text-primary py-3 flex items-center border-b border-gray-800/30">
                Контакты
              </button>
            </div>
            
            <div className="flex flex-col">
              <span className="text-foreground/70 mb-2">Связаться:</span>
              <div className="flex items-center py-2 border-b border-gray-800/30">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-foreground">+7(937) 343-45-43</span>
              </div>
              
              <div className="flex items-center space-x-3 mt-3 mb-2">
                <a href="https://t.me/username" target="_blank" rel="noopener" className="flex items-center justify-center w-9 h-9 bg-accent/80 rounded-full hover:bg-accent transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.085.34.157.451.214.719.365 1.314.461 1.694.325.379-.136.654-.511.824-1.122.069-.25.142-.592.221-1.027.079-.436.114-.812.114-1.129 0-.306-.035-.599-.114-.879-.07-.281-.168-.498-.291-.653-.124-.154-.3-.281-.521-.379-.224-.097-.469-.145-.734-.145-.128 0-.428.019-.896.055-.47.037-.836.067-1.096.091-.259.023-.566.055-.918.096-.353.04-.605.072-.755.091-.165.024-.481.067-.947.145-.467.075-.745.12-.835.135-.181.030-.572.111-1.175.24-.603.13-1.053.227-1.35.296-.297.068-.609.177-.936.325-.328.147-.505.294-.531.436.4.544.17.647.361.647.127 0 .313-.046.562-.136.249-.095.457-.142.625-.142.127 0 .217.048.268.144s.089.296.117.6c.031.388.05.793.061 1.212.008.42-.004.797-.044 1.133-.035.343-.127.57-.268.684-.142.114-.406.171-.788.171-.127 0-.249-.018-.361-.053-.112-.035-.181-.078-.209-.127-.026-.05-.039-.196-.039-.438 0-.173.015-.413.044-.717.03-.306.044-.523.044-.654 0-.153-.053-.275-.159-.367-.107-.091-.216-.138-.33-.138-.157 0-.308.07-.452.205-.145.137-.243.302-.296.497-.052.194-.079.51-.079.946 0 .358.056.639.17.84.112.204.215.341.312.416z"/>
                  </svg>
                </a>
                <a href="https://wa.me/7937343453" target="_blank" rel="noopener" className="flex items-center justify-center w-9 h-9 bg-accent/80 rounded-full hover:bg-accent transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                <a href="https://avito.ru/profile" target="_blank" rel="noopener" className="flex items-center justify-center w-9 h-9 bg-accent/80 rounded-full hover:bg-accent transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <path d="M9.5 1c.8 1.3 1.5 2.7 2.3 4h-2.3v6.5c0 4.1 3.4 7.5 7.5 7.5v-4c-1.9 0-3.5-1.6-3.5-3.5v-6.5h6.5v-4h-10.5z"/>
                    <path d="M5 5v4c-1.9 0-3.5 1.6-3.5 3.5v6.5h-1.5v4h10.5c-.8-1.3-1.5-2.7-2.3-4h2.3v-6.5c0-4.1-3.4-7.5-7.5-7.5z"/>
                  </svg>
                </a>
              </div>
              
              <ContactPopup>
                <button 
                  className="mt-2 w-full btn-purple text-white font-medium py-3 rounded-full"
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
