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

// Function to generate random values for bubble animation
const generateRandomValues = () => {
  const x = Math.random() * 100 - 50; // Random horizontal movement (-50% to 50%)
  const y = Math.random() * 100 - 50; // Random vertical movement (-50% to 50%)
  const duration = Math.random() * 20 + 20; // Random duration (20s to 40s)
  const delay = Math.random() * 5; // Random delay (0s to 5s)
  const size = Math.random() * 300 + 200; // Random size (100px to 300px)
  return { x, y, duration, delay, size };
};

const Hero = () => {
  const { scrollY } = useScroll();

  const introOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const introScale = useTransform(scrollY, [0, 800], [1, 2]);
  const introY = useTransform(scrollY, [0, 800], [0, -200]);

  const aboutOpacity = useTransform(scrollY, [600, 1000, 1400], [0, 1, 0]);
  const aboutScale = useTransform(scrollY, [600, 1000, 1400], [0.8, 1, 1.5]);
  const aboutY = useTransform(scrollY, [600, 1000, 1400], [100, 0, -100]);

  // Array of colors for the bubbles (brighter and more vibrant)
  const bubbleColors = [
    'rgba(255, 0, 0, 0.4)', // Red
    'rgba(0, 255, 0, 0.4)', // Green
    'rgba(0, 0, 255, 0.4)', // Blue
    'rgba(255, 255, 0, 0.4)', // Yellow
    'rgba(255, 0, 255, 0.4)', // Magenta
    'rgba(0, 255, 255, 0.4)', // Cyan
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => { // Reduced number of bubbles for mobile optimization
          const { x, y, duration, delay, size } = generateRandomValues();
          const color = bubbleColors[index % bubbleColors.length]; // Cycle through colors

          return (
            <motion.div
              key={index}
              className="absolute rounded-full blur-[50px] opacity-20" // Reduced blur and opacity for better performance
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                willChange: 'transform',
                left: `${Math.random() * 100}%`, // Random horizontal position
                top: `${Math.random() * 50}%`, // Random vertical position (mostly in the upper half)
              }}
              animate={{
                x: [`${x}%`, `${-x}%`, `${x}%`],
                y: [`${y}%`, `${-y}%`, `${y}%`],
              }}
              transition={{
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'mirror',
                delay: delay,
              }}
            />
          );
        })}
      </div>

      {/* Gradient overlay for seamless transition */}
      <div
        className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent pointer-events-none" // Adjusted gradient for smoother transition
        style={{ zIndex: 30 }}
      />

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
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
            Building CodeMaxed, crafting innovative software solutions, and honing my skills at Apps
            Technologies. I'm passionate about using technology to solve real-world challenges,
            collaborating with talented people, and constantly pushing myself to grow. Let's connect
            and turn ideas into reality! �
          </p>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
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
      <div style={{ height: '300vh' }} />
    </div>
  );
};

export default Hero;