import { useState, useEffect, useCallback } from 'react';
import { Link } from 'wouter';
import Logo from '@/components/ui/logo';
import { Menu, X, Phone, MapPin } from 'lucide-react';

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
    setSideMenuOpen(prevState => !prevState);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-gray-100 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}>
        <div className="mx-auto max-w-7xl py-3 px-4">
          <div className="flex items-center justify-between">
            {/* Логотип и описание */}
            <div className="flex items-center">
              <Logo />
              <div className="ml-3 text-xs font-medium text-gray-600 hidden lg:block">
                <p>Сертифицированный специалист по<br />Яндекс.Директ</p>
              </div>
            </div>
            
            {/* Правая часть хедера - для больших экранов */}
            <div className="hidden md:flex items-center ml-auto">
              {/* Локация */}
              <div className="flex items-center mr-5">
                <MapPin className="h-4 w-4 mr-1 text-purple-700" />
                <span className="text-sm text-gray-600">Работаем удаленно по всей России</span>
              </div>
              
              <div className="flex items-center space-x-3">
                {/* Социальные сети */}
                <div className="flex items-center space-x-2">
                  {/* Telegram */}
                  <a 
                    href="https://t.me/username" 
                    target="_blank" 
                    rel="noopener" 
                    className="flex items-center justify-center w-7 h-7 bg-purple-100 rounded-full hover:bg-purple-200 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                      <path d="M17 8.5L13.5 17.5L11 12.5L6 10L17 8.5Z" />
                      <path d="M17 8.5L11 12.5" />
                    </svg>
                  </a>
                  
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/7937343453" 
                    target="_blank" 
                    rel="noopener" 
                    className="flex items-center justify-center w-7 h-7 bg-purple-100 rounded-full hover:bg-purple-200 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-purple-700">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                  
                  {/* Avito */}
                  <a 
                    href="https://avito.ru/profile" 
                    target="_blank" 
                    rel="noopener" 
                    className="flex items-center justify-center w-7 h-7 bg-purple-100 rounded-full hover:bg-purple-200 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-purple-700">
                      <path d="M12.54 10.757C13.817 10.757 14.854 9.72 14.854 8.443C14.854 7.166 13.817 6.129 12.54 6.129C11.263 6.129 10.226 7.166 10.226 8.443C10.226 9.72 11.263 10.757 12.54 10.757Z"/>
                      <path d="M5.217 13.35C7.235 13.35 8.87 11.716 8.87 9.697C8.87 7.679 7.235 6.045 5.217 6.045C3.199 6.045 1.564 7.679 1.564 9.697C1.564 11.716 3.199 13.35 5.217 13.35Z"/>
                      <path d="M12.344 4.809C13.621 4.809 14.658 3.772 14.658 2.495C14.658 1.218 13.621 0.181 12.344 0.181C11.067 0.181 10.03 1.218 10.03 2.495C10.03 3.772 11.067 4.809 12.344 4.809Z"/>
                      <path d="M5.413 4.613C6.181 4.613 6.802 3.991 6.802 3.223C6.802 2.456 6.181 1.834 5.413 1.834C4.645 1.834 4.023 2.456 4.023 3.223C4.023 3.991 4.645 4.613 5.413 4.613Z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Телефон */}
                <button className="bg-purple-100 text-purple-700 flex items-center rounded-full px-4 py-1.5 hover:bg-purple-200 transition-all">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium text-sm">+7(937) 343-45-43</span>
                </button>
              </div>
            </div>
            
            {/* Кнопка телефона на мобильном */}
            <div className="md:hidden ml-auto mr-2">
              <button className="bg-purple-100 text-purple-700 flex items-center rounded-full p-2 hover:bg-purple-200 transition-all">
                <Phone className="h-5 w-5" />
              </button>
            </div>
            
            {/* Кнопка меню */}
            <button 
              type="button" 
              onClick={toggleSideMenu}
              className="focus:outline-none text-purple-700 p-2 flex items-center justify-center"
              aria-label={sideMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {sideMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Затемнение для бокового меню */}
      {sideMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
          onClick={toggleSideMenu}
        />
      )}
      
      {/* Боковое меню */}
      <div 
        className={`fixed top-0 right-0 h-full bg-white z-50 w-[300px] shadow-xl transition-transform duration-300 ease-in-out transform ${
          sideMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        {/* Заголовок бокового меню */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <Logo />
          </div>
          <button 
            onClick={toggleSideMenu}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        
        {/* Содержимое бокового меню */}
        <div className="p-4">
          <div className="space-y-4">
            {/* Навигационные пункты меню */}
            <div className="space-y-2">
              <Link href="/">
                <div className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg flex items-center justify-between text-gray-800">
                  <span>Главная</span>
                </div>
              </Link>
              <Link href="/avito">
                <div className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded-lg flex items-center justify-between text-gray-800">
                  <span>Авито реклама</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
