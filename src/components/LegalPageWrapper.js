import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const LegalPageWrapper = ({ children, title }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-20">
        {React.cloneElement(children, { isDarkMode })}
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default LegalPageWrapper;
