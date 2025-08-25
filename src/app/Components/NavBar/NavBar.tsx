'use client';
import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed z-10 h-16 bg-gradient-to-r from-indigo-950 to-violet-950 flex justify-between w-full border-b border-b-gray-500 text-gray-50">
      <div className="text-3xl text-yellow-400 mt-4 mx-4 sm:mx-24 overflow-hidden whitespace-nowrap text-ellipsis">
        Hussein Kassab
      </div>

      <div className="hidden lg:flex justify-between w-1/3 list-none text-xl mt-5">
        <Link href="/#skills" className="hover:text-yellow-200">
          Skills
        </Link>
        <Link href="/#about" className="hover:text-yellow-200">
          About
        </Link>
        <Link href="/#experience" className="hover:text-yellow-200">
          Experience
        </Link>
        <Link href="/#projects" className="hover:text-yellow-200">
          Projects
        </Link>
      </div>

      <div className="ml-28 sm:ml-56 md:ml-64 flex w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 justify-between text-sm sm:text-xl mt-3 mr-5">
        <a
          href="/Hussein_Kassab_CV.pdf"
          download="Hussein_Kassab_CV.pdf"
          className="hover:bg-yellow-500 bg-yellow-400 text-teal-900 h-10 rounded-xl px-3 py-1 flex items-center justify-center cursor-pointer"
        >
          Download CV
        </a>
      </div>

      <div className="lg:hidden flex items-center mr-5" onClick={toggleMenu}>
        <button className="text-yellow-300 text-2xl">
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute right-0 top-16 bg-gradient-to-r from-indigo-950 to-violet-950 text-gray-50 w-2/3 p-4 text-xl flex flex-col space-y-4">
          <Link
            href="/#skills"
            className="hover:text-yellow-200"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            href="/#about"
            className="hover:text-yellow-200"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/#experience"
            className="hover:text-yellow-200"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            href="/#projects"
            className="hover:text-yellow-200"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
