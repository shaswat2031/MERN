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
    <section id="education" className="min-h-screen bg-white py-12 px-6 md:px-12">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        My Educational Journey
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-16">

        {/* Parul University */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={ParulLogo} alt="Parul University Logo" className="w-20 h-20 md:w-24 md:h-24" />
          <div className="text-center md:text-left md:ml-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">Parul University</h3>
            <p className="text-lg md:text-xl text-gray-600">Bachelor of Technology (B.Tech)</p>
            <p className="text-md md:text-lg text-gray-600">Computer Science and Engineering</p>
            <p className="text-sm md:text-md text-gray-500">Ongoing (2022 - Present)</p>

            <p className="mt-3 text-gray-600 text-sm md:text-lg">
              I’m currently pursuing my B.Tech in Computer Science at Parul University. While I wasn't a top-ranking student, I have always been eager to learn and improve my skills. Over time, I developed a strong interest in web development and problem-solving.  
            </p>

            <ul className="list-disc list-inside mt-3 text-gray-600 text-sm md:text-lg">
              <li><strong>Key Subjects:</strong> Data Structures, Web Development, Databases.</li>
              <li><strong>Projects:</strong> Built a student connection platform and small web apps.</li>
              <li><strong>Challenges:</strong> Initially struggled with coding but improved through practice.</li>
              <li><strong>Skills Learned:</strong> Problem-solving, teamwork, and adapting to new technologies.</li>
            </ul>
          </div>
        </motion.div>

        {/* Bhagwat Vidyapith */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={BhagwatLogo} alt="Bhagwat Vidyapith Logo" className="w-20 h-20 md:w-24 md:h-24" />
          <div className="text-center md:text-left md:ml-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">Bhagwat Vidyapith</h3>
            <p className="text-lg md:text-xl text-gray-600">Higher Secondary (Class 12)</p>
            <p className="text-md md:text-lg text-gray-600">Science Stream</p>
            <p className="text-sm md:text-md text-gray-500">Completed (2020 - 2022)</p>

            <p className="mt-3 text-gray-600 text-sm md:text-lg">
              I studied Science in high school, focusing on Mathematics, Physics, and Computer Science. Although I wasn’t the best in every subject, I enjoyed problem-solving and understanding how things work. This interest eventually led me to computer programming.
            </p>

            <ul className="list-disc list-inside mt-3 text-gray-600 text-sm md:text-lg">
              <li><strong>Subjects:</strong> Physics, Mathematics, Chemistry, Computer Science.</li>
              <li><strong>Struggles:</strong> Found physics challenging but worked hard to pass.</li>
              <li><strong>Growth:</strong> Developed a passion for coding during this time.</li>
              <li><strong>Extracurriculars:</strong> Participated in basic coding competitions.</li>
            </ul>
          </div>
        </motion.div>

        {/* Sungrace School */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img src={SungraceLogo} alt="Sungrace School Logo" className="w-20 h-20 md:w-24 md:h-24" />
          <div className="text-center md:text-left md:ml-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">Sungrace School</h3>
            <p className="text-lg md:text-xl text-gray-600">Secondary School (Class 10)</p>
            <p className="text-md md:text-lg text-gray-600">General Studies</p>
            <p className="text-sm md:text-md text-gray-500">Completed (2019 - 2020)</p>

            <p className="mt-3 text-gray-600 text-sm md:text-lg">
              During my school years, I was an average student academically but always curious about technology. I was more interested in computers and logical problem-solving rather than memorizing facts. This curiosity eventually led me to explore coding and web development.
            </p>

            <ul className="list-disc list-inside mt-3 text-gray-600 text-sm md:text-lg">
              <li><strong>Subjects:</strong> Mathematics, Science, English, Social Studies.</li>
              <li><strong>Performance:</strong> Did well in Math but struggled in some subjects.</li>
              <li><strong>Interest:</strong> Started exploring basic coding and websites.</li>
              <li><strong>School Activities:</strong> Joined computer club and experimented with small projects.</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
 w