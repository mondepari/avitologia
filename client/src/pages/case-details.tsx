import React, { useEffect, useState } from 'react';
import { Link, useRoute, useLocation } from 'wouter';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { DecorativeCircles } from "@/components/ui/decorative-elements";
import { ArrowLeft, ChevronRight, BarChart2, TrendingUp, DollarSign, Users, Target, LineChart, ArrowUpRight } from 'lucide-react';

// Тип для данных конкретного кейса
type CaseDetailed = {
  id: string;
  title: string;
  category: string;
  client: string;
  period: string;
  imageUrl: string;
  coverImageUrl: string;
  problem: string;
  solution: string;
  results: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  approach: {
    title: string;
    description: string;
  }[];
  screenshots: {
    url: string;
    caption: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
};

// База данных с кейсами
const casesDatabase: Record<string, CaseDetailed> = {
  'ecommerce-home-goods': {
    id: 'ecommerce-home-goods',
    title: 'Увеличение конверсии интернет-магазина товаров для дома',
    category: 'E-commerce',
    client: 'DomStyle',
    period: 'Январь 2023 - Март 2023',
    imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    coverImageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    problem: 'Интернет-магазин товаров для дома столкнулся с высокой стоимостью привлечения клиентов и низкой конверсией. Существующие рекламные кампании в Яндекс.Директ приносили трафик, но процент покупок оставался низким, а стоимость заказа была выше рыночной.',
    solution: 'Мы провели аудит текущих рекламных кампаний, проанализировали поведение пользователей на сайте и разработали новую стратегию контекстной рекламы. Ключевые изменения включали: пересмотр семантического ядра с акцентом на коммерческие запросы, внедрение гибкой системы корректировок ставок по времени и устройствам, сегментацию аудитории для персонализированных объявлений, а также улучшение посадочных страниц для повышения конверсии.',
    results: [
      { label: 'Рост конверсии', value: '+43%', icon: <TrendingUp className="h-6 w-6 text-primary" /> },
      { label: 'Снижение CPA', value: '-27%', icon: <DollarSign className="h-6 w-6 text-primary" /> },
      { label: 'Увеличение ROI', value: '+68%', icon: <BarChart2 className="h-6 w-6 text-primary" /> },
      { label: 'Прирост клиентов', value: '+56%', icon: <Users className="h-6 w-6 text-primary" /> },
    ],
    approach: [
      {
        title: 'Аудит и аналитика',
        description: 'Провели детальный анализ текущих кампаний, статистики запросов и поведения пользователей на сайте. Выявили наиболее конверсионные категории товаров и проблемные места в воронке продаж.'
      },
      {
        title: 'Реструктуризация кампаний',
        description: 'Полностью переработали структуру рекламных кампаний, сегментировав их по категориям товаров и коммерческому интенту запросов. Внедрили автоматическое управление ставками на основе потенциальной ценности клиента.'
      },
      {
        title: 'Оптимизация креативов',
        description: 'Создали серию А/Б тестов для выявления наиболее эффективных заголовков и текстов объявлений. Разработали уникальные предложения для разных сегментов аудитории.'
      },
      {
        title: 'Улучшение посадочных страниц',
        description: 'Оптимизировали целевые страницы для повышения коэффициента конверсии, улучшили структуру страниц категорий и карточек товаров.'
      },
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1553434320-e9f5757e5801?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Статистика роста конверсии после внедрения новой стратегии'
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Сравнение показателей до и после оптимизации кампаний'
      },
      {
        url: 'https://images.unsplash.com/photo-1525422847952-7f91db09a364?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Пример оптимизированной структуры аккаунта'
      }
    ],
    testimonial: {
      quote: 'Владислав полностью трансформировал наш подход к контекстной рекламе. Результаты превзошли ожидания — мы не только увеличили продажи, но и существенно снизили стоимость привлечения клиентов. Особенно ценно, что вся стратегия была основана на глубоком анализе данных.',
      author: 'Анна Смирнова',
      position: 'Директор по маркетингу, DomStyle'
    }
  },
  'b2b-services': {
    id: 'b2b-services',
    title: 'Лидогенерация для B2B-компании в сфере услуг',
    category: 'B2B',
    client: 'BusinessSolutions',
    period: 'Март 2023 - Июнь 2023',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    coverImageUrl: 'https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
    problem: 'Компания, предоставляющая B2B-услуги по автоматизации бизнес-процессов, испытывала трудности с привлечением качественных лидов через Google Ads. Основные проблемы: высокая стоимость привлечения лида, низкое качество лидов и недостаточное количество конверсий.',
    solution: 'Разработали комплексную стратегию продвижения в Google Ads с фокусом на привлечение целевой аудитории. Ключевые элементы стратегии: создание многоступенчатой воронки с использованием поисковой и КМС-рекламы, таргетинг на конкретные должности и размеры компаний, разработка уникальных предложений для разных сегментов бизнеса, и внедрение продвинутой системы отслеживания и квалификации лидов.',
    results: [
      { label: 'Рост количества лидов', value: '+75%', icon: <Target className="h-6 w-6 text-primary" /> },
      { label: 'Снижение стоимости лида', value: '-35%', icon: <DollarSign className="h-6 w-6 text-primary" /> },
      { label: 'Повышение качества лидов', value: '+40%', icon: <TrendingUp className="h-6 w-6 text-primary" /> },
      { label: 'ROI рекламных кампаний', value: '+125%', icon: <LineChart className="h-6 w-6 text-primary" /> },
    ],
    approach: [
      {
        title: 'Сегментация целевой аудитории',
        description: 'Разделили потенциальных клиентов на сегменты по размеру бизнеса, отрасли и ключевым потребностям, разработав персонализированные сообщения для каждого сегмента.'
      },
      {
        title: 'Многоступенчатая воронка продаж',
        description: 'Создали систему последовательного взаимодействия, начиная с образовательного контента и заканчивая демонстрацией решений, что позволило эффективно вести потенциальных клиентов к конверсии.'
      },
      {
        title: 'Оптимизация конверсионных путей',
        description: 'Улучшили посадочные страницы, формы заявок и процесс квалификации лидов для увеличения процента конверсии на каждом этапе воронки продаж.'
      },
      {
        title: 'Ремаркетинг и персонализация',
        description: 'Внедрили систему ремаркетинга с персонализированными предложениями на основе предыдущих взаимодействий потенциальных клиентов с сайтом и рекламой.'
      },
    ],
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Динамика генерации лидов после оптимизации кампаний'
      },
      {
        url: 'https://images.unsplash.com/photo-1560472354-b33ff0c00a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Структура многоступенчатой воронки продаж'
      },
      {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Аналитика качества лидов в разрезе каналов'
      }
    ],
    testimonial: {
      quote: 'Сотрудничество с Владиславом позволило нам выйти на новый уровень в привлечении B2B-клиентов. Нас особенно впечатлил его системный подход к анализу и сегментации аудитории. Теперь мы не только получаем больше лидов, но и значительно повысили процент их конверсии в клиентов.',
      author: 'Дмитрий Ковалев',
      position: 'CEO, BusinessSolutions'
    }
  },
  // Другие кейсы можно добавить по аналогии
};

