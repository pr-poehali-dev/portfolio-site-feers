import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: '3-комнатная квартира',
    description: 'Современный лофт в историческом здании',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 2,
    title: '2-комнатная квартира',
    description: 'Скандинавский минимализм',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80'
  },
  {
    id: 3,
    title: '4-комнатная квартира',
    description: 'Современная классика для большой семьи',
    image: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80'
  },
  {
    id: 4,
    title: '1-комнатная студия',
    description: 'Компактное и функциональное пространство',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  },
  {
    id: 5,
    title: '3-комнатная квартира',
    description: 'Эко-стиль с использованием натуральных материалов',
    image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
  }
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= totalPages ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const displayedProjects = projects.slice(
    currentIndex * itemsPerPage, 
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id="portfolio" className="section bg-feers-light">
      <div className="container">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="heading-md mb-4">Наши работы</h2>
            <p className="text-feers-muted max-w-xl">
              Каждый проект уникален и разрабатывается с учетом индивидуальных предпочтений клиента
            </p>
          </div>
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white hover:bg-feers-accent hover:text-white transition-colors"
              aria-label="Previous projects"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white hover:bg-feers-accent hover:text-white transition-colors"
              aria-label="Next projects"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-sm mb-2">{project.title}</h3>
                <p className="text-feers-muted">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <button 
            onClick={prevSlide}
            className="p-3 mx-2 rounded-full bg-white hover:bg-feers-accent hover:text-white transition-colors"
            aria-label="Previous projects"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 mx-2 rounded-full bg-white hover:bg-feers-accent hover:text-white transition-colors"
            aria-label="Next projects"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
