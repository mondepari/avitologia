import { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Имитация загрузки страницы с увеличением прогресса
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 150);

    // Полная загрузка через определенное время
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Плавно скрываем прелоадер, когда загрузка завершена
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="flex flex-col items-center">
        {/* Верхняя часть логотипа */}
        <div className="text-4xl font-bold text-primary mb-2">ТВ</div>
        
        {/* Анимированный спиннер */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"
            style={{ 
              clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`
            }}
          ></div>
          
          {/* Центральный элемент */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <div className="text-white text-xs font-bold">{Math.round(progress)}%</div>
            </div>
          </div>
        </div>
        
        {/* Индикатор прогресса */}
        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Текст загрузки */}
        <div className="text-gray-800 font-medium tracking-wider">
          <span>ЗАГРУЗКА</span>
          <span className="inline-block animate-bounce delay-100 mx-0.5">.</span>
          <span className="inline-block animate-bounce delay-200 mx-0.5">.</span>
          <span className="inline-block animate-bounce delay-300 mx-0.5">.</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;