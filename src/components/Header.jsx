import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/saikumar-photo1.jpg'; // Use your actual logo path

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        {/* Left: Logo and Name */}
        <div className="header__left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="site-name">Saikumar Chedrupu</span>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="header__nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right: Auth Buttons */}
        <div className="header__auth">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn btn--outline">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
