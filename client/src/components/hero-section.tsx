import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white min-h-screen pt-16 flex flex-col justify-between relative overflow-hidden">
      {/* Purple Decoration */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#8139f2] z-0 rounded-bl-[100px]"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10 flex-grow">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col">
              <div className="text-left mb-4 mt-4">
                <h2 className="text-xl text-gray-900 font-normal">Настройка и ведение Яндекс Директ под ключ</h2>
              </div>
              
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black text-gray-900 leading-tight tracking-tight uppercase">
                  ПОЛУЧАЙТЕ СТАБИЛЬНЫЙ<br />
                  ПОТОК ЖИВЫХ КЛИЕНТОВ<br />
                  ЕЖЕНЕДЕЛЬНО
                </h1>
              </div>
              
              <div className="mb-8">
                <p className="text-lg text-gray-800">
                  С помощью профессиональной настройки<br />
                  и ведения контекстной рекламы
                </p>
              </div>
              
              <div className="mt-6 mb-10">
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 items-center">
                    <button 
                      onClick={() => scrollToSection('calculator')} 
                      className="bg-[#8139f2] text-white font-medium px-8 py-3 rounded-[30px] hover:bg-[#7235d7] hover:shadow-lg transition-all duration-300 text-center shadow-md flex items-center justify-center"
                    >
                      <span className="text-sm uppercase">РАССЧИТАТЬ СТОИМОСТЬ</span>
                      <span className="text-[10px] ml-2 opacity-80">(за 1 минуту + подарок)</span>
                    </button>
                    
                    <div 
                      onClick={() => scrollToSection('contact')}
                      className="flex items-center justify-center text-[#333] hover:text-[#8139f2] transition-all duration-300 cursor-pointer group border-b border-dashed border-[#8139f2]"
                    >
                      <div className="flex items-center">
                        <MessageCircle className="h-5 w-5 text-[#8139f2] mr-2" />
                        <span className="text-sm uppercase text-[#333]">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center">
                    <div className="flex items-center">
                      <div className="text-[#8139f2] text-5xl font-bold mr-3">×2.7</div>
                      <div className="text-sm text-gray-600 max-w-[240px]">
                        Средний коэффициент увеличения прибыли бизнеса
                      </div>
                    </div>
                    <img src="./src/assets/icons/chart-growth.svg" alt="График роста" className="h-12 w-12 ml-3" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative flex items-center justify-center lg:justify-end h-full mt-0 lg:mt-[-50px]">
                <div className="relative z-20">
                  <div className="relative">
                    <img 
                      src="./src/assets/images/phone.png"
                      alt="Телефон с аналитикой" 
                      className="max-h-[500px] md:max-h-[550px] object-contain"
                    />
                    <div className="absolute top-[15%] right-[10%] bg-white rounded-xl shadow-lg py-1 px-3 animate-pulse">
                      <div className="text-sm font-semibold text-gray-700">Просмотры <span className="text-green-500">+8%</span></div>
                      <div className="text-lg font-bold">349 286</div>
                    </div>
                    <div className="absolute top-[30%] right-[15%] bg-white rounded-xl shadow-lg p-1">
                      <img src="./src/assets/icons/yandex-red.svg" alt="Яндекс" className="w-12 h-12" />
                    </div>
                    <div className="absolute bottom-[30%] right-[5%] bg-white rounded-xl shadow-lg py-1 px-3">
                      <div className="text-sm font-semibold text-gray-700">Конверсия</div>
                      <div className="text-lg font-bold">25,12%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-5">
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
      {/* White bottom curve decoration */}
      <div className="w-full h-12 bg-white rounded-t-[50px] absolute bottom-0 left-0 right-0"></div>
    </header>
  );
};

export default HeroSection;
