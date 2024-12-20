import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animateClass, setAnimateClass] = useState('');

  const words = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateClass('falling-text bold-text');
    }, 900);

    const animationDuration = 3000; 

    const resetAnimation = () => {
      setAnimateClass('');
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 8) % words.length);
        setAnimateClass('shake-text');
      }, animationDuration);
    };

    const interval = setInterval(resetAnimation, animationDuration * 1);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [currentWordIndex, animateClass, words.length]);

  return (
    <section id="about" className="min-h-screen">
      <div className="w-3/4 p-8 h-screen flex flex-col justify-center">
        {/* Introduction Section */}
        <motion.div
          className="text-5xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.span
            className="block text-6xl text-orange-600"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
            style={{ fontFamily: "'Roboto Slab', serif" }} 
          >
            HELLO WORLD! 🌏
          </motion.span>
          <span>I AM <span className="text-orange-600">Prasad Shaswat</span></span>
        </motion.div>
        <div className="text-gray-500 mb-4">
          <p>Vadodara, 391760 | (+91) 9265-18481 | prasadshaswat9265@gmail.com</p>
        </div>
        <motion.div
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
        >
          <p>
            Greetings! I'm a dedicated <span className={animateClass}>{words[currentWordIndex]}</span> with expertise in JavaScript, and frameworks such as React and Node.js. My technical skill set includes HTML, CSS, Python, Java, and Data Structures and Algorithms (DSA). Currently, I am enhancing my skills by exploring Three.js to add advanced visual elements to my projects.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex space-x-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
        >
          <a href="https://www.linkedin.com/in/shaswat-prasad-14b147266/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-blue-600 cursor-pointer" />
          </a>
          <a href="https://github.com/prasadshaswat" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="text-gray-800 cursor-pointer" />
          </a>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeInOut' }}
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1oj2q_JHTNXqCtnI_SJ8qVQbQPstW5gLK"
            download="Prasadshaswatresume.pdf"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Availability and Interests */}
        <motion.div
          className="mt-6 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeInOut' }}
        >
          <p>
  <strong>Available for internships or part-time roles starting January 15, 2024 🚀</strong> — Eager to bring my skills in frontend and backend development to a dynamic team!
</p>
<p>
  <strong>
    Seeking opportunities in Web Development, Backend Engineering, and Software Development 🌟. Ready to learn, contribute, and grow in a real-world setting!
  </strong>
  <br />
</p>
<p>
  <strong>
    Passionate about coding, problem-solving, and exploring new technologies. Let’s create something amazing together! 💻✨
  </strong>
</p>

        </motion.div>
      </div>
    </section>
  );
};

export default Home;
