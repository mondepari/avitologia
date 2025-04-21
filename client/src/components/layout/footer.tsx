import Logo from "@/components/ui/logo";
import { Link } from "wouter";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Purple Circle Decoration */}
      <div className="absolute w-[400px] h-[400px] top-[-20%] right-[-10%] rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute w-[300px] h-[300px] bottom-[-10%] left-[-10%] rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo />
            <p className="text-gray-400 my-6">
              Профессиональная настройка контекстной рекламы для бизнеса любого масштаба. Увеличение продаж и привлечение клиентов с гарантией результата.
            </p>
            
            <div className="flex space-x-3 mt-6">
              <a 
                href="#" 
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Главная</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Услуги</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Кейсы</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>О себе</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Контакты</span>
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Яндекс.Директ</span>
                </button>
              </li>

              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Аналитика</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Ретаргетинг</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition duration-300 flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Оптимизация</span>
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email:</div>
                  <a 
                    href="mailto:contact@sergeypankratov.ru" 
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    contact@sergeypankratov.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Телефон:</div>
                  <a 
                    href="tel:+79123456789" 
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    +7 (912) 345-67-89
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <div>
                  <div className="text-sm text-gray-400 mb-1">Где я работаю:</div>
                  <div className="text-gray-300">
                    Удаленно по всей РФ и СНГ
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Сергей Панкратов. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
