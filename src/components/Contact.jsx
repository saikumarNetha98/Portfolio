import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope,FaPhone} from 'react-icons/fa';
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact__container">
        <form className="contact__form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact__info">
          <div className="contact__item">
            <FaEnvelope />
            <span>saikumarchedrupu@gmail.com</span>
          </div>
          <div className="contact__item">
            <FaPhone />
            <span>+91 9000336132</span>
          </div>
          <div className="contact__social">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;