import React, { useState } from "react";
import { SectionDecoration } from "./ui/decorative-elements";
import rocketIcon from "../assets/icons/rocket.svg";
import keyboardIcon from "../assets/icons/keyboard.svg";
import mapIcon from "../assets/icons/map.svg";
import monitorIcon from "../assets/icons/monitor.svg";
import searchScreenshot from "../assets/search-screenshot.png";
import rsaScreenshot from "../assets/rsa-screenshot.png";
import phoneFrame from "../assets/phone-frame.svg";

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
  const [activeTab, setActiveTab] = useState<'yandex' | 'google'>('yandex');
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

        <div className="flex flex-col mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Как это работает?</h3>
              <div className="relative">
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center mb-2">
                    <div className="text-primary text-5xl font-bold mr-6">1</div>
                    <p className="text-base">Клиент вводит в поисковую строку запрос, который его волнует</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="text-primary text-5xl font-bold mr-6">2</div>
                    <p className="text-base">Вы появляетесь в выдаче. Заинтересовавшись, клиент, кликает по Вашему объявлению</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="text-primary text-5xl font-bold mr-6">3</div>
                    <p className="text-base">Заходит на сайт, находит на нём решение своей проблемы и оставляет заявку</p>
                  </div>
                </div>
                <div className="absolute right-0 top-1/4 opacity-10">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z" fill="#CCCCCC"/>
                    <text x="50" y="120" fontSize="120" fontWeight="bold" fill="#DDDDDD">?</text>
                  </svg>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Как выглядит объявление?</h3>
              <div className="flex justify-center gap-4 mb-6">
                <button 
                  onClick={() => setActiveTab('yandex')}
                  className={`px-8 py-2 rounded-full transition-all ${activeTab === 'yandex' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Яндекс
                </button>
                <button 
                  onClick={() => setActiveTab('google')}
                  className={`px-8 py-2 rounded-full transition-all ${activeTab === 'google' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Google
                </button>
              </div>
              
              <div className="flex flex-row gap-4 justify-center">
                <div className="w-1/2">
                  <p className="font-medium text-center mb-4">Поиск</p>
                  <div className="relative flex justify-center">
                    <div className="relative max-w-[220px]">
                      <img src={phoneFrame} alt="Телефон" className="w-full" />
                      <div className="absolute top-[40px] left-[20px] right-[20px] bottom-[40px] overflow-hidden bg-white">
                        <img 
                          src={searchScreenshot} 
                          alt="Пример поисковой рекламы" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-1/2">
                  <p className="font-medium text-center mb-4">РСЯ</p>
                  <div className="relative flex justify-center">
                    <div className="relative max-w-[220px]">
                      <img src={phoneFrame} alt="Телефон" className="w-full" />
                      <div className="absolute top-[40px] left-[20px] right-[20px] bottom-[40px] overflow-hidden bg-white">
                        <img 
                          src={rsaScreenshot} 
                          alt="Пример рекламы в РСЯ" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
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