'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCalendar,
  FiCode,
  FiGithub,
} from 'react-icons/fi';

import { useProjects } from '../../context/ProjectsContext';

const ProjectDetails = () => {
  const { name } = useParams();

  const projects = useProjects();

  if (!name) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080D1C] px-6 text-white">
        <div className="text-center">
          <p className="text-lg font-semibold">Project not found</p>

          <Link
            href="/#projects"
            className="mt-5 inline-flex items-center gap-2 text-sm text-yellow-400 hover:text-yellow-300"
          >
            <FiArrowLeft />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const project = projects?.find((p) => p.name === name);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080D1C] px-6 text-white">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-yellow-400">
            <FiCode size={22} />
          </div>

          <h1 className="mt-5 text-2xl font-bold">Project not found</h1>

          <p className="mt-2 text-sm text-gray-500">
            The project you are looking for does not exist.
          </p>

          <Link
            href="/#projects"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-[#080D1C] transition hover:bg-yellow-300"
          >
            <FiArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080D1C] px-6 pb-20 pt-28 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute left-1/4 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <Link
          href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-yellow-400"
        >
          <FiArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Projects
        </Link>

        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-yellow-400" />

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
                Project Details
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-yellow-400" />

                <span>{project.year}</span>
              </div>

              <div className="h-1 w-1 rounded-full bg-gray-700" />

              <span>{project.skills?.length || 0} Technologies</span>
            </div>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
            >
              <FiGithub size={18} />
              View on GitHub
              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}
        </div>

        <section className="mb-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {project.imgSource?.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-4 shadow-xl shadow-black/10"
              >
                <div className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0B1224] sm:h-[320px] lg:h-[360px]">
                  <Image
                    src={image}
                    alt={`${project.name} screenshot ${index + 1}`}
                    width={1400}
                    height={900}
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-auto max-h-[85%] w-auto max-w-[100%] rounded-lg object-contain shadow-2xl transition duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute bottom-4 left-4 flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/10 bg-[#080D1C]/70 px-2 text-xs text-gray-300 backdrop-blur-md">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-7 lg:grid-cols-[1.5fr_0.5fr]">
          {/* Description */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md sm:p-9">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                <FiCode size={19} />
              </div>

              <h2 className="text-xl font-semibold text-white">
                About the Project
              </h2>
            </div>

            <p className="text-[15px] leading-8 text-gray-400 sm:text-base">
              {project.description}
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md sm:p-8">
            <div className="mb-6">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                Tech Stack
              </p>

              <h2 className="mt-2 text-xl font-semibold text-white">
                Technologies
              </h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 transition duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-yellow-400"
          >
            <FiArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
