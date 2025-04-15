import { CalculatorIcon, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-purple min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Curved white background */}
      <div className="absolute left-0 right-0 bottom-0 h-24 bg-white rounded-t-[50px]"></div>
      
      {/* Purple Circle Decorations */}
      <div className="purple-circle-decoration w-[500px] h-[500px] top-[-100px] right-[-200px] opacity-50"></div>
      <div className="purple-circle-decoration w-[300px] h-[300px] bottom-[30%] left-[-100px] opacity-40"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            <div className="text-left mb-4">
              <h2 className="text-xl text-white mb-2">Настройка и ведение Яндекс Директ под ключ</h2>
            </div>
            
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                ПОЛУЧАЙТЕ СТАБИЛЬНЫЙ<br />
                ПОТОК ЖИВЫХ КЛИЕНТОВ<br />
                ЕЖЕНЕДЕЛЬНО
              </h1>
            </div>
            
            <div className="mb-8">
              <p className="text-lg text-white/90">
                С помощью профессиональной настройки<br />
                и ведения контекстной рекламы
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button 
                onClick={() => scrollToSection('calculator')} 
                className="bg-primary flex items-center text-white font-medium px-8 py-3.5 rounded-full hover:bg-primary/90 transition duration-300 text-center shadow-lg"
              >
                <CalculatorIcon className="h-5 w-5 mr-2" />
                <span>РАССЧИТАТЬ СТОИМОСТЬ</span>
                <span className="text-xs ml-2">(за 1 минуту в подарок)</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-white/10 text-white border border-white/30 flex items-center font-medium px-8 py-3.5 rounded-full hover:bg-white/20 transition duration-300 text-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-6 mt-4">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">27%</div>
                <div className="text-sm text-white/80">Рост продаж</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">14 дней</div>
                <div className="text-sm text-white/80">До первых заявок</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative">
              <img 
                src="./src/assets/images/phone.png" 
                alt="Телефон с аналитикой" 
                className="max-h-[500px] ml-auto object-contain relative z-20"
              />
              
              <div className="absolute right-[-30px] bottom-[30%] transform translate-x-1/2">
                <div className="flex items-center">
                  <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
                    <div className="mr-2">
                      <img src="./src/assets/icons/stats-icon.svg" alt="Статистика" className="w-10 h-10" />
                    </div>
                    <div>
                      <div className="text-primary text-xl font-bold">x2.7</div>
                      <div className="text-xs text-gray-600">
                        Средний коэффициент<br />
                        увеличения прибыли бизнеса
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-0 top-[20%] transform -translate-x-1/2">
                <div className="bg-white rounded-lg shadow-lg p-3">
                  <div className="flex items-center space-x-2">
                    <img src="./src/assets/icons/google-icon.svg" alt="Google" className="w-6 h-6" />
                    <img src="./src/assets/icons/yandex-icon.svg" alt="Яндекс" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-8 rounded-t-[50px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">ЭФФЕКТИВНЫЕ ИНСТРУМЕНТЫ ДЛЯ ВАШЕГО БИЗНЕСА</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-primary rounded-xl p-5 text-white">
              <div className="mb-3">
                <img src="./src/assets/icons/chart-icon.svg" alt="Аналитика" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Стратегия продвижения</h3>
              <p className="text-sm opacity-90">
                Оптимизирую рекламный бюджет и повышаю эффективность каждого рубля
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="mb-3">
                <img src="./src/assets/icons/shield-icon.svg" alt="Защита" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Целевые посетители</h3>
              <p className="text-sm text-gray-600">
                Точная настройка таргетинга обеспечивает попадание рекламы только вашей ЦА
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="mb-3">
                <img src="./src/assets/icons/analytics-icon.svg" alt="Отчеты" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Прозрачная отчетность</h3>
              <p className="text-sm text-gray-600">
                Регулярные отчеты о результатах и рекомендации по дальнейшей оптимизации
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
