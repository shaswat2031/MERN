import { motion } from 'framer-motion';
import React from 'react';
import BhagwatLogo from '../Assets/bhagwat.png';
import ParulLogo from '../Assets/parul.png';
import SungraceLogo from '../Assets/Sungrace.png';

const Education = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="education" className="min-h-screen bg-white p-8">
      <motion.h2
        className="text-5xl font-extrabold text-gray-800 mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Education
      </motion.h2>

      {/* Parul University */}
      <motion.div
        className="mb-12 flex items-start"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src={ParulLogo} alt="Parul University Logo" className="w-28 h-28 mr-8" />
        <div>
          <h3 className="text-3xl font-semibold text-gray-700">Parul University</h3>
          <p className="text-xl text-gray-600">Bachelor of Technology (B.Tech)</p>
          <p className="text-lg text-gray-600">Computer Science and Engineering</p>
          <p className="text-md text-gray-500">Ongoing (2022 - Present)</p>
          <ul className="list-disc list-inside mt-4 text-gray-600 text-lg">
            <li><strong>Key Coursework:</strong> Data Structures, Algorithms, Web Development, AI.</li>
            <li><strong>Accomplishments:</strong> Dean’s List, Student Tech Club President.</li>
          </ul>
        </div>
      </motion.div>

      {/* Bhagwat Vidyapith */}
      <motion.div
        className="mb-12 flex items-start"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src={BhagwatLogo} alt="Bhagwat Vidyapith Logo" className="w-28 h-28 mr-8" />
        <div>
          <h3 className="text-3xl font-semibold text-gray-700">Bhagwat Vidyapith</h3>
          <p className="text-xl text-gray-600">Class 12</p>
          <p className="text-lg text-gray-600">Science</p>
          <p className="text-md text-gray-500">Completed (2020 - 2022)</p>
        </div>
      </motion.div>

      {/* Sungrace School */}
      <motion.div
        className="flex items-start"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src={SungraceLogo} alt="Sungrace School Logo" className="w-28 h-28 mr-8" />
        <div>
          <h3 className="text-3xl font-semibold text-gray-700">Sungrace School</h3>
          <p className="text-xl text-gray-600">Class 10</p>
          <p className="text-lg text-gray-600">General Studies</p>
          <p className="text-md text-gray-500">Completed (2019 - 2020)</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
