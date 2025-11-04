// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import logo from "../assets/SMARANA4.png";
import { FaUser, FaShoppingCart, } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Smarana Logo" className="navbar-logo" />
      </div>

      <div className="navbar-center">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
      </div>

      <div className="navbar-right">
        <FaUser className="nav-icon" />
        <FaShoppingCart className="nav-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
