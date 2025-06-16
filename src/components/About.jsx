import React from 'react';
import '../styles/About.css';
import saikumarPhoto from '../assets/saikumar-photo1.jpg';
const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__container">

                <div className="about__image">
                    <img src={saikumarPhoto} alt="Saikumar Chedrupu" />
                </div>

                <div className="about__content">
                    <h2>About Me</h2>
                    <p>
                        Full Stack Developer with 3+ years of experience in Node.js and Next.js development.
                        Proven ability to design and implement scalable web solutions with strong expertise
                        in database management (MySQL, PostgreSQL).
                    </p>
                    <div className="about__contact">
                        <p><strong>Email:</strong> saikumarchedrupu@gmail.cosm</p>
                        <p><strong>Phone:</strong> +91 9000336132</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;