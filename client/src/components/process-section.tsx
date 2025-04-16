import { ProcessStepProps } from '@/types';
import { ReactNode } from 'react';

const ProcessStep = ({ number, title, description, iconSvg }: ProcessStepProps & { iconSvg: ReactNode }) => {
  return (
    <div className="flex items-start gap-4 mb-12">
      <div className="relative flex-none">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-4xl font-medium text-gray-400 mb-4">
          {number}
        </div>
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 text-primary">
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
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 3,
      title: 'Анализ конкурентов',
      description: 'Анализ ваших прямых и косвенных конкурентов. Выявляю у них сильные и слабые стороны. Смотрим как рекламируются конкуренты и что они предлагают.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 11H9V17H7V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 11H13V17H11V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 7H17V17H15V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 7H21M7 5H7.01M11 5H11.01M15 5H15.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 21L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 4,
      title: 'Даю рекомендации по сайту',
      description: 'Даю рекомендации по оптимизации и доработке вашего сайта. Поверьте, я знаю, что делать чтобы Ваш сайт начал приносить заявки.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.0799 20 7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 16H12M8 12H16M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17.5 6V1M15 3.5H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 5,
      title: 'Настраиваю рекламу',
      description: 'Создаю рекламный аккаунт, оптимизированный до мелочей рекламных кампаний, в соответствии с медиапланом и стратегией.',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5858 13.4142L7.75735 10.5858C7.10459 9.93305 7.10459 8.8668 7.75735 8.21404C8.41012 7.56128 9.47636 7.56128 10.1291 8.21404L12.5 10.5849L14.8708 8.21412C15.5236 7.56136 16.5898 7.56136 17.2426 8.21412C17.8954 8.86688 17.8954 9.93312 17.2426 10.5859L14.4142 13.4142L17.2426 16.2426C17.8954 16.8954 17.8954 17.9616 17.2426 18.6144C16.5899 19.2672 15.5236 19.2672 14.8708 18.6144L12.5 16.2436L10.1291 18.6144C9.47637 19.2672 8.41012 19.2672 7.75736 18.6144C7.1046 17.9617 7.1046 16.8954 7.75736 16.2426L10.5858 13.4142Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 6,
      title: 'Получение заявок',
      description: 'Получаем горячий поток пользователей, желающих купить Вашу услугу, продукт или товар!',
      iconSvg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.95926 14.4373L9.90688 14.3366C9.67673 13.8107 9.56166 13.5477 9.36478 13.3658C9.19073 13.204 8.97272 13.0963 8.73833 13.0553C8.47411 13.0087 8.19489 13.0665 7.63645 13.1822L7.63644 13.1822L7.6002 13.1915C7.24866 13.2642 7.07288 13.3006 6.94504 13.3898C6.83225 13.4681 6.7493 13.5763 6.70711 13.7011C6.65945 13.8443 6.66356 14.0288 6.67176 14.3977L6.6717 14.3977L6.67631 14.5428C6.70935 15.5776 6.73588 16.0949 6.97104 16.4935C7.17694 16.8413 7.50493 17.1134 7.89148 17.2478C8.33403 17.4015 8.8535 17.3257 9.89245 17.174L9.89245 17.174L10.0175 17.1552C10.3876 17.0911 10.5727 17.059 10.7052 16.9722C10.8215 16.8959 10.9117 16.787 10.9654 16.6593C11.0261 16.5125 11.0231 16.3289 11.0172 15.9617L11.0172 15.9616L11.0121 15.8066C10.9765 15.2178 10.9587 14.9233 10.8675 14.6865C10.784 14.4705 10.6495 14.2825 10.4776 14.1411C10.2873 13.9842 10.0263 13.888 9.95926 13.8694" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.75293 14.125L3.75 16.125L5.75293 18.125" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.2471 9.875L20.25 7.875L18.2471 5.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0407 9.56268L14.0931 9.66339C14.3233 10.1893 14.4383 10.4523 14.6352 10.6342C14.8093 10.796 15.0273 10.9037 15.2617 10.9447C15.5259 10.9913 15.8051 10.9335 16.3636 10.8178L16.3636 10.8178L16.3998 10.8085C16.7513 10.7358 16.9271 10.6994 17.055 10.6102C17.1677 10.5319 17.2507 10.4237 17.2929 10.2989C17.3406 10.1557 17.3364 9.97119 17.3282 9.60227L17.3283 9.60227L17.3237 9.45721C17.2907 8.42242 17.2641 7.90512 17.029 7.50649C16.8231 7.15866 16.4951 6.88661 16.1085 6.75222C15.666 6.5985 15.1465 6.67432 14.1076 6.82604L14.1075 6.82606L13.9825 6.84478C13.6124 6.90885 13.4273 6.94101 13.2948 7.02777C13.1785 7.10407 13.0883 7.21296 13.0346 7.34068C12.9739 7.48747 12.9769 7.67114 12.9828 8.03827L12.9828 8.03841L12.9879 8.19342C13.0235 8.78224 13.0413 9.07673 13.1325 9.31346C13.216 9.52948 13.3505 9.71751 13.5224 9.85885C13.7127 10.0158 13.9737 10.112 14.0407 10.1306" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Purple Circle Decoration */}
      <div className="purple-circle-decoration w-[400px] h-[400px] bottom-[10%] left-[-15%] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">Процесс работы</div>
          <h2 className="section-title">Как я работаю с клиентами</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Прозрачный и эффективный процесс работы, который позволяет достигать максимальных результатов.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-center mb-3">ЗА 6 ШАГОВ СДЕЛАЮ РЕКЛАМУ ПРИБЫЛЬНОЙ</h3>
            <p className="text-center text-gray-600">Настройка занимает только одну шестую часть из всей работы</p>
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
            className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition duration-300 shadow-lg"
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
