import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';

import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <CssBaseline /> {/* Normalize styles across browsers */}
      <Header />

      <Box component="main" sx={{ mt: '80px', pb: 4 }}>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </Box>

      <Footer />
    </Router>
  );
}

export default App;
