// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import './SplashScreen.css';
import logo from '../assets/SMARANA4.png';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof onFinish === 'function') onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="Smarana Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
