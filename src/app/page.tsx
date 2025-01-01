import profileImg from './profile-img.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';

export default function Home() {
  return (
    <div className="flex justify-between  content-between flex-wrap" id="Top">
      <div className="w-1/2 mt-40 lg:mt-64 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
        <p className="ml-24 text-gray-50">
          Hi, i’m <br />
          <span className="text-yellow-400">Hussein Kassab</span>
          <br />
          <span className="">And I am a</span>
          <span className="text-blue-500">
            <br />
            Full Stack Developer
          </span>
        </p>
        <div className="w-fit text-white ml-24 mt-3">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/HusseinAPI"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaGithub className="size-7" />
            </a>

            <a
              href="https://www.linkedin.com/in/hussein-kassab-974963243"
              target="_blank"
              className="hover:scale-110 transition-transform duration-300"
            >
              {' '}
              <FaLinkedin className="size-7" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-64 sm:mt-20 md:mt-40 lg:mt-48 xl:mt-14">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="circleClip">
              <circle cx="100" cy="100" r="60" />
            </clipPath>
          </defs>
          <path
            fill="#9999FF"
            d="M34.1,-59.6C42.5,-54.1,46.6,-41.7,53.9,-30.6C61.2,-19.5,71.7,-9.8,75.7,2.3C79.7,14.4,77.1,28.7,70.7,41.3C64.3,53.9,53.9,64.7,41.5,70.8C29.1,76.8,14.5,78.1,-0.8,79.4C-16.1,80.8,-32.2,82.2,-45.6,76.8C-59.1,71.3,-69.9,58.9,-71,45C-72,31,-63.4,15.5,-58.8,2.7C-54.2,-10.2,-53.5,-20.4,-51.9,-33.4C-50.3,-46.4,-47.8,-62.3,-38.9,-67.6C-30.1,-72.8,-15.1,-67.4,-1.1,-65.5C12.8,-63.6,25.6,-65.1,34.1,-59.6Z"
            transform="translate(100 100)"
          />
          <image
            href={profileImg.src}
            x="40"
            y="40"
            width="120"
            height="120"
            clipPath="url(#circleClip)"
          />
        </svg>
      </div>
      <Skills />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
