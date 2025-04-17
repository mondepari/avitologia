import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [viewCount, setViewCount] = useState(349286);
  
  useEffect(() => {
    // Увеличиваем счетчик просмотров каждые 2 секунды
    const interval = setInterval(() => {
      setViewCount(prevCount => prevCount + Math.floor(Math.random() * 15) + 1);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Форматируем число с пробелами между тысячами
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background min-h-screen pt-16 flex flex-col justify-between relative overflow-hidden">
      {/* Purple Circle Decoration */}
      <div className="absolute top-[-200px] right-[-200px] w-[800px] h-[800px] rounded-full bg-[#8139f2] z-0 opacity-40"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10 flex-grow">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col">
              <div className="text-left mb-4 mt-4">
                <h2 className="text-xl text-foreground font-normal">Настройка и ведение Яндекс Директ под ключ</h2>
              </div>
              
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black text-foreground leading-tight tracking-tight uppercase">
                  ПОЛУЧАЙТЕ СТАБИЛЬНЫЙ<br />
                  ПОТОК ЖИВЫХ КЛИЕНТОВ<br />
                  ЕЖЕНЕДЕЛЬНО
                </h1>
              </div>
              
              <div className="mb-8">
                <p className="text-lg text-foreground/80">
                  С помощью профессиональной настройки<br />
                  и ведения контекстной рекламы
                </p>
              </div>
              
              <div className="mt-6 mb-10">
                <div className="flex flex-col space-y-6">
                  <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 items-center">
                    <button 
                      onClick={() => scrollToSection('calculator')} 
                      className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white font-medium px-8 py-3 rounded-[30px] hover:from-[#5500D8] hover:to-[#6A26CF] hover:shadow-lg transition-all duration-300 text-center shadow-md flex items-center justify-center"
                    >
                      <span className="text-sm uppercase">РАССЧИТАТЬ СТОИМОСТЬ</span>
                      <span className="text-[10px] ml-2 opacity-80">(за 1 минуту + подарок)</span>
                    </button>
                    
                    <div 
                      onClick={() => scrollToSection('contact')}
                      className="flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 cursor-pointer group border-b border-dashed border-primary"
                    >
                      <div className="flex items-center">
                        <MessageCircle className="h-5 w-5 text-primary mr-2" />
                        <span className="text-sm uppercase text-foreground">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex items-center">
                    <div className="flex items-center">
                      <div className="text-primary text-5xl font-bold mr-3">×2.7</div>
                      <div className="text-sm text-foreground/70 max-w-[240px]">
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
                    <div className="absolute top-[15%] right-[10%] bg-white rounded-xl shadow-lg py-1 px-3">
                      <div className="text-sm font-semibold text-gray-700">Просмотры <span className="text-green-500">+8%</span></div>
                      <div className="text-lg font-bold transition-all duration-500">{formatNumber(viewCount)}</div>
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
            <div className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-xl p-6 text-white shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <div className="mb-5 flex justify-center">
                <div className="bg-white/15 backdrop-blur-sm border border-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Выбор стратегии продвижения</h3>
              <p className="text-sm text-white/80 text-center">
                Оптимизирую рекламный бюджет и повышаю эффективность каждого рубля на рекламу
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-xl p-6 text-white shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <div className="mb-5 flex justify-center">
                <div className="bg-white/15 backdrop-blur-sm border border-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Целевые посетители</h3>
              <p className="text-sm text-white/80 text-center">
                Четко настроенный таргетинг обеспечивает попадание рекламы точно в ЦА
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-xl p-6 text-white shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <div className="mb-5 flex justify-center">
                <div className="bg-white/15 backdrop-blur-sm border border-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Настройка аналитики</h3>
              <p className="text-sm text-white/80 text-center">
                Дает максимальную точность отчетов и понимание динамики конверсий
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom curve decoration */}
      <div className="w-full h-12 bg-[#111111] rounded-t-[50px] absolute bottom-0 left-0 right-0"></div>
    </header>
  );
};

export default HeroSection;
