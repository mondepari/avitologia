import { ProcessStepProps } from '@/types';

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="flex-shrink-0 relative z-10 mb-4 md:mb-0">
        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
          {number}
        </div>
      </div>
      <div className="md:ml-8">
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
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как я работаю</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Прозрачный процесс работы, который позволяет достигать максимальных результатов.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Steps */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 hidden md:block"></div>
            
            {/* Steps List */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <ProcessStep key={index} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
