import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Skills  from '../components/Skills';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import ContactMe from '../components/ContactMe';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <Blog />
      <ContactMe />
    </>
  );
};

export default Home;
