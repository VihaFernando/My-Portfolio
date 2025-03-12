import React from 'react';
import { motion, useInView } from 'framer-motion';

// Import your custom icons
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
import ProblemSolvingIcon from '../icons/problem-solving.png';
import AdaptabilityIcon from '../icons/adaptability.png';
import TeamworkIcon from '../icons/teamwork.png';
import TimeManagementIcon from '../icons/time-management.png';
import CommunicationIcon from '../icons/communication.png';
import CreativityIcon from '../icons/creativity.png';

const SkillCard = ({ icon, name, delay }: { icon: string; name: string; delay: number }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger every time the element is in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: delay,
      }}
      whileHover={{ scale: 1.0, y: -5, transition: { duration: 0.13 } }} // Instant hover effect
      whileTap={{ scale: 0.92 }}
      className="p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-900 hover:to-purple-900 transition-all duration-150 cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <img src={icon} alt={name} className="w-6 h-6" />
        <span className="text-gray-200">{name}</span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: 'React', icon: ReactIcon },
    { name: 'Flutter', icon: FlutterIcon },
    { name: 'React Native', icon: ReactNativeIcon },
    { name: 'HTML', icon: HTMLIcon },
    { name: 'CSS', icon: CSSIcon },
    { name: 'JavaScript', icon: JavaScriptIcon },
    { name: 'Angular', icon: AngularIcon },
    { name: 'Android', icon: AndroidIcon },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: NodeJsIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'Dart', icon: DartIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'Spring Boot', icon: SpringBootIcon },
    { name: 'Express.js', icon: ExpressJsIcon },
    { name: 'FastAPI', icon: FastAPIIcon },
    { name: 'Flask', icon: FlaskIcon },
  ];

  const databaseSkills = [
    { name: 'Firebase', icon: FirebaseIcon },
    { name: 'MySQL', icon: MySQLIcon },
    { name: 'SQLite', icon: SQLiteIcon },
    { name: 'MongoDB', icon: MongoDBIcon },
    { name: 'PostgreSQL', icon: PostgreSQLIcon },
  ];

  const designSkills = [
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Adobe XD', icon: AdobeXDIcon },
    { name: 'Photoshop', icon: PhotoshopIcon },
    { name: 'Illustrator', icon: IllustratorIcon },
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: ProblemSolvingIcon },
    { name: 'Adaptability', icon: AdaptabilityIcon },
    { name: 'Teamwork', icon: TeamworkIcon },
    { name: 'Time Management', icon: TimeManagementIcon },
    { name: 'Effective Communication', icon: CommunicationIcon },
    { name: 'Creativity', icon: CreativityIcon },
  ];

  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }} // Trigger every time the element is in view
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
      >
        Skills & Expertise
      </motion.h2>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Frontend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frontendSkills.map((skill, i) => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} delay={i * 0.1} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Backend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {backendSkills.map((skill, i) => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} delay={i * 0.1} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Database</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {databaseSkills.map((skill, i) => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} delay={i * 0.1} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Design</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {designSkills.map((skill, i) => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} delay={i * 0.1} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, i) => (
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;