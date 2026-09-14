'use client';

import { createContext, useContext } from 'react';

type Project = {
  imgSource: string[];
  name: string;
  year: number;
  skills: string[];
  description: string;
  github: string;
};

const projects: Project[] = [
  // 2025
  {
    imgSource: [
      '/ecom-mobile1.jpg',
      '/ecom-mobile2.jpg',
      '/ecom-mobile3.jpg',
      '/ecom-mobile4.jpg',
    ],
    name: 'E-commerce-Mobile-App',
    year: 2025,
    skills: ['React Native', 'Redux Toolkit', 'Nodejs', 'Expressjs', 'MongoDB'],
    description:
      'Transformed a previously developed MERN e-commerce web application into a mobile app using React Native CLI. The backend was built with Express and connected to MongoDB. On the mobile side, I implemented product browsing, detailed product views, shopping cart functionality, and secure user registration/login. Additionally, I integrated an order system where users can place orders and track them via WhatsApp integration. Redux Toolkit was used for efficient state management, ensuring a seamless and responsive mobile user experience.',
    github: 'https://github.com/HusseinAPI/e-commerce-mobile.git',
  },

  {
    imgSource: [
      '/doctorApp1.png',
      '/doctorApp2.png',
      '/doctorApp3.png',
      '/doctorApp4.png',
    ],
    name: 'doctor-appointment-booking',
    year: 2025,
    skills: [
      'Nextjs',
      'Redux Toolkit',
      'Tailwind CSS',
      'Nodejs',
      'Expressjs',
      'PostgreSQL',
    ],
    description:
      'Developed a full-stack web application for a healthcare center that enables patients to register, log in securely using JWT, browse doctor profiles, and book appointments online. Includes a protected admin dashboard for managing doctors and appointments. Utilized Sequelize ORM for database management and PostgreSQL for structured data storage. Focused on building a responsive, secure, and user-friendly system using modern web technologies.',
    github: 'https://github.com/HusseinAPI/doctor-appointment-booking.git',
  },

  // 2024
  {
    imgSource: [
      '/betelmoune-1.png',
      '/betelmoune-2.png',
      '/betelmoune-3.png',
      '/betelmoune-4.jpg',
    ],
    name: 'BetelMoune',
    year: 2024,
    skills: [
      'Reactjs',
      'Redux Toolkit',
      'Tailwind CSS',
      'Nodejs',
      'Expressjs',
      'MongoDB',
    ],
    description:
      'Developed a platform to support Lebanese women in acquiring skills in Mouneh production and handcrafts, enabling them to sell their products online. Utilized the MERN stack, Socket.IO, and additional Node.js technologies, including a chatbot, at ESA Coding Lab. Contributed to both front-end and back-end development of pages for products, product details, cart, and chat groups to facilitate online sales and communication.',
    github: 'https://github.com/joumaamhamad/betelmoune',
  },

  {
    imgSource: [
      '/e-commerce-1.png',
      '/e-commerce-2.png',
      '/e-commerce-3.png',
      '/e-commerce-4.png',
    ],
    name: 'E-Commerce',
    year: 2024,
    skills: ['Reactjs', 'Redux Toolkit', 'Nodejs', 'Expressjs', 'MongoDB'],
    description:
      'Developed an e-commerce platform using the MERN stack, focusing on product management, shopping cart functionality, user registration, and state management with Redux Toolkit. The front-end allows users to browse products, view product details, and add products to their shopping cart. I also implemented user registration and login functionality.',
    github: 'https://github.com/HusseinAPI/e-commerce.git',
  },

  // 2023
  {
    imgSource: ['/chat-app.png'],
    name: 'Chat-App',
    year: 2023,
    skills: ['Reactjs', 'Redux Toolkit', 'Nodejs', 'Expressjs', 'MongoDB'],
    description:
      'Dynamic chat web application using the MERN stack and Redux Toolkit. It provides real-time communication with an elegant user interface, secure user authentication, and responsive design.',
    github: 'https://github.com/HusseinAPI/chat-app.git',
  },

  {
    imgSource: ['/to-do-list.png'],
    name: 'To-Do-List',
    year: 2023,
    skills: ['Reactjs', 'Redux Toolkit', 'Nodejs', 'Expressjs', 'MongoDB'],
    description:
      'A task management application built with React.js, Redux Toolkit, Node.js, Express.js, and MongoDB, allowing users to add, delete, and save tasks.',
    github: '',
  },

  {
    imgSource: ['/Hangman.png'],
    name: 'Hangman-Game',
    year: 2023,
    skills: ['HTML', 'CSS', 'JS'],
    description:
      'A classic word guessing game where players try to guess a hidden word by suggesting letters. The game offers multiple rounds and tracks progress with each correct or incorrect guess.',
    github: 'https://github.com/HusseinAPI/hangman-game.git',
  },

  {
    imgSource: ['/Memory.png'],
    name: 'Memory-Card-Game',
    year: 2023,
    skills: ['HTML', 'CSS', 'JS'],
    description:
      'A card-matching game where players flip over two cards at a time, trying to find pairs. The objective is to match all pairs with as few turns as possible, testing memory and concentration.',
    github: 'https://github.com/HusseinAPI/memory-game.git',
  },

  {
    imgSource: ['/Tic-Tac.png'],
    name: 'Tic-Tac-Game',
    year: 2023,
    skills: ['HTML', 'CSS', 'JS'],
    description:
      'A two-player strategy game played on a 3x3 grid. Players take turns placing X or O marks with the goal of aligning three of their marks in a row horizontally, vertically, or diagonally.',
    github: '',
  },
];

const ProjectsContext = createContext<Project[] | undefined>(undefined);

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};
