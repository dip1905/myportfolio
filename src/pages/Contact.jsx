import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import AnimatedSection from "../components/AnimatedSection.jsx";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 75666 30553",
      href: "tel:+917566630553",
      color: "text-green-400"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "dipesh.patel9977@gmail.com",
      href: "mailto:dipesh.patel9977@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "A.B. Road, Yashwant Nagar, Mhow, Indore (MP)",
      color: "text-red-400"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/dipesh-patel-602102152",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/dip1905",
      label: "GitHub",
      color: "hover:text-gray-400"
    }
  ];

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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          >
            Get In Touch
          </motion.h2>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`text-3xl mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                      <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`text-3xl mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {item.icon}
                      </motion.div>
                      <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                      <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <AnimatedSection delay={0.6}>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-white/10 backdrop-blur-sm p-4 rounded-full text-white ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl border border-white/10 hover:border-white/30`}
                    aria-label={social.label}
                  >
                    <div className="text-2xl">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection delay={0.8}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Work Together!
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <motion.a
                href="mailto:dipesh.patel9977@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaEnvelope />
                Send Message
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;