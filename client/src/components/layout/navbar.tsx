import { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import Logo from '@/components/ui/logo';
import logoImage from "../../assets/logo.png";
import { Menu, X, MessageCircle, Phone, ChevronRight, MapPin, Mail } from 'lucide-react';
import { ContactPopup } from '@/components/ui/contact-popup';

const Navbar = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add body overflow hidden when menu is open to prevent scrolling
  useEffect(() => {
    if (sideMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sideMenuOpen]);

  const toggleSideMenu = useCallback(() => {
    setSideMenuOpen(prevState => {
      const newState = !prevState;
      console.log("Toggle menu clicked, new state:", newState);
      return newState;
    });
  }, []);

  const handleNavLinkClick = useCallback((id: string) => {
    setSideMenuOpen(false);
    
    // Smooth scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background shadow-lg' : 'bg-background'
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
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.54 10.757C13.817 10.757 14.854 9.72 14.854 8.443C14.854 7.166 13.817 6.129 12.54 6.129C11.263 6.129 10.226 7.166 10.226 8.443C10.226 9.72 11.263 10.757 12.54 10.757Z" fill="#6200EE"/>
                      <path d="M5.217 13.35C7.235 13.35 8.87 11.716 8.87 9.697C8.87 7.679 7.235 6.045 5.217 6.045C3.199 6.045 1.564 7.679 1.564 9.697C1.564 11.716 3.199 13.35 5.217 13.35Z" fill="#6200EE"/>
                      <path d="M12.344 4.809C13.621 4.809 14.658 3.772 14.658 2.495C14.658 1.218 13.621 0.181 12.344 0.181C11.067 0.181 10.03 1.218 10.03 2.495C10.03 3.772 11.067 4.809 12.344 4.809Z" fill="#6200EE"/>
                      <path d="M5.413 4.613C6.181 4.613 6.802 3.991 6.802 3.223C6.802 2.456 6.181 1.834 5.413 1.834C4.645 1.834 4.023 2.456 4.023 3.223C4.023 3.991 4.645 4.613 5.413 4.613Z" fill="#6200EE"/>
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
              onClick={toggleSideMenu}
              className="focus:outline-none text-primary p-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-all duration-300 cursor-pointer border border-primary/20 flex items-center justify-center"
              aria-label={sideMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {sideMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Overlay for side menu */}
      {sideMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
          onClick={toggleSideMenu}
        />
      )}
      
      {/* Side Menu */}
      <div 
        className={`fixed top-0 right-0 h-full bg-white z-50 w-[300px] shadow-xl transition-transform duration-300 ease-in-out transform ${
          sideMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <img src={logoImage} alt="Логотип сайта" className="h-8" />
          </div>
          <button 
            onClick={toggleSideMenu}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <button 
                onClick={() => handleNavLinkClick('hero')} 
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg flex items-center justify-between text-gray-800"
              >
                <span>Контекстная реклама</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
              
              <button 
                onClick={() => handleNavLinkClick('services')}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg flex items-center justify-between text-gray-800"
              >
                <span>Авито реклама</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
              
              <button 
                onClick={() => handleNavLinkClick('portfolio')}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg flex items-center justify-between text-gray-800"
              >
                <span>Разработка сайтов</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
              
              <button 
                onClick={() => handleNavLinkClick('about')}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg flex items-center justify-between text-gray-800"
              >
                <span>Портфолио</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
              
              <button 
                onClick={() => handleNavLinkClick('testimonials')}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg flex items-center justify-between text-gray-800"
              >
                <span>Отзывы</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
              
              <button 
                onClick={() => handleNavLinkClick('contact')}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg flex items-center justify-between text-gray-800"
              >
                <span>Контакты</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-semibold text-sm text-gray-500 mb-3">ПОЛЕЗНЫЕ ССЫЛКИ</h3>
              <div className="space-y-2">
                <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded-lg text-gray-800 text-sm flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 bg-gray-100 rounded">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 3L16.293 6.293L9.293 13.293L10.707 14.707L17.707 7.707L21 11V3H13Z" fill="#5533EA"/>
                      <path d="M19 19H5V5H12L10 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V14L19 12V19Z" fill="#5533EA"/>
                    </svg>
                  </div>
                  Источник трафика статистика
                </a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded-lg text-gray-800 text-sm flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 bg-gray-100 rounded">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 3L16.293 6.293L9.293 13.293L10.707 14.707L17.707 7.707L21 11V3H13Z" fill="#5533EA"/>
                      <path d="M19 19H5V5H12L10 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V14L19 12V19Z" fill="#5533EA"/>
                    </svg>
                  </div>
                  Запись на настройку
                </a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded-lg text-gray-800 text-sm flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 bg-gray-100 rounded">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 3L16.293 6.293L9.293 13.293L10.707 14.707L17.707 7.707L21 11V3H13Z" fill="#5533EA"/>
                      <path d="M19 19H5V5H12L10 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V14L19 12V19Z" fill="#5533EA"/>
                    </svg>
                  </div>
                  Аудит рекламной кампании
                </a>
                <a href="#" className="block px-3 py-2 hover:bg-gray-100 rounded-lg text-gray-800 text-sm flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2 bg-gray-100 rounded">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 3L16.293 6.293L9.293 13.293L10.707 14.707L17.707 7.707L21 11V3H13Z" fill="#5533EA"/>
                      <path d="M19 19H5V5H12L10 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V14L19 12V19Z" fill="#5533EA"/>
                    </svg>
                  </div>
                  Бесплатная консультация
                </a>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-semibold text-sm text-gray-500 mb-3">КОНТАКТЫ</h3>
              <div className="space-y-2">
                <div className="flex items-start px-3 py-2">
                  <MapPin className="h-5 w-5 text-[#5533EA] mr-2 mt-0.5" />
                  <span className="text-sm text-gray-700">г. Уфа</span>
                </div>
                <div className="flex items-start px-3 py-2">
                  <Phone className="h-5 w-5 text-[#5533EA] mr-2 mt-0.5" />
                  <span className="text-sm text-gray-700">+7(937) 343-45-43</span>
                </div>
                <div className="flex items-start px-3 py-2">
                  <Mail className="h-5 w-5 text-[#5533EA] mr-2 mt-0.5" />
                  <span className="text-sm text-gray-700">olegbusiness@mail.ru</span>
                </div>
                
                <div className="flex items-center space-x-2 px-3 py-2">
                  <span className="text-xs text-gray-500">Соц. сети:</span>
                  <div className="flex space-x-2">
                    <a href="#" className="w-8 h-8 bg-[#5533EA]/10 rounded-full flex items-center justify-center">
                      <svg width="18" height="18" fill="currentColor" className="text-[#5533EA]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-[#5533EA]/10 rounded-full flex items-center justify-center">
                      <svg width="18" height="18" fill="currentColor" className="text-[#5533EA]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.915 13.028c-.388-.49-.277-.708 0-1.146.005-.005 3.208-4.431 3.538-5.932l.002-.001c.164-.547 0-.949-.793-.949h-2.624c-.668 0-.976.345-1.141.731 0 0-1.336 3.198-3.226 5.271-.61.599-.892.791-1.225.791-.164 0-.419-.192-.419-.739v-5.105c0-.656-.187-.949-.74-.949h-4.126c-.419 0-.668.306-.668.591 0 .622.945.765 1.043 2.515v3.797c0 .832-.151.985-.486.985-.892 0-3.057-3.211-4.34-6.886-.259-.713-.512-1.001-1.185-1.001h-2.625c-.749 0-.9.345-.9.731 0 .682.892 4.073 4.148 8.553 2.17 3.058 5.226 4.715 8.006 4.715 1.671 0 1.875-.368 1.875-1.001 0-2.922-.151-3.198.686-3.198.388 0 1.056.192 2.616 1.667 1.783 1.749 2.076 2.532 3.074 2.532h2.624c.748 0 1.127-.368.909-1.094-.499-1.527-3.871-4.668-4.023-4.878z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-[#5533EA]/10 rounded-full flex items-center justify-center">
                      <svg width="18" height="18" fill="currentColor" className="text-[#5533EA]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.085.34.157.451.214.719.365 1.314.461 1.694.325.379-.136.654-.511.824-1.122.069-.25.142-.592.221-1.027.079-.436.114-.812.114-1.129 0-.306-.035-.599-.114-.879-.07-.281-.168-.498-.291-.653-.124-.154-.3-.281-.521-.379-.224-.097-.469-.145-.734-.145-.128 0-.428.019-.896.055-.47.037-.836.067-1.096.091-.259.023-.566.055-.918.096-.353.04-.605.072-.755.091-.165.024-.481.067-.947.145-.467.075-.745.12-.835.135-.181.030-.572.111-1.175.24-.603.13-1.053.227-1.35.296-.297.068-.609.177-.936.325-.328.147-.505.294-.531.436.4.544.17.647.361.647.127 0 .313-.046.562-.136.249-.095.457-.142.625-.142.127 0 .217.048.268.144s.089.296.117.6c.031.388.05.793.061 1.212.008.42-.004.797-.044 1.133-.035.343-.127.57-.268.684-.142.114-.406.171-.788.171-.127 0-.249-.018-.361-.053-.112-.035-.181-.078-.209-.127-.026-.05-.039-.196-.039-.438 0-.173.015-.413.044-.717.03-.306.044-.523.044-.654 0-.153-.053-.275-.159-.367-.107-.091-.216-.138-.33-.138-.157 0-.308.07-.452.205-.145.137-.243.302-.296.497-.052.194-.079.51-.079.946 0 .358.056.639.17.84.112.204.215.341.312.416z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-[#5533EA]/10 rounded-full flex items-center justify-center">
                      <svg width="18" height="18" fill="currentColor" className="text-[#5533EA]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
