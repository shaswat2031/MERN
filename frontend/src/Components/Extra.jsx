import React from 'react';
import { FaMedal, FaLanguage, FaUserTie } from 'react-icons/fa'; // Example icons
import { BiNetworkChart } from 'react-icons/bi';

const Extra = () => {
  return (
    <section id="extra" className="p-8 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">
        Extra-Curricular Activities
      </h2>

      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto text-gray-700 space-y-16">

        {/* Career Development Cell */}
        <div className="bg-white shadow-xl p-8 rounded-lg border border-gray-300 flex flex-col sm:flex-row items-start sm:items-center">
          <div className="mb-6 sm:mb-0 sm:mr-8 text-5xl text-blue-600">
            <FaUserTie />
          </div>
          <div>
            <h3 className="font-bold text-2xl text-gray-800 mb-4">
              Career Development Cell (CDC)
            </h3>
            <p className="text-xl">
              <strong>Role:</strong> Tech Leader <span className="text-gray-600">(2023 - 2025)</span>
            </p>
            <p className="text-lg mt-2 leading-relaxed">
              Successfully organized and managed multiple technical events, attracting participation from more than 
              <strong> 3000 participants</strong>. Championed initiatives to enhance technical skills, foster growth among 
              the student community, and lead collaborative projects with peers and industry professionals.
            </p>
          </div>
        </div>

        {/* Languages Known */}
        <div className="bg-white shadow-xl p-8 rounded-lg border border-gray-300 flex flex-col sm:flex-row items-start sm:items-center">
          <div className="mb-6 sm:mb-0 sm:mr-8 text-5xl text-green-600">
            <FaLanguage />
          </div>
          <div>
            <h3 className="font-bold text-2xl text-gray-800 mb-4">Languages Known</h3>
            <p className="text-lg leading-relaxed">
              <strong>Fluent:</strong> English, Hindi<br />
              <strong>Basics:</strong>  Gujarati
            </p>
          </div>
        </div>

        {/* Networking and Leadership */}
        <div className="bg-white shadow-xl p-8 rounded-lg border border-gray-300 flex flex-col sm:flex-row items-start sm:items-center">
          <div className="mb-6 sm:mb-0 sm:mr-8 text-5xl text-purple-600">
            <BiNetworkChart />
          </div>
          <div>
            <h3 className="font-bold text-2xl text-gray-800 mb-4">Networking and Leadership</h3>
            <p className="text-lg leading-relaxed">
              Built a professional network of peers, industry experts, and mentors through organizing events and seminars. 
              Mentored junior team members, provided guidance on technical and project management skills, and successfully led 
              cross-functional teams to achieve impactful results.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Extra;
