import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">

        <div className="footer__social">
          <a
            href="https://linkedin.com/in/saikumar-chedrupu-463630226"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/saikumarNetha98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:saikumarchedrupu@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="footer__text">
          &copy; {currentYear} Saikumar Chedrupu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
