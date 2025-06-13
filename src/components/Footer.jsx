import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">

        {/* Social Icons */}
        <div className="footer__social">
          <a href="https://linkedin.com/in/saikumar-chedrupu-463630226" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer__icon" />
          </a>
          <a href="https://github.com/saikumarNetha98" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer__icon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer__icon" />
          </a>
          <a href="mailto:saikumarchedrupu@gmail.com">
            <FaEnvelope className="footer__icon" />
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p>© {currentYear} Saikumar Chedrupu. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
