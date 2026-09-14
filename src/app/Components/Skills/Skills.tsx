import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaFigma,
} from 'react-icons/fa';

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiBurpsuite,
  SiJsonwebtokens,
} from 'react-icons/si';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

const Skills = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend',
      description: 'Building modern and responsive user interfaces.',
      skills: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Redux Toolkit', icon: <SiRedux /> },
      ],
    },

    {
      title: 'Backend',
      description:
        'Creating APIs, authentication and server-side applications.',
      skills: [
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
        {
          name: 'REST API',
          icon: <span className="text-[10px] font-bold">API</span>,
        },
        { name: 'JWT', icon: <SiJsonwebtokens /> },
        { name: 'PHP', icon: <FaPhp /> },
      ],
    },

    {
      title: 'Database & Tools',
      description:
        'Working with databases, version control and development tools.',
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Mongoose', icon: <SiMongoose /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Linux', icon: <FaLinux /> },
      ],
    },

    {
      title: 'Security',
      description:
        'Understanding common web security vulnerabilities and testing.',
      skills: [
        { name: 'Burp Suite', icon: <SiBurpsuite /> },
        {
          name: 'IDOR',
          icon: <span className="text-[10px] font-bold">IDOR</span>,
        },
        {
          name: 'CSRF',
          icon: <span className="text-[10px] font-bold">CSRF</span>,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-1/3 top-20 -z-10 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-yellow-400" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400">
              My Skills
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Technologies I<span className="text-yellow-400"> work with.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
            A collection of technologies and tools I use to design, build and
            maintain modern web applications.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] sm:p-8"
            >
              {/* Category Header */}
              <div className="mb-7">
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {category.description}
                </p>
              </div>

              {/* Glass Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
                  >
                    <span className="flex items-center justify-center text-base text-gray-400 transition-colors duration-300 group-hover/skill:text-yellow-400">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
