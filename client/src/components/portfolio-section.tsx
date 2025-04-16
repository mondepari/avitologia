import { CaseStudyProps } from '@/types';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

const CaseStudyCard = ({ image, category, title, description, results }: CaseStudyProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden card-shadow border border-gray-100">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover"
        />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-primary bg-white/90 backdrop-blur-sm rounded-full">{category}</span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-50 p-4 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-semibold text-primary">{results.conversion}</div>
            <div className="text-xs text-gray-500">конверсии</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary">{results.costReduction}</div>
            <div className="text-xs text-gray-500">стоимость</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary">{results.roi}</div>
            <div className="text-xs text-gray-500">ROI</div>
          </div>
        </div>
        
        <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary font-medium py-2.5 rounded-full transition duration-300 inline-flex items-center justify-center">
          Подробнее о кейсе
          <ExternalLink className="h-4 w-4 ml-2" />
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
    },
    {
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      category: "Автобизнес",
      title: "Увеличение конверсии для автосалона",
      description: "Оптимизация существующих рекламных кампаний и запуск новых для увеличения целевого трафика.",
      results: {
        conversion: "+51%",
        costReduction: "-33%",
        roi: "x2.6"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      category: "Медицина",
      title: "Привлечение пациентов для клиники",
      description: "Настройка и ведение рекламных кампаний для медицинского центра с узкой специализацией.",
      results: {
        conversion: "+78%",
        costReduction: "-45%",
        roi: "x3.9"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1544963151-fb47c1a06478?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
      category: "FMCG",
      title: "Продвижение нового продукта на рынке",
      description: "Комплексная стратегия продвижения нового продукта с использованием различных рекламных каналов.",
      results: {
        conversion: "+63%",
        costReduction: "-29%",
        roi: "x3.4"
      }
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-white relative overflow-hidden">
      {/* Purple Circle Decoration */}
      <div className="purple-circle-decoration w-[400px] h-[400px] top-[10%] right-[-15%] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">Наши кейсы</div>
          <h2 className="section-title">Реальные результаты</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Примеры успешных проектов и результаты, которых удалось достичь для клиентов из разных сфер бизнеса.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/cases">
            <a className="bg-primary text-white font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition duration-300 shadow-lg inline-flex items-center">
              Смотреть все кейсы
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
