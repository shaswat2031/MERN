import React from 'react';
import Certifications from './Components/Certifications';
import ContactUs from './Components/ContactUs';
import Education from './Components/Education';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Sidebar from './Components/Sidefullnavbar';
import Skills from './Components/Skills';
import Extra from './Components/Extra';

function App() {
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
        <Skills/>
        <Projects/>
        <Extra/>
        <Certifications/>
        <ContactUs/>
      </div>
    </div>
  );
}

export default App;
