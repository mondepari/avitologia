import { ProcessStepProps } from '@/types';
import { ReactNode } from 'react';

const ProcessStep = ({ number, title, description, iconSvg }: ProcessStepProps & { iconSvg: ReactNode }) => {
  return (
    <div className="flex items-start gap-5 mb-12">
      <div className="relative flex-none">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-4xl font-medium text-foreground/50">
          {number}
        </div>
        <div className="absolute -top-3 -left-3 z-10">
          <div className="w-10 h-10 text-primary">
            {iconSvg}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2 text-foreground">{title}</h3>
        <p className="text-foreground/70 text-sm max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Обсуждение проекта',
      description: 'Обсуждаем с Вами основные моменты, я провожу анкетирование, определяю ключевые цели и задачи рекламы.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10.5H8.01M12 10.5H12.01M16 10.5H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 2,
      title: 'Анализ и медиапланирование',
      description: 'После сбора семантического ядра, я провожу анализ Вашей ниши на рынке. Определяюсь, в какую рекламу лучше будет вложить деньги для максимальной отдачи.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 3,
      title: 'Анализ конкурентов',
      description: 'Анализ ваших прямых и косвенных конкурентов. Выявляю у них сильные и слабые стороны. Смотрим как рекламируются конкуренты и что они предлагают.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18L18 20L22 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 12C12.2091 12 14 10.2091 14 8C14 5.79086 12.2091 4 10 4C7.79086 4 6 5.79086 6 8C6 10.2091 7.79086 12 10 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 8L19 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 11L22 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 4,
      title: 'Даю рекомендации по сайту',
      description: 'Даю рекомендации по оптимизации и доработке вашего сайта. Поверьте, я знаю, что делать чтобы Ваш сайт начал приносить заявки.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 16H12M8 12H16M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 6V1M15 3.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 5,
      title: 'Настраиваю рекламу',
      description: 'Создаю рекламный аккаунт, оптимизированный до мелочей рекламных кампаний, в соответствии с медиапланом и стратегией.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 6,
      title: 'Получение заявок',
      description: 'Получаем горячий поток пользователей, желающих купить Вашу услугу, продукт или товар!',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="section-padding bg-background relative overflow-hidden">
      {/* Purple Circle Decoration */}
      <div className="purple-circle-decoration w-[400px] h-[400px] bottom-[10%] left-[-15%] opacity-30"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-foreground">ЗА 6 ШАГОВ СДЕЛАЮ РЕКЛАМУ ПРИБЫЛЬНОЙ</h2>
            <p className="text-center text-foreground/70 text-lg">Настройка занимает только одну шестую часть из всей работы</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-4">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} 
            className="bg-primary text-white font-semibold px-12 py-4 rounded-full hover:bg-primary/90 transition duration-300 shadow-lg text-lg"
          >
            РАССЧИТАТЬ СТОИМОСТЬ
            <span className="block text-xs mt-1 font-light opacity-90">(за 1 минуту + подарок)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
