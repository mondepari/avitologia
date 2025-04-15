import { CaseStudyProps } from '@/types';
import { ChevronRight } from 'lucide-react';

const CaseStudyCard = ({ image, category, title, description, results }: CaseStudyProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-56 object-cover"
      />
      
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">{category}</span>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-lg font-semibold text-primary">{results.conversion}</div>
            <div className="text-sm text-gray-500">конверсии</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-primary">{results.costReduction}</div>
            <div className="text-sm text-gray-500">стоимость конверсии</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-primary">{results.roi}</div>
            <div className="text-sm text-gray-500">ROI</div>
          </div>
        </div>
        
        <button className="inline-flex items-center font-medium text-primary hover:text-blue-700">
          Подробнее о кейсе
          <ChevronRight className="h-5 w-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      category: "Интернет-магазин",
      title: "Увеличение продаж мебели на 43%",
      description: "Разработка и внедрение комплексной стратегии контекстной рекламы для интернет-магазина мебели.",
      results: {
        conversion: "+43%",
        costReduction: "-27%",
        roi: "x3.2"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      category: "Юридические услуги",
      title: "Привлечение клиентов для юридической фирмы",
      description: "Разработка стратегии продвижения и запуск рекламных кампаний для юридической компании.",
      results: {
        conversion: "+67%",
        costReduction: "-35%",
        roi: "x2.8"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      category: "Образование",
      title: "Масштабирование онлайн-школы иностранных языков",
      description: "Создание и оптимизация рекламных кампаний для онлайн-школы иностранных языков.",
      results: {
        conversion: "+92%",
        costReduction: "-41%",
        roi: "x4.1"
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Кейсы и результаты</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Реальные примеры моей работы и результаты, которых удалось достичь для клиентов из разных сфер бизнеса.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center bg-white border border-primary text-primary font-medium px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition duration-300">
            Смотреть все кейсы
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
