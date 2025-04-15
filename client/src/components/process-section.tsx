import { ProcessStepProps } from '@/types';

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="bg-white rounded-xl p-6 card-shadow border border-gray-100 relative">
      <div className="absolute -top-5 -left-5">
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
          {number}
        </div>
      </div>
      <div className="pl-4 pt-3">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">
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
      title: 'Анализ и стратегия',
      description: 'Детально изучаю ваш бизнес, конкурентов и целевую аудиторию. Определяем ключевые цели рекламных кампаний и разрабатываем стратегию для их достижения.'
    },
    {
      number: 2,
      title: 'Настройка рекламных кампаний',
      description: 'Создание структуры аккаунта, подбор ключевых слов, написание эффективных рекламных объявлений и настройка таргетинга для привлечения наиболее релевантной аудитории.'
    },
    {
      number: 3,
      title: 'Запуск и тестирование',
      description: 'Запуск рекламных кампаний и их активное тестирование в первые недели работы. Сбор данных для последующей оптимизации и улучшения результатов.'
    },
    {
      number: 4,
      title: 'Оптимизация и масштабирование',
      description: 'Регулярный анализ результатов, корректировка стратегии и оптимизация кампаний для достижения максимальной эффективности. Масштабирование успешных активностей.'
    },
    {
      number: 5,
      title: 'Отчетность и коммуникация',
      description: 'Предоставление регулярных отчетов о результатах рекламных кампаний в понятном формате. Обсуждение текущих результатов и планирование дальнейших шагов.'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
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
            Связаться со мной
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
