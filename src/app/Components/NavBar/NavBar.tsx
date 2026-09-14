'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiDownload, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Skills', href: '/#skills' },
    { label: 'About', href: '/#about' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/#projects' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-indigo-950/80 px-4 text-white shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          onClick={closeMenu}
        >
          <span className="text-xl font-semibold tracking-tight sm:text-2xl">
            Hussein
            <span className="text-yellow-400">.</span>
          </span>

          <span className="hidden text-sm text-gray-400 transition-colors group-hover:text-gray-300 sm:block">
            Kassab
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="/Hussein_Kassab_CV.pdf"
            download="Hussein_Kassab_CV.pdf"
            className="group flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-semibold text-indigo-950 transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20"
          >
            <FiDownload size={16} />

            <span>Download CV</span>

            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-200 transition-all duration-300 hover:bg-white/10 hover:text-yellow-400 lg:hidden"
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {isMenuOpen && (
          <div className="absolute left-4 right-4 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-indigo-950/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-3 border-t border-white/10 pt-3">
              <a
                href="/Hussein_Kassab_CV.pdf"
                download="Hussein_Kassab_CV.pdf"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-semibold text-indigo-950 transition-all duration-300 hover:bg-yellow-300"
              >
                <FiDownload size={17} />
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
