import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ContactPopup } from "@/components/ui/contact-popup";
import { Link } from "wouter";
import { ArrowRight, Check, CheckCircle, ChevronRight, MessageCircle, Mail, Phone, MessageSquare, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import avitoDashboardImage from "../assets/avito/avito-dashboard.svg";
import astronautImage from "../assets/avito/astronaut.svg";
import needsCardsImage from "../assets/avito/needs-cards.svg";
import workflowProcessImage from "../assets/avito/workflow-process.svg";
import QuizCalculator from "@/components/quiz-calculator";
import { DecorativeCircles } from "@/components/ui/decorative-elements";
import ContactSection from "@/components/contact-section";

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
                  <h3 className="text-xl font-bold mb-3 text-center">Аналитика и отчеты</h3>
                  <p className="text-sm text-white/80 text-center">
                    Регулярные отчеты о результатах рекламы позволяют вносить улучшения
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom curve decoration */}
          <div className="w-full h-12 bg-white shadow-lg rounded-t-[50px] absolute bottom-0 left-0 right-0"></div>
        </header>
        
        <main className="bg-white relative">
          {/* Секция "До/После" с реальными скриншотами */}
          <section className="pt-16 pb-20 relative">
            <div className="container">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#7A00FF] mb-4">
                  Результаты наших клиентов — <br className="md:hidden" />
                  <span className="bg-gradient-to-r from-[#7A00FF] to-[#BC49FF] bg-clip-text text-transparent">говорят сами за себя</span>
                </h2>
                <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
                  Мы увеличиваем количество целевых клиентов и снижаем стоимость лида на 30-40%
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
                <div className="relative">
                  <div className="bg-white border-2 border-[#7A00FF]/20 shadow-lg rounded-lg p-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-[#7A00FF]/10 to-[#BC49FF]/10 w-full h-12 flex items-center px-4">
                      <div className="text-[#7A00FF] font-semibold text-lg">ДО</div>
                    </div>
                    <div className="pt-8">
                      <img 
                        src="/src/assets/images/avito/before.png" 
                        alt="Статистика Авито до оптимизации" 
                        className="rounded-md w-full h-auto shadow-sm"
                      />
                      <div className="text-center text-foreground/70 text-sm mt-3">Низкая конверсия и дорогие клики</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white border-2 border-[#7A00FF]/20 shadow-lg rounded-lg p-5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-[#7A00FF] to-[#BC49FF] w-full h-12 flex items-center px-4">
                      <div className="text-white font-semibold text-lg">ПОСЛЕ</div>
                    </div>
                    <div className="pt-8">
                      <img 
                        src="/src/assets/images/avito/after.png" 
                        alt="Статистика Авито после оптимизации" 
                        className="rounded-md w-full h-auto shadow-sm"
                      />
                      <div className="text-center text-foreground/70 text-sm mt-3">Рост конверсии и снижение стоимости привлечения</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 hidden md:block">
                    <img 
                      src="/src/assets/images/avito/arrow.png" 
                      alt="Стрелка" 
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Ваш магазин на авито под ключ секция */}
          <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Ваш магазин на авито <span className="text-[#7A00FF]">под ключ</span>
                </h2>
                <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
                  Полный комплекс услуг для эффективного продвижения вашего бизнеса на площадке Авито
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="/src/assets/images/avito/avitoshop.png" 
                  alt="Магазин на Авито" 
                  className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl mb-12"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 min-h-[140px]">
                    <div className="flex items-start mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#7A00FF]/10 flex items-center justify-center mr-4">
                        <Check className="h-5 w-5 text-[#7A00FF]" />
                      </div>
                      <h3 className="text-lg font-semibold">Анализ конкурентов</h3>
                    </div>
                    <p className="text-foreground/70 text-sm pl-14">
                      Тщательное изучение стратегий и объявлений ваших конкурентов для выявления сильных сторон и возможностей
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 min-h-[140px]">
                    <div className="flex items-start mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#7A00FF]/10 flex items-center justify-center mr-4">
                        <Check className="h-5 w-5 text-[#7A00FF]" />
                      </div>
                      <h3 className="text-lg font-semibold">Создание объявлений</h3>
                    </div>
                    <p className="text-foreground/70 text-sm pl-14">
                      Разработка привлекательных и конверсионных объявлений с оптимальными заголовками и описаниями
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 min-h-[140px]">
                    <div className="flex items-start mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#7A00FF]/10 flex items-center justify-center mr-4">
                        <Check className="h-5 w-5 text-[#7A00FF]" />
                      </div>
                      <h3 className="text-lg font-semibold">Фото и видео контент</h3>
                    </div>
                    <p className="text-foreground/70 text-sm pl-14">
                      Подготовка качественных фотографий и видеоматериалов, повышающих привлекательность объявлений
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 min-h-[140px]">
                    <div className="flex items-start mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#7A00FF]/10 flex items-center justify-center mr-4">
                        <Check className="h-5 w-5 text-[#7A00FF]" />
                      </div>
                      <h3 className="text-lg font-semibold">Настройка продвижения</h3>
                    </div>
                    <p className="text-foreground/70 text-sm pl-14">
                      Оптимальная настройка рекламных кампаний и продвижения для максимального охвата целевой аудитории
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 min-h-[140px]">
                    <div className="flex items-start mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#7A00FF]/10 flex items-center justify-center mr-4">
                        <Check className="h-5 w-5 text-[#7A00FF]" />
                      </div>
                      <h3 className="text-lg font-semibold">A/B тестирование</h3>
                    </div>
                    <p className="text-foreground/70 text-sm pl-14">
                      Проведение тестов различных вариантов объявлений для выявления наиболее эффективных подходов
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 min-h-[140px]">
                    <div className="flex items-start mb-4">
                      <div className="h-10 w-10 rounded-full bg-[#7A00FF]/10 flex items-center justify-center mr-4">
                        <Check className="h-5 w-5 text-[#7A00FF]" />
                      </div>
                      <h3 className="text-lg font-semibold">Аналитика и отчетность</h3>
                    </div>
                    <p className="text-foreground/70 text-sm pl-14">
                      Регулярный анализ результатов и предоставление детальных отчетов с рекомендациями по улучшению
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Секция "Авитолог - зачем он нужен?" */}
          <section className="py-20 relative">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Авитолог - <span className="text-[#7A00FF]">зачем он нужен?</span>
                </h2>
                <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
                  Специалист по продвижению на Авито поможет вывести ваш бизнес на новый уровень
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-3/5 flex flex-col space-y-6"
                >
                  <img 
                    src="/src/assets/images/avito/whyusavito.png" 
                    alt="Нужен ли вам авитолог?" 
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
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
          
          {/* Секция контактов */}
          <div id="contact">
            <ContactSection />
          </div>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default AvitoPage;