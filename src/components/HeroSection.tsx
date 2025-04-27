import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-feers-light to-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-feers-accent"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              filter: 'blur(70px)',
              transform: `translate(-${Math.random() * 50}%, -${Math.random() * 50}%)`,
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="heading-lg mb-6 text-feers">
            Создадим интерьер 
            <span className="text-feers-accent"> с вашим характером</span>
          </h1>
          <p className="text-lg md:text-xl text-feers-muted mb-8">
            Превратим бетонную коробку в теплое и уютное пространство, 
            которое будет отражать вашу индивидуальность
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Начать проект
            </a>
            <a 
              href="#portfolio" 
              className="bg-transparent border border-feers-accent text-feers-accent rounded-md py-3 px-6 hover:bg-feers-light transition-all font-medium"
            >
              Посмотреть работы
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-feers-accent animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
