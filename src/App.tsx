import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Journey from './components/Journey';
import Contact from './components/Contact';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white relative w-screen overflow-x-hidden">
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-950"
        >
          <Skills />
          <Projects />
          <Experience />
          <Journey />
          <Contact />
        </motion.div>
      </div>
    </div>
  );
}

export default App;