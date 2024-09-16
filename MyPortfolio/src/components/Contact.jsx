import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Button } from '@mui/material';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
  }, []);

  return (
    <> 
    <section
      id="contact"
      className="py-10 bg-gradient-to-l from-blue-900 to-gray-900 text-white"
    >
      <div className="container h-screen mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        {/* Get in Touch Section with Google Map */}
        <div className="lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-start mb-8 lg:mb-0" data-aos="fade-up">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=Gorikh%20Line%20Near%20PNS%20Shifa%20Hospital%20Karachi&key=YOUR_API_KEY"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
              title="Google Map Location"
            ></iframe>
          </div>
          <div className="text-center lg:text-left lg:ml-6">
            <h3 className="text-5xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2">
              <strong>Phone:</strong> (+92) 315-393-3660
            </p>
            <p className="mb-2">
              <strong>Email:</strong> asifakbar@meacademy.pk
            </p>
            <p className="mb-2">
              <strong>Address:</strong> Gorikh Line Near PNS Shifa Hospital Karachi.
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:w-1/2" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-center mb-10">Contact Me</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
             

            <Button
              type="submit"
              variant="contained"
              color="blue"
              className="text-white py-2 px-4 rounded-lg"
              data-aos="fade-up"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};
export default Contact;
