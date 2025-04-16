import React, { useEffect } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { DecorativeCircles } from "@/components/ui/decorative-elements";

type Case = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  shortDescription: string;
  results: {
    label: string;
    value: string;
  }[];
};

const cases: Case[] = [
  {
    id: 'ecommerce-home-goods',
    title: 'Увеличение конверсии интернет-магазина товаров для дома',
    category: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Оптимизация рекламных кампаний Яндекс.Директ и повышение конверсии в заказы на 43%',
    results: [
      { label: 'Рост конверсии', value: '+43%' },
      { label: 'Снижение CPA', value: '-27%' },
      { label: 'Увеличение ROI', value: '+68%' }
    ]
  },
  {
    id: 'b2b-services',
    title: 'Лидогенерация для B2B-компании в сфере услуг',
    category: 'B2B',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Комплексная стратегия Google Ads с фокусом на привлечение целевых клиентов',
    results: [
      { label: 'Рост количества лидов', value: '+75%' },
      { label: 'Снижение стоимости лида', value: '-35%' },
      { label: 'Повышение качества лидов', value: '+40%' }
    ]
  },
  {
    id: 'local-business',
    title: 'Локальное продвижение сети фитнес-клубов',
    category: 'Локальный бизнес',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Геотаргетированные кампании Яндекс.Директ для привлечения посетителей в 5 локациях',
    results: [
      { label: 'Рост посещений', value: '+120%' },
      { label: 'Снижение CAC', value: '-45%' },
      { label: 'Увеличение дохода', value: '+65%' }
    ]
  },
  {
    id: 'saas-platform',
    title: 'Продвижение SaaS-платформы для бизнеса',
    category: 'SaaS',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Стратегия digital-маркетинга для привлечения корпоративных клиентов',
    results: [
      { label: 'Рост регистраций', value: '+95%' },
      { label: 'Конверсия в платящих', value: '+28%' },
      { label: 'Снижение CAC', value: '-32%' }
    ]
  },
  {
    id: 'educational-courses',
    title: 'Масштабирование онлайн-школы иностранных языков',
    category: 'Образование',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Комплексная стратегия продвижения через контекстную рекламу и ретаргетинг',
    results: [
      { label: 'Рост записей на пробный урок', value: '+156%' },
      { label: 'Снижение стоимости записи', value: '-42%' },
      { label: 'Рост конверсии', value: '+68%' }
    ]
  },
  {
    id: 'real-estate',
    title: 'Продвижение элитной недвижимости',
    category: 'Недвижимость',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Таргетированная реклама для привлечения состоятельной аудитории',
    results: [
      { label: 'Рост обращений', value: '+85%' },
      { label: 'Средний чек', value: '+47%' },
      { label: 'ROI', value: '+125%' }
    ]
  }
];

const CaseCard: React.FC<{ caseItem: Case }> = ({ caseItem }) => {
  return (
    <Link href={`/cases/${caseItem.id}`}>
      <a className="block group bg-white rounded-xl overflow-hidden card-shadow transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="relative h-60 overflow-hidden">
          <img 
            src={caseItem.imageUrl} 
            alt={caseItem.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700">
            {caseItem.category}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
            {caseItem.title}
          </h3>
          
          <p className="text-gray-600 mb-4">
            {caseItem.shortDescription}
          </p>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            {caseItem.results.map((result, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                <span className="block text-primary font-bold text-lg">{result.value}</span>
                <span className="block text-xs text-gray-500">{result.label}</span>
              </div>
            ))}
          </div>
          
          <div className="text-primary font-medium flex items-center">
            Подробнее
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
};

const CasesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Кейсы | Владислав Волошин - Специалист по контекстной рекламе";
    // При загрузке страницы скролл вверх
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Декоративные круги на фоне */}
      <DecorativeCircles />
      
      <div className="relative z-10">
        <Navbar />
        
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">Кейсы</div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Успешные проекты</h1>
              <p className="text-lg text-gray-700">
                Ознакомьтесь с реальными примерами успешного продвижения бизнеса с помощью контекстной рекламы.
                Каждый кейс демонстрирует конкретные результаты и применённые стратегии.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default CasesPage;