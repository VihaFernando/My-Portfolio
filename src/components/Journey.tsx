import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, event, delay }: { year: string; event: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center mb-8"
    >
      <div className="w-24 text-blue-400 font-bold">{year}</div>
      <div className="w-4 h-4 rounded-full bg-blue-400 mx-4" />
      <div className="flex-1 p-4 rounded-lg bg-gray-800/50">
        {event}
      </div>
    </motion.div>
  );
};

const Journey = () => {
  const timeline = [
    { year: '2021', event: 'Completed G.C.E O/L at Central College - Piliyandala' },
    { year: '2022', event: 'Completed Foundation in Higher Education at Informatics Institute of Technology' },
    { year: '2023', event: 'Completed First Year of Bachelors at University of Westminster' },
    { year: '2024', event: 'Started working as a Software Engineering Intern at Apps Technologies' },
    { year: '2025', event: 'Building CodeMaxed and providing software solutions' }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
      >
        My Journey
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {timeline.map((item, index) => (
          <TimelineItem
            key={item.year}
            year={item.year}
            event={item.event}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default Journey