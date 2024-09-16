import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Language as HtmlIcon,
  Palette as CssIcon,
  Code as JavascriptIcon,
  Whatshot as ReactIcon,
  Storage as NodeIcon,
  Storage as MongoDBIcon,
  Code as ExpressIcon,
  Layers as TailwindIcon
} from "@mui/icons-material"; // Adjust these imports as necessary


const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { name: "HTML", icon: <HtmlIcon style={{ color: "#E44D26" }} /> },
    { name: "CSS", icon: <CssIcon style={{ color: "#1572B6" }} /> },
    { name: "JavaScript", icon: <JavascriptIcon style={{ color: "#F7DF1E" }} /> },
    { name: "React", icon: <ReactIcon style={{ color: "#61DAFB" }} /> },
    { name: "Node.js", icon: <NodeIcon style={{ color: "#339933" }} /> },
    { name: "Express", icon: <ExpressIcon style={{ color: "#333333" }} /> },
    { name: "MongoDB", icon: <MongoDBIcon style={{ color: "#47A248" }} /> },
    { name: "Tailwind CSS", icon: <TailwindIcon style={{ color: "#38B2AC" }} /> },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4, // Adjust the number of slides to show at once
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <section id="skills" className="p-10 bg-gradient-to-l from-blue-900 to-gray-900 text-white">
      <div className="container mx-auto ">
        <h2 className="text-5xl font-bold text-center mb-10">Skills</h2>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg transform transition duration-200 hover:scale-105"
              data-aos="fade-up"
            >
              <div className="text-9xl mb-2 text-left">{skill.icon}</div>
              <span className="text-5xl mb-2 text-left">{skill.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </>
  );
};

export default Skills;