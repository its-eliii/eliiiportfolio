import './App.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Footer from './components/Footer';
import Education from './sections/Education';
import Experience from './sections/Experience';

function App() {
  return (
    <>
      <Navbar />
      <main> 
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Footer />
      </main>
    </>
  );
}

export default App;