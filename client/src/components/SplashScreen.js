// src/components/SplashScreen.js
import React, { useEffect } from 'react';
import './SplashScreen.css';
import logo from '../assets/SMARANA4.png'; // your logo path

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // 1 seconds fade time
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="Smarana Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
