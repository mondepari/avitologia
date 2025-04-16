import React from "react";
import { Check, Lock } from "lucide-react";
import wheelImage from "../assets/wheel.png";

const PriceSection: React.FC = () => {
  return (
    <section id="prices" className="relative py-20 overflow-hidden bg-gray-50">
      {/* Волнистый фон */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-gray-100/80 to-white"></div>
      
      {/* Фиолетовый круг слева */}
      <div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-primary/90 animate-float-slow"></div>
      
      {/* Анимированные круги */}
      <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-primary/20 animate-float"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full bg-primary/15 animate-float-left"></div>
      <div className="absolute top-20 right-1/3 w-12 h-12 rounded-full bg-primary/25 animate-float-right"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 uppercase">
            ВЫ НЕ ПЕРЕПЛАЧИВАЕТЕ ЗА ОФИС<br />
            И ЛИШНИХ СОТРУДНИКОВ
          </h2>
          
          <div className="inline-flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-lg mt-12">
            <Lock className="h-5 w-5" />
            <span className="font-medium">Цены фиксированы до конца работ</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {/* Первая карточка */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden relative flex-1">
            <div className="p-8">
              <div className="text-gray-600 mb-3">Для тех, кто сомневается!</div>
              <h3 className="text-xl font-bold text-primary mb-4">ЛЕГКИЙ СТАРТ</h3>
              
              <div className="space-y-2 mb-8">
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Настройка РСЯ и «Мастер кампаний»</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Запуск за 3 дня, бюджет от 20.000</span>
                </div>
              </div>
              
              <div className="mb-2">
                <button className="bg-primary text-white rounded-full py-2 px-6 text-sm font-medium hover:bg-primary/90 transition-all">
                  ВЫБРАТЬ ТАРИФ
                </button>
              </div>
            </div>
            
            <div className="absolute top-8 right-8">
              <div className="text-3xl font-bold text-gray-800">19 990 ₽</div>
            </div>
            
            {/* Изображение колеса в правом нижнем углу */}
            <div className="absolute bottom-0 right-0 w-28 h-28 overflow-hidden opacity-80">
              <img src={wheelImage} alt="Колесо" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Вторая карточка */}
          <div className="bg-primary rounded-lg shadow-lg overflow-hidden text-white relative flex-1">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4">У ВАС УЖЕ ЕСТЬ РЕКЛАМА?</h3>
              
              <p className="text-white/90 mb-6 text-sm">
                Проведу полный аудит вашей кампании и дам рекомендации по улучшению результатов рекламы.
              </p>
              
              <div className="mb-2">
                <button className="bg-white text-primary rounded-full py-2 px-6 text-sm font-medium hover:bg-white/90 transition-all">
                  ПОЛУЧИТЬ РЕКОМЕНДАЦИИ
                </button>
              </div>
              
              <div className="text-right mt-2">
                <div className="inline-block text-right">
                  <div className="text-xs text-white/80">1 первый аудит</div>
                  <div className="text-xs text-white/80">100% бесплатно</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/50">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Менеджер"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;