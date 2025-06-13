import React from 'react';
import { education } from '../constants/education';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education__container">
        {education.map((item) => (
          <div key={item.id} className="education__card" style={{ backgroundImage: `url(${item.background})` }}>
            <div className="education__overlay">
              <div className="education__details">
                <h3>{item.title}</h3>
                <p>{item.duration}</p>
                <span>{item.degree}</span>
                <small>{item.location}</small>
              </div>
            </div>
            <div className="education__circle">
              {item.percentage}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
