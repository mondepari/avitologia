import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ContactPopup } from "@/components/ui/contact-popup";
import { Link } from "wouter";
import { ArrowRight, Check, CheckCircle, ChevronRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import avitoDashboardImage from "../assets/avito/avito-dashboard.svg";
import astronautImage from "../assets/avito/astronaut.svg";
import needsCardsImage from "../assets/avito/needs-cards.svg";
import workflowProcessImage from "../assets/avito/workflow-process.svg";
import QuizCalculator from "@/components/quiz-calculator";
import { DecorativeCircles } from "@/components/ui/decorative-elements";

const AvitoPage: React.FC = () => {
  // Для Hero секции с главной страницы
  const [viewCount, setViewCount] = useState(349286);
  const [conversionCount, setConversionCount] = useState(25.12);
  const conversionAnimationRef = useRef<boolean>(false);
  
  useEffect(() => {
    // Увеличиваем счетчик просмотров каждые 2 секунды
    const viewInterval = setInterval(() => {
      setViewCount(prevCount => prevCount + Math.floor(Math.random() * 15) + 1);
    }, 2000);
    
    // Увеличиваем счетчик конверсии на +0.01 каждые 5 секунд
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
    <>
      <Navbar />
      
      <div className="min-h-screen bg-background relative">
        {/* Декоративные круги на фоне */}
        <DecorativeCircles />
        
        {/* Hero Section - скопировано с главной */}
        <header className="bg-background min-h-screen pt-16 flex flex-col justify-between relative overflow-hidden">
          {/* Purple Circle Decoration */}
          <div className="absolute top-[-250px] right-[-250px] w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-[#6200EE] to-[#7A36DF] z-0 opacity-70 transition-all duration-700 hover:scale-125 hover:opacity-80 cursor-pointer"></div>
          
          {/* Hero Content */}
          <div className="container py-10 md:py-16 relative z-10 flex-grow">
            <div className="flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                <div className="lg:col-span-6 lg:pr-10">
                  <div className="text-left mb-4 mt-4">
                    <h2 className="text-xl text-foreground font-normal">Настройка и ведение Авито рекламы под ключ</h2>
                  </div>
                  
                  <div className="mb-6">
                    <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black text-foreground leading-tight tracking-tight uppercase">
                      ПОЛУЧАЙТЕ СТАБИЛЬНЫЙ<br />
                      ПОТОК ЖИВЫХ КЛИЕНТОВ<br />
                      ЕЖЕНЕДЕЛЬНО
                    </h1>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-lg text-foreground/80">
                      С помощью профессиональной настройки<br />
                      и ведения рекламы на Авито
                    </p>
                  </div>
                  
                  <div className="mt-6 mb-20 relative">
                    <div className="flex flex-col space-y-6">
                      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 items-center">
                        <button 
                          onClick={() => scrollToSection('calculator')} 
                          className="btn-purple text-white font-medium px-8 py-3 rounded-[30px] text-center shadow-md flex items-center justify-center bg-gradient-to-r from-[#6200EE] to-[#7A36DF]"
                        >
                          <span className="text-sm uppercase">РАССЧИТАТЬ СТОИМОСТЬ</span>
                          <span className="text-[10px] ml-2 opacity-80">(за 1 минуту + подарок)</span>
                        </button>
                        
                        <div 
                          onClick={() => scrollToSection('contact')}
                          className="flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 cursor-pointer group border-b border-dashed border-primary"
                        >
                          <div className="flex items-center">
                            <MessageCircle className="h-5 w-5 text-primary mr-2" />
                            <span className="text-sm uppercase text-foreground">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Мобильная версия блока с коэффициентом */}
                    <div className="lg:hidden relative mt-4">
                      <div className="bg-gradient-to-r from-[#6200EE]/10 to-[#7A36DF]/10 border border-primary/20 rounded-xl p-3 shadow-lg max-w-[280px]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-primary text-2xl font-bold mr-2">×2.7</div>
                            <div className="text-xs text-foreground max-w-[140px]">
                              Средний коэффициент увеличения прибыли бизнеса
                            </div>
                          </div>
                          <div className="ml-2">
                            <img src="/src/assets/icons/chart-growth.svg" alt="График роста" className="h-7 w-7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
                  <div className="relative z-20">
                    <div className="relative">
                      <img 
                        src="/src/assets/images/avitophone.png"
                        alt="Телефон с аналитикой Авито" 
                        className="max-h-[500px] md:max-h-[550px] object-contain"
                      />
                      <div className="absolute top-[15%] right-[10%] bg-white rounded-xl shadow-lg py-1 px-3">
                        <div className="text-sm font-semibold text-gray-700">Просмотры <span className="text-green-500">+8%</span></div>
                        <div className="text-lg font-bold text-[#6200EE] transition-all duration-500">{formatNumber(viewCount)}</div>
                      </div>

                      <div className="absolute bottom-[30%] right-[5%] bg-white rounded-xl shadow-lg py-1 px-3">
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
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-xl p-6 text-white shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="mb-5 flex justify-center">
                    <div className="bg-white/15 backdrop-blur-sm border border-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18"></path>
                        <path d="M18 17V9"></path>
                        <path d="M13 17V5"></path>
                        <path d="M8 17v-3"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Выбор стратегии продвижения</h3>
                  <p className="text-sm text-white/80 text-center">
                    Оптимизирую рекламный бюджет и повышаю эффективность каждого рубля на рекламу
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-xl p-6 text-white shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="mb-5 flex justify-center">
                    <div className="bg-white/15 backdrop-blur-sm border border-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Целевые посетители</h3>
                  <p className="text-sm text-white/80 text-center">
                    Четко настроенный таргетинг обеспечивает попадание рекламы точно в ЦА
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-xl p-6 text-white shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="mb-5 flex justify-center">
                    <div className="bg-white/15 backdrop-blur-sm border border-white/20 w-16 h-16 rounded-xl flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Настройка аналитики</h3>
                  <p className="text-sm text-white/80 text-center">
                    Дает максимальную точность отчетов и понимание динамики конверсий
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom curve decoration */}
          <div className="w-full h-12 bg-white shadow-lg rounded-t-[50px] absolute bottom-0 left-0 right-0"></div>
        </header>

        {/* Квиз калькулятор */}
        <QuizCalculator />
        
        {/* Существующий контент страницы */}
        <main className="pt-10">
          {/* Hero Section - доработано согласно референсу */}
          <section className="bg-background py-16 md:py-20 relative overflow-hidden">
            <div className="container px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="text-primary">Вы получите</span> стабильный поток из целевых клиентов!
                </h1>
                
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 mt-12 mb-10">
                  <div className="text-center">
                    <div className="text-primary text-3xl md:text-4xl font-bold">Min</div>
                    <div className="text-xs text-gray-500 max-w-[120px] mx-auto">Минимальный вложения от 10 000 р.</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-primary text-3xl md:text-4xl font-bold">1 день</div>
                    <div className="text-xs text-gray-500 max-w-[120px] mx-auto">Минимальный срок на первые сделки</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-primary text-3xl md:text-4xl font-bold">Max</div>
                    <div className="text-xs text-gray-500 max-w-[120px] mx-auto">Высокий средний чек</div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-6 mb-8">
                  <ContactPopup>
                    <button className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      Заказать рекламу на Авито
                    </button>
                  </ContactPopup>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 lg:gap-24 mt-12 relative">
                {/* Ноутбук "Было" */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-sm hover:shadow-xl transition-all duration-300"
                >
                  <img 
                    src="/src/assets/images/avito/laptop-before.svg" 
                    alt="Статистика до оптимизации" 
                    className="w-full object-contain"
                  />
                </motion.div>
                
                {/* Стрелка между ноутбуками - теперь правильно позиционирована */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="z-10 w-32 h-24 flex items-center justify-center transform rotate-0 -mt-4 md:mt-0"
                >
                  <img 
                    src="/src/assets/images/avito/arrow-curved.svg" 
                    alt="Направление роста" 
                    className="w-32 h-24 object-contain"
                  />
                </motion.div>
                
                {/* Ноутбук "Стало" */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full max-w-sm hover:shadow-xl transition-all duration-300"
                >
                  <img 
                    src="/src/assets/images/avito/laptop-after.svg" 
                    alt="Статистика после оптимизации" 
                    className="w-full object-contain"
                  />
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden border border-border">
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4">Что вы получаете?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Стабильный поток целевых клиентов</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Аналитика и отчеты по эффективности</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Оптимизация расходов на рекламу</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Улучшение видимости объявлений</span>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/20 -z-10 blur-2xl"></div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden border border-border">
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-4">Требуется для старта:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-primary text-xs font-bold">1</span>
                        </div>
                        <span>Аккаунт на Авито</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-primary text-xs font-bold">2</span>
                        </div>
                        <span>Информация о вашем продукте/услуге</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-primary text-xs font-bold">3</span>
                        </div>
                        <span>Фотографии товаров или услуг</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 bg-primary/20 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-primary text-xs font-bold">4</span>
                        </div>
                        <span>Бюджет на рекламу</span>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-primary/20 -z-10 blur-2xl"></div>
                </div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 animate-float"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-primary/20 animate-float-right"></div>
          </section>
          
          {/* Тарифные планы */}
          <section className="py-16 bg-background/50">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Что мы скрываем?</h2>
                <p className="text-foreground/70">Выберите оптимальный план для вашего бизнеса</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* План 1 */}
                <div className="bg-[#7A00FF]/50 rounded-xl p-6 text-white relative overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold mb-2">50%</div>
                    <h3 className="text-lg font-semibold mb-4">Анализ конкурентов</h3>
                    <p className="text-white/80 text-sm mb-6">
                      Мы анализируем топовых конкурентов, чтобы выявить их стратегии и тактики
                    </p>
                    <div className="absolute bottom-6 right-6">
                      <ArrowRight className="h-5 w-5 text-white/70" />
                    </div>
                  </div>
                </div>
                
                {/* План 2 */}
                <div className="bg-[#7A00FF]/50 rounded-xl p-6 text-white relative overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold mb-2">75%</div>
                    <h3 className="text-lg font-semibold mb-4">Аналитика запросов</h3>
                    <p className="text-white/80 text-sm mb-6">
                      Собираем и анализируем поисковые запросы для максимальной конверсии
                    </p>
                    <div className="absolute bottom-6 right-6">
                      <ArrowRight className="h-5 w-5 text-white/70" />
                    </div>
                  </div>
                </div>
                
                {/* План 3 */}
                <div className="bg-[#7A00FF]/50 rounded-xl p-6 text-white relative overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold mb-2">100%</div>
                    <h3 className="text-lg font-semibold mb-4">Полная оптимизация</h3>
                    <p className="text-white/80 text-sm mb-6">
                      Детальная работа над всеми элементами рекламной кампании
                    </p>
                    <div className="absolute bottom-6 right-6">
                      <ArrowRight className="h-5 w-5 text-white/70" />
                    </div>
                  </div>
                </div>
                
                {/* План 4 */}
                <div className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-xl p-6 text-white relative overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-bold mb-2">+500%</div>
                    <h3 className="text-lg font-semibold mb-4">Маркетинговая стратегия</h3>
                    <p className="text-white/80 text-sm mb-6">
                      Комплексный подход для максимального роста вашего бизнеса на Авито
                    </p>
                    <div className="absolute bottom-6 right-6">
                      <ArrowRight className="h-5 w-5 text-white/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Остальные секции страницы */}
          {/* ... */}
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default AvitoPage;