import { CalculatorIcon, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-purple min-h-screen pt-16 flex flex-col justify-between relative overflow-hidden">
      {/* Purple Circle Decorations */}
      <div className="purple-circle-decoration w-[700px] h-[700px] top-[-250px] right-[-250px]"></div>
      <div className="purple-circle-decoration w-[600px] h-[600px] bottom-[10%] left-[-300px]"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            <div className="text-left mb-2 mt-4">
              <h2 className="text-xl text-white mb-2">Настройка и ведение Яндекс Директ под ключ</h2>
            </div>
            
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight uppercase">
                ПОЛУЧАЙТЕ СТАБИЛЬНЫЙ<br />
                ПОТОК ЖИВЫХ КЛИЕНТОВ<br />
                ЕЖЕНЕДЕЛЬНО
              </h1>
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-white/90">
                С помощью профессиональной настройки<br />
                и ведения контекстной рекламы
              </p>
            </div>
            
            <div className="mt-6 mb-10">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-start">
                <button 
                  onClick={() => scrollToSection('calculator')} 
                  className="bg-[#8139f2] border-2 border-white/20 text-white font-medium px-6 py-3 rounded-full hover:bg-[#7932e0] hover:border-white hover:shadow-xl transition-all duration-300 text-center shadow-lg flex items-center justify-center group"
                >
                  <img src="./src/assets/icons/price-icon.svg" alt="Цена" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="font-bold">РАССЧИТАТЬ СТОИМОСТЬ</span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center text-white font-medium hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/30 rounded-full px-6 py-3 bg-white/5 group"
                >
                  <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span>ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</span>
                </button>
              </div>
              
              <div className="mt-8 bg-white rounded-lg p-4 shadow-xl flex items-center w-full sm:w-auto sm:min-w-[400px] max-w-[500px]">
                <div className="flex items-center space-x-3 mx-auto">
                  <img src="./src/assets/icons/stats-icon.svg" alt="Статистика" className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-purple-600">×2.7</div>
                    <div className="text-xs text-gray-500">
                      Средний коэффициент<br />
                      увеличения прибыли
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-xl p-6 text-[#8139f2] shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="mb-5 flex justify-center">
                    <div className="bg-white border border-[#8139f2]/20 w-16 h-16 rounded-xl flex items-center justify-center">
                      <img src="./src/assets/icons/chart-purple.svg" alt="Аналитика" className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Выбор стратегии продвижения</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Оптимизирую рекламный бюджет и повышаю эффективность каждого рубля на рекламу
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-[#8139f2] shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="mb-5 flex justify-center">
                    <div className="bg-white border border-[#8139f2]/20 w-16 h-16 rounded-xl flex items-center justify-center">
                      <img src="./src/assets/icons/shield-purple.svg" alt="Защита" className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Целевые посетители</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Четко настроенный таргетинг обеспечивает попадание рекламы точно в ЦА
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-[#8139f2] shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="mb-5 flex justify-center">
                    <div className="bg-white border border-[#8139f2]/20 w-16 h-16 rounded-xl flex items-center justify-center">
                      <img src="./src/assets/icons/analytics-purple.svg" alt="Отчеты" className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Настройка аналитики</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Дает максимальную точность отчетов и понимание динамики конверсий
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative flex items-center justify-center lg:justify-end h-full mt-10 lg:mt-0">
              <div className="relative z-20">
                <img 
                  src="./src/assets/images/phone.png" 
                  alt="Телефон с аналитикой" 
                  className="max-h-[500px] md:max-h-[600px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* White bottom curve decoration */}
      <div className="w-full h-12 bg-white rounded-t-[50px] absolute bottom-0 left-0 right-0"></div>
    </header>
  );
};

export default HeroSection;
