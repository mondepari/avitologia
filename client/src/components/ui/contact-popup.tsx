import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, MessageSquare, Mail, X, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactPopupProps {
  children: React.ReactNode;
}

export function ContactPopup({ children }: ContactPopupProps) {
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("+7");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<'phone' | 'form'>('phone');
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.startsWith("+7") && value.length <= 12) {
      setPhoneNumber(value);
    }
  };
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  
  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || phoneNumber.length < 12) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный номер телефона",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Имитация отправки запроса на обратный звонок
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      
      toast({
        title: "Заявка отправлена",
        description: "Мы перезвоним вам в ближайшее время",
      });
      
      // Очищаем и закрываем форму через 2 секунды
      setTimeout(() => {
        setPhoneNumber("+7");
        setSuccess(false);
        setIsOpen(false);
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте еще раз.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация
    if (!name || !email || !message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Отправка данных формы на сервер
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone: "",
          message,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Ошибка при отправке сообщения');
      }
      
      setSuccess(true);
      
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.",
      });
      
      // Очищаем и закрываем форму через 2 секунды
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-white p-0 rounded-lg overflow-hidden border-none max-w-md w-[90%]">
        <div className="relative">
          <div className="p-6">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-xl font-bold text-center">
                ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ<br />
                ОНЛАЙН ПРЯМО СЕЙЧАС!
              </DialogTitle>
              <DialogDescription className="text-center text-gray-600 mt-2">
                Оставьте заявку и я свяжусь<br />
                с Вами в ближайшее время
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6">
              <p className="text-center text-sm font-medium text-gray-700 mb-3">Где Вам удобнее связаться?</p>
              
              <div className="flex justify-center space-x-3 mb-6">
                <a 
                  href="https://wa.me/79123456789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center rounded-md py-3 px-5 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <span className="text-sm">WhatsApp</span>
                </a>
                
                <a 
                  href="https://t.me/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center rounded-md py-3 px-5 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                      <path d="M17 8.5L13.5 17.5L11 12.5L6 10L17 8.5Z" />
                      <path d="M17 8.5L11 12.5" />
                    </svg>
                  </div>
                  <span className="text-sm">Telegram</span>
                </a>
                
                <button className="flex flex-col items-center justify-center rounded-md py-3 px-5 hover:bg-primary/5 transition-colors">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-2">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm">Телефон</span>
                </button>

                <a 
                  href="mailto:contact@sergeypankratov.ru" 
                  className="flex flex-col items-center justify-center rounded-md py-3 px-5 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-2">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm">Email</span>
                </a>
              </div>
              
              <div className="flex gap-2 mb-4">
                <button 
                  className={`flex-1 py-2 px-3 font-medium rounded-md transition-colors ${activeTab === 'phone' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveTab('phone')}
                >
                  Звонок
                </button>
                <button 
                  className={`flex-1 py-2 px-3 font-medium rounded-md transition-colors ${activeTab === 'form' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveTab('form')}
                >
                  Сообщение
                </button>
              </div>

              {success ? (
                <div className="flex flex-col items-center py-8">
                  <CheckCircle2 className="text-green-500 w-16 h-16 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Спасибо!</h3>
                  <p className="text-gray-600 text-center">Ваша заявка успешно отправлена.</p>
                </div>
              ) : activeTab === 'phone' ? (
                <form onSubmit={handlePhoneSubmit}>
                  <div className="relative mb-4">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ОТПРАВКА...
                      </>
                    ) : (
                      "ПОЗВОНИТЕ МНЕ"
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleMessageSubmit}>
                  <div className="space-y-3 mb-4">
                    <div>
                      <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Ваше имя"
                        className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Ваш email"
                        className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <textarea
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Ваше сообщение"
                        rows={3}
                        className="w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ОТПРАВКА...
                      </>
                    ) : (
                      "ОТПРАВИТЬ СООБЩЕНИЕ"
                    )}
                  </button>
                </form>
              )}
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Оставляя заявку, Вы принимаете {" "}
                <a href="#" className="text-primary underline">политику конфиденциальности</a>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}