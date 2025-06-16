import React from 'react';
import { education } from '../constants/education';
import '../styles/Education.css';
import Tirumala from '../assets/Tirumala-Engineering-College.jpg';

const Education = () => {
  // Log the education array to debug
  console.log('Education data:', education);

  // Check if education array is empty or undefined
  if (!education || education.length === 0) {
    return (
      <section id="education" className="education">
        <h2>Education</h2>
        <p>No education data available.</p>
      </section>
    );
  }

  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education__container">

        {education.map((item) => (
          <div
            key={item.id}
            className="education__card"
            style={{ backgroundImage: `url(${item.background})` }}
            onError={(e) => console.log(`Failed to load image: ${item.background}`)}
          >
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