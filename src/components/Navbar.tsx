import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-feers">
          Feers
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <a href="#about" className="nav-link">О нас</a>
          <a href="#portfolio" className="nav-link">Примеры работ</a>
          <a href="#contact" className="nav-link">Контакты</a>
          <a href="#contact" className="btn-primary ml-4">Связаться</a>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-feers"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container py-4 flex flex-col">
            <a 
              href="#about" 
              className="py-3 px-4 hover:bg-feers-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </a>
            <a 
              href="#portfolio" 
              className="py-3 px-4 hover:bg-feers-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Примеры работ
            </a>
            <a 
              href="#contact" 
              className="py-3 px-4 hover:bg-feers-light rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <a 
              href="#contact" 
              className="btn-primary mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Связаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
