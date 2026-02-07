import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="footer" 
      className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300"
        >
          © {new Date().getFullYear()} <strong className="text-white">Dipesh Patel</strong>. All rights reserved.
        </motion.p>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-sm mt-2"
        >
          Built with React, Tailwind CSS & Framer Motion
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
