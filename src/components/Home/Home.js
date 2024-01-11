import React, { useState } from 'react';
import moon from './moon.png';
import sun from './sun.png';
import { Container } from './Container';

export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`relative min-h-screen flex ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-200 to-blue-300'} justify-center items-center img`}>
      <div className="absolute top-3 right-2" onClick={toggleChange}>
        <img src={darkMode ? sun : moon} className='w-10' alt={darkMode ? 'Sun icon' : 'Moon icon'} />
      </div>
      <Container darkMode={darkMode} />
    </div>
  );
};


