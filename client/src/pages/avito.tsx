import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ContactPopup } from "@/components/ui/contact-popup";
import { Link } from "wouter";
import { ArrowRight, Check, CheckCircle, ChevronRight } from "lucide-react";
import avitoDashboardImage from "../assets/avito/avito-dashboard.svg";

const AvitoPage: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-background py-16 md:py-20 relative overflow-hidden">
          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Вы получите <span className="text-primary">стабильный поток</span> из целевых клиентов
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Min <span className="text-primary border-b border-primary">1 день</span> на запуск кампании &nbsp;&nbsp;&nbsp; Max <span className="text-primary border-b border-primary">30 дней</span> на достижение результата
              </p>
              <div className="flex justify-center">
                <ContactPopup>
                  <button className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    Заказать рекламу на Авито
                  </button>
                </ContactPopup>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
        
        {/* Объяснение услуг */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Трое точно нужны мы, если:</h2>
              
              <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden border border-border mb-8">
                <div className="flex space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Продаете товары или услуги</h3>
                    <p className="text-foreground/70">
                      Авито - идеальная площадка для продажи товаров и услуг различных категорий. Мы поможем вам выделиться среди конкурентов.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/10 -z-10"></div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden border border-border mb-8">
                <div className="flex space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Хотите увеличить продажи</h3>
                    <p className="text-foreground/70">
                      Наша стратегия рекламы на Авито поможет привлечь больше клиентов и увеличить ваши продажи. Мы фокусируемся на привлечении именно целевой аудитории.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/10 -z-10"></div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden border border-border">
                <div className="flex space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ищете долгосрочное решение</h3>
                    <p className="text-foreground/70">
                      Мы не просто запускаем рекламу, а создаем долгосрочную стратегию продвижения на Авито, которая будет работать на вас месяц за месяцем.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/10 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Магазины на Авито */}
        <section className="py-16 bg-background/50">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  <span className="text-primary">ваш магазин</span> на авито
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                  под ключ
                </h2>
              </div>
              
              <div className="relative mb-12">
                <div className="aspect-video w-full max-w-4xl mx-auto">
                  <img 
                    src={avitoDashboardImage} 
                    alt="Панель управления Авито" 
                    className="w-full h-auto object-contain mx-auto mb-8"
                  />
                </div>
                
                {/* Декоративные элементы */}
                <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary/10 -z-10 blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/10 -z-10 blur-xl"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Высокий рейтинг */}
                <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden border border-gray-200">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Высокий рейтинг</h3>
                    <p className="text-foreground/70 text-sm">
                      Высокий рейтинг, значки "Надежный продавец" и прочие дадут вам приоритетное количество показов, просмотров и заявок.
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-primary rounded-b-xl"></div>
                </div>
                
                {/* Оформленный профиль */}
                <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden border border-gray-200">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Оформленный профиль</h3>
                    <p className="text-foreground/70 text-sm">
                      Баннеры, инфографика, маркетинговая упаковка помогают принять решение о покупке не только в объявлении, но и в профиле.
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-primary rounded-b-xl"></div>
                </div>
                
                {/* Продающие объявления */}
                <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden border border-gray-200">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">Продающие объявления</h3>
                    <p className="text-foreground/70 text-sm">
                      Объявления, которые генерируют до 50 заявок в день, дешевле директа в 2-5 раз. Фотографии и УТП - это первое, на что обращает внимание 90% пользователей.
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-primary rounded-b-xl"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                <div className="bg-white rounded-xl shadow-md p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold mr-3">1</span>
                    Создание бизнес-профиля
                  </h3>
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Настройка профессионального профиля компании</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Разработка уникальных баннеров и графики</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Оптимизация описания для поисковых алгоритмов</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl shadow-md p-6 border border-border">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold mr-3">2</span>
                    Создание продающих объявлений
                  </h3>
                  <ul className="space-y-2 ml-11">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Разработка цепляющих заголовков и описаний</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Подготовка и обработка качественных фотографий</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Размещение в топовой выдаче с продвижением</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <ContactPopup>
                  <button className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    Получить консультацию по магазину
                  </button>
                </ContactPopup>
              </div>
            </div>
          </div>
        </section>
        
        {/* Как работает сервис */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Для тех, кто хочет...</h2>
              
              <div className="bg-white rounded-xl shadow-lg p-8 border border-border overflow-hidden relative mb-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white rounded-full flex items-center justify-center mr-3">1</span>
                  Получать больше клиентов
                </h3>
                <p className="text-foreground/70 pl-11">
                  Реклама на Авито поможет привлечь больше целевых клиентов, которые уже заинтересованы в ваших товарах или услугах. Мы оптимизируем объявления для максимальной конверсии.
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 -z-10 blur-xl"></div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 border border-border overflow-hidden relative mb-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white rounded-full flex items-center justify-center mr-3">2</span>
                  Оптимизировать рекламные бюджеты
                </h3>
                <p className="text-foreground/70 pl-11">
                  Наш подход позволяет максимально эффективно использовать ваш рекламный бюджет, сокращая стоимость привлечения клиента и увеличивая ROI.
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 -z-10 blur-xl"></div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 border border-border overflow-hidden relative">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white rounded-full flex items-center justify-center mr-3">3</span>
                  Получать аналитику и отчеты
                </h3>
                <p className="text-foreground/70 pl-11">
                  Мы предоставляем подробные отчеты о результатах рекламных кампаний, что позволяет видеть эффективность инвестиций и принимать обоснованные решения.
                </p>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 -z-10 blur-xl"></div>
              </div>
              
              <div className="mt-10 text-center">
                <ContactPopup>
                  <button className="bg-primary/10 text-primary border border-primary/30 px-8 py-3 rounded-full font-medium hover:bg-primary/20 transition-all duration-300">
                    Узнать подробнее
                  </button>
                </ContactPopup>
              </div>
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="py-16 bg-background/50">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
                Тебе точно нужны мы, если:
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <span className="text-orange-500 font-semibold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Продаешь физические товары</h3>
                  <p className="text-foreground/70 text-sm">
                    Авито - одна из лучших площадок для продажи физических товаров, от бытовой техники до одежды и аксессуаров.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <span className="text-green-500 font-semibold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Предлагаешь услуги</h3>
                  <p className="text-foreground/70 text-sm">
                    Если вы предоставляете услуги, Авито позволит вам найти клиентов, которые целенаправленно ищут именно ваши услуги.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-blue-500 font-semibold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Работаешь с недвижимостью</h3>
                  <p className="text-foreground/70 text-sm">
                    Продажа или аренда недвижимости через Авито становится эффективнее с нашим подходом к рекламе и продвижению.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-purple-500 font-semibold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Развиваешь бизнес онлайн</h3>
                  <p className="text-foreground/70 text-sm">
                    Авито может стать дополнительным каналом продаж для вашего онлайн-бизнеса, расширяя охват потенциальных клиентов.
                  </p>
                </div>
              </div>
              
              {/* Пример чата */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-border relative overflow-hidden">
                <h3 className="text-xl font-semibold mb-6">Как это выглядит в процессе работы:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-purple-500 font-semibold">A</span>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Здравствуйте! Заинтересовало ваше объявление. Можно узнать подробнее?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-end">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Добрый день! Конечно, что именно вас интересует?</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center ml-3 flex-shrink-0">
                      <span className="text-gray-700 font-semibold">Вы</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-purple-500 font-semibold">A</span>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Хотел уточнить сроки доставки и возможные способы оплаты.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-end">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Доставка от 1 до 3 дней. Принимаем оплату картой, наличными при получении и безналичным переводом.</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center ml-3 flex-shrink-0">
                      <span className="text-gray-700 font-semibold">Вы</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-primary/10 -z-10"></div>
                <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-primary/10 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Готовы увеличить продажи на Авито?</h2>
              <p className="text-foreground/70 mb-8">
                Оставьте заявку сейчас и получите бесплатный аудит вашего текущего присутствия на Авито или консультацию по старту
              </p>
              <div className="flex justify-center space-x-4">
                <ContactPopup>
                  <button className="bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    Заказать рекламу на Авито
                  </button>
                </ContactPopup>
                <button className="bg-primary/10 text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/20 transition-all duration-300">
                  <Link href="/">
                    Вернуться на главную
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AvitoPage;