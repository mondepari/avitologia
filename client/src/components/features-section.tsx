import React from "react";
import { SectionDecoration } from "./ui/decorative-elements";
import rocketIcon from "../assets/icons/rocket.svg";
import keyboardIcon from "../assets/icons/keyboard.svg";
import mapIcon from "../assets/icons/map.svg";
import monitorIcon from "../assets/icons/monitor.svg";
import searchExample from "../assets/search-example.svg";
import rsaExample from "../assets/rsa-example.svg";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1">
      <div className="p-6 flex justify-center">
        {icon}
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
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
            <img src={rocketIcon} alt="Скорость" className="w-10 h-10 text-primary" />
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
            <img src={keyboardIcon} alt="Таргетинг" className="w-10 h-10 text-primary" />
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
            <img src={mapIcon} alt="Аналитика" className="w-10 h-10 text-primary" />
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
            <img src={monitorIcon} alt="Технологии" className="w-10 h-10 text-primary" />
          </div>
        </div>
      ),
      title: "Технологичные решения",
      description: "Использование современных инструментов и технологий для автоматизации процессов и достижения максимальной эффективности"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-16 mb-20">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Как это работает?</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">1</div>
                <div>
                  <p className="text-lg">Клиент вводит в поисковую строку запрос, который его волнует</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">2</div>
                <div>
                  <p className="text-lg">Вы появляетесь в выдаче. Заинтересовавшись, клиент, кликает по Вашему объявлению</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">3</div>
                <div>
                  <p className="text-lg">Заходит на сайт, находит на нём решение своей проблемы и оставляет заявку</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Как выглядит объявление?</h3>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <p className="text-center text-lg">Поиск</p>
                <div className="mt-4 flex justify-center">
                  <img src={searchExample} alt="Пример поисковой рекламы" className="max-w-full h-auto rounded border border-gray-200" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <p className="text-center text-lg">РСЯ</p>
                <div className="mt-4 flex justify-center">
                  <img src={rsaExample} alt="Пример рекламы в РСЯ" className="max-w-full h-auto rounded border border-gray-200" />
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2 px-6 py-2 bg-[#8e3df5] text-white rounded-md">
                  <span>Яндекс</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-2 bg-gray-200 text-gray-700 rounded-md">
                  <span>Google</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;