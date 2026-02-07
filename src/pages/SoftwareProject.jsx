import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection.jsx";

const projects = [
  {
    id: 1,
    title: "ClinicIQ (Hospital Appointment System)",
    description: "A comprehensive hospital appointment management system with patient registration, doctor scheduling, and appointment booking features.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    URL: "https://clinic-iq-hospital-appointment-system.onrender.com",
    github_link: "https://github.com/dip1905/Clinic-IQ-Hospital-Appointment-System-",
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: 2,
    title: "Job Application Tracker Backend",
    description: "RESTful API for tracking job applications with CRUD operations, authentication, and data persistence.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github_link: "https://github.com/dip1905/job-tracker-backend",
    color: "from-green-400 to-emerald-400"
  },
  {
    id: 3,
    title: "Job Application Tracker Frontend",
    description: "Interactive frontend for managing job applications with real-time updates and responsive design.",
    tech: ["React.js", "CSS3", "JavaScript"],
    URL: "https://job-application-tracker-bj48.onrender.com",
    github_link: "https://github.com/dip1905/job-tracker-frontend",
    color: "from-purple-400 to-pink-400"
  },
  {
    id: 4,
    title: "Votify (Online Voting System)",
    description: "Secure online voting platform with user authentication, vote tracking, and real-time results.",
    tech: ["Spring Boot", "React.js", "MySQL"],
    github_link: "https://github.com/dip1905/Votify-online-Voting-System-",
    color: "from-orange-400 to-red-400"
  },
  {
    id: 5,
    title: "Expense Splitter App",
    description: "Smart expense splitting application for groups with automatic calculations and local storage.",
    tech: ["React.js", "Local Storage", "JavaScript"],
    github_link: "https://github.com/dip1905/Expense-Splitter",
    color: "from-teal-400 to-blue-400"
  },
  {
    id: 6,
    title: "Landing Page",
    description: "Modern, responsive landing page with smooth animations and interactive elements.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github_link: "https://github.com/dip1905/LandingPage",
    color: "from-indigo-400 to-purple-400"
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="software-projects" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          >
            Software Projects
          </motion.h2>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col">
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.color} p-4 rounded-lg mb-4`}>
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 mt-auto">
                  {project.github_link && (
                    <motion.a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                    >
                      <FaGithub />
                      GitHub
                    </motion.a>
                  )}
                  {project.URL && (
                    <motion.a
                      href={project.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
