const Footer = () => {
  return (
    <footer className="bg-feers py-12 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Feers</h2>
            <p className="text-sm opacity-80 mb-6">
              Создадим интерьер с вашим характером. 
              Превратим бетонную коробку в теплое и уютное пространство.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Меню</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="opacity-80 hover:opacity-100 hover:text-feers-accent transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="opacity-80 hover:opacity-100 hover:text-feers-accent transition-colors"
                >
                  Примеры работ
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="opacity-80 hover:opacity-100 hover:text-feers-accent transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="opacity-80">+7 (999) 123-45-67</li>
              <li className="opacity-80">info@feers.ru</li>
              <li className="opacity-80">г. Москва, ул. Примерная, д. 123</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Feers. Все права защищены
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-sm opacity-70 hover:opacity-100 transition-opacity mr-4"
            >
              Политика конфиденциальности
            </a>
            <a 
              href="#" 
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
