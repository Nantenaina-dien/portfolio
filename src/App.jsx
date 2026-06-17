import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 border-t border-gray-100 dark:border-gray-800 relative z-10 glass">
        <p>© {new Date().getFullYear()} R. Nantenaina Jean de Dieu. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
