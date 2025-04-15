import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О себе</h2>
            <p className="text-gray-700 mb-6">
              Привет! Меня зовут Сергей Панкратов, я сертифицированный специалист по контекстной рекламе с более чем 5-летним опытом работы в digital-маркетинге. 
              Я помогаю бизнесам увеличивать продажи и привлекать целевых клиентов через эффективную настройку рекламных кампаний.
            </p>
            <p className="text-gray-700 mb-6">
              За время работы я успешно реализовал более 100 проектов в различных нишах: от локального бизнеса до крупных компаний федерального уровня. 
              Мой подход основан на глубоком понимании бизнес-процессов клиента и тщательном анализе целевой аудитории.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-gray-600">проектов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-600">ниш бизнеса</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="h-12 w-12 rounded shadow-sm bg-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="h-12 w-12 rounded shadow-sm bg-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 16.5L16 12L10 7.5V16.5Z" fill="#4285F4" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="2"/>
                </svg>
              </div>
              <div className="h-12 w-12 rounded shadow-sm bg-white flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80" 
              alt="Сергей Панкратов - Специалист по контекстной рекламе" 
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
