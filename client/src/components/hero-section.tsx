import { Link } from "wouter";
import { PhoneIcon } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-purple min-h-screen flex items-center relative overflow-hidden">
      {/* Purple Circle Decorations */}
      <div className="purple-circle-decoration w-[500px] h-[500px] top-[-100px] right-[-200px] opacity-50"></div>
      <div className="purple-circle-decoration w-[300px] h-[300px] bottom-[10%] left-[-100px] opacity-40"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-28 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-lg text-white leading-tight mb-6">
              Увеличение узнаваемости бренда и лидогенерация
              <span className="block mt-2">в поисковых системах</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Настройка и ведение контекстной рекламы в Яндекс Директ и Google Ads
              с ежемесячным ростом конверсий
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 text-center shadow-lg"
              >
                Узнать подробнее
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary/20 text-white font-medium border border-white/30 px-8 py-3 rounded-full hover:bg-primary/30 transition duration-300 text-center"
              >
                Связаться со мной
              </button>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Клиент" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Клиент" className="w-full h-full object-cover" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="Клиент" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-xl font-bold text-white">27+</div>
                <div className="text-white/80 text-sm">довольных клиентов</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=900&q=80" 
                alt="Смартфон с рекламой" 
                className="z-20 relative rounded-3xl shadow-2xl"
              />
              <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-primary font-bold text-2xl">+27%</div>
                  <div className="text-gray-600 text-sm">Рост конверсии</div>
                </div>
              </div>
              <div className="absolute -left-4 -bottom-10 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M10 16.5L16 12L10 7.5V16.5Z" fill="#4285F4" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="2"/>
                    </svg>
                  </div>
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
