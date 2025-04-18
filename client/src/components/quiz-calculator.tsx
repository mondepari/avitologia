import { useState } from "react";
import { Slider } from "./ui/slider";
import { SectionDecoration } from "./ui/decorative-elements";

interface QuizStep {
  id: number;
  title: string;
  question: string;
  type: "radio" | "text" | "slider" | "gift";
  options?: Array<{ id: string; label: string }>;
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  formatValue?: (value: number) => string;
  gifts?: Array<{ id: string; title: string; description: string }>;
}

const quizSteps: QuizStep[] = [
  {
    id: 1,
    title: "Шаг 1 из 9",
    question: "Какая у вас сфера бизнеса?",
    type: "radio",
    options: [
      { id: "services", label: "Услуги" },
      { id: "retail", label: "Товарный бизнес" },
      { id: "b2b", label: "ОПТ" },
      { id: "manufacturing", label: "Производство" },
      { id: "construction", label: "Строительство" },
      { id: "realestate", label: "Недвижимость" },
      { id: "infobasiness", label: "Инфобизнес" },
      { id: "other", label: "Другое" }
    ]
  },
  {
    id: 2,
    title: "Шаг 2 из 9",
    question: "Укажите ссылку на сайт",
    type: "text",
    placeholder: "Пример: step-in-context.ru"
  },
  {
    id: 3,
    title: "Шаг 3 из 9",
    question: "Вы уже рекламируетесь?",
    type: "radio",
    options: [
      { id: "yes", label: "Да" },
      { id: "no", label: "Нет" }
    ]
  },
  {
    id: 4,
    title: "Шаг 4 из 9",
    question: "Как вы рекламируетесь?",
    type: "radio",
    options: [
      { id: "yandex", label: "Яндекс Директ" },
      { id: "avito", label: "Реклама на Авито" },
      { id: "both", label: "Яндекс и Авито" },
      { id: "social", label: "Социальные сети" },
      { id: "other", label: "Другие каналы" }
    ]
  },
  {
    id: 5,
    title: "Шаг 5 из 9",
    question: "Какие показатели вас не устраивают?",
    type: "radio",
    options: [
      { id: "cost", label: "Высокая стоимость клика" },
      { id: "conversion", label: "Низкая конверсия" },
      { id: "traffic", label: "Мало трафика" },
      { id: "quality", label: "Качество трафика" },
      { id: "all", label: "Все перечисленное" }
    ]
  },
  {
    id: 6,
    title: "Шаг 6 из 9",
    question: "Вам нужна моя помощь в настройке рекламы?",
    type: "radio",
    options: [
      { id: "consult", label: "Да, я хочу проконсультироваться" },
      { id: "collaboration", label: "Да, я хочу начать сотрудничество" },
      { id: "gift", label: "Нет, я просто хочу получить подарок" }
    ]
  },
  {
    id: 7,
    title: "Шаг 7 из 9",
    question: "Какой у Вас бюджет на рекламу в месяц?",
    type: "slider",
    min: 30000,
    max: 1000000,
    defaultValue: 150000,
    formatValue: (value) => `${value.toLocaleString('ru-RU')} р.`
  },
  {
    id: 8,
    title: "Шаг 8 из 9",
    question: "Выберите подарок",
    type: "gift",
    gifts: [
      { 
        id: "yandex-audit", 
        title: "АУДИТ ЯНДЕКС ДИРЕКТ ИЛИ РЕКЛАМЫ НА АВИТО", 
        description: "Аудит контекстной рекламы" 
      },
      { 
        id: "logo-audit", 
        title: "АУДИТ ЛОГОТИПА ИЛИ ДИЗАЙНА СОЦ.СЕТЕЙ ОТ ПРОФИ", 
        description: "Аудит лого и оформления соц.сетей от профи" 
      },
      { 
        id: "site-audit", 
        title: "АУДИТ ВАШЕГО САЙТА ОТ ПРОФИ", 
        description: "Аудит сайта от профи" 
      }
    ]
  },
  {
    id: 9,
    title: "Шаг 9 из 9",
    question: "Последний шаг",
    type: "radio",
    options: [
      { id: "whatsapp", label: "Whatsapp" },
      { id: "viber", label: "Viber" },
      { id: "telegram", label: "Telegram" },
      { id: "phone", label: "Телефон" }
    ]
  }
];

const QuizCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const step = quizSteps.find(s => s.id === currentStep);
  
  const handleNext = () => {
    if (currentStep < quizSteps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit the quiz
      console.log("Quiz submitted:", answers);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  const handleOptionSelect = (value: string) => {
    setAnswers({...answers, [currentStep]: value});
  };
  
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({...answers, [currentStep]: e.target.value});
  };
  
  const handleSliderChange = (value: number[]) => {
    setAnswers({...answers, [currentStep]: value[0]});
  };
  
  const handleGiftSelect = (giftId: string) => {
    setAnswers({...answers, [currentStep]: giftId});
  };
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };
  
  const remainingSteps = quizSteps.length - currentStep;
  
  const renderStepContent = () => {
    if (!step) return null;
    
    switch (step.type) {
      case "radio":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {step.options?.map(option => (
              <div key={option.id} className="relative">
                <input
                  type="radio"
                  id={option.id}
                  name={`step-${currentStep}`}
                  value={option.id}
                  checked={answers[currentStep] === option.id}
                  onChange={() => handleOptionSelect(option.id)}
                  className="opacity-0 absolute h-6 w-6"
                />
                <label 
                  htmlFor={option.id} 
                  className={`flex items-center p-4 bg-accent border rounded-lg cursor-pointer hover:border-primary transition-all ${
                    answers[currentStep] === option.id 
                      ? "border-2 border-primary" 
                      : "border border-gray-600/30"
                  }`}
                >
                  <div className={`w-6 h-6 flex-shrink-0 rounded-full border mr-4 flex items-center justify-center ${
                    answers[currentStep] === option.id 
                      ? "border-primary bg-primary/10" 
                      : "border-gray-300"
                  }`}>
                    {answers[currentStep] === option.id && (
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    )}
                  </div>
                  <span>{option.label}</span>
                </label>
              </div>
            ))}
          </div>
        );
        
      case "text":
        return (
          <div className="w-full">
            <input
              type="text"
              placeholder={step.placeholder}
              value={answers[currentStep] || ""}
              onChange={handleTextChange}
              className="w-full p-4 border border-gray-700/30 bg-accent text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
        );
        
      case "slider":
        const sliderValue = answers[currentStep] || step.defaultValue || step.min;
        return (
          <div className="w-full">
            <div className="mb-6 text-center">
              <div className="inline-block bg-accent rounded-full px-8 py-3 text-lg font-medium border border-gray-700/30 text-foreground">
                {step.formatValue ? step.formatValue(sliderValue) : sliderValue}
              </div>
            </div>
            <div className="px-6">
              <div className="flex justify-between mb-2 text-sm text-foreground/70">
                <span>{step.formatValue ? step.formatValue(step.min || 0) : step.min}</span>
                <span>{step.formatValue ? step.formatValue(step.max || 100) : step.max}</span>
              </div>
              <Slider
                defaultValue={[sliderValue]}
                min={step.min}
                max={step.max}
                step={1000}
                onValueChange={handleSliderChange}
                className="my-6"
              />
            </div>
          </div>
        );
        
      case "gift":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {step.gifts?.map(gift => (
              <div key={gift.id} className="flex flex-col">
                <div 
                  className={`h-32 mb-2 p-4 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white text-center font-bold cursor-pointer shadow-md ${
                    answers[currentStep] === gift.id ? "ring-4 ring-[#6200EE] ring-opacity-50" : ""
                  }`}
                  onClick={() => handleGiftSelect(gift.id)}
                >
                  {gift.title}
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    id={gift.id}
                    name={`step-${currentStep}`}
                    value={gift.id}
                    checked={answers[currentStep] === gift.id}
                    onChange={() => handleGiftSelect(gift.id)}
                    className="opacity-0 absolute h-6 w-6"
                  />
                  <label 
                    htmlFor={gift.id} 
                    className={`flex items-center p-3 bg-accent border rounded-lg cursor-pointer hover:border-primary transition-all ${
                      answers[currentStep] === gift.id 
                        ? "border-2 border-primary" 
                        : "border border-gray-700/30"
                    }`}
                  >
                    <div className={`w-5 h-5 flex-shrink-0 rounded-full border mr-3 flex items-center justify-center ${
                      answers[currentStep] === gift.id 
                        ? "border-primary bg-primary/10" 
                        : "border-gray-600/30"
                    }`}>
                      {answers[currentStep] === gift.id && (
                        <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                    <span className="text-sm text-foreground/90">{gift.description}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        );
        
      default:
        return null;
    }
  };
  
  const renderLastStep = () => {
    if (currentStep !== 9) return null;
    
    const contactMethod = answers[9] || "";
    
    return (
      <div className="mt-6">
        <p className="mb-2 text-foreground">Где Вам удобней связаться?</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {quizSteps[8].options?.map(option => (
            <button
              key={option.id}
              className={`px-4 py-2 rounded-full border flex items-center gap-2 ${
                contactMethod === option.id 
                  ? "bg-gradient-to-r from-[#6200EE] to-[#7A36DF] text-white border-[#6200EE]" 
                  : "border-gray-600/30 text-foreground hover:border-[#6200EE]"
              }`}
              onClick={() => handleOptionSelect(option.id)}
            >
              {option.id === "whatsapp" && <span className="text-green-500">●</span>}
              {option.id === "viber" && <span className="text-purple-500">●</span>}
              {option.id === "telegram" && <span className="text-blue-500">●</span>}
              {option.id === "phone" && <span className="text-gray-500">●</span>}
              {option.label}
            </button>
          ))}
        </div>
        
        <div className="mb-4">
          <input 
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="+7 (___) ___-__-__"
            className="w-full p-3 bg-accent rounded-full border border-gray-700/30 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
        
        <p className="text-xs text-foreground/60 mb-4">
          Оставляя заявку, Вы принимаете <a href="#" className="text-primary underline">политику конфиденциальности</a>
        </p>
      </div>
    );
  };
  
  return (
    <section id="calculator" className="py-16 bg-background relative overflow-hidden">
      {/* Декоративные элементы */}
      <SectionDecoration />
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase mb-2 text-foreground">ОЦЕНКА СТОИМОСТИ</h2>
          <p className="text-lg text-foreground/70">Ответьте на 9 вопросов. Это бесплатно.</p>
        </div>
        
        <div className="flex flex-wrap -mx-4">
          {/* Преимущества формы */}
          <div className="w-full px-4 mb-8">
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <div className="flex items-center bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full px-4 py-2 shadow-md">
                <div className="w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"/>
                    <path d="M10 6a1 1 0 011 1v3a1 1 0 01-1 1 1 1 0 01-1-1V7a1 1 0 011-1zm0 6a1 1 0 110 2 1 1 0 010-2z"/>
                  </svg>
                </div>
                <div className="text-sm text-white">
                  Расчет стоимости настройки рекламы
                </div>
              </div>
              
              <div className="flex items-center bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full px-4 py-2 shadow-md">
                <div className="w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-sm text-white">
                  Анализ ниши и стратегии продвижения
                </div>
              </div>
              
              <div className="flex items-center bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full px-4 py-2 shadow-md">
                <div className="w-12 h-12 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h1.17A3 3 0 015 5zm4.05-1a.95.95 0 00-.95.95v.5c0 .364.105.706.284.99H7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.384A1.45 1.45 0 0110 5.95v-.5A.95.95 0 009.05 4z" clipRule="evenodd"/>
                    <path d="M4 13a1 1 0 011-1h10a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3z"/>
                  </svg>
                </div>
                <div className="text-sm text-white">
                  Любой из 3-х подарков на Ваш выбор
                </div>
              </div>
            </div>
          </div>
          
          {/* Форма квиза */}
          <div className="w-full lg:w-2/3 px-4 mx-auto">
            <div className="bg-accent rounded-xl shadow-xl overflow-hidden">
              <div className="flex flex-wrap">
                {/* Левая часть с формой */}
                <div className="w-full lg:w-2/3 p-8">
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <div className="text-xl font-medium text-foreground">{step?.title}</div>
                      <div className="ml-4 flex-grow">
                        <div className="h-2 bg-gray-600/20 rounded-full">
                          <div 
                            className="h-2 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-full transition-all duration-500 ease-in-out" 
                            style={{ width: `${(currentStep / quizSteps.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6 text-foreground">{step?.question}</h3>
                    
                    {renderStepContent()}
                    {renderLastStep()}
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <button 
                      onClick={handlePrevious}
                      className={`px-8 py-3 rounded-full border border-primary text-primary font-medium ${
                        currentStep === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/5"
                      }`}
                      disabled={currentStep === 1}
                    >
                      ВЕРНУТЬСЯ
                    </button>
                    
                    <button 
                      onClick={handleNext}
                      className="px-8 py-3 rounded-full btn-purple text-white font-medium shadow-md"
                    >
                      {currentStep === quizSteps.length ? "ПОЛУЧИТЬ РАСЧЕТ" : "СЛЕДУЮЩИЙ ШАГ"}
                    </button>
                  </div>
                </div>
                
                {/* Правая часть с информацией */}
                <div className="w-full lg:w-1/3 bg-background/70 p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                          <img src="./src/assets/images/specialist.svg" alt="Алексей Степин" className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-bold text-lg mb-1 text-foreground">Алексей Степин</h4>
                        <p className="text-sm text-foreground/70">Опытный и скромный директолог</p>
                      </div>
                    </div>
                    
                    <div className="mb-8 bg-accent p-4 rounded-lg shadow-sm">
                      <p className="text-center text-sm text-foreground/80">
                        {currentStep === 1 && "Для точного расчета и анализа мне нужно знать, чем вы занимаетесь"}
                        {currentStep === 2 && "Мне нужно посмотреть на ваш сайт, чтобы ознакомиться"}
                        {currentStep === 3 && "Мне нужно знать, есть ли у вас опыт в рекламе"}
                        {currentStep === 6 && "Вам нужна моя помощь в настройке рекламы?"}
                        {currentStep === 7 && "Какой у Вас бюджет на рекламу в месяц?"}
                        {currentStep === 8 && "Выберите подарок"}
                        {currentStep === 9 && "Последний шаг"}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="text-center mb-4">
                        <p className="text-sm mb-2 text-foreground/80">
                          {remainingSteps > 0
                            ? `До открытия осталось ${remainingSteps} вопросов`
                            : "Вы открыли"
                          }
                        </p>
                      </div>
                      
                      <div className="flex justify-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-lg shadow-md p-2 flex items-center justify-center relative">
                          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-primary font-bold text-xs flex items-center justify-center">1</span>
                          <img src="./src/assets/icons/calculator.svg" alt="Калькулятор" className="w-10 h-10 brightness-200 filter" />
                        </div>
                        
                        <div className="w-16 h-16 bg-gradient-to-r from-[#6200EE] to-[#7A36DF] rounded-lg shadow-md p-2 flex items-center justify-center relative">
                          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-primary font-bold text-xs flex items-center justify-center">2</span>
                          <img src="./src/assets/icons/gift.svg" alt="Подарок" className="w-10 h-10 brightness-200 filter" />
                        </div>
                      </div>
                    </div>
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

export default QuizCalculator;