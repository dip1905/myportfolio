import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/dipesh.JPG";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-20"></div>
              <img 
                src={profilePic} 
                alt="Dipesh Patel" 
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/10"
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="text-lg text-gray-300 leading-relaxed mb-8">
              <p className="mb-4">
                I am a <span className="text-blue-400 font-semibold">Full Stack Developer</span> with expertise in Java and MERN Stack technologies. I recently completed my PG Diploma in Advanced Computing (CDAC).
              </p>
              <p className="mb-4">
                Before moving into software development, I worked as a <span className="text-purple-400 font-semibold">Design Engineer</span> for 4 years at Abhikalp Design Studio, Indore, where I designed vehicle structures and components using CATIA V5 and Creo.
              </p>
              <p>
                This engineering background has strengthened my <span className="text-green-400 font-semibold">problem-solving</span>, logical thinking, and ability to build reliable software solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Experience", value: "4+ Years" },
                { label: "Projects", value: "15+" },
                { label: "Technologies", value: "10+" },
                { label: "Passion", value: "∞" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
                >
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
