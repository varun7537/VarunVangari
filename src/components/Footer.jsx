import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaArrowUp, 
         FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart, 
         FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [year] = useState(new Date().getFullYear());

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, url: '#', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaTwitter, url: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: FaInstagram, url: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: FaDiscord, url: '#', label: 'Discord', color: 'hover:text-rose-400' },
    { icon: FaFacebook, url: '#', label: 'Facebook', color: 'hover:text-blue-500' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              VarunVangari
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creating beautiful digital experiences with modern technologies and innovative designs.
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              <a href="mailto:contact@example.com" 
                 className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <FaEnvelope className="mr-2" /> varunvangari29@gmail.com
              </a>
              <a href="tel:+1234567890" 
                 className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                <FaPhone className="mr-2" /> 8104597116
              </a>
              <p className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2" /> Maharashtra, Mumbai, 400022
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} 
                     className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 
                              hover:translate-x-2 inline-block transform">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 
                         transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-teal-500 
                         rounded-lg font-semibold text-white shadow-lg 
                         hover:shadow-emerald-500/25 transform hover:-translate-y-1 
                         transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 my-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-gray-400 ${social.color} transform hover:scale-125 
                         transition-all duration-300 hover:-translate-y-1`}
              aria-label={social.label}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>
            © {year} VarunVangari. All Rights Reserved.
          </p>
          <p className="flex items-center mt-2 md:mt-0">
            Designed & Developed with 
            <FaHeart className="text-red-500 mx-1 animate-pulse" /> 
            by 
            <a href="https://www.example.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="ml-1 text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
              Varun Vangari
            </a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-4 bg-gradient-to-r from-emerald-400 to-teal-500 
                   rounded-full shadow-lg text-white transform transition-all duration-300 
                   hover:scale-110 hover:shadow-emerald-500/25 z-50
                   ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;