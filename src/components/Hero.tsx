import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";

// --- COMPONENTS ---

const DynamicIsland = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed top-6 z-50 flex items-center gap-3 sm:gap-4 px-2 py-2 sm:px-6 sm:py-3 rounded-full border border-white/[0.08] bg-black/50 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 hover:bg-black/80"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 pl-2 sm:pl-0">
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
          <span className="text-xs sm:text-sm font-medium text-white tracking-wide mr-2">Vihanga.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6 px-4 border-l border-white/10 h-4">
          {['Work', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs text-white/60 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 text-white/70 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>

        {/* Animated Hire Button */}
        <motion.a
          href="#contact"
          className="hidden sm:flex h-8 items-center justify-center rounded-full bg-white text-black overflow-hidden relative cursor-pointer"
          animate={{ width: isHovered ? 90 : 36 }}
          transition={{ duration: 0.3, ease: "circOut" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowUpRight size={16} className={`transition-all duration-300 ${isHovered ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} />
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap pl-0 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
            Hire Me
          </span>
        </motion.a>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 left-4 right-4 z-40 p-4 bg-neutral-900/90 backdrop-blur-2xl rounded-2xl border border-white/10 sm:hidden flex flex-col gap-4 text-center"
          >
            {['Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                onClick={() => setIsMobileMenuOpen(false)}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-white/80 py-2 border-b border-white/5 last:border-none"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- MAIN HERO ---

const Hero = () => {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center bg-[#050505] text-white selection:bg-white/20 overflow-hidden">
      
      {/* 1. CINEMATIC BACKGROUND */}
      
      {/* Top Spotlight (White/Blue) */}
      <div className="absolute top-[-20%] left-0 right-0 mx-auto w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[120px] pointer-events-none" />
      
      {/* Bottom Right Glow (Indigo) */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/[0.06] blur-[100px] pointer-events-none" />
      
      {/* Grain Texture (Essential for the 'Film' look) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />


      {/* 2. NAVIGATION */}
      <div className="absolute top-0 w-full flex justify-center pt-6 z-50">
        <DynamicIsland />
      </div>


      {/* 3. MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-12 md:mt-0 pb-24 md:pb-0">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[11px] font-medium text-neutral-400 uppercase tracking-widest">Available for Work</span>
        </motion.div>

        {/* Title Group */}
        <div className="mb-8 md:mb-12 space-y-2 md:space-y-4">
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-2xl md:text-4xl text-neutral-400 font-light tracking-tight"
          >
            Hello, I'm Vihanga.
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="
              text-[38px] sm:text-[52px] md:text-[64px]
              leading-[1.05]
              tracking-tight
              text-neutral-200
              font-light
            "
          >
            <span className="font-sans text-neutral-300">Crafting</span>{" "}
            <span className="
                font-serif italic font-light
                text-transparent bg-clip-text
                bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-500
            ">
              Intelligent
            </span>
            <br />
            <span className="
                font-serif italic font-light
                text-transparent bg-clip-text
                bg-gradient-to-b from-white via-neutral-200 to-neutral-400
            ">
              Digital Solutions.
            </span>
          </motion.h1>

        </div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-lg text-neutral-400 text-sm md:text-base leading-relaxed mb-10 font-light"
        >
          A Full Stack Developer focusing on minimal design and robust architecture. 
          Currently refining systems at <span className="text-white border-b border-white/20">Apps Technologies</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="
            flex flex-col items-center gap-3
            w-full max-w-[240px]
          "
        >
          <a 
            href="#projects" 
            className="
              w-full
              h-9 sm:h-auto
              px-4 py-2
              rounded-full bg-white text-black
              text-[11px] font-medium
              flex items-center justify-center gap-1.5
              active:scale-95 transition-all
              sm:px-8 sm:py-3 sm:text-sm
            "
          >
            View my Work
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>

          <a
            href="#contact"
            className="
              w-full
              h-9 sm:h-auto
              px-4 py-2
              rounded-full bg-white/5 border border-white/10
              text-[11px] text-neutral-300
              flex items-center justify-center gap-1.5
              active:scale-95 transition-all
              hover:bg-white/10
              sm:px-6 sm:py-3 sm:text-sm
            "
          >
            <Mail className="w-3 h-3" />
            Let's Talk
          </a>
        </motion.div>
      </div>


      {/* 4. FOOTER STATS */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.2, duration: 1 }}
         className="absolute bottom-6 w-full max-w-6xl px-6"
      >
        <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-medium tracking-wide">
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            <span>Based in Sri Lanka</span>
          </div>

          <div className="flex gap-8">
             <div><span className="text-white block md:inline">3+</span> Years Exp.</div>
             <div><span className="text-white block md:inline">20+</span> Projects</div>
             <div><span className="text-white block md:inline">100%</span> Satisfaction</div>
          </div>
          
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;