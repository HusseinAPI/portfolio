'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useProjects } from '../../context/ProjectsContext';

const ProjectDetails = () => {
  const { name } = useParams();
  const projects = useProjects();

  if (!name) {
    return (
      <div className="text-center mt-20 text-red-500">Project not found!</div>
    );
  }

  const project = projects?.find((p) => p.name === name);

  if (!project) {
    return (
      <div className="text-center mt-20 text-red-500">Project not found!</div>
    );
  }

  return (
    <div className="min-h-screen bg-purple-900 text-yellow-400">
      <header className="text-center py-6">
        <p className="text-xl mt-14">Year: {project.year}</p>
      </header>
      <main className="container mx-auto p-6">
        <div className="flex flex-wrap justify-center bg-red-500 p-4 rounded-lg mb-6">
          <h2 className="w-full text-2xl font-semibold text-center mb-4 text-white">
            {project.name}
          </h2>
          {project.imgSource.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={project.name}
              className="w-1/3 rounded-md m-2"
              width={400}
              height={300}
            />
          ))}
        </div>

        <section className="bg-purple-800 p-6 rounded-lg text-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <p className="text-lg">{project.description}</p>
        </section>

        <section className="mt-6">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Technologies Used
          </h3>
          <div className="flex gap-4 flex-wrap">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-8 text-center">
          <Link href="/#projects">
            <button className="bg-yellow-400 text-purple-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition">
              Back to Projects
            </button>
          </Link>
          {project.github && (
            <Link
              className="ml-2"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-teal-950 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 mt-4 transition">
                View on GitHub
              </button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
