import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education'
// other components

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
