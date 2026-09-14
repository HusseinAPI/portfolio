import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiCpu,
} from 'react-icons/fi';

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-yellow-400" />

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
              Experience
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building real-world{' '}
            <span className="text-yellow-400">solutions.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            My journey from intensive training to working on real-world
            full-stack applications in a professional environment.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-yellow-400/50 via-white/10 to-transparent md:block" />

          <div className="relative md:pl-16">
            <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-yellow-400/30 bg-[#080D1C] text-yellow-400 shadow-lg shadow-yellow-400/10 md:flex">
              <FiBriefcase size={18} />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition duration-300 hover:border-yellow-400/20 sm:p-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-400">
                      Internship
                    </span>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                      On-site
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Full Stack Developer Intern
                  </h3>

                  <p className="mt-2 text-lg font-medium text-yellow-400">
                    Violet Pro
                  </p>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-400 lg:items-end">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-yellow-400" />
                    July 2026 — September 2026
                  </div>

                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-yellow-400" />
                    On-site
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="max-w-4xl text-[15px] leading-7 text-gray-400 sm:text-base">
                  Developed multiple full-stack web applications during a
                  hands-on internship, working across frontend, backend,
                  databases, authentication, and business logic.
                </p>

                {/* Projects */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                      <FiDatabase size={19} />
                    </div>

                    <h4 className="font-semibold text-white">
                      Accounting & Inventory
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Built workflows for sales, purchases, stock management,
                      inventory tracking, and accounting operations.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                      <FiCode size={19} />
                    </div>

                    <h4 className="font-semibold text-white">
                      Digital Products
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Developed a digital menu system, restaurant website with
                      e-commerce functionality, and an animation-rich portfolio.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-gray-300">
                    Key Contributions
                  </h4>

                  <div className="space-y-4">
                    {[
                      'Built responsive React.js interfaces, RESTful APIs, and backend functionality using PHP, Laravel, and MySQL.',
                      'Implemented authentication, database integration, and CRUD operations across multiple applications.',
                      'Developed business workflows for sales, purchases, stock management, inventory tracking, and accounting processes.',
                      'Researched and prototyped camera-based barcode scanning and explored RFID-based inventory solutions.',
                      'Collaborated in a professional development environment and used AI-assisted development tools to improve productivity and problem-solving.',
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 text-sm leading-6 text-gray-400 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-7">
                  <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      'React.js',
                      'Redux Toolkit',
                      'TailwindCSS',
                      'PHP',
                      'Laravel',
                      'MySQL',
                      'REST APIs',
                      'JavaScript',
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 transition hover:border-yellow-400/20 hover:text-yellow-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 md:pl-16">
            <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#080D1C] text-gray-400 md:flex">
              <FiCpu size={18} />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-md sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Professional Training
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Full-Stack Development Bootcamp
                  </h3>

                  <p className="mt-2 text-base text-yellow-400">
                    ESA Coding Lab
                  </p>
                </div>

                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                  Certification
                </span>
              </div>

              <p className="mt-6 max-w-4xl text-sm leading-7 text-gray-400 sm:text-base">
                Completed an intensive full-stack development program with
                individual and team-based projects, gaining hands-on experience
                with modern web development technologies, collaborative
                workflows, and agile methodologies.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'MERN Stack',
                  'React',
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'Redux Toolkit',
                  'TypeScript',
                  'Next.js',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <FiArrowUpRight className="text-yellow-400" />
                <span>
                  Full-Stack Developer certification — ESA Business School
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <FiArrowUpRight className="text-yellow-400" />
                <span>
                  Full-Stack Developer certification — ESIEE-IT France
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-3xl border border-yellow-400/10 bg-yellow-400/[0.03] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-yellow-400">
              Always learning
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              Ready for the next challenge.
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Continuously improving my skills and building better solutions.
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-[#080D1C] transition hover:bg-yellow-300"
          >
            Explore Projects
            <FiArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
