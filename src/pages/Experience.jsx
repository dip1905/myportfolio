import React from 'react'
import { motion } from "framer-motion";
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
                        className="bg-white/5 rounded-lg p-8 border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                        {/* Header */}
                        <div className="border-l-4 border-white/30 pl-6 mb-8">
                            <div className="mb-3">
                                <h3 className="text-2xl font-bold text-white">Design Engineer</h3>
                                <h4 className="text-lg text-gray-400">Abhikalp Design Studio, Indore</h4>
                            </div>
                            
                            <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
                                <span>December 2020 – July 2024</span>
                                <span>Indore, MP</span>
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
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
                                        className="text-gray-300 text-sm flex items-start gap-3"
                                    >
                                        <span className="text-white/50 mt-1">•</span>
                                        <span>{responsibility}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Skills Used */}
                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-white mb-4">Technical Skills</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="rounded-md p-3 text-center bg-white/5 hover:bg-white/10 transition-colors duration-200"
                                    >
                                        <span className="text-gray-300 text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CAD Projects */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">CAD Projects</h4>
                            <motion.div 
                                variants={containerVariants}
                                className="grid grid-cols-1 md:grid-cols-2 gap-3"
                            >
                                {cadProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="rounded-md p-3 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                                    >
                                        <span className="text-gray-300 text-sm leading-relaxed">{project}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Achievement Stats */}
                    <AnimatedSection delay={0.6}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Years Experience", value: "4+" },
                                { label: "Projects Completed", value: "4+" },
                                { label: "Vehicle Types", value: "5+" },
                                { label: "CAD Tools", value: "2+" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="rounded-lg p-4 text-center bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-200"
                                >
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
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
