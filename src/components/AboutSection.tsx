import { Clock, Award, Tool } from 'lucide-react';

const AboutSection = () => {
  const advantages = [
    {
      icon: <Clock size={32} className="text-feers-accent" />,
      title: 'Точно в срок',
      description: 'Соблюдаем установленные сроки ремонта без внезапных задержек и переносов'
    },
    {
      icon: <Award size={32} className="text-feers-accent" />,
      title: 'Гарантия 3 года',
      description: 'Предоставляем официальную гарантию на все виды работ от 3 лет'
    },
    {
      icon: <Tool size={32} className="text-feers-accent" />,
      title: 'Опытные мастера',
      description: 'Наши специалисты имеют более 10 лет опыта в сфере ремонта и отделки'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="heading-md mb-4">Почему выбирают нас</h2>
          <p className="text-feers-muted">
            Мы строим долгосрочные отношения с каждым клиентом, 
            основываясь на честности, прозрачности и внимании к мельчайшим деталям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="bg-feers-light rounded-lg p-8 hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="heading-sm mb-3">{item.title}</h3>
              <p className="text-feers-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
