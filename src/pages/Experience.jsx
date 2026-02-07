import React from 'react'
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCog, FaTools } from "react-icons/fa";
import { SiAutodesk } from "react-icons/si";
import AnimatedSection from "../components/AnimatedSection.jsx";

const cadProjects = [
    "Gensol Electric Vehicles – Cargo EV (3D Modeling)",
    "WardWizard Innovation – Joy E-Bike (3D Modeling)",
    "JBM Ltd – 9M & 12M Bus Body Design",
    "EKA Mobility – 12M Bus Body Design"
];

const skills = [
    "3D Modeling & Surfacing",
    "CAD Design & Drafting",
    "FRP & VFC Molding",
    "Bus Body Structures",
    "Vehicle Component Design",
    "CATIA V5 & Creo"
];

const Experience = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
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
        <section id="experience" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <AnimatedSection>
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
                    >
                        Work Experience
                    </motion.h2>
                </AnimatedSection>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    {/* Main Experience Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg mb-6">
                            <div className="flex items-center gap-4 mb-4">
                                <FaBriefcase className="text-3xl text-white" />
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Design Engineer</h3>
                                    <h4 className="text-xl text-blue-100">Abhikalp Design Studio, Indore</h4>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 text-white/90">
                                <div className="flex items-center gap-2">
                                    <FaCalendarAlt />
                                    <span>December 2020 – July 2024</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt />
                                    <span>Indore, MP</span>
                                </div>
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-8">
                            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <FaTools className="text-yellow-400" />
                                Key Responsibilities
                            </h4>
                            <motion.ul 
                                variants={containerVariants}
                                className="space-y-3"
                            >
                                {[
                                    "Designed and packaged vehicle components using 3D modeling, surfacing, and drafting tools.",
                                    "Specialized in FRP, VFC, ABS molding and bus body structures, panels, and trims.",
                                    "Developed detailed CAD models for structure, panel, trim, and complete bus body designs."
                                ].map((responsibility, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        className="text-gray-300 flex items-start gap-3"
                                    >
                                        <span className="text-green-400 mt-1">•</span>
                                        <span>{responsibility}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Skills Used */}
                        <div className="mb-8">
                            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <FaCog className="text-blue-400" />
                                Technical Skills
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/10 hover:border-white/30 transition-all duration-300"
                                    >
                                        <span className="text-gray-300 text-sm">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CAD Projects */}
                        <div>
                            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <SiAutodesk className="text-orange-400" />
                                CAD Projects
                            </h4>
                            <motion.div 
                                variants={containerVariants}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                {cadProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-purple-400 mt-1 text-sm">▶</span>
                                            <span className="text-gray-300 text-sm leading-relaxed">{project}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Achievement Stats */}
                    <AnimatedSection delay={0.6}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Years Experience", value: "4+", color: "text-blue-400" },
                                { label: "Projects Completed", value: "4+", color: "text-green-400" },
                                { label: "Vehicle Types", value: "5+", color: "text-purple-400" },
                                { label: "CAD Tools", value: "2+", color: "text-orange-400" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                                    <div className="text-gray-300 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
