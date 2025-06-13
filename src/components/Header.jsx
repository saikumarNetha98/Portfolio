import React from 'react';
import '../styles/Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header__content">
        <h1 className="header__name">Saikumar Chedrupu</h1>
        <h2 className="header__role">Full Stack Developer</h2>

        <div className="header__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="header__social">
          <a href="https://www.linkedin.com/in/saikumar-chedrupu-463630226/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/saikumarNetha98" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
