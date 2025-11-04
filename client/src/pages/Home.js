// src/pages/Home.js
import React from "react";
import "./Home.css";
import "../styles/colors.css";
import Navbar from "../components/Navbar";  // 👈 Import navbar
import HeroCarousel from "../components/HeroCarousel";
import ExclusiveCollection from "../components/ExclusiveCollection";
import WhyChooseSmarana from "../components/WhyChooseSmarana";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar /> {/* 👈 Use navbar here */}
      <HeroCarousel />
      <ExclusiveCollection />
      <WhyChooseSmarana />
      <Footer />
    </div>
  );
};

export default Home;
