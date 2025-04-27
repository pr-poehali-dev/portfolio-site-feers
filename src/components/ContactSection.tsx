import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Loader2 } from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Сброс сообщения об успешной отправке через 5 секунд
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-md mb-4">Свяжитесь с нами</h2>
            <p className="text-feers-muted mb-8">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами 
              в ближайшее время для консультации
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="text-feers-accent mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Телефон</h3>
                  <p className="text-feers-muted">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-feers-accent mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-feers-muted">info@feers.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-feers-accent mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium mb-1">Адрес</h3>
                  <p className="text-feers-muted">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-feers-light flex items-center justify-center hover:bg-feers-accent hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-feers-light flex items-center justify-center hover:bg-feers-accent hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="bg-feers-light rounded-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-feers-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  ✓
                </div>
                <h3 className="heading-sm mb-2">Спасибо за заявку!</h3>
                <p className="text-feers-muted">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="heading-sm mb-6">Оставить заявку</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-feers-accent"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-feers-accent"
                    placeholder="example@mail.ru"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-feers-accent"
                    placeholder="Расскажите кратко о вашем проекте"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Отправка...
                    </>
                  ) : (
                    "Отправить заявку"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
