import { TestimonialProps } from '@/types';

const TestimonialCard = ({ quote, author }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition duration-300">
      <div className="flex items-center mb-6">
        <div className="text-primary">
          <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
          </svg>
        </div>
      </div>
      
      <p className="text-gray-700 mb-6 italic">
        {quote}
      </p>
      
      <div className="flex items-center">
        <img 
          src={author.image} 
          alt={author.name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <div className="font-semibold">{author.name}</div>
          <div className="text-sm text-gray-500">{author.position}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Сергей помог нам увеличить продажи через контекстную рекламу на 35% при снижении стоимости привлечения клиента. Его подход основан на глубоком анализе и понимании нашего бизнеса. Рекомендую!",
      author: {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
        name: "Александр Иванов",
        position: "Директор, ООО \"ТехноПром\""
      }
    },
    {
      quote: "Работаем с Сергеем уже больше года. Он не просто настраивает рекламу, а действительно погружается в бизнес-процессы, предлагает идеи по улучшению конверсии. Результатами очень довольны!",
      author: {
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
        name: "Елена Смирнова",
        position: "Маркетолог, \"BeautyShop\""
      }
    },
    {
      quote: "После неудачного опыта с несколькими агентствами мы обратились к Сергею. За 3 месяца он полностью перестроил наш рекламный кабинет, и мы наконец-то видим положительный ROI. Профессионал своего дела!",
      author: {
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
        name: "Дмитрий Кузнецов",
        position: "Владелец, \"СтройМастер\""
      }
    }
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Что говорят мои клиенты о результатах нашего сотрудничества.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
