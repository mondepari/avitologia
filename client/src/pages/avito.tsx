import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ContactPopup } from "@/components/ui/contact-popup";
import { Link } from "wouter";
import { 
  ArrowRight, 
  Check, 
  CheckCircle, 
  ChevronRight, 
  MessageCircle, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";
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
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-16 mt-12 mb-4 relative">
                {/* Было */}
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-lg p-3 md:p-4 border border-gray-200"
                  >
                    <img 
                      src="/src/assets/images/avito/stats/before.png" 
                      alt="Статистика до оптимизации" 
                      className="w-full object-contain max-w-[300px]"
                    />
                  </motion.div>
                  <div className="text-center mt-2 font-medium">Было</div>
                </div>
                
                {/* Стрелка из референса */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center -my-4 md:my-8"
                >
                  <img 
                    src="/src/assets/images/avito/stats/arrow.png" 
                    alt="Направление роста" 
                    className="w-20 md:w-24 h-20 md:h-24 object-contain"
                  />
                </motion.div>
                
                {/* После */}
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-white rounded-xl shadow-lg p-3 md:p-4 border border-gray-200"
                  >
                    <img 
                      src="/src/assets/images/avito/stats/after.png" 
                      alt="Статистика после оптимизации" 
                      className="w-full object-contain max-w-[300px]"
                    />
                  </motion.div>
                  <div className="text-center mt-2 font-medium">Через 2 дня</div>
                </div>
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
          
          {/* Ваш магазин на авито под ключ */}
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="container px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
                {/* Левая колонка с заголовком и карточками */}
                <div className="w-full lg:w-3/5">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-12"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A00FF] to-[#BC49FF]">Ваш магазин</span> на авито <br />под ключ
                  </motion.h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Карточка 1 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-gray-100 rounded-xl p-6 relative"
                    >
                      <h3 className="text-xl font-semibold mb-3">Высокий рейтинг</h3>
                      <p className="text-gray-600">
                        Высокий рейтинг, значки "Надежный продавец" и прочие дадут вам приоритетное количество показов, просмотров и заявок.
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#7A00FF] to-[#BC49FF] rounded-b-xl"></div>
                    </motion.div>
                    
                    {/* Карточка 2 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-gray-100 rounded-xl p-6 relative"
                    >
                      <h3 className="text-xl font-semibold mb-3">Оформленный профиль</h3>
                      <p className="text-gray-600">
                        Баннеры, инфографика, маркетинговая упаковка помогают принять решение о покупке не только в объявлении, но и в профиле.
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#7A00FF] to-[#BC49FF] rounded-b-xl"></div>
                    </motion.div>
                    
                    {/* Карточка 3 */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-gray-100 rounded-xl p-6 relative md:col-span-2"
                    >
                      <h3 className="text-xl font-semibold mb-3">Продающие объявления</h3>
                      <p className="text-gray-600">
                        Объявления, которые генерируют до 50 заявок в день, дешевле директа в 2-5 раз. Фотография и УТП - это первое, на что обращает внимание 90% пользователей.
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#7A00FF] to-[#BC49FF] rounded-b-xl"></div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Правая колонка с изображением */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-2/5 flex justify-center"
                >
                  <div className="relative">
                    <img 
                      src="/src/assets/images/avito/avitoshop.png" 
                      alt="Магазин на Авито" 
                      className="rounded-xl shadow-xl max-w-full lg:max-w-xl w-full border border-gray-200"
                      style={{ minWidth: "400px" }}
                    />
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/20 rounded-full blur-xl z-[-1]"></div>
                    <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#BC49FF]/30 rounded-full blur-xl z-[-1]"></div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/10 rounded-full"></div>
            <div className="absolute top-1/4 right-0 w-24 h-24 bg-[#BC49FF]/10 rounded-full"></div>
          </section>
          
          {/* Авитолог: кто это и зачем нужен? */}
          <section className="py-20 bg-background/50 relative">
            <div className="container px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Тебе точно нужны мы, если:</h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                  {/* Карточка 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-gray-100 rounded-xl p-6 shadow-sm flex items-center justify-center min-h-[140px]"
                  >
                    <p className="text-gray-800 font-medium text-center text-lg">Нужно привлечь больше клиентов</p>
                  </motion.div>
                  
                  {/* Карточка 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-r from-[#7A00FF] to-[#BC49FF] rounded-xl p-6 shadow-sm flex items-center justify-center min-h-[140px]"
                  >
                    <p className="text-white font-semibold text-center text-lg">Нужно сэкономить время и оптимизировать затраты на продвижение</p>
                  </motion.div>
                  
                  {/* Карточка 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gray-100 rounded-xl p-6 shadow-sm flex items-center justify-center min-h-[140px]"
                  >
                    <p className="text-gray-800 font-medium text-center text-lg">Объявления не приносят продаж</p>
                  </motion.div>
                  
                  {/* Карточка 4 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gradient-to-r from-[#7A00FF] to-[#BC49FF] rounded-xl p-6 shadow-sm flex items-center justify-center min-h-[140px]"
                  >
                    <p className="text-white font-semibold text-center text-lg">Хочется увеличить позицию в выдаче и получить преимущество</p>
                  </motion.div>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-start gap-12 mt-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-3/5"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">Авитолог: кто это и зачем нужен?</h2>
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 mb-6">
                      Авитолог или Avitolog — специалист, который выполняет комплексную работу по продвижению на Авито, 
                      чтобы увеличить продажи на платформе. Эффективное продвижение авитологом включает в себя работу с 
                      текстами, изображениями, рекламным бюджетом и аккаунтом клиента.
                    </p>
                    <p className="text-lg text-gray-700 mb-6">
                      <strong>Мы</strong> предоставляем полный цикл услуг, начиная от написания продающих текстов и заканчивая 
                      разработкой визуала под ключ. Наша команда будет работать с вами на протяжении всего периода 
                      сотрудничества, чтобы обеспечить вас стабильным потоком клиентов и гарантированным ростом продаж.
                    </p>
                    <p className="text-lg text-gray-700">
                      В отличие от обычного маркетолога, авитолог специализируется именно на особенностях платформы Авито, 
                      знает все её алгоритмы и специфику работы с различными категориями товаров и услуг.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-2/5 flex justify-center items-center"
                >
                  <div className="relative max-w-md mx-auto">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 bg-white shadow-md rounded-full px-4 py-2">
                      <div className="font-bold text-lg text-center text-[#7A00FF]">1 КОМПАНИЯ</div>
                      <div className="text-lg text-gray-700 font-semibold text-center">=</div>
                    </div>
                    <div className="bg-gradient-to-r from-[#7A00FF] to-[#BC49FF] rounded-2xl h-72 w-72 flex items-center justify-center text-center p-6 shadow-xl">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold">ЭФФЕКТИВНОЕ СОТРУДНИЧЕСТВО НА ГОДЫ</h3>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#7A00FF]/30 to-[#BC49FF]/30 rounded-full blur-lg z-10"></div>
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#7A00FF]/20 to-[#BC49FF]/20 rounded-full blur-lg z-10"></div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/5 animate-float-slow"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-[#BC49FF]/5 animate-float-slow"></div>
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
          
          {/* Секция с формой обратной связи */}
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Получите бесплатную <br /> консультацию специалиста
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-600 max-w-2xl mx-auto"
                >
                  Готов помочь вам с настройкой эффективной рекламной кампании. Заполните форму или 
                  свяжитесь со мной удобным для вас способом.
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Левая часть - контактная информация */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-[#7A00FF] to-[#9B30FF] rounded-2xl p-8 text-white relative overflow-hidden"
                >
                  <h3 className="text-2xl font-bold mb-8">Контактная информация</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white/80 text-sm">Email</div>
                        <div className="font-medium">contact@sergeypankratov.ru</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-4">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white/80 text-sm">Телефон</div>
                        <div className="font-medium">+7 (912) 345-67-89</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mr-4">
                          <MessageCircle className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white/80 text-sm">Мессенджеры</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 pl-16">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <MessageCircle className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <MessageCircle className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                          <MessageCircle className="h-5 w-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 flex items-center gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Facebook className="h-5 w-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Youtube className="h-5 w-5 text-white" />
                    </a>
                  </div>
                  
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5"></div>
                  <div className="absolute top-1/2 -left-10 w-32 h-32 rounded-full bg-white/5"></div>
                </motion.div>
                
                {/* Правая часть - форма обратной связи */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 rounded-2xl p-8 shadow-sm"
                >
                  <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Ваше имя <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Введите ваше имя"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Введите ваш email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Введите ваш телефон"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Напишите ваше сообщение"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-[#7A00FF] to-[#9B30FF] text-white font-medium rounded-lg transition-transform transform hover:translate-y-[-2px] hover:shadow-lg"
                    >
                      Отправить сообщение
                    </button>
                    
                    <div className="text-sm text-gray-500 text-center mt-4">
                      Нажимая на кнопку, вы соглашаетесь с <a href="#" className="text-primary hover:underline">политикой конфиденциальности</a>.
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/5 animate-float-slow"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#BC49FF]/10 animate-float"></div>
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