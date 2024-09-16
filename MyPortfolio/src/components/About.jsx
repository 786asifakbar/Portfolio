import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';



const About = () => {
  return (
    <>
      <div 
        className="min-h-screen bg-gradient-to-l from-blue-900 to-gray-900 text-white p-6 md:p-10 
        flex flex-col md:flex-row md:items-center md:justify-between"
        // data-aos="zoom-out"
        // data-aos-delay="200"
      >
        <div 
          className="flex flex-col md:flex-row md:items-center"
          data-aos="fade-right"
          data-aos-delay="1200"
        >
          <img
            src="/about.png"
            alt="Profile"
            className="rounded-full w-48 h-48 md:w-96 md:h-96 mb-6 md:mb-0 md:mr-6"
            data-aos="zoom-in"
            data-aos-delay="2000"
          />
          <div data-aos="fade-left" data-aos-delay="2500">
          
            <h1 className="text-5xl md:text-7xl font-bold">About Me</h1>
            <p className="text-sm md:text-md mt-4 md:mt-5">
              I am a passionate Frontend Developer specializing in React.js. With several years of experience,
              I have honed my skills in building responsive, user-friendly web applications. My expertise lies
              in creating interactive interfaces, optimizing performance, and ensuring a seamless user experience.
            </p>
            <p className="text-sm md:text-md mt-4 md:mt-5">
              In addition to my frontend skills, I have extensive experience with the MERN stack. I excel in 
              developing full-stack applications using MongoDB, Express.js, React.js, and Node.js. My MERN stack 
              development involves designing robust backend services with Node.js and Express.js, and creating 
              dynamic, data-driven frontends with React.js. I am adept at managing databases with MongoDB and 
              integrating complex functionalities to build scalable and efficient applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm mt-5">
              <div data-aos="fade-up" data-aos-delay="3000">
                <p><span className="font-semibold">Birthplace:</span> Sukkur, Sindh</p>
                <p><span className="font-semibold">Born:</span> 1993</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="3500">
                <p><span className="font-semibold">Residence:</span></p>
                <p><span className="font-semibold">Education:</span> BS(Hons) Information Technology</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="4000">
                <p><span className="font-semibold">Skills:</span> React.js, JavaScript, HTML, CSS, Tailwind CSS, MongoDB, Express.js, Node.js</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="4500">
                <p><span className="font-semibold">Experience:</span> 1 year in Frontend Development</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="5000">
                <p><span className="font-semibold">Hobbies:</span> Coding, Traveling, Art</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="5500">
                <p><span className="font-semibold">Email:</span> asifakbar@meacademy.pk</p>
              </div>
            </div>
            <div className="mt-6" data-aos="fade-up">
              <a href="/Asif Akbar.pdf" download>
                <Button
                  variant="contained"
                  color="blue"
                  startIcon={<DownloadIcon />}
                  className="text-white font-semibold"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;