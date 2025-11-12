// src/components/HeroCarousel.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./HeroCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/banner1.jpg.png";
import banner2 from "../assets/banner2.jpg.png";
import banner3 from "../assets/banner3.jpg.png";

const HeroCarousel = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {[banner1, banner2, banner3].map((banner, index) => (
          <div key={index} className="carousel-slide">
            <img src={banner} alt={`Banner ${index + 1}`} className="carousel-image" />
            <div className="carousel-overlay">
              <h1 className="carousel-text">Grace you'll always remember</h1>
              <button onClick={() => navigate("/shop")}>Shop Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
