'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useProjects } from '../../context/ProjectsContext';

const Projects = () => {
  const projects = useProjects();

  return (
    <div className="w-full mt-32">
      <div className="text-4xl text-yellow-300 ml-24 my-8" id="projects">
        Projects
      </div>
      <div className="p-8 min-h-screen flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {projects?.map((elem, index) => (
            <Link href={`/projects/${elem.name}`} key={index}>
              <div
                key={index}
                className="bg-red-600 text-white rounded-lg p-6 shadow-md flex flex-col cursor-pointer hover:bg-red-700 transition-colors duration-300"
              >
                <div className="relative">
                  <Image
                    src={elem.imgSource[0]}
                    alt="Swesco Maskot"
                    className="rounded-md mb-4"
                    width={500}
                    height={200}
                  />
                </div>
                <h2 className="text-lg font-bold">{elem.name}</h2>
                <p className="text-sm text-red-200 mt-2">{elem.year}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {elem.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
