import React from 'react'
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection.jsx";

const educationData = [
    {
        id: 1,
        institute: "Centre for Development of Advanced Computing (CDAC)",
        degree: "Post Graduate Diploma in Advanced Computing",
        year: "February 2025",
        location: "Pune",
        color: "from-purple-400 to-pink-400",
        icon: "🎓"
    },
    {
        id: 2,
        institute: "Astral Institute of Technology and Research",
        degree: "B.E. (Mechanical Engineering)",
        year: "2018",
        location: "Indore",
        color: "from-blue-400 to-cyan-400",
        icon: "⚙️"
    },
    {
        id: 3,
        institute: "Vivekanand Vidhya Vihar H.S. School",
        degree: "Higher Secondary (12th)",
        year: "2014",
        location: "Mhow",
        color: "from-green-400 to-emerald-400",
        icon: "📚"
    },
    {
        id: 4,
        institute: "Vivekanand Vidhya Vihar H.S. School",
        degree: "Secondary (10th)",
        year: "2012",
        location: "Mhow",
        color: "from-orange-400 to-red-400",
        icon: "🏫"
    },
];

const Education = () => {
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
        <section id="education" className="py-20 px-4 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <AnimatedSection>
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
                    >
                        Education
                    </motion.h2>
                </AnimatedSection>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {educationData.map((edu) => (
                        <motion.div
                            key={edu.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="group relative"
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl h-full">
                                {/* Header with Icon */}
                                <div className={`bg-gradient-to-r ${edu.color} p-4 rounded-lg mb-4 flex items-center gap-3`}>
                                    <span className="text-2xl">{edu.icon}</span>
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-lg leading-tight">
                                            {edu.degree}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <h4 className="text-white font-semibold text-base group-hover:text-yellow-300 transition-colors duration-300">
                                        {edu.institute}
                                    </h4>
                                    
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <FaCalendarAlt className="text-blue-400" />
                                        <span className="text-sm">{edu.year}</span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <FaMapMarkerAlt className="text-red-400" />
                                        <span className="text-sm">{edu.location}</span>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Education
