import { useEffect } from 'react';
import { Web, Storage, Layers, Code, Security, Build , DesignServices } from '@mui/icons-material'; // Material UI Icons
import AOS from 'aos'; // Animate on scroll
import 'aos/dist/aos.css'; // AOS styles
import 'tailwindcss/tailwind.css'; // Tailwind styles

const services = [
  {
    title: 'Web Design',
    description: 'Professional and modern web design services.',
    icon: <Web fontSize="large" />,
  },
  {
    title: 'Full Stack Development',
    description: 'Developing robust full-stack applications using MERN stack.',
    icon: <Layers fontSize="large" />,
  },
  {
    title: 'MongoDB Development',
    description: 'Creating efficient databases with MongoDB for scalable applications.',
    icon: <Storage fontSize="large" />,
  },
  {
    title: 'Express.js API Development',
    description: 'Building powerful and flexible APIs using Express.js.',
    icon: <Code fontSize="large" />,
  },
  {
    title: 'React.js Frontend',
    description: 'Building dynamic, fast, and responsive frontends using React.js.',
    icon: <Web fontSize="large" />,
  },
  {
    title: 'Node.js Backend',
    description: 'High-performance server-side development with Node.js.',
    icon: <Build fontSize="large" />,
  },
  {
    title: 'Secure Authentication',
    description: 'Implementing secure authentication with JWT and OAuth.',
    icon: <Security fontSize="large" />,
  },
  {
    title: 'Clean Code',
    description: 'Delivering clean, maintainable, and scalable code.',
    icon: <Code fontSize="large" />,
  },
  {
    title: 'Tailwind Css & Material UI',
    description: 'Delivering clean, maintainable, and scalable code.',
    icon: <DesignServices fontSize="large" />,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-blue-600 rounded-lg shadow-lg text-center hover:bg-blue-400 transition-colors duration-300"
              data-aos="zoom-in"
              data-aos-delay={`${index * 500}`}
            >
              <div className="text-white mb-4">{service.icon}</div>
              <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;