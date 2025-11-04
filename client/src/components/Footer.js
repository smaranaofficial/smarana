import React from "react";
import "./Footer.css";
import logo from "../assets/SMARANA4.png";
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <img src={logo} alt="Smarana Logo" className="footer-logo" />
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="mailto:support@smarana.com"><FaEnvelope /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Smarana. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
