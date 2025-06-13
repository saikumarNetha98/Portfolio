import React from 'react';
import '../styles/Skills.css';
import { skills } from '../constants/skills';
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiPostgresql, SiMongodb } from 'react-icons/si';

const skillIcons = {
    React: <FaReact />,
    'Next.js': <SiNextdotjs />,
    'Node.js': <FaNodeJs />,
    Java: <FaJava />,
    PostgreSQL: <SiPostgresql />,
    MySQL: <FaDatabase />,
    MongoDB: <SiMongodb />
};

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills__container">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill__card">
                        <div className="skill__icon">
                            {skillIcons[skill.name] || <FaCode />}
                        </div>
                        <h3>{skill.name}</h3>
                        <div className="skill__level">
                            <div
                                className="skill__level__bar"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;