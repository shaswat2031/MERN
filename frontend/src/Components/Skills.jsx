import React from 'react';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJsSquare, FaLinux, FaPython, FaWindows } from 'react-icons/fa';
import { SiDjango, SiFlask, SiMongodb, SiMysql } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="p-8 bg-white min-h-screen">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">Skills</h2>

      {/* Icons Section */}
      <div className="flex flex-wrap justify-center items-center mb-12 space-x-6">
        <FaHtml5 size={60} className="text-orange-600 hover:text-orange-700 transition duration-300" />
        <FaCss3Alt size={60} className="text-blue-600 hover:text-blue-700 transition duration-300" />
        <FaJsSquare size={60} className="text-yellow-500 hover:text-yellow-600 transition duration-300" />
        <FaPython size={60} className="text-blue-500 hover:text-blue-600 transition duration-300" />
        <FaJava size={60} className="text-red-600 hover:text-red-700 transition duration-300" />
        <SiMongodb size={60} className="text-green-600 hover:text-green-700 transition duration-300" />
        <SiMysql size={60} className="text-blue-600 hover:text-blue-700 transition duration-300" />
        <FaLinux size={60} className="text-black hover:text-gray-800 transition duration-300" />
        <FaWindows size={60} className="text-blue-500 hover:text-blue-600 transition duration-300" />
        <FaGitAlt size={60} className="text-red-600 hover:text-red-700 transition duration-300" />
        <FaGithub size={60} className="text-black hover:text-gray-800 transition duration-300" />
        <SiDjango size={60} className="text-green-700 hover:text-green-800 transition duration-300" />
        <SiFlask size={60} className="text-black hover:text-gray-800 transition duration-300" />
      </div>

      {/* Skill Categories */}
      <div className="text-gray-700">
        <div className="mb-10">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Programming Languages</h3>
          <p className="text-xl">HTML, CSS, JavaScript, Python, Java</p>
        </div>

        <div className="mb-10">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Database Systems</h3>
          <p className="text-xl">MongoDB, MySQL</p>
        </div>

        <div className="mb-10">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Operating Systems</h3>
          <p className="text-xl">Windows, Linux</p>
        </div>

        <div className="mb-10">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Tools & Platforms</h3>
          <p className="text-xl">Git, GitHub</p>
        </div>

        <div className="mb-10">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Web Development Frameworks</h3>
          <p className="text-xl">Django, Flask</p>
        </div>
      </div>

      {/* GitHub Commit Graph */}
      {/* <div className="mt-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">GitHub Commit Graph</h3>
        <div className="flex justify-center">
          <img
            src="https://ghchart.rshb.de/shaswat2031" // Replace with your GitHub username
            alt="GitHub Commit Graph"
            className="w-full max-w-4xl border border-gray-300 rounded-lg"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
