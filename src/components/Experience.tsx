import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2 } from 'lucide-react';

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  description, 
  icon: Icon,
  delay 
}: { 
  title: string;
  company: string;
  period: string;
  description: string;
  icon: any;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-950 hover:to-purple-950 
      transition-all duration-100 shadow-lg shadow-black/20 group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-100">
          <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-100" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors duration-100">{title}</h3>
          <p className="text-gray-300 font-medium mb-1">{company}</p>
          <p className="text-sm text-gray-400 mb-3">{period}</p>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Apps Technologies (PVT) LTD",
      period: "August 2024 - Present",
      description: "Contributing to enterprise-level software solutions, focusing on full-stack development with modern technologies. Collaborating with senior developers to implement robust features and maintain high-quality code standards.",
      icon: Briefcase
    },
    {
      title: "Co-Founder",
      company: "CodeMaxed",
      period: "October 2024 - Present",
      description: "Leading the technical vision and development of innovative software solutions. Architecting scalable applications and mentoring junior developers while fostering a culture of continuous learning and excellence.",
      icon: Code2
    }
  ];

  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.title}
            {...exp}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;