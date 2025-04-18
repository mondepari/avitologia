import { ServiceCardProps } from '@/types';
import { ChevronRight } from 'lucide-react';
import { SectionDecoration } from './ui/decorative-elements';

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-accent rounded-xl p-8 card-shadow border border-border">
      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-foreground/70 mb-6">
        {description}
      </p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-primary mt-0.5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button 
          onClick={scrollToContact} 
          className="btn-purple text-white font-medium px-6 py-2.5 rounded-full inline-flex items-center"
        >
          Подробнее 
          <ChevronRight className="h-5 w-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Настройка Яндекс.Директ',
      description: 'Профессиональная настройка рекламных кампаний в Яндекс.Директ с учетом специфики вашего бизнеса и целевой аудитории.',
      features: ['Поисковая реклама', 'Ретаргетинг и РСЯ', 'Smart-баннеры']
    },
    {
      icon: (
        <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Реклама на Авито',
      description: 'Настройка эффективных рекламных кампаний на Авито для привлечения потенциальных клиентов и увеличения продаж.',
      features: ['Автоматическое продвижение', 'Индивидуальные стратегии', 'Оптимизация бюджета']
    },
    {
      icon: (
        <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Аналитика и оптимизация',
      description: 'Настройка систем аналитики и регулярная оптимизация рекламных кампаний для достижения максимальной эффективности.',
      features: ['Яндекс.Метрика', 'Отчеты и рекомендации', 'A/B тестирование']
    }
  ];

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Декоративные элементы */}
      <SectionDecoration />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/20 text-primary font-medium px-4 py-2 rounded-full mb-4">Наши услуги</div>
          <h2 className="section-title text-foreground">Эффективные решения для <br/>вашего бизнеса</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Предлагаю полный спектр услуг по настройке и оптимизации рекламных кампаний, 
            которые приведут потенциальных клиентов на ваш сайт.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
