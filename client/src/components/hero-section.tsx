import { MessageCircle, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [viewCount, setViewCount] = useState(349286);
  const [conversionCount, setConversionCount] = useState(25.12);
  const conversionAnimationRef = useRef<boolean>(false);
  
  useEffect(() => {
    // Увеличиваем счетчик просмотров каждые 2 секунды
    const viewInterval = setInterval(() => {
      setViewCount(prevCount => prevCount + Math.floor(Math.random() * 15) + 1);
    }, 2000);
    
    // Увеличиваем счетчик конверсии на +1 каждые 5 секунд
    const conversionInterval = setInterval(() => {
      setConversionCount(prevCount => {
        conversionAnimationRef.current = true;
        setTimeout(() => {
          conversionAnimationRef.current = false;
        }, 1000);
        return +(prevCount + 0.01).toFixed(2); // Увеличиваем на 0.01 и округляем до 2 знаков
      });
    }, 5000);
    
    return () => {
      clearInterval(viewInterval);
      clearInterval(conversionInterval);
    };
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
    <header className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] pt-[130px] pb-24 flex flex-col justify-between relative overflow-hidden">
      {/* Left white circular decoration */}
      <div className="absolute top-[10%] left-[-15%] w-[40%] h-[80%] rounded-full bg-white opacity-5"></div>
      
      {/* Right white circular decoration */}
      <div className="absolute top-[10%] right-[-15%] w-[40%] h-[80%] rounded-full bg-white opacity-5"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-14 xl:px-16 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="text-white mb-4">
              <h2 className="text-xl font-normal">Настройка и ведение Яндекс Директ под ключ</h2>
            </div>
            
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black text-white leading-tight">
                ПОЛУЧАЙТЕ СТАБИЛЬНЫЙ<br />
                ПОТОК ЖИВЫХ КЛИЕНТОВ<br />
                ЕЖЕНЕДЕЛЬНО
              </h1>
            </div>
            
            <div className="mb-10">
              <p className="text-lg text-white opacity-90">
                С помощью профессиональной настройки<br />
                и ведения контекстной рекламы
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button 
                onClick={() => scrollToSection('calculator')} 
                className="w-full sm:w-auto bg-white text-[#6200EE] font-medium px-8 py-3.5 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 text-center text-sm"
              >
                РАССЧИТАТЬ СТОИМОСТЬ
                <span className="block text-[10px] opacity-70 mt-0.5">(за 1 минуту + подарок)</span>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center text-white hover:text-white/80 transition-all duration-300 cursor-pointer group"
              >
                <svg className="h-5 w-5 text-white mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
                <span className="font-medium">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</span>
              </button>
            </div>
            
            <div className="mt-14 flex items-center">
              <div className="flex items-center">
                <div className="text-white text-6xl font-bold">×2.7</div>
                <img 
                  src="./src/assets/icons/chart-growth.svg" 
                  alt="График роста" 
                  className="h-16 w-16 ml-4" 
                />
              </div>
              <div className="text-sm text-white opacity-80 ml-4 max-w-[240px]">
                Средний коэффициент увеличения прибыли бизнеса
              </div>
            </div>
          </div>
          
          {/* Right Column - Phone Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="./src/assets/images/phone.png"
                alt="Телефон с аналитикой" 
                className="max-h-[600px] object-contain relative z-10"
              />
              
              {/* Yandex Logo Badge */}
              <div className="absolute top-1/3 right-0 transform translate-x-1/4 -translate-y-1/2 bg-white rounded-xl p-2 shadow-lg z-20">
                <svg viewBox="0 0 24 24" fill="#FF0000" width="40" height="40">
                  <path d="M2.04 12c0-5.523 4.476-10 10-10 5.522 0 10 4.477 10 10s-4.478 10-10 10c-5.524 0-10-4.477-10-10z"/>
                  <path d="M13.32 16.38h1.1V7.22h-1.82c-2.1 0-3.22 1.05-3.22 2.57 0 1.23.53 1.82 1.44 2.62l-2.34 3.97h1.21l2.24-3.89-.52-.36c-.72-.5-1.13-1-1.13-1.97 0-.83.67-1.44 1.85-1.44h1.19v8.66z" fill="#fff"/>
                </svg>
              </div>
              
              {/* Metrics Widget */}
              <div className="absolute top-[30%] right-[10%] bg-white rounded-xl shadow-xl p-2.5">
                <div className="text-sm font-semibold text-gray-700">Просмотры <span className="text-green-500">+8%</span></div>
                <div className="text-lg font-bold text-[#6200EE]">{formatNumber(viewCount)}</div>
              </div>
              
              {/* Avito Logo Badge */}
              <div className="absolute bottom-1/3 right-0 transform translate-x-1/2 bg-white rounded-xl p-2 shadow-lg z-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 91" width="40" height="40">
                  <path d="M282.3 0c12.5 0 22.7 10.2 22.7 22.7v45.5c0 12.5-10.2 22.7-22.7 22.7h-45.5c-12.5 0-22.7-10.2-22.7-22.7v-45.5c0-12.5 10.2-22.7 22.7-22.7h45.5z" fill="#97CF26"/>
                  <path d="M259.6 50.4c5.3 0 9.6-4.3 9.6-9.6s-4.3-9.6-9.6-9.6-9.6 4.3-9.6 9.6 4.3 9.6 9.6 9.6z" fill="#FFF"/>
                  <path d="M244.5 24.1c-2.5 0-4.5 2-4.5 4.5v33.7c0 2.5 2 4.5 4.5 4.5h30.1c2.5 0 4.5-2 4.5-4.5v-33.7c0-2.5-2-4.5-4.5-4.5h-30.1zm30.1 8.2v26.5h-30.1v-26.5h30.1z" fill="#FFF"/>
                </svg>
              </div>
              
              {/* Conversion Widget */}
              <div className="absolute bottom-[20%] right-[10%] bg-white rounded-xl shadow-xl p-2.5">
                <div className="text-sm font-semibold text-gray-700">Конверсия</div>
                <div className="flex items-center">
                  <div className="text-lg font-bold text-[#6200EE]">{conversionCount.toFixed(2).replace('.', ',')}%</div>
                  {conversionAnimationRef.current && (
                    <span className="ml-1 text-xs font-bold text-green-500 animate-pulse">+1</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
