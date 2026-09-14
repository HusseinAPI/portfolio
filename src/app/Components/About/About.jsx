import {
  FiBookOpen,
  FiCode,
  FiMapPin,
  FiArrowUpRight,
  FiBriefcase,
  FiDatabase,
} from 'react-icons/fi';

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-yellow-400" />

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Turning ideas into{' '}
            <span className="text-yellow-400">digital experiences.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Full-stack developer focused on building practical, scalable, and
            user-friendly applications with modern web technologies.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition duration-300 hover:border-white/15 sm:p-9">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                <FiCode size={22} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">My Journey</h3>

                <p className="text-sm text-gray-500">Full Stack Developer</p>
              </div>
            </div>

            <div className="space-y-5 text-[15px] leading-7 text-gray-400 sm:text-base">
              <p>
                Hello! I’m{' '}
                <span className="font-medium text-white">Hussein Kassab</span>,
                a full-stack developer passionate about building modern web
                applications and turning real-world ideas into practical digital
                solutions.
              </p>

              <p>
                I work across both frontend and backend development, with
                experience using{' '}
                <span className="text-gray-200">
                  React, Next.js, TypeScript, Node.js, Express, Laravel, PHP,
                  MySQL, and MongoDB
                </span>
                .
              </p>

              <p>
                My projects have given me hands-on experience building
                responsive interfaces, REST APIs, authentication systems,
                database integrations, dashboards, e-commerce platforms, and
                business management applications.
              </p>

              <p>
                I hold a Bachelor’s Degree in{' '}
                <span className="text-gray-200">Information Technology</span>{' '}
                from Amjad Institutes. I also completed an intensive full-stack
                development program at ESA Coding Lab, where I worked on
                collaborative projects and gained experience with agile
                development and team-based workflows.
              </p>

              <p>
                I’m currently focused on improving my development skills,
                learning new technologies, and building software that is clean,
                reliable, and useful.
              </p>
            </div>

            <div className="mt-9 border-t border-white/10 pt-7">
              <div className="mb-4 flex items-center gap-3"></div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {/* Education */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-yellow-400">
                <FiBookOpen size={20} />
              </div>

              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                Education
              </p>

              <h3 className="text-lg font-semibold text-white">
                Information Technology
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Bachelor’s Degree from Amjad Institutes.
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-yellow-400">
                <FiBriefcase size={20} />
              </div>

              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                Experience
              </p>

              <h3 className="text-lg font-semibold text-white">
                Full Stack Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Internship experience building real-world web applications,
                APIs, dashboards, and business systems.
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-yellow-400">
                <FiDatabase size={20} />
              </div>

              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                Development
              </p>

              <h3 className="text-lg font-semibold text-white">
                Frontend & Backend
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Building complete applications from responsive interfaces to
                APIs, authentication, and databases.
              </p>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-yellow-400">
                <FiMapPin size={20} />
              </div>

              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                Based In
              </p>

              <h3 className="text-lg font-semibold text-white">Lebanon</h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Open to building products with ambitious teams and clients.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent p-7 backdrop-blur-md sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                What I believe
              </p>

              <p className="mt-2 text-xl font-medium text-white sm:text-2xl">
                “Keep learning. Keep building. Keep improving.”
              </p>
            </div>

            <a
              href="#projects"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
            >
              View My Work
              <FiArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
