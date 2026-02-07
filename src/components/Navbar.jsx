import React, { useState, memo, useCallback } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "software-projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "education", label: "Education" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" }
];

const Navbar = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        Dipesh Patel
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 font-medium"
                                activeClass="text-blue-400"
                                spy={true}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-black/90 backdrop-blur-md">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    className="block px-3 py-2 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200 font-medium"
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.nav>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
