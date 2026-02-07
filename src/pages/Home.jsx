import React, { useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/2842680.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  // Preload critical image
  useEffect(() => {
    const img = new Image();
    img.src = img1;
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Optimized background elements */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center lg:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Hi, I'm <br />
            <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Dipesh Patel
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-16"
          >
            <Typewriter
              words={['Full Stack Developer', 'MERN Stack Expert', 'Java Developer', 'Problem Solver']}
              loop={Infinity}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1500}
            />
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center lg:justify-start space-x-4 mb-8"
          >
            {[
              { href: "https://github.com/dip1905", icon: FaGithub, label: "GitHub", color: "hover:bg-gray-700" },
              { href: "https://www.linkedin.com/in/dipesh-patel-602102152", icon: FaLinkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
              { href: "mailto:dipesh.patel9977@gmail.com", icon: FaEnvelope, label: "Email", color: "hover:bg-red-600" },
              { href: "/Dipesh_Patel.pdf", icon: FaDownload, label: "Resume", download: true, color: "hover:bg-green-600" }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                download={link.download}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-white/10 backdrop-blur-sm p-4 rounded-full text-white ${link.color} transition-colors duration-200 border border-white/20`}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-block bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>

        {/* Optimized Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <img
              src={img1}
              alt="Dipesh Patel"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white/10"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
