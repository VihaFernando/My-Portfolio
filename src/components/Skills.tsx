import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Database, Palette, Cpu, Layout, Server, Code2, Share2 } from 'lucide-react';

// Keep your existing imports
import ReactIcon from '../icons/react.png';
import FlutterIcon from '../icons/flutter.png';
import ReactNativeIcon from '../icons/react-native.png';
import HTMLIcon from '../icons/html.png';
import CSSIcon from '../icons/css.png';
import JavaScriptIcon from '../icons/javascript.png';
import AngularIcon from '../icons/angular.png';
import AndroidIcon from '../icons/android.png';
import NodeJsIcon from '../icons/nodejs.png';
import JavaIcon from '../icons/java.png';
import DartIcon from '../icons/dart.png';
import PythonIcon from '../icons/python.png';
import SpringBootIcon from '../icons/spring-boot.png';
import ExpressJsIcon from '../icons/expressjs.png';
import FastAPIIcon from '../icons/fastapi.png';
import FlaskIcon from '../icons/flask.png';
import FirebaseIcon from '../icons/firebase.png';
import MySQLIcon from '../icons/mysql.png';
import SQLiteIcon from '../icons/sqlite.png';
import MongoDBIcon from '../icons/mongodb.png';
import PostgreSQLIcon from '../icons/postgresql.png';
import FigmaIcon from '../icons/figma.png';
import AdobeXDIcon from '../icons/adobe-xd.png';
import PhotoshopIcon from '../icons/photoshop.png';
import IllustratorIcon from '../icons/illustrator.png';
import NextJsIcon from '../icons/nextjs.png';
import AstroIcon from '../icons/astro.png';
import LaravelIcon from '../icons/laravel.png';
import TailwindIcon from '../icons/tailwind.png';
import NestJsIcon from '../icons/nestjs.png';

// --- DATA STRUCTURE ---
const skillCategories = [
  {
    title: "Frontend Engineering",
    description: "Building immersive, pixel-perfect user interfaces.",
    icon: <Layout className="w-5 h-5 text-blue-400" />,
    skills: [
      { name: 'React', icon: ReactIcon },
      { name: 'Next.js', icon: NextJsIcon },
      { name: 'Flutter', icon: FlutterIcon },
      { name: 'React Native', icon: ReactNativeIcon },
      { name: 'TypeScript', icon: JavaScriptIcon }, // Assuming JS icon for TS or JS
      { name: 'HTML5', icon: HTMLIcon },
      { name: 'Tailwind', icon: TailwindIcon },
      { name: 'Angular', icon: AngularIcon },
      { name: 'Astro', icon: AstroIcon },
      { name: 'Android', icon: AndroidIcon },
    ],
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Backend Architecture",
    description: "Robust, scalable server-side systems.",
    icon: <Server className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: 'Node.js', icon: NodeJsIcon },
      { name: 'Java', icon: JavaIcon },
      { name: 'Python', icon: PythonIcon },
      { name: 'Spring Boot', icon: SpringBootIcon },
      { name: 'Express', icon: ExpressJsIcon },
      { name: 'FastAPI', icon: FastAPIIcon },
      { name: 'Laravel', icon: LaravelIcon },
      { name: 'NestJS', icon: NestJsIcon },
    ],
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "Database & Cloud",
    description: "Data persistence and reliable infrastructure.",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    skills: [
      { name: 'PostgreSQL', icon: PostgreSQLIcon },
      { name: 'MongoDB', icon: MongoDBIcon },
      { name: 'Firebase', icon: FirebaseIcon },
      { name: 'MySQL', icon: MySQLIcon },
      { name: 'SQLite', icon: SQLiteIcon },
    ],
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    title: "UI/UX Design",
    description: "Translating concepts into visual reality.",
    icon: <Palette className="w-5 h-5 text-pink-400" />,
    skills: [
      { name: 'Figma', icon: FigmaIcon },
      { name: 'Adobe XD', icon: AdobeXDIcon },
      { name: 'Photoshop', icon: PhotoshopIcon },
      { name: 'Illustrator', icon: IllustratorIcon },
    ],
    colSpan: "col-span-1 md:col-span-2",
  },
];

const softSkills = [
  "Problem Solving", "Strategic Thinking", "Agile Methodology",
  "Team Leadership", "UI/UX Principles", "System Architecture",
  "Communication", "Adaptability", "Time Management"
];

// --- COMPONENTS ---

interface Skill {
  name: string;
  icon: string;
}

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: Skill[];
  colSpan: string;
  delay: number;
}

const BentoCard = ({ title, description, icon, skills, colSpan, delay }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`${colSpan} group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] transition-colors duration-500`}
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-full bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-white tracking-tight">{title}</h3>
        </div>

        <p className="text-sm text-neutral-400 mb-8 max-w-[90%] font-light">{description}</p>

        {/* Skills Grid - This uses your icons */}
        <div className="mt-auto grid grid-cols-4 sm:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 group/icon">
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group-hover/icon:bg-white/10 group-hover/icon:scale-110 group-hover/icon:border-white/20">
                {/* Image: Grayscale by default, Color on Hover */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 md:w-6 md:h-6 object-contain filter grayscale opacity-70 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all duration-300"
                />
              </div>
              <span className="text-[10px] md:text-xs text-neutral-500 font-medium group-hover/icon:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const Skills = () => {
  return (
    <section className="relative py-12 md:py-16 bg-[#050505] overflow-hidden" id="about">

      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6 pt-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]"
          >
            My <span className="font-serif italic text-neutral-400">Technical</span> <br />
            Proficiency.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-sm text-sm md:text-base font-light leading-relaxed"
          >
            A curated stack of modern technologies I use to build robust, scalable, and beautiful digital experiences.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">
          {skillCategories.map((category, idx) => (
            <BentoCard
              key={idx}
              {...category}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Modern "Tag Cluster" Soft Skills Section */}
        <div className="mt-10 md:mt-14 border-t border-white/10 pt-6 md:pt-8 flex flex-col items-center">

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8 text-center"
          >
            Core Competencies
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="
                    group relative px-5 py-2.5 rounded-full 
                    bg-white/[0.02] border border-white/[0.08] 
                    hover:bg-white/[0.06] hover:border-white/20
                    transition-all duration-300 cursor-default
                  "
              >
                <span className="relative z-10 text-xs md:text-sm text-neutral-400 font-light tracking-wide group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
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

export default Skills;