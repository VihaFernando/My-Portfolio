import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';

const ContactItem = ({ icon: Icon, text, link }: { icon: any; text: string; link?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger every time the element is in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 
          hover:from-blue-900 hover:to-purple-900 transition-all duration-500
          transform hover:shadow-lg hover:shadow-blue-500/10"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
              <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
            <div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{text}</p>
            </div>
          </div>
        </a>
      ) : (
        <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 
        hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-500
        transform hover:shadow-lg hover:shadow-blue-500/10">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
              <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
            <div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{text}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Contact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger every time the element is in view

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Get in Touch
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-4"
        >
          <ContactItem icon={Phone} text="+94 70 166 8976" />
          <ContactItem icon={Mail} text="nethminavihanga275@gmail.com" />
          <ContactItem icon={MapPin} text="Colombo, Sri Lanka" />
          <ContactItem
            icon={Linkedin}
            text="LinkedIn"
            link="https://www.linkedin.com/in/vihanga-fernando-590522255"
          />
          <ContactItem
            icon={Github}
            text="GitHub"
            link="https://github.com/VihaFernando"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;