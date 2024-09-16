import { Button } from '@mui/material';
import Typical from 'react-typical';
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Skills from "./Skills"
import Services from './Services';


const HeroSection = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row items-center justify-between mt-10 p-8 md:p-16 
        bg-gradient-to-r from-gray-900 to-blue-900"
        data-aos="zoom-out"
        data-aos-delay="200"
      >
        {/* Left Side: Heading with Typing Effect and Buttons */}
        <div 
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          data-aos="fade-right"
          data-aos-delay="1200"
        >
          <h1 className="text-5xl font-bold text-white sm:text-3xl md:text-5xl lg:text-8xl">
            I am <br />{' '}
            <Typical
              steps={['Asif Akbar', 5000, 'MERN_Stack Developer', 10000]}
              loop={Infinity}
              wrapper="span"
              className="text-blue-600"
            />
          </h1>
          <p className="text-2xl mt-5 mb-6 text-white">
            Master the most in-demand technologies and <br />become a MERN-Stack developer.
          </p>
          <div className="flex justify-center md:justify-start mt-5 space-x-4">
            <Button 
              variant="contained" 
              color="primary" 
              className="bg-blue-600 text-white"
              data-aos="zoom-in"
              data-aos-delay="2000"
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              className="border-blue-600 text-blue-600"
              data-aos="zoom-in"
              data-aos-delay="2000"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div 
          className="md:w-1/2"
          data-aos="fade-left"
          data-aos-delay="2000"
        >
          {/* Main Image */}
          <img
            src="/enhancerImage.png" // Replace with your image source
            alt="Hero"
            className="w-96 float-end p-0 rounded-s-full"
          />
        </div>
      </div>
      
    <About />
    <Skills />
    <Services/>
    <Projects />
    <Contact/>
    </>
  );
};
export default HeroSection;