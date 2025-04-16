import React from "react";
import { SectionDecoration } from "./ui/decorative-elements";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg h-full flex flex-col border border-gray-800">
      <div className="p-6 flex justify-center">
        {icon}
      </div>
      <div className="p-6 text-gray-400 text-center">
        <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <div className="w-20 h-20 relative">
          <div className="absolute w-full h-full rounded-full bg-primary/20 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="./src/assets/icons/rocket.svg" alt="Скорость" className="w-10 h-10 text-primary" onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238139f2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'%3E%3C/path%3E%3Cpath d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z'%3E%3C/path%3E%3Cpath d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'%3E%3C/path%3E%3Cpath d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'%3E%3C/path%3E%3C/svg%3E";
            }} />
          </div>
        </div>
      ),
      title: "Высокая скорость работы",
      description: "Быстрый запуск и оптимизация рекламных кампаний для достижения максимальной эффективности в короткие сроки"
    },
    {
      icon: (
        <div className="w-20 h-20 relative">
          <div className="absolute w-full h-full rounded-full bg-primary/20 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="./src/assets/icons/keyboard.svg" alt="Таргетинг" className="w-10 h-10 text-primary" onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238139f2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='4' width='20' height='16' rx='2' ry='2'/%3E%3Cpath d='M6 8h.001'/%3E%3Cpath d='M10 8h.001'/%3E%3Cpath d='M14 8h.001'/%3E%3Cpath d='M18 8h.001'/%3E%3Cpath d='M8 12h.001'/%3E%3Cpath d='M12 12h.001'/%3E%3Cpath d='M16 12h.001'/%3E%3Cpath d='M7 16h10'/%3E%3C/svg%3E";
            }} />
          </div>
        </div>
      ),
      title: "Точный таргетинг",
      description: "Целевая реклама, нацеленная именно на вашу аудиторию, что увеличивает конверсию и снижает стоимость лида"
    },
    {
      icon: (
        <div className="w-20 h-20 relative">
          <div className="absolute w-full h-full rounded-full bg-primary/20 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="./src/assets/icons/map.svg" alt="Аналитика" className="w-10 h-10 text-primary" onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238139f2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21'/%3E%3Cline x1='9' y1='3' x2='9' y2='18'/%3E%3Cline x1='15' y1='6' x2='15' y2='21'/%3E%3C/svg%3E";
            }} />
          </div>
        </div>
      ),
      title: "Детальная аналитика",
      description: "Полная прозрачность процесса с подробными отчетами о результатах и постоянной оптимизацией для улучшения показателей"
    },
    {
      icon: (
        <div className="w-20 h-20 relative">
          <div className="absolute w-full h-full rounded-full bg-primary/20 animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/src/assets/icons/monitor.svg" alt="Технологии" className="w-10 h-10" onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238139f2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='3' width='20' height='14' rx='2'/%3E%3Cline x1='8' y1='21' x2='16' y2='21'/%3E%3Cline x1='12' y1='17' x2='12' y2='21'/%3E%3C/svg%3E";
            }} />
          </div>
        </div>
      ),
      title: "Технологичные решения",
      description: "Использование современных инструментов и технологий для автоматизации процессов и достижения максимальной эффективности"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-1/3 h-32 bg-primary" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}></div>
      
      {/* Анимированные круги */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-primary/20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary/15 animate-float-right"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/10 animate-float-left"></div>
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full bg-primary/15 animate-float"></div>
      
      <div className="container mx-auto px-4 pt-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
            ВЫ БУДЕТЕ ЗНАТЬ, СКОЛЬКО СТОИТ ВАШ КЛИЕНТ<br />
            И СКОЛЬКО ПРИНОСИТ КАЖДЫЙ ВЛОЖЕННЫЙ РУБЛЬ
          </h2>
          <p className="text-lg text-gray-600">Особенности контекстной рекламы</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;