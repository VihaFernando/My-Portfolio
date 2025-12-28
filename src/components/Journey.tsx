import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Rocket, Code, Building2, ArrowRight } from 'lucide-react';

const timeline = [
  {
    year: '2025',
    title: 'The Next Chapter',
    event: 'Co-Founded PilotUP to architect and deliver scalable, innovative software solutions for modern businesses.',
    icon: Rocket,
    active: true // Highlights this as the current/major milestone
  },
  {
    year: '2024',
    title: 'Professional Start',
    event: 'Joined Apps Technologies as a Software Engineering Intern, contributing to enterprise-grade applications.',
    icon: Code,
    active: false
  },
  {
    year: '2023',
    title: 'Higher Education',
    event: 'Completed First Year of Bachelors at University of Westminster, focusing on core computer science principles.',
    icon: Building2,
    active: false
  },
  {
    year: '2022',
    title: 'Foundation',
    event: 'Completed Foundation in Higher Education at Informatics Institute of Technology (IIT) with distinction.',
    icon: GraduationCap,
    active: false
  },
  {
    year: '2021',
    title: 'Secondary Education',
    event: 'Successfully completed G.C.E O/L at Central College - Piliyandala.',
    icon: School,
    active: false
  },
];

const TimelineItem = ({ item, index }: { item: typeof timeline[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 sm:gap-12 group"
    >
      {/* Left Column: The Year (Editorial Style) */}
      <div className="flex-none w-16 sm:w-24 pt-2 text-right">
        <span className={`text-2xl sm:text-3xl font-serif italic tracking-tight ${item.active ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'} transition-colors duration-300`}>
          {item.year}
        </span>
      </div>

      {/* Center Column: The Line & Node */}
      <div className="relative flex flex-col items-center">
        {/* The Node */}
        <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-[#0A0A0A] transition-all duration-300 group-hover:scale-110 group-hover:border-white/30`}>
          <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-blue-500 animate-pulse' : 'bg-neutral-600 group-hover:bg-neutral-400'}`} />
        </div>

        {/* The Line (Gradient Fade) */}
        {index !== timeline.length - 1 && (
          <div className="absolute top-8 bottom-[-2rem] w-px bg-gradient-to-b from-white/10 to-transparent" />
        )}
      </div>

      {/* Right Column: The Content Card */}
      <div className="flex-1 pb-12">
        <div className="group/card p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">

          <div className="flex items-center gap-3 mb-2">
            <item.icon className={`w-4 h-4 ${item.active ? 'text-blue-400' : 'text-neutral-500'} transition-colors`} />
            <span className={`text-xs font-medium uppercase tracking-wider ${item.active ? 'text-blue-400' : 'text-neutral-500'}`}>
              {item.title}
            </span>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            {item.event}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Journey = () => {
  return (
    <section className="relative py-12 md:py-16 bg-[#050505] overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tight"
          >
            My <span className="font-serif italic text-neutral-500">Milestones</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 mt-4 text-sm md:text-base font-light max-w-lg"
          >
            A chronological overview of my educational background and key career turning points.
          </motion.p>
        </div>

        {/* Timeline List */}
        <div className="relative">
          {timeline.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>

        {/* Section Divider - Bottom */}
        <div className="mt-10 md:mt-14 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-sm" />
        </div>

      </div>
    </section>
  );
};

export default Journey;