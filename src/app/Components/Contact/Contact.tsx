import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className="w-full bg-blue-600 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        <div>
          <h2 className="font-bold text-lg mb-4">About</h2>
          <p className="text-sm mb-4">
            I am a Full-Stack Developer specializing in the MERN stack. I am
            passionate about creating dynamic web applications and delivering
            scalable solutions.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/HusseinAPI"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/hussein-kassab-974963243"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="\#Top" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="\#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="\#experience" className="hover:text-gray-300">
                Experience
              </a>
            </li>
            <li>
              <a href="\#projects" className="hover:text-gray-300">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Have a Question?</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="block">Lebanon</span>
            </li>
            <li>
              <span className="block">+961 70884903</span>
            </li>
            <li>
              <a
                href="mailto:hussein.a.kassab@gmail.com"
                className="hover:text-gray-300"
              >
                hussein.a.kassab@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm mt-10 border-t border-gray-200 pt-4">
        Copyright © Portfolio 2024 | Hussein Kassab
      </div>
    </footer>
  );
};

export default Contact;
