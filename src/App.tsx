// import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <AnimatedBackground />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements/>
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;