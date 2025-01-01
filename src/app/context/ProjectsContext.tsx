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
  {
    imgSource: ['/Tic-Tac.png'],
    name: 'Tic-Tac-Game',
    year: 2023,
    skills: ['HTML', 'CSS', 'JS'],
    description:
      'A two-player strategy game played on a 3x3 grid. Players take turns placing "X" or "O" marks with the goal of aligning three of their marks in a row, either horizontally, vertically, or diagonally. The game checks for wins',
    github: '',
  },
  {
    imgSource: ['/Memory.png'],
    name: 'Memory-Card-Game',
    year: 2023,
    skills: ['HTML', 'CSS', 'JS'],
    description:
      'A card-matching game where players flip over two cards at a time, trying to find pairs. The objective is to match all pairs with as few turns as possible, testing both memory and concentration.',
    github: 'https://github.com/HusseinAPI/memory-game.git',
  },
  {
    imgSource: ['/Hangman.png'],
    name: 'Hangman-Game',
    year: 2023,
    skills: ['HTML', 'CSS', 'JS'],
    description:
      'A classic word guessing game where players try to guess a hidden word by suggesting letters. The game offers multiple rounds, tracking progress with each correct or incorrect guess.',
    github: 'https://github.com/HusseinAPI/hangman-game.git',
  },
  {
    imgSource: ['/to-do-list.png'],
    name: 'To-Do-List',
    year: 2023,
    skills: ['Reactjs', 'Redux Toolkit', 'Expressjs', 'MongoDB'],
    description:
      'Application with React.js, Redux Toolkit, Node.js, Express.js, and MongoDB, allowing the ability to add, delete and save tasks.',
    github: '',
  },
  {
    imgSource: ['/chat-app.png'],
    name: 'Chat-App',
    year: 2023,
    skills: ['Reactjs', 'Redux Toolkit', 'Expressjs', 'MongoDB'],
    description:
      'Dynamic chat web app using the MERN stack and powered by Redux Toolkit! It provides seamless real-time communication with an elegant user interface. From secure user authentication to responsive design, every aspect has been meticulously crafted',
    github: 'https://github.com/HusseinAPI/chat-app.git',
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
    skills: ['Reactjs', 'Redux Toolkit', 'Expressjs', 'MongoDB'],
    description:
      'I developed an e-commerce platform using the MERN stack, focusing on product management, shopping cart functionality, user registration, and state management with Redux Toolkit. The front-end was implemented to allow users to browse and view product details, as well as add them to the shopping cart. I also built a user registration feature, enabling users to create accounts and log in. Additionally, the shopping cart functionality allows users to add products to their cart.',
    github: 'https://github.com/HusseinAPI/e-commerce.git',
  },
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
      'Expressjs',
      'MongoDB',
    ],
    description:
      'eveloped a platform to support Lebanese women in acquiring skills in Mouneh production and handcrafts, enabling them to sell their products online. Utilized MERN stack, Socket.IO, and additional Node.js technologies, including a chatbot, at ESA Coding Lab. Contributed to both front-end and back-end development of pages for products, product details, cart, and chat groups to facilitate online sales and communication. ',
    github: 'https://github.com/joumaamhamad/betelmoune',
  },
];

const ProjectsContext = createContext<Project[] | undefined>(undefined);

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ProjectsContext.Provider value={projects}>
      {children}
    </ProjectsContext.Provider>
  );
};
