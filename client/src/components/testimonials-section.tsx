import { TestimonialProps } from '@/types';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl p-8 card-shadow border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="text-primary">
          <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
          </svg>
        </div>
        <div className="flex text-yellow-400">
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
          <Star className="w-5 h-5 fill-current" />
        </div>
      </div>
      
      <p className="text-gray-700 mb-8 italic">
        {quote}
      </p>
      
      <div className="flex items-center">
        <img 
          src={author.image} 
          alt={author.name} 
          className="w-14 h-14 rounded-full mr-4 object-cover ring-2 ring-primary/20"
        />
        <div>
          <div className="font-semibold text-gray-900">{author.name}</div>
          <div className="text-sm text-gray-500">{author.position}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Владислав помог нам увеличить продажи через контекстную рекламу на 35% при снижении стоимости привлечения клиента. Его подход основан на глубоком анализе и понимании нашего бизнеса. Рекомендую!",
      author: {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
        name: "Александр Иванов",
        position: "Директор, ООО \"ТехноПром\""
      }
    },
    {
      quote: "Работаем с Владиславом уже больше года. Он не просто настраивает рекламу, а действительно погружается в бизнес-процессы, предлагает идеи по улучшению конверсии. Результатами очень довольны!",
      author: {
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
        name: "Елена Смирнова",
        position: "Маркетолог, \"BeautyShop\""
      }
    },
    {
      quote: "После неудачного опыта с несколькими агентствами мы обратились к Владиславу. За 3 месяца он полностью перестроил наш рекламный кабинет, и мы наконец-то видим положительный ROI. Профессионал своего дела!",
      author: {
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
        name: "Дмитрий Кузнецов",
        position: "Владелец, \"СтройМастер\""
      }
    }
  ];

  return (
    <section className="section-padding bg-gradient-purple relative overflow-hidden">
      {/* Purple Circle Decorations */}
      <div className="purple-circle-decoration w-[400px] h-[400px] top-[-5%] right-[-10%] opacity-30"></div>
      <div className="purple-circle-decoration w-[350px] h-[350px] bottom-[-10%] left-[-10%] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 text-white font-medium px-4 py-2 rounded-full mb-4">Отзывы клиентов</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Более 30 успешных проектов</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Что говорят мои клиенты о результатах нашего сотрудничества.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-white/20 text-white font-medium border border-white/30 px-8 py-3 rounded-full hover:bg-white/30 transition duration-300">
            Смотреть все отзывы
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
