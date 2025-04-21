import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaHome, FaUser, FaProjectDiagram, FaBlog, FaEnvelope, FaBars, 
        FaTimes, FaGraduationCap, FaCertificate, FaTools } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine active link
    const isActive = (path) => {
        return window.location.hash === `#${path}` 
            ? 'text-emerald-400 border-b-2 border-emerald-400' 
            : 'hover:text-emerald-400 hover:scale-105 transform transition-all';
    };

    // Navbar class with dynamic styles based on scroll
    const navbarClass = `fixed w-full z-50 transition-all duration-300 ${isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-2' 
        : 'bg-slate-900 py-4'}`;

    const menuItems = [
        { path: 'home-section', icon: FaHome, label: 'Home' },
        { path: 'aboutme-section', icon: FaUser, label: 'About' },
        { path: 'education-section', icon: FaGraduationCap, label: 'Education' },
        { path: 'skills-section', icon: FaTools, label: 'Skills' },
        { path: 'certifications-section', icon: FaCertificate, label: 'Certifications' },
        { path: 'projects-section', icon: FaProjectDiagram, label: 'Projects' },
        { path: 'blog-section', icon: FaBlog, label: 'Blog' },
        { path: 'contactme-section', icon: FaEnvelope, label: 'Contact' }
    ];

    return (
        <nav className={navbarClass}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <ScrollLink to="home-section" smooth={true} duration={500}>
                        <div className="relative">
                            <span className="text-3xl md:text-4xl font-bold text-emerald-400 group-hover:text-white transition-all duration-300">
                                Varun Vangari
                            </span>
                        </div>
                    </ScrollLink>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        className="lg:hidden text-white hover:text-emerald-400 transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {menuItems.map((item) => (
                            <ScrollLink
                                key={item.path}
                                to={item.path}
                                smooth={true}
                                duration={500}
                                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-white
                                            transition-all duration-300 ${isActive(item.path)}`}
                            >
                                <item.icon className="text-lg" />
                                <span>{item.label}</span>
                            </ScrollLink>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute left-0 right-0 bg-slate-800/95 backdrop-blur-lg
                                shadow-xl transition-all duration-300 ${
                        isMobileMenuOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
                >
                    <div className="container mx-auto px-4 py-3">
                        {menuItems.map((item) => (
                            <ScrollLink
                                key={item.path}
                                to={item.path}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center space-x-2 px-4 py-3 text-white rounded-lg
                                        transition-all duration-300 ${isActive(item.path)}
                                        hover:bg-slate-700/50`}
                            >
                                <item.icon className="text-lg" />
                                <span>{item.label}</span>
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;