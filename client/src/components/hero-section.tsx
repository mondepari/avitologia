import { CalculatorIcon, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-purple min-h-screen pt-20 flex flex-col justify-between relative overflow-hidden">
      {/* Purple Circle Decorations */}
      <div className="purple-circle-decoration w-[600px] h-[600px] top-[-200px] right-[-200px] opacity-60"></div>
      <div className="purple-circle-decoration w-[500px] h-[500px] bottom-[10%] left-[-200px] opacity-50"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            <div className="text-left mb-2">
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
            
            <div className="mb-10">
              <button 
                onClick={() => scrollToSection('calculator')} 
                className="bg-primary flex items-center text-white font-medium px-8 py-4 rounded-full hover:bg-primary/90 transition duration-300 text-center shadow-lg max-w-xs w-full"
              >
                <CalculatorIcon className="h-5 w-5 mr-2" />
                <span className="font-bold">РАССЧИТАТЬ СТОИМОСТЬ</span>
                <span className="text-xs ml-2 text-white/80">(за 1 минуту в подарок!)</span>
              </button>
              
              <div className="flex items-center mt-4">
                <MessageCircle className="h-5 w-5 mr-2 text-white" />
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-white font-medium hover:underline cursor-pointer"
                >
                  ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-10 mt-6">
              <div className="flex items-center">
                <div className="text-[#9470ff] text-3xl font-bold mr-2">×2.7</div>
                <div className="text-xs text-white/90 max-w-[100px]">
                  Средний коэффициент увеличения прибыли бизнеса
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative flex justify-center lg:justify-end">
              <img 
                src="./src/assets/images/phone.png" 
                alt="Телефон с аналитикой" 
                className="max-h-[550px] md:max-h-[650px] object-contain relative z-20"
              />
              
              <div className="absolute top-[15%] right-[5%] z-30">
                <div className="flex items-center">
                  <div className="bg-white rounded-full shadow-xl p-2">
                    <div className="flex items-center space-x-1">
                      <img src="./src/assets/icons/google-icon.svg" alt="Google" className="w-6 h-6" />
                      <img src="./src/assets/icons/yandex-icon.svg" alt="Яндекс" className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="mt-20 pt-16 bg-white rounded-t-[50px] relative z-20">
        <div className="container mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-10 text-left">У ВАС БУДЕТ<br />ЭФФЕКТИВНАЯ РЕКЛАМА</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary rounded-xl p-6 text-white shadow-lg">
              <div className="mb-4 flex items-center">
                <img src="./src/assets/icons/chart-icon.svg" alt="Аналитика" className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Выбор стратегии продвижения</h3>
              <p className="text-sm opacity-90">
                Оптимизирую рекламный бюджет и повышаю эффективность каждого рубля на рекламу
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md">
              <div className="mb-4 flex items-center">
                <img src="./src/assets/icons/shield-icon.svg" alt="Защита" className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold mb-3">На ваш сайт идут только целевые посетители</h3>
              <p className="text-sm text-gray-600">
                Четко настроенный таргетинг обеспечивает попадание рекламы точно в ЦА
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md">
              <div className="mb-4 flex items-center">
                <img src="./src/assets/icons/analytics-icon.svg" alt="Отчеты" className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Грамотная настройка аналитики</h3>
              <p className="text-sm text-gray-600">
                Дает максимальную точность отчетов и понимание динамики конверсий
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
