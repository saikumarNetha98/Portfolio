import React from 'react';
import '../styles/Projects.css';
import { projects } from '../constants/projects';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Projects</h2>
            <div className="projects__container">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project__card"
                        data-description={project.description}
                    >
                        <div className="project__image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project__content">
                            <h3>{project.title}</h3>
                            <div className="project__tags">
                                {project.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                            <div className="project__links">
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                                <a href={project.code} target="_blank" rel="noopener noreferrer">
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
