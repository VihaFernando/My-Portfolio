import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  const { scrollY } = useScroll();
  
  const introOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const introScale = useTransform(scrollY, [0, 800], [1, 2]);
  const introY = useTransform(scrollY, [0, 800], [0, -200]);
  
  const aboutOpacity = useTransform(scrollY, [600, 1000, 1400], [0, 1, 0]);
  const aboutScale = useTransform(scrollY, [600, 1000, 1400], [0.8, 1, 1.5]);
  const aboutY = useTransform(scrollY, [600, 1000, 1400], [100, 0, -100]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated floating background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Larger, slower-moving blobs */}
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full blur-[200px] opacity-20"
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['-10%', '10%', '-10%'],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            background: 'linear-gradient(to right, #4F46E5, #7C3AED)',
            willChange: 'transform',
          }}
        />
        <motion.div
          className="absolute w-[900px] h-[900px] rounded-full blur-[180px] opacity-15"
          animate={{
            x: ['10%', '-10%', '10%'],
            y: ['5%', '-5%', '5%'],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            background: 'linear-gradient(to right, #EC4899, #8B5CF6)',
            willChange: 'transform',
          }}
        />
      </div>

      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        {/* Intro Content */}
        <motion.div
          style={{ 
            opacity: introOpacity,
            scale: introScale,
            y: introY,
            willChange: 'opacity, transform',
          }}
          className="absolute text-center z-10"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-light text-blue-400"
          >
            <TypewriterText text="Hello, I'm" />
          </motion.h2>

          <h1 className="text-6xl md:text-8xl font-bold mt-4">
            <span className="bg-gradient-to-r from-green-400 to-magenta-500 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Vihanga Fernando
            </span>
          </h1>
          
          <h3 className="text-3xl md:text-4xl text-gray-300 mt-4">
            Full Stack Developer
          </h3>
        </motion.div>

        {/* About Content */}
        <motion.div
          style={{ 
            opacity: aboutOpacity,
            scale: aboutScale,
            y: aboutY,
            willChange: 'opacity, transform',
          }}
          className="absolute text-center z-20 max-w-2xl mx-auto px-4"
        >
          <p className="text-gray-400 leading-relaxed text-2xl md:text-xl">
            Building CodeMaxed, crafting innovative software solutions, and honing my skills at Apps Technologies. 
            I'm passionate about using technology to solve real-world challenges, collaborating with talented people, 
            and constantly pushing myself to grow. Let's connect and turn ideas into reality! 🚀
          </p>
          
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold 
              transform hover:shadow-lg hover:shadow-blue-500/25
              transition-all duration-300 ease-out
              relative overflow-hidden group
              pointer-events-auto"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Spacer div to enable scrolling */}
      <div style={{ height: '200vh' }} />
    </div>
  );
};

export default Hero;