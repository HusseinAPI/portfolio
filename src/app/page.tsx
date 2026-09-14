'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiTerminal,
} from 'react-icons/fi';

import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';

export default function Home() {
  return (
    <main id="Top" className="overflow-hidden">
      <section className="relative min-h-screen px-6 pt-32 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-0 top-40 -z-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="pointer-events-none absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start">
            <div className="mb-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-300">
                Full Stack Developer
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Hi, I&apos;m
              <span className="mt-2 block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
                Hussein Kassab
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              I build modern, scalable and user-focused web applications with
              clean code, thoughtful design and powerful technologies.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/Hussein_Kassab_CV.pdf"
                download="Hussein_Kassab_CV.pdf"
                className="group flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-indigo-950 transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <FiDownload size={17} />

                <span>Download CV</span>

                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-gray-200 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                View Projects
                <FiArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/HusseinAPI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/hussein-kassab-974963243"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <div className="ml-2 h-px w-12 bg-white/10" />

              <span className="text-xs uppercase tracking-widest text-gray-500">
                Let&apos;s build
              </span>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative w-full max-w-[520px]">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border border-white/5 bg-white/[0.02]" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d1c]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FiTerminal size={14} />
                    <span>developer.ts</span>
                  </div>
                </div>

                <div className="p-6 font-mono text-sm leading-7 sm:p-8 sm:text-base">
                  <div className="text-gray-500">
                    <span className="text-violet-400">const</span>{' '}
                    <span className="text-blue-300">developer</span>{' '}
                    <span className="text-gray-400">=</span>{' '}
                    <span className="text-yellow-300">{'{'}</span>
                  </div>

                  <div className="pl-5">
                    <div>
                      <span className="text-blue-300">name</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-green-300">
                        &quot;Hussein Kassab&quot;
                      </span>
                      <span className="text-gray-500">,</span>
                    </div>

                    <div>
                      <span className="text-blue-300">role</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-green-300">
                        &quot;Full Stack Developer&quot;
                      </span>
                      <span className="text-gray-500">,</span>
                    </div>

                    <div>
                      <span className="text-blue-300">location</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-green-300">
                        &quot;Lebanon&quot;
                      </span>
                      <span className="text-gray-500">,</span>
                    </div>

                    <div className="mt-2">
                      <span className="text-blue-300">stack</span>
                      <span className="text-gray-500">:</span>{' '}
                      <span className="text-yellow-300">[</span>
                      <div className="pl-5">
                        <div>
                          <span className="text-green-300">
                            &quot;React&quot;
                          </span>
                          <span className="text-gray-500">,</span>
                        </div>

                        <div>
                          <span className="text-green-300">
                            &quot;Next.js&quot;
                          </span>
                          <span className="text-gray-500">,</span>
                        </div>

                        <div>
                          <span className="text-green-300">
                            &quot;Node.js&quot;
                          </span>
                          <span className="text-gray-500">,</span>
                        </div>

                        <div>
                          <span className="text-green-300">
                            &quot;Laravel&quot;
                          </span>
                          <span className="text-gray-500">,</span>
                        </div>

                        <div>
                          <span className="text-green-300">
                            &quot;MySQL&quot;
                          </span>
                          <span className="text-gray-500">,</span>
                        </div>

                        <div>
                          <span className="text-green-300">
                            &quot;MongoDB&quot;
                          </span>
                        </div>
                      </div>
                      <span className="text-yellow-300">]</span>
                    </div>
                  </div>

                  <div className="text-yellow-300">{'}'}</div>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>

                      <span className="text-gray-400">
                        Ready to build something amazing
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-violet-400">$</span>

                      <span className="text-gray-300">npm run build</span>

                      <span className="ml-1 h-4 w-2 animate-pulse bg-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#skills"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-white md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>

          <FiArrowDown className="animate-bounce" size={16} />
        </a>
      </section>

      <Skills />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
