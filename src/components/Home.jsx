import React from 'react';
import { Container, Box } from '@mui/material';

import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box component="section" id="about" sx={{ py: 5 }}>
        <About />
      </Box>
      <Box component="section" id="skills" sx={{ py: 5 }}>
        <Skills />
      </Box>
      <Box component="section" id="projects" sx={{ py: 5 }}>
        <Projects />
      </Box>
      <Box component="section" id="education" sx={{ py: 5 }}>
        <Education />
      </Box>
      <Box component="section" id="contact" sx={{ py: 5 }}>
        <Contact />
      </Box>
    </Container>
  );
};

export default Home;