// Компонент для отображения деталей кейса
const CaseDetails: React.FC = () => {
  const [match, params] = useRoute('/cases/:id');
  const [, setLocation] = useLocation();
  const [caseData, setCaseData] = useState<CaseDetailed | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (match && params) {
      const { id } = params;
      const selectedCase = casesDatabase[id];
      
      if (selectedCase) {
        setCaseData(selectedCase);
        document.title = `${selectedCase.title} | Кейс | Владислав Волошин`;
      } else {
        // Если кейс не найден, перенаправляем на страницу кейсов
        setLocation('/cases');
      }
    }
    setIsLoading(false);
  }, [match, params, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!caseData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Кейс не найден</h1>
        <p className="text-gray-600 mb-6">К сожалению, запрашиваемый кейс не существует или был удален.</p>
        <Link href="/cases">
          <a className="bg-primary text-white px-6 py-3 rounded-full inline-flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Вернуться к списку кейсов
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <DecorativeCircles />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Хлебные крошки */}
        <div className="container mx-auto px-4 pt-6">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/">
              <a className="hover:text-primary transition-colors">Главная</a>
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/cases">
              <a className="hover:text-primary transition-colors">Кейсы</a>
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-800">{caseData.title}</span>
          </div>
        </div>
        
        {/* Заголовок и основная информация */}
        <section className="pt-10 pb-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">
                {caseData.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{caseData.title}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Клиент</div>
                  <div className="font-semibold">{caseData.client}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Период работы</div>
                  <div className="font-semibold">{caseData.period}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500 mb-1">Категория</div>
                  <div className="font-semibold">{caseData.category}</div>
                </div>
              </div>
            </div>
            
            {/* Главное изображение кейса */}
            <div className="mb-16">
              <img 
                src={caseData.coverImageUrl} 
                alt={caseData.title} 
                className="w-full h-auto rounded-xl object-cover max-h-[500px]"
              />
            </div>
            
            {/* Проблема и решение */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Проблема клиента</h2>
                <p className="text-gray-700 leading-relaxed">{caseData.problem}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Решение</h2>
                <p className="text-gray-700 leading-relaxed">{caseData.solution}</p>
              </div>
            </div>
            
            {/* Результаты */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Результаты</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {caseData.results.map((result, index) => (
                  <div key={index} className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {result.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{result.value}</div>
                    <div className="text-sm text-gray-600">{result.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Подход к решению */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Подход к решению</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseData.approach.map((step, index) => (
                  <div key={index} className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Скриншоты и визуализации */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Скриншоты и визуализации</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseData.screenshots.map((screenshot, index) => (
                  <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
                    <img 
                      src={screenshot.url} 
                      alt={screenshot.caption} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-700">{screenshot.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Отзыв клиента */}
            {caseData.testimonial && (
              <div className="mb-16">
                <div className="bg-primary/5 rounded-xl p-8 border border-primary/10 relative">
                  <div className="absolute -top-5 -left-5 text-primary bg-white p-3 rounded-full shadow-md">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                    </svg>
                  </div>
                  <p className="text-xl italic mb-6 text-gray-700">{caseData.testimonial.quote}</p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold">{caseData.testimonial.author}</div>
                      <div className="text-sm text-gray-600">{caseData.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Кнопка возвращения к списку кейсов */}
            <div className="flex justify-center">
              <Link href="/cases">
                <a className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-primary/90 transition-colors">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Вернуться к списку кейсов
                </a>
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default CaseDetails;