import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUp,
} from 'react-icons/fi';

const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#080D1C] px-6 pt-20 sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-yellow-400/[0.04] p-8 sm:p-12">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-yellow-400" />

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              <span className="text-yellow-400">Let’s build it.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              I’m always interested in new opportunities, innovative projects,
              and meaningful collaborations. Let’s talk about what we can create
              together.
            </p>

            <a
              href="mailto:hussein.a.kassab@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-semibold text-[#080D1C] transition duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/10"
            >
              Send Me a Message
              <FiArrowUpRight size={18} />
            </a>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-20 hidden h-72 w-72 rounded-full border border-yellow-400/10 sm:block" />

          <div className="pointer-events-none absolute -bottom-32 -right-10 hidden h-72 w-72 rounded-full border border-yellow-400/10 sm:block" />
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="text-2xl font-bold text-white">Hussein</span>

              <span className="h-2 w-2 rounded-full bg-yellow-400" />

              <span className="text-2xl font-bold text-white">Kassab</span>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              Full-Stack Developer passionate about creating modern, scalable,
              and user-focused web applications.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/HusseinAPI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/hussein-kassab-974963243"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <FaLinkedin size={19} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Navigation
            </h3>

            <nav className="flex flex-col gap-3">
              {[
                ['Home', '#Top'],
                ['About', '#about'],
                ['Experience', '#experience'],
                ['Projects', '#projects'],
                ['Skills', '#skills'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="group flex w-fit items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-yellow-400"
                >
                  <span>{label}</span>

                  <FiArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-yellow-400"
                />

                <span className="text-sm text-gray-500">Lebanon</span>
              </div>

              <a
                href="tel:+96170884903"
                className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-yellow-400"
              >
                <FiPhone size={17} className="text-yellow-400" />
                +961 70 884 903
              </a>

              <a
                href="mailto:hussein.a.kassab@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-yellow-400"
              >
                <FiMail size={17} className="shrink-0 text-yellow-400" />
                <span className="break-all">hussein.a.kassab@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Hussein Kassab. All rights reserved.
          </p>

          <a
            href="#Top"
            aria-label="Back to top"
            className="group flex w-fit items-center gap-2 text-xs text-gray-500 transition-colors hover:text-yellow-400"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition duration-300 group-hover:border-yellow-400/30 group-hover:bg-yellow-400/10">
              <FiArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
