import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/varun7537', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/varun-vangari-092895277/', label: 'LinkedIn' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col 
                      justify-center items-center text-center transition-all duration-1000 
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Profile Image */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 
                rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src="https://media.istockphoto.com/id/907865186/photo/handsome-man.jpg?s=1024x1024&w=is&k=20&c=2MkK4OvKoiGHFBn-n_mXx01jo-V0u4z_nMW3HSOfrFM="
            alt="Profile"
            className="relative w-48 h-48 rounded-full border-4 border-white/10 
                      shadow-lg object-cover transform transition-transform duration-500 
                      group-hover:scale-105"
          />
        </div>

        {/* Main Text */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Hi I'M VARUN VANGARI
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
          I'm a passionate Web Developer specializing in creating beautiful, responsive websites 
          using modern technologies like React, TailwindCSS, and Next.js.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 
              rounded-lg font-semibold text-white shadow-lg 
              hover:shadow-emerald-500/25 transform hover:-translate-y-1 
              transition-all duration-300">
            View Projects
          </button>
          <button className="px-8 py-3 bg-white/10 rounded-lg font-semibold 
              backdrop-blur-sm hover:bg-white/20 transform hover:-translate-y-1 
              transition-all duration-300 border border-white/10">
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-gray-400 hover:text-white transform hover:-translate-y-1 
                        transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                        animate-bounce text-gray-400">
          <FaArrowDown size={24} />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t 
                      from-slate-900 to-transparent flex items-end justify-center pb-4">
        <div className="flex gap-8 text-gray-400 text-sm">
          <span>JavaScript</span>
          <span>•</span>
          <span>React.Js</span>
          <span>•</span>
          <span>TailwindCSS</span>
          <span>•</span>
          <span>Next.Js</span>
          <span>•</span>
          <span>TypeScript</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;