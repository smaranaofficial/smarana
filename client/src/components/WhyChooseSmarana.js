// src/components/WhyChooseSmarana.js
import React from "react";
import "./WhyChooseSmarana.css";
import { FaShippingFast, FaTshirt, FaLeaf, FaHeadset } from "react-icons/fa";

const WhyChooseSmarana = () => {
  return (
    <section className="whychoose-section">
      <h2>Why Choose Smarana?</h2>
      <div className="whychoose-icons">
        <div className="icon-item">
          <FaShippingFast className="icon" />
          <p>Fast Delivery</p>
        </div>
        <div className="icon-item">
          <FaTshirt className="icon" />
          <p>Quality Fabric</p>
        </div>
        <div className="icon-item">
          <FaLeaf className="icon" />
          <p>Eco Friendly</p>
        </div>
        <div className="icon-item">
          <FaHeadset className="icon" />
          <p>Customer Support</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSmarana;
