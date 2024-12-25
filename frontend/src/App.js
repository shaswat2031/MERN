import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidefullnavbar';
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Extra from './Components/Extra';
import Certifications from './Components/Certifications';
import ContactUs from './Components/ContactUs';
import Popup from './Components/Popup'; // Import the Popup component

import confetti from "canvas-confetti";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    // Add delay for button fall-in effect
    const timeout = setTimeout(() => {
      setIsButtonVisible(true);
    }, 500); // 500ms delay for the button animation

    return () => clearTimeout(timeout);
  }, []);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);

    // Trigger confetti effect
    confetti({
      particleCount:1500,
      spread:200,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FF4500", "#FFFFE0"], // Yellow and orange theme
    });
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-1/4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-[25%] w-3/4 overflow-y-auto">
        <Home />
        <Education />
        <Skills />
        <Projects />
        <Extra />
        <Certifications />
        <ContactUs />

        {/* Animated Floating Button */}
        {isButtonVisible && (
          <button
            onClick={togglePopup}
            className="fixed bottom-5 right-5 bg-yellow-500 text-black py-3 px-6 rounded-full shadow-md hover:bg-yellow-600 transition-transform duration-500 transform animate-bounce"
          >
            Buy Me a Coffee
          </button>
        )}

        {/* Popup Component */}
        {isPopupVisible && <Popup togglePopup={togglePopup} />}
      </div>
    </div>
  );
}

export default App;
