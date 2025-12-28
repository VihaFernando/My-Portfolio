import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'Connections',
    category: 'Social Platform',
    description: 'A platform designed to go beyond traditional networking, helping students form meaningful relationships.',
    tech: ['Flutter', 'FastAPI', 'WebRTC'],
    link: 'https://github.com/VihaFernando',
    // Gradient represents the "Vibe" of the project
    gradient: "from-violet-600/20 via-indigo-600/20 to-slate-900/0",
    color: "bg-indigo-500"
  },
  {
    title: 'SignLearning',
    category: 'EdTech / Accessibility',
    description: 'Web platform for deaf children to learn sign language via interactive games and object detection.',
    tech: ['React', 'TensorFlow', 'Node.js'],
    link: 'https://github.com/VihaFernando/Sign_Learning',
    gradient: "from-emerald-600/20 via-teal-600/20 to-slate-900/0",
    color: "bg-emerald-500"
  },
  {
    title: 'IMS',
    category: 'Enterprise System',
    description: 'Smart intern management system with AI-driven recommendations for recruitment and tracking.',
    tech: ['React', 'PostgreSQL', 'AI'],
    link: 'https://github.com/VihaFernando/',
    gradient: "from-blue-600/20 via-cyan-600/20 to-slate-900/0",
    color: "bg-blue-500"
  },
  {
    title: 'StandBy',
    category: 'Mobile Application',
    description: 'Android app displaying real-time Spotify music updates with seamless clock transitions.',
    tech: ['Flutter', 'Android', 'API'],
    link: 'https://github.com/VihaFernando',
    gradient: "from-orange-600/20 via-rose-600/20 to-slate-900/0",
    color: "bg-orange-500"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A]"
    >
      {/* 1. The Visual "Screen" Area (Top Half) */}
      <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-neutral-900">

        {/* Abstract Gradient Mesh (Acts as placeholder image) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />

        {/* Grain Overlay on Image */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        {/* Floating Tag */}
        <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 z-10">
          <span className="text-xs font-medium text-white/80 tracking-wide uppercase">{project.category}</span>
        </div>

        {/* Action Button (Appears on Hover) */}
        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20 shadow-lg shadow-white/20">
          <ArrowUpRight className="w-5 h-5 text-black" />
        </div>
      </div>

      {/* 2. The Content Area (Bottom Half) */}
      <div className="flex-1 p-8 flex flex-col justify-between relative z-10 bg-[#0A0A0A]">
        <div>
          {/* Color Dot + Title */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-2 h-2 rounded-full ${project.color} shadow-[0_0_12px_rgba(255,255,255,0.3)]`} />
            <h3 className="text-2xl font-semibold text-white tracking-tight">{project.title}</h3>
          </div>

          <p className="text-neutral-400 leading-relaxed font-light mb-8 text-sm sm:text-base">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 rounded-md text-[11px] font-medium text-neutral-400 bg-white/[0.03] border border-white/[0.08] uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-[2rem] border border-white/0 group-hover:border-white/10 transition-colors duration-300 pointer-events-none" />
    </motion.a>
  );
};

const Projects = () => {
  return (
    <section className="relative py-12 md:py-16 bg-[#050505] text-white overflow-hidden" id="work">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]"
          >
            Selected <span className="font-serif italic text-neutral-400">Works</span> <br />
            & Experiments.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="text-sm font-medium">View GitHub</span>
            <Github className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Section Divider - Bottom */}
        <div className="mt-12 md:mt-18 relative">
          {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-sm" /> */}
        </div>

      </div>
    </section>
  );
};

export default Projects;