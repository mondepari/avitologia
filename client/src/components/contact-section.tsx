import { useState } from 'react';
import { ContactFormData } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MessageSquare, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный email",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Отправляем данные формы на сервер
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Ошибка при отправке сообщения');
      }
      
      // Показываем успешное уведомление
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.",
      });
      
      // Очищаем форму
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Произошла ошибка при отправке сообщения",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Purple Circle Decoration */}
      <div className="purple-circle-decoration w-[400px] h-[400px] bottom-[10%] right-[-10%] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-4">Контакты</div>
          <h2 className="section-title">Получите бесплатную <br/>консультацию специалиста</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Готов помочь вам с настройкой эффективной рекламной кампании. Заполните форму или свяжитесь со мной удобным для вас способом.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gradient-purple rounded-2xl p-8 text-white card-shadow">
            <h3 className="text-2xl font-semibold mb-8">Контактная информация</h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a href="mailto:contact@sergeypankratov.ru" className="opacity-90 hover:opacity-100 transition duration-300">
                    contact@sergeypankratov.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Телефон</h4>
                  <a href="tel:+79123456789" className="opacity-90 hover:opacity-100 transition duration-300">
                    +7 (912) 345-67-89
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Мессенджеры</h4>
                  <div className="flex space-x-3 mt-2">
                    <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition duration-300" aria-label="WhatsApp">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition duration-300" aria-label="Telegram">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.085.34.157.451.214.719.365 1.314.461 1.694.325.379-.136.654-.511.824-1.122.069-.25.142-.592.221-1.027.079-.436.114-.812.114-1.129 0-.306-.035-.599-.114-.879-.07-.281-.168-.498-.291-.653-.124-.154-.3-.281-.521-.379-.224-.097-.469-.145-.734-.145-.128 0-.428.019-.896.055-.47.037-.836.067-1.096.091-.259.023-.566.055-.918.096-.353.04-.605.072-.755.091-.165.024-.481.067-.947.145-.467.075-.745.12-.835.135-.181.030-.572.111-1.175.24-.603.13-1.053.227-1.35.296-.297.068-.609.177-.936.325-.328.147-.505.294-.531.436.4.544.17.647.361.647.127 0 .313-.046.562-.136.249-.095.457-.142.625-.142.127 0 .217.048.268.144s.089.296.117.6c.031.388.05.793.061 1.212.008.42-.004.797-.044 1.133-.035.343-.127.57-.268.684-.142.114-.406.171-.788.171-.127 0-.249-.018-.361-.053-.112-.035-.181-.078-.209-.127-.026-.05-.039-.196-.039-.438 0-.173.015-.413.044-.717.03-.306.044-.523.044-.654 0-.153-.053-.275-.159-.367-.107-.091-.216-.138-.33-.138-.157 0-.308.07-.452.205-.145.137-.243.302-.296.497-.052.194-.079.51-.079.946 0 .358.056.639.17.84.112.204.215.341.312.416zm-6.921-5.765c-.11.245-.171.506-.171.781 0 .28.062.68.181.593.185.093.306.163.366.208.59.047.93.116.93.208 0 .186-.116.278-.347.278-.08 0-.216-.015-.403-.045-.188-.03-.318-.045-.391-.045-.254 0-.571.045-.954.135-.383.091-.674.135-.865.135-.138 0-.209-.056-.209-.171 0-.092.062-.184.186-.277.123-.092.294-.185.511-.277.145-.062.209-.152.209-.271 0-.076-.052-.241-.159-.497-.106-.254-.159-.48-.159-.678 0-.115.018-.226.052-.333.034-.108.09-.164.166-.171.052-.7.147.25.283.098.137.073.245.167.332.285.69.096.159.29.268.584.11.293.2.495.269.606.69.111.147.167.234.167.127 0 .207-.071.226-.215.023-.144.018-.288-.019-.423l-.1-.398c-.046-.185-.069-.333-.069-.446 0-.153.041-.262.121-.326.08-.065.147-.097.2-.097.096 0 .186.116.268.348.83.232.124.443.124.635 0 .127-.21.265-.62.416-.167.612-.35 1.074-.55 1.384zm2.322-4.56c-.399.438-.711.846-.935 1.221-.225.376-.48.848-.77 1.413.54.024 1.212.056 2.012.098 0-.472-.021-.936-.062-1.394-.042-.457-.113-.841-.218-1.149-.044-.133-.13-.2-.252-.2-.084 0-.189.128-.316.382-.127.254-.276.541-.449.858-.5.091-.111.171-.188.245-.078.075-.148.112-.21.112-.062 0-.133-.043-.217-.128-.084-.086-.126-.187-.126-.301 0-.19.021-.404.062-.644.042-.241.113-.485.217-.731.103-.246.211-.441.325-.587.112-.145.256-.218.428-.218.217 0 .407.045.569.134.161.089.295.214.399.376.104.161.187.359.245.595.059.235.111.485.16.749.047.264.08.531.098.801.114 0 .286-.014.52-.044.232-.03.405-.044.52-.044.252 0 .377.059.377.181 0 .092-.07.159-.207.2-.153.047-.368.8-.648.098-.127.01-.301.01-.521 0-.22-.01-.387-.015-.501-.015-.047.497-.111 1.091-.188 1.783-.078.693-.116 1.154-.116 1.385 0 .114.025.2.073.258.049.057.127.086.234.086.051 0 .131-.016.242-.046.11-.03.188-.045.233-.045.071 0 .107.052.107.155 0 .1-.026.188-.08.267-.054.078-.14.15-.252.217-.113.066-.249.121-.405.162-.157.042-.33.063-.52.063-.344 0-.602-.113-.774-.339-.172-.226-.258-.539-.258-.933 0-.217.03-.471.088-.767.059-.295.12-.592.185-.887.064-.296.116-.54.153-.732.2.040.374.07.53.91.157.02.33.029.521.029h.493c.047-.267.099-.663.153-1.186-.177-.013-.404-.024-.682-.034-.279-.01-.488-.014-.629-.014z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition duration-300" aria-label="Viber">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.085.34.157.451.214.719.365 1.314.461 1.694.325.379-.136.654-.511.824-1.122.069-.25.142-.592.221-1.027.079-.436.114-.812.114-1.129 0-.306-.035-.599-.114-.879-.07-.281-.168-.498-.291-.653-.124-.154-.3-.281-.521-.379-.224-.097-.469-.145-.734-.145-.128 0-.428.019-.896.055-.47.037-.836.067-1.096.091-.259.023-.566.055-.918.096-.353.04-.605.072-.755.091-.165.024-.481.067-.947.145-.467.075-.745.12-.835.135-.181.030-.572.111-1.175.24-.603.13-1.053.227-1.35.296-.297.068-.609.177-.936.325-.328.147-.505.294-.531.436.4.544.17.647.361.647.127 0 .313-.046.562-.136.249-.095.457-.142.625-.142.127 0 .217.048.268.144s.089.296.117.6c.031.388.05.793.061 1.212.008.42-.004.797-.044 1.133-.035.343-.127.57-.268.684-.142.114-.406.171-.788.171-.127 0-.249-.018-.361-.053-.112-.035-.181-.078-.209-.127-.026-.05-.039-.196-.039-.438 0-.173.015-.413.044-.717.03-.306.044-.523.044-.654 0-.153-.053-.275-.159-.367-.107-.091-.216-.138-.33-.138-.157 0-.308.07-.452.205-.145.137-.243.302-.296.497-.052.194-.079.51-.079.946 0 .358.056.639.17.84.112.204.215.341.312.416zm-6.921-5.765c-.11.245-.171.506-.171.781 0 .28.062.68.181.593.185.093.306.163.366.208.59.047.93.116.93.208 0 .186-.116.278-.347.278-.08 0-.216-.015-.403-.045-.188-.03-.318-.045-.391-.045-.254 0-.571.045-.954.135-.383.091-.674.135-.865.135-.138 0-.209-.056-.209-.171 0-.092.062-.184.186-.277.123-.092.294-.185.511-.277.145-.062.209-.152.209-.271 0-.076-.052-.241-.159-.497-.106-.254-.159-.48-.159-.678 0-.115.018-.226.052-.333.034-.108.09-.164.166-.171.052-.7.147.25.283.098.137.073.245.167.332.285.69.096.159.29.268.584.11.293.2.495.269.606.69.111.147.167.234.167.127 0 .207-.071.226-.215.023-.144.018-.288-.019-.423l-.1-.398c-.046-.185-.069-.333-.069-.446 0-.153.041-.262.121-.326.08-.065.147-.097.2-.097.096 0 .186.116.268.348.83.232.124.443.124.635 0 .127-.21.265-.62.416-.167.612-.35 1.074-.55 1.384zm2.322-4.56c-.399.438-.711.846-.935 1.221-.225.376-.48.848-.77 1.413.54.024 1.212.056 2.012.098 0-.472-.021-.936-.062-1.394-.042-.457-.113-.841-.218-1.149-.044-.133-.13-.2-.252-.2-.084 0-.189.128-.316.382-.127.254-.276.541-.449.858-.5.091-.111.171-.188.245-.078.075-.148.112-.21.112-.062 0-.133-.043-.217-.128-.084-.086-.126-.187-.126-.301 0-.19.021-.404.062-.644.042-.241.113-.485.217-.731.103-.246.211-.441.325-.587.112-.145.256-.218.428-.218.217 0 .407.045.569.134.161.089.295.214.399.376.104.161.187.359.245.595.059.235.111.485.16.749.047.264.08.531.098.801.114 0 .286-.014.52-.044.232-.03.405-.044.52-.044.252 0 .377.059.377.181 0 .092-.07.159-.207.2-.153.047-.368.8-.648.098-.127.01-.301.01-.521 0-.22-.01-.387-.015-.501-.015-.047.497-.111 1.091-.188 1.783-.078.693-.116 1.154-.116 1.385 0 .114.025.2.073.258.049.057.127.086.234.086.051 0 .131-.016.242-.046.11-.03.188-.045.233-.045.071 0 .107.052.107.155 0 .1-.026.188-.08.267-.054.078-.14.15-.252.217-.113.066-.249.121-.405.162-.157.042-.33.063-.52.063-.344 0-.602-.113-.774-.339-.172-.226-.258-.539-.258-.933 0-.217.03-.471.088-.767.059-.295.12-.592.185-.887.064-.296.116-.54.153-.732.2.040.374.07.53.91.157.02.33.029.521.029h.493c.047-.267.099-.663.153-1.186-.177-.013-.404-.024-.682-.034-.279-.01-.488-.014-.629-.014z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition duration-300" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <form className="bg-white rounded-xl shadow-xl p-8" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Отправить сообщение</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ваше имя *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Введите ваше имя" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Введите ваш email" 
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Введите ваш телефон" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="Напишите ваше сообщение" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary text-white font-medium px-4 py-3.5 rounded-full hover:bg-primary/90 transition duration-300 disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить сообщение"}
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  Нажимая на кнопку, вы соглашаетесь с 
                  <a href="#" className="text-primary hover:underline ml-1">политикой конфиденциальности</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
