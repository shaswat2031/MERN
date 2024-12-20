import React, { useState } from 'react';

// Import images
import bootcampImage from '../Assets/bootcamp.jpg';
import cdcImage from '../Assets/cdc.jpg';
import cyberSecurityImage from '../Assets/cyber.jpg';
import ciscoImage from '../Assets/cybersecurity.jpg';
import figmaImage from '../Assets/Figma.png';
import hackathonImage from '../Assets/hackthon4.0.png';
import myOnsiteImage from '../Assets/onmyhealth.jpg';

// Define your certification data with images
const certifications = [
  {
    title: 'Hackathon of Vadodara 4.0',
    description: 'Organized by Parul Institute of Innovation and Entrepreneurship Research Center, this hackathon focused on fostering creativity and innovation.',
    image: hackathonImage,
  },
  {
    title: 'Figma Course',
    description: 'This course provided in-depth knowledge of Figma, covering essential design principles and techniques for creating user-friendly designs.',
    image: figmaImage,
  },
  {
    title: 'MyOnSite Healthcare Hackathon at Parul University',
    description: 'A 36-hour intensive hackathon supported by JBT Hospitality and MedinoAi, where teams developed innovative healthcare solutions.',
    image: myOnsiteImage,
  },
  {
    title: 'Cisco Certificate of Computer Networks',
    description: 'This certification validated your understanding of networking concepts, covering topics like network design and secure networks.',
    image: ciscoImage,
  },
  {
    title: 'Career Development Cell Coordinator in GLOBAL FUNFEST - 2024',
    description: 'As a coordinator, you organized and managed GLOBAL FUNFEST 2024, facilitating networking, skill development, and fun.',
    image: cdcImage,
  },
  {
    title: 'Certification on Cyber Security (60 days boot camp)',
    description: 'This boot camp provided a comprehensive overview of cybersecurity principles, including threat detection and risk management.',
    image: cyberSecurityImage,
  },
  {
    title: 'Full Stack Web Development Bootcamp (Udemy)',
    description: 'This bootcamp covered front-end and back-end technologies, equipping you with the skills to build dynamic web applications.',
    image: bootcampImage,
  },
];

const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="certifications" className="min-h-screen  p-8">
    <div className="certifications-container p-8">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <ul className="certification-list space-y-4">
        {certifications.map((cert, index) => (
          <li
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="certification-item cursor-pointer relative"
          >
            <h3 className="text-xl text-orange-600">{cert.title}</h3>
            {hoveredIndex === index && (
              <div className="absolute top-0 left-24 p-4 bg-white shadow-lg rounded-lg z-10">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-64 h-auto mb-2 rounded" 
                />
                <p className="text-gray-600">{cert.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
};

export default Certifications;
