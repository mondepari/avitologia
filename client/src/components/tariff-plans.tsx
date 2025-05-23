import React from "react";
import { Check, Star } from "lucide-react";
import { ContactPopup } from "@/components/ui/contact-popup";

const TariffFeature = ({ text }: { text: string }) => (
  <div className="flex items-start mt-2">
    <Check className="h-4 w-4 text-primary/80 mr-2 flex-shrink-0 mt-0.5" />
    <span className="text-foreground/80 text-sm">{text}</span>
  </div>
);

const PlanStars = ({ count, color }: { count: number; color: string }) => {
  return (
    <div className="flex">
      {Array.from({ length: count }).map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${color} mr-1`} 
          fill="currentColor" 
        />
      ))}
    </div>
  );
};

const TariffPlans: React.FC = () => {
  const basicFeatures = [
    "Создание аккаунта",
    "Настройка адаптивных объявлений",
    "Настройка UTM-меток",
    "Заполнение расширений",
    "Добавление минус-слов",
    "Оптимизация цены кликов",
    "Анализ результатов",
    "Предоставление отчёта",
    "Аудит и оптимизация",
    "Подключение Яндекс Метрики"
  ];
  
  const standardFeatures = [
    "Настройка ретаргетинга",
    "Оптимизация объявлений",
    "Предоставление отчёта",
    "Аудит Яндекс Директа",
    "Перенос кампании",
    "Добавление минус слов",
    "Настройка таргетинга",
    "Оптимизация цены кликов",
    "Анализ результатов",
    "Предоставление отчёта"
  ];
  
  const premiumFeatures = [
    "Оптимизация цены кликов",
    "Расширение семантики",
    "Анализ результатов",
    "Аудит Яндекс Директа",
    "Анализ ключевых слов",
    "Рекомендации по объявлениям",
    "Оптимизация мест размещения",
    "Оптимизация цены рекламы",
    "Аудит посадочной страницы",
    "Подключение бидеров"
  ];

  return (
    <section id="tariff-plans" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">ТАРИФНЫЕ ПЛАНЫ</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Выберите оптимальный тарифный план для вашего бизнеса. Каждый тариф включает набор услуг, которые помогут вам достичь максимальных результатов.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Базовый тариф */}
          <div className="bg-accent rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#0247fe] p-3 flex items-center">
              <PlanStars count={1} color="text-white" />
              <span className="text-white font-bold text-xl ml-3">БАЗОВЫЙ</span>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-foreground/50 line-through text-sm">19 500 ₽</div>
                <div className="text-4xl font-bold text-foreground">15 000 ₽</div>
              </div>
              
              <div className="flex justify-center space-x-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs">Аудит<br/>бесплатно</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs">Настройка<br/>от 3-х дней</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.995 13.7H12.005M8.294 13.7H8.304M8.294 16.7H8.304" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.995 16.7H12.005M15.695 13.7H15.705M15.695 16.7H15.705" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs">Ведение<br/>10 дней</span>
                </div>
              </div>

              <div className="space-y-1 mb-8">
                {basicFeatures.map((feature, index) => (
                  <TariffFeature key={index} text={feature} />
                ))}
              </div>
              
              <div className="text-center">
                <ContactPopup>
                  <button className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white rounded-full py-3 px-6 w-full font-medium hover:from-[#5500D8] hover:to-[#6A26CF] transition-all">
                    ВЫБРАТЬ ТАРИФ
                  </button>
                </ContactPopup>
              </div>
            </div>
          </div>
          
          {/* Стандарт тариф */}
          <div className="bg-accent rounded-lg shadow-lg overflow-hidden relative">
            <div className="bg-[#3d01a4] p-3 flex items-center relative">
              <PlanStars count={2} color="text-white" />
              <span className="text-white font-bold text-xl ml-3">СТАНДАРТ</span>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-foreground/50 line-through text-sm">32 000 ₽</div>
                <div className="text-4xl font-bold text-foreground">25 000 ₽</div>
              </div>
              
              <div className="flex justify-center space-x-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs">Аудит<br/>бесплатно</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs">Настройка<br/>от 3-х дней</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.995 13.7H12.005M8.294 13.7H8.304M8.294 16.7H8.304" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.995 16.7H12.005M15.695 13.7H15.705M15.695 16.7H15.705" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs">Ведение<br/>10 дней</span>
                </div>
              </div>

              <div className="space-y-1 mb-8">
                {standardFeatures.map((feature, index) => (
                  <TariffFeature key={index} text={feature} />
                ))}
              </div>
              
              <div className="text-center">
                <ContactPopup>
                  <button className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white rounded-full py-3 px-6 w-full font-medium hover:from-[#5500D8] hover:to-[#6A26CF] transition-all">
                    ВЫБРАТЬ ТАРИФ
                  </button>
                </ContactPopup>
              </div>
            </div>
          </div>
          
          {/* Премиум тариф */}
          <div className="bg-accent rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] p-3 flex items-center">
              <PlanStars count={3} color="text-white" />
              <span className="text-white font-bold text-xl ml-3">ПРЕМИУМ</span>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="text-foreground/50 line-through text-sm">50 000 ₽</div>
                <div className="text-4xl font-bold text-foreground">40 000 ₽</div>
              </div>
              
              <div className="flex justify-center space-x-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs">Аудит<br/>бесплатно</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs">Настройка<br/>от 3-х дней</span>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full flex items-center justify-center mb-1">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.995 13.7H12.005M8.294 13.7H8.304M8.294 16.7H8.304" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11.995 16.7H12.005M15.695 13.7H15.705M15.695 16.7H15.705" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs">Ведение<br/>10 дней</span>
                </div>
              </div>

              <div className="space-y-1 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <TariffFeature key={index} text={feature} />
                ))}
              </div>
              
              <div className="text-center">
                <ContactPopup>
                  <button className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white rounded-full py-3 px-6 w-full font-medium hover:from-[#5500D8] hover:to-[#6A26CF] transition-all">
                    ВЫБРАТЬ ТАРИФ
                  </button>
                </ContactPopup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TariffPlans;