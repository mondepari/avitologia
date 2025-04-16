import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Purple Circle Decoration */}
      <div className="purple-circle-decoration w-[400px] h-[400px] top-[-10%] left-[-15%] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block bg-primary/20 text-primary font-medium px-4 py-2 rounded-full mb-4">О специалисте</div>
            <h2 className="heading-md mb-6 text-foreground">
              Сертифицированный специалист по контекстной рекламе с опытом более 5 лет
            </h2>
            <p className="text-foreground/70 mb-6">
              Привет! Меня зовут Владислав Волошин, я сертифицированный специалист по контекстной рекламе с более чем 5-летним опытом работы в digital-маркетинге. 
              Я помогаю бизнесам увеличивать продажи и привлекать целевых клиентов через эффективную настройку рекламных кампаний.
            </p>
            <p className="text-foreground/70 mb-8">
              За время работы я успешно реализовал более 100 проектов в различных нишах: от локального бизнеса до крупных компаний федерального уровня. 
              Мой подход основан на глубоком понимании бизнес-процессов клиента и тщательном анализе целевой аудитории.
            </p>
            
            <div className="mb-8 space-y-3">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-foreground/90">Сертифицированный специалист Яндекс.Директ</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-foreground/90">Сертифицированный специалист Google Ads</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-foreground/90">Опыт работы более 5 лет</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-foreground/90">Более 100 успешных проектов</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-accent rounded-xl p-4 card-shadow text-center">
                <div className="text-4xl font-bold text-primary mb-1">5+</div>
                <div className="text-foreground/70 text-sm">лет опыта</div>
              </div>
              <div className="bg-accent rounded-xl p-4 card-shadow text-center">
                <div className="text-4xl font-bold text-primary mb-1">100+</div>
                <div className="text-foreground/70 text-sm">проектов</div>
              </div>
              <div className="bg-accent rounded-xl p-4 card-shadow text-center">
                <div className="text-4xl font-bold text-primary mb-1">30+</div>
                <div className="text-foreground/70 text-sm">ниш бизнеса</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="h-14 w-14 rounded-xl shadow-sm bg-accent flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9Z" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="h-14 w-14 rounded-xl shadow-sm bg-accent flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 16.5L16 12L10 7.5V16.5Z" fill="#4285F4" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="2"/>
                </svg>
              </div>
              <div className="h-14 w-14 rounded-xl shadow-sm bg-accent flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80" 
                alt="Владислав Волошин - Специалист по контекстной рекламе" 
                className="w-full h-auto rounded-2xl card-shadow object-cover"
              />
              <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 bg-accent p-4 rounded-xl card-shadow max-w-[180px]">
                <div className="flex items-center">
                  <div className="text-primary">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.519 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.519-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="ml-2">
                    <div className="text-sm font-semibold text-foreground">Google Partner</div>
                    <div className="text-xs text-foreground/60">Сертифицированный специалист</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
