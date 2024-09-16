import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Project One",
      description: "A cool project that I worked on using React and Tailwind CSS.",
      languages: ["React", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Project Two",
      description: "Another awesome project with amazing features.",
      languages: ["JavaScript", "Node.js"],
      link: "#",
    },
    {
      title: "Project Three",
      description: "Another awesome project with amazing features.",
      languages: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="h-screen bg-gradient-to-l from-blue-900 to-gray-900 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-10" data-aos="fade-up">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-600 text-white p-6 rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
              <p className="mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-xl font-semibold">Technologies:</h4>
                <ul className="list-disc ml-4">
                  {project.languages.map((language, langIndex) => (
                    <li key={langIndex}>{language}</li>
                  ))}
                </ul>
              </div>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                href={project.link}
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
              >
                View Project
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
