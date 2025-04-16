import { ProcessStepProps } from '@/types';
import { ReactNode } from 'react';

const ProcessStep = ({ number, title, description, iconSvg }: ProcessStepProps & { iconSvg: ReactNode }) => {
  return (
    <div className="flex items-start gap-5 mb-12">
      <div className="relative flex-none">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-4xl font-medium text-gray-400">
          {number}
        </div>
        <div className="absolute -top-3 -left-3 z-10">
          <div className="w-10 h-10 text-primary">
            {iconSvg}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 text-sm max-w-md">
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
          <path d="M7 11H9V17H7V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 11H13V17H11V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 7H17V17H15V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 7H21M7 5H7.01M11 5H11.01M15 5H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 21L3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
          <path d="M4 4H6C8.8 4 10.2 4 11 4.4C11.9 5 12.5 5.62 13 6.5C13.4 7.2 13.4 8.8 13.4 12C13.4 15.2 13.4 16.8 13 17.5C12.5 18.4 11.9 19 11 19.6C10.2 20 8.8 20 6 20H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 9.5H17M7 14.5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 4C19.8 4 21.2 4 21.9 4.4C22.8 5 23.5 5.62 23.9 6.5C24.3 7.2 24.3 8.8 24.3 12C24.3 15.2 24.3 16.8 23.9 17.5C23.5 18.4 22.8 19 21.9 19.6C21.2 20 19.8 20 17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 6,
      title: 'Получение заявок',
      description: 'Получаем горячий поток пользователей, желающих купить Вашу услугу, продукт или товар!',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 14.5C6 13.1193 7.11929 12 8.5 12H14.5C15.8807 12 17 13.1193 17 14.5V19.5C17 20.8807 15.8807 22 14.5 22H8.5C7.11929 22 6 20.8807 6 19.5V14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.5 18H12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V12H9V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 15H17M4 15H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Purple Circle Decoration */}
      <div className="purple-circle-decoration w-[400px] h-[400px] bottom-[10%] left-[-15%] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">ЗА 6 ШАГОВ СДЕЛАЮ РЕКЛАМУ ПРИБЫЛЬНОЙ</h2>
            <p className="text-center text-gray-600 text-lg">Настройка занимает только одну шестую часть из всей работы</p>
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
