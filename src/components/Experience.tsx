import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Code2, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: "Co-Founder",
    company: "PilotUP",
    period: "November 2025 - Present",
    current: true,
    description: [
      "Building PilotUP, a platform for creating autonomous AI employees that run and automate core business operations, helping founders to scale and operate faster and more efficiently."
    ],
    icon: Code2
  },
  {
    title: "Associate Software Engineer (Technical Lead)",
    company: "Apps Technologies (Pvt) Ltd",
    period: "August 2025 - Present",
    current: true,
    description: [
      "Leading development across the team for end-to-end academic processes, from student registration to convocation.",
      "Designing core system modules including examinations, grading engines, and administrative workflows.",
      "Mentoring junior developers and conducting technical interviews for software engineering recruits."
    ],
    icon: Users
  },
  {
    title: "Software Developer Intern",
    company: "Apps Technologies (Pvt) Ltd",
    period: "August 2024 - August 2025",
    current: false,
    description: [
      "Contributed to enterprise-level software solutions, focusing on full-stack development.",
      "Collaborated with senior developers to implement robust features and maintain high-quality code standards."
    ],
    icon: Briefcase
  }
];

const ExperienceItem = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 sm:pl-12 py-6 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-px bg-white/10 group-last:bottom-auto group-last:h-6" />

      {/* Timeline Dot / Icon */}
      <div className={`absolute left-0 sm:left-1 top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 ${exp.current ? 'border-blue-400 bg-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'border-neutral-600 bg-neutral-900'} z-10 transition-colors duration-300 group-hover:border-white`} />

      {/* Content Card */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start rounded-2xl p-5 sm:p-6 bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-sm">

        {/* Icon Box (Hidden on tiny screens, visible on md) */}
        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
          <exp.icon className="w-5 h-5" />
        </div>

        <div className="flex-1 space-y-2">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">{exp.title}</h3>
              <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
            </div>

            {/* Date Badge */}
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${exp.current ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' : 'bg-white/5 border-white/10 text-neutral-400'} w-fit`}>
              <Calendar className="w-3 h-3" />
              {exp.period}
            </div>
          </div>

          {/* Description List */}
          <ul className="mt-4 space-y-2">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-neutral-600 flex-shrink-0 group-hover:text-blue-500/50 transition-colors" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section className="relative py-12 md:py-16 bg-[#050505] overflow-hidden" id="experience">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-40 left-[-100px] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-14 pt-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight"
          >
            Professional <span className="font-serif italic text-neutral-500">Journey</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm md:text-base font-light"
          >
            A timeline of my career growth, leadership, and technical contributions.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>

        {/* Section Divider - Bottom */}
        <div className="mt-24 relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-sm" />
        </div>

      </div>
    </section>
  );
};

export default Experience;