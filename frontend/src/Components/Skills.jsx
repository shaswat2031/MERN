import React from 'react';
import {
  FaGitAlt, FaGithub, FaJava, FaJsSquare, FaPython, FaLinux, FaWindows, 
  FaReact, FaNodeJs, FaAws, FaCloud
} from 'react-icons/fa'; // FaCloud icon added
import {
  SiDjango, SiFlask, SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiFirebase, 
  SiRedux, SiTypescript, SiNextdotjs, SiDocker
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">Technical Skills</h2>

      {/* Skill Icons Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center mb-12">
        {/* Programming Languages */}
        <FaJava size={60} className="text-red-600 hover:scale-110 transition-transform" />
        <FaPython size={60} className="text-blue-500 hover:scale-110 transition-transform" />
        <FaJsSquare size={60} className="text-yellow-500 hover:scale-110 transition-transform" />
        <SiTypescript size={60} className="text-blue-700 hover:scale-110 transition-transform" />

        {/* Frontend */}
        <FaReact size={60} className="text-blue-400 hover:scale-110 transition-transform" />
        <SiNextdotjs size={60} className="text-black hover:scale-110 transition-transform" />
        <SiRedux size={60} className="text-purple-600 hover:scale-110 transition-transform" />
        <SiTailwindcss size={60} className="text-teal-400 hover:scale-110 transition-transform" />

        {/* Backend */}
        <FaNodeJs size={60} className="text-green-500 hover:scale-110 transition-transform" />
        <SiExpress size={60} className="text-gray-900 hover:scale-110 transition-transform" />
        <SiDjango size={60} className="text-green-700 hover:scale-110 transition-transform" />
        <SiFlask size={60} className="text-black hover:scale-110 transition-transform" />

        {/* Databases */}
        <SiMongodb size={60} className="text-green-600 hover:scale-110 transition-transform" />
        <SiMysql size={60} className="text-blue-600 hover:scale-110 transition-transform" />

        {/* DevOps & Cloud */}
        <SiDocker size={60} className="text-blue-500 hover:scale-110 transition-transform" />
        <FaAws size={60} className="text-yellow-500 hover:scale-110 transition-transform" />
        <FaCloud size={60} className="text-gray-400 hover:scale-110 transition-transform" /> {/* Cloud icon here */}
        <SiFirebase size={60} className="text-yellow-400 hover:scale-110 transition-transform" />
        
        {/* Tools & Platforms */}
        <FaLinux size={60} className="text-black hover:scale-110 transition-transform" />
        <FaWindows size={60} className="text-blue-500 hover:scale-110 transition-transform" />
        <FaGitAlt size={60} className="text-red-600 hover:scale-110 transition-transform" />
        <FaGithub size={60} className="text-black hover:scale-110 transition-transform" />
      </div>

      {/* Skill Categories */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-600">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">Programming Languages</h3>
          <p className="text-lg text-gray-700">Java, Python, JavaScript, TypeScript</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-indigo-500">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">Frontend Development</h3>
          <p className="text-lg text-gray-700">React.js, Redux, Next.js, Tailwind CSS</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-600">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">Backend Development</h3>
          <p className="text-lg text-gray-700">Node.js, Express.js, Django, Flask</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-yellow-500">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">Databases & Cloud</h3>
          <p className="text-lg text-gray-700">MongoDB, MySQL, Firebase</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-teal-500">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">DevOps & Cloud Platforms</h3>
          <p className="text-lg text-gray-700">Docker, AWS, Cloud</p> {/* Updated text */}
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-gray-700">
          <h3 className="font-bold text-2xl text-gray-900 mb-2">Tools & Platforms</h3>
          <p className="text-lg text-gray-700">Git, GitHub, Linux, Windows</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
