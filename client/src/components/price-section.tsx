import React from "react";
import { Check, Lock } from "lucide-react";
import adminImage from "../assets/admin-photo.jpg";

const PriceSection: React.FC = () => {
  return (
    <section id="prices" className="relative py-20 overflow-hidden bg-gray-50">
      {/* Волнистый фон */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-primary/90 to-primary/40" style={{ clipPath: "ellipse(80% 100% at 50% 0%)" }}></div>
      
      {/* Большой фиолетовый круг слева */}
      <div className="absolute -left-40 top-1/4 w-96 h-96 rounded-full bg-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase mb-4">
            ВЫ НЕ ПЕРЕПЛАЧИВАЕТЕ ЗА ОФИС<br />
            И ЛИШНИХ СОТРУДНИКОВ
          </h2>
          
          <div className="inline-flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-lg mb-10 mt-6">
            <Lock className="h-6 w-6" />
            <span className="font-medium">Цены фиксированы до конца работ</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Первая карточка */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
            <div className="p-8">
              <div className="mb-5 text-gray-600">Для тех, кто сомневается!</div>
              <h3 className="text-xl font-bold text-primary mb-6">ЛЕГКИЙ СТАРТ</h3>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Настройка РСЯ и «Мастер кампаний»</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Запуск за 3 дня, бюджет от 20.000</span>
                </div>
              </div>
              
              <div className="mb-6">
                <button className="bg-primary text-white rounded-full py-3 px-6 font-medium hover:bg-primary/90 transition-all">
                  ВЫБРАТЬ ТАРИФ
                </button>
              </div>
            </div>
            
            <div className="absolute top-8 right-8">
              <div className="text-3xl font-bold text-gray-800">19 990 ₽</div>
            </div>
          </div>
          
          {/* Вторая карточка */}
          <div className="bg-primary rounded-lg shadow-lg overflow-hidden text-white relative">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6">У ВАС УЖЕ ЕСТЬ РЕКЛАМА?</h3>
              
              <p className="text-white/90 mb-8">
                Проведу полный аудит вашей кампании и дам рекомендации по улучшению результатов рекламы.
              </p>
              
              <div className="mb-6">
                <button className="bg-white text-primary rounded-full py-3 px-6 font-medium hover:bg-white/90 transition-all">
                  ПОЛУЧИТЬ РЕКОМЕНДАЦИИ
                </button>
              </div>
              
              <div className="flex justify-end mt-4">
                <div className="flex flex-col items-center">
                  <div className="text-xs text-white/80">1 первый аудит</div>
                  <div className="text-xs text-white/80">100% бесплатно</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/50">
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