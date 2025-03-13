import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  link, 
  delay 
}: { 
  title: string;
  description: string;
  tech: string[];
  link: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.13 }}}
      className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-950 hover:to-purple-950 transition-all duration-100"
    >
      <h3 className="text-2xl font-bold text-blue-400 mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm">
            {t}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-400 hover:text-blue-300"
      >
        View Project <ExternalLink className="ml-2 w-4 h-4" />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Connections',
      description: 'A platform designed to go beyond traditional networking, helping students form meaningful relationships, interact seamlessly, and stay updated effortlessly.',
      tech: ['Flutter', 'FastAPI', 'MySQL', 'Python', 'WebRTC'],
      link: 'https://github.com/VihaFernando'
    },
    {
      title: 'SignLearning',
      description: 'A web-based platform for deaf children to learn sign language through interactive games, featuring object detection and image classification.',
      tech: ['React.js', 'Node.js', 'Express.js', 'TensorFlow'],
      link: 'https://github.com/VihaFernando/Sign_Learning'
    },
    {
      title: 'IMS',
      description: 'A smart intern management system with AI-driven recommendations for streamlined recruitment, training, and performance tracking.',
      tech: ['React.js', 'Node.js', 'TensorFlow', 'PostgreSQL'],
      link: 'https://github.com/VihaFernando/'
    },
    {
      title: 'StandBy',
      description: 'An Android app displaying real-time Spotify music updates with seamless transitions between clock and music interface.',
      tech: ['Flutter', 'Android Development'],
      link: 'https://github.com/VihaFernando'
    }
  ];

  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
};

export default Projects;