import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiBootstrap,
  SiJquery,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiHibernate,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { id: 1, label: "Java", icon: FaJava, color: "text-orange-500" },
  { id: 2, label: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { id: 3, label: "HTML5", icon: FaHtml5, color: "text-orange-600" },
  { id: 4, label: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { id: 5, label: "React.js", icon: FaReact, color: "text-cyan-400" },
  { id: 6, label: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { id: 7, label: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { id: 8, label: "jQuery", icon: SiJquery, color: "text-blue-600" },
  { id: 9, label: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { id: 10, label: "Express.js", icon: SiExpress, color: "text-gray-600" },
  { id: 11, label: "MySQL", icon: SiMysql, color: "text-blue-700" },
  { id: 12, label: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { id: 13, label: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
  { id: 14, label: "Hibernate", icon: SiHibernate, color: "text-yellow-600" },
];

// Memoized skill card component
const SkillCard = memo(({ skill, index }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:border-white/30 transition-all duration-200 group"
    >
      <div className={`text-4xl mb-3 ${skill.color} group-hover:scale-105 transition-transform duration-200`}>
        <IconComponent />
      </div>
      <h3 className="text-white font-medium text-sm">
        {skill.label}
      </h3>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
