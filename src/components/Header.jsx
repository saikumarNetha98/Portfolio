import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/saikumar-photo1.jpg';

const Header = () => {
  const location = useLocation();

  const getLinkClass = (path) => (
    location.pathname === path ? 'active' : ''
  );

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
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>About</Link>
          <Link to="/skills" className={getLinkClass('/skills')}>Skills</Link>
          <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
          <Link to="/education" className={getLinkClass('/education')}>Education</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
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
