import React from 'react';
import { FaLanguage, FaUserTie } from 'react-icons/fa'; 
import { BiNetworkChart } from 'react-icons/bi';

const Extra = () => {
  const activities = [
    {
      title: 'Career Development Cell (CDC)',
      role: 'Tech Leader (2023 - 2025)',
      description: 'Successfully organized and managed multiple technical events, attracting more than 3000 participants. Championed initiatives to enhance technical skills and foster student growth.',
      icon: <FaUserTie />,
      bgColor: 'text-blue-600'
    },
    {
      title: 'Languages Known',
      role: 'Fluent in English, Hindi; Basics in Gujarati',
      description: 'Communicate fluently in English and Hindi, and have basic proficiency in Gujarati.',
      icon: <FaLanguage />,
      bgColor: 'text-green-600'
    },
    {
      title: 'Networking and Leadership',
      role: 'Mentor and Leader',
      description: 'Built a professional network through events and seminars, and mentored junior members in technical and leadership skills.',
      icon: <BiNetworkChart />,
      bgColor: 'text-purple-600'
    }
  ];

  return (
    <section id="extra" className="p-8 bg-gradient-to-br from-white-50 to-white-200 min-h-screen">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">Extra-Curricular Activities</h2>

      <div className="max-w-5xl mx-auto text-gray-700 space-y-16">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white shadow-xl p-8 rounded-lg border border-gray-300 flex flex-col sm:flex-row items-start sm:items-center">
            <div className={`mb-6 sm:mb-0 sm:mr-8 text-5xl ${activity.bgColor}`}>
              {activity.icon}
            </div>
            <div>
              <h3 className="font-bold text-2xl text-gray-800 mb-4">{activity.title}</h3>
              <p className="text-xl">{activity.role}</p>
              <p className="text-lg mt-2 leading-relaxed">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extra;
