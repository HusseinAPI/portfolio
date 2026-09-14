'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';
import { useProjects } from '../../context/ProjectsContext';

const Projects = () => {
  const projects = useProjects();

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/4 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-yellow-400" />

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
              Projects
            </span>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Things I’ve <span className="text-yellow-400">built.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                A collection of projects where I turn ideas into functional,
                scalable, and engaging digital experiences.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-gray-500 lg:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
              {projects?.length || 0} Projects
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects?.map((project, index) => (
            <Link
              href={`/projects/${project.name}`}
              key={project.name || index}
              className="group"
            >
              <article className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/20">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#0c1326]">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#080D1C]/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                  {project.name?.includes('Mobile') ? (
                    <div className="flex h-full items-center justify-center gap-3 px-5">
                      {project.imgSource?.slice(0, 2).map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative h-[85%] w-[38%] overflow-hidden rounded-xl border border-white/10 shadow-xl transition-transform duration-500 group-hover:-translate-y-2"
                        >
                          <Image
                            src={img}
                            alt={`${project.name} screenshot ${imgIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 35vw, 180px"
                            className="object-cover object-top"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={project.imgSource?.[0]}
                      alt={`${project.name} project preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute right-4 top-4 z-20 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/10 bg-[#080D1C]/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <FiArrowUpRight size={18} />
                  </div>

                  <div className="absolute bottom-4 left-4 z-20 text-xs font-medium tracking-widest text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className="flex flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-yellow-400">
                      {project.name}
                    </h3>

                    <FiExternalLink
                      size={18}
                      className="mt-1 shrink-0 text-gray-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-yellow-400"
                    />
                  </div>

                  <p className="text-sm text-gray-500">{project.year}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.skills?.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-gray-400 transition-colors duration-300 group-hover:border-white/15 group-hover:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs uppercase tracking-wider text-gray-600">
                      View project
                    </span>

                    <span className="h-px w-10 bg-white/10 transition-all duration-300 group-hover:w-16 group-hover:bg-yellow-400" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
