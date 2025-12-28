import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Journey from './components/Journey';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      
      {/* Global Grain Texture Overlay 
          This adds a subtle film noise over the entire website for that "premium" feel 
      */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />

      <div className="relative z-10">
        {/* Components stack vertically. 
            Note: We removed the max-w-7xl wrapper here so sections 
            can use full-width backgrounds (like the glow effects). 
            The components themselves handle their inner container widths. 
        */}
        
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Journey />
        <Contact />

        {/* Optional: Simple Footer (if not integrated into Contact) */}
        <footer className="py-6 text-center text-neutral-600 text-xs">
          <p>Designed & Built by Vihanga Fernando</p>
        </footer>
      </div>
    </div>
  );
}

export default App;