const Skills = () => {
  type Skill = {
    name: string;
    percentage: number;
  };

  const skills: Skill[] = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'TypeScript', percentage: 75 },
    { name: 'React', percentage: 85 },
    { name: 'Next.js', percentage: 65 },
    { name: 'Tailwind CSS', percentage: 85 },
    { name: 'Redux Toolkit', percentage: 85 },
    { name: 'Express', percentage: 85 },
    { name: 'REST API', percentage: 85 },
    { name: 'JWT', percentage: 90 },
    { name: 'MySQL', percentage: 75 },
    { name: 'MongoDB', percentage: 90 },
    { name: 'mongoose', percentage: 90 },
    { name: 'PHP', percentage: 60 },
    { name: 'Git', percentage: 90 },
    { name: 'GitHub', percentage: 90 },
    { name: 'Figma', percentage: 60 },
    { name: 'Linux', percentage: 60 },
    { name: 'Burp Suite', percentage: 65 },
    { name: 'IDOR', percentage: 65 },
    { name: 'CSRF', percentage: 55 },
  ];

  return (
    <>
      <div className="w-full text-4xl text-yellow-400 ml-10 md:ml-24 my-8">
        Skills
      </div>
      <div
        className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        id="skills"
      >
        {skills.map((elem, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-white">{elem.name}</span>
              <span className="text-white">{elem.percentage}%</span>
            </div>
            <div className="w-full bg-teal-900 rounded-full h-4">
              <div
                className="bg-yellow-400 h-4 rounded-full"
                style={{ width: `${elem.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
