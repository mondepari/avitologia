import { Link } from "wouter";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-28 pb-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Настрою рекламную кампанию, которая принесет клиентов
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Профессиональная настройка контекстной рекламы в Яндекс Директ и Google Ads
            с гарантией результата и прозрачной отчетностью.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('services')} 
              className="bg-primary text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
            >
              Узнать подробнее
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-white text-primary font-medium px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 text-center"
            >
              Связаться со мной
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
