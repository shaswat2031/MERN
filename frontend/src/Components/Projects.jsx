import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import gateupscImage from '../Assets/gateupsc.png';
import protifiloImage from '../Assets/protifilo.png';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and experience. Built with React, Tailwind CSS, and Framer Motion.",
    date: "August 2024",
    liveLink: "https://prasadshaswat.github.io/shaswat_protfilo/",
    githubLink: "https://github.com/prasadshaswat/shaswat_protfilo",
    image: protifiloImage
  },
  {
    title: "UPSC & GATE Study Material Website",
    description: "A website providing study materials and resources for UPSC and GATE exams. Developed using HTML, CSS, JavaScript, and SCSS.",
    date: "May 2024",
    liveLink: "https://lnkd.in/dv-GFVDY",
    githubLink: "https://github.com/shaswat2031/GATE-UPSC-WEBSITE",
    image: gateupscImage
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-white p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
      
      <div className="w-full max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-12 flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <img
              src={project.image}
              alt={`${project.title} Screenshot`}
              className="w-full md:w-1/2 h-auto rounded-lg mb-6 md:mb-0 md:mr-6"
            />
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-semibold text-gray-700 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-5 text-lg leading-relaxed">{project.description}</p>
              <p className="text-gray-500 text-sm mb-5"><strong>{project.date}</strong></p>
              <div className="flex space-x-4">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform-gpu"
                  whileHover={{ scale: 1.1, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } }}
                >
                  <FaExternalLinkAlt size={18} className="inline-block mr-2" />
                  Live View
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform-gpu"
                  whileHover={{ scale: 1.1, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } }}
                >
                  <FaGithub size={18} className="inline-block mr-2" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
