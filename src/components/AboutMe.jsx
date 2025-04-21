import React, { useState, useEffect } from 'react';
import { FaCode, FaLaptopCode, FaServer, FaUserGraduate, FaCertificate, 
        FaLinkedinIn, FaInstagram, FaGithub,
        FaDownload, FaEnvelope, FaMapMarkerAlt, FaPhone, FaLanguage,
        FaBrain, FaUser, FaRocket } from 'react-icons/fa';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('professional');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const section = document.getElementById('aboutme-section');
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  const skills = [
    { name: 'Frontend Development', icon: FaCode, details: 'React, Vue.js, Next.js, TailwindCSS' },
    { name: 'Backend Development', icon: FaServer, details: 'Node.js, Python, Java, MongoDB' },
    { name: 'UI/UX Design', icon: FaLaptopCode, details: 'Figma, Adobe XD, Responsive Design' },
    // { name: 'DevOps', icon: FaTools, progress: 80, 
    //   details: 'Docker, AWS, CI/CD, Git' },
    // { name: 'Mobile Development', icon: FaPalette, progress: 70, 
    //   details: 'React Native, Flutter' },
    { name: 'Problem Solving', icon: FaBrain, details: 'Algorithms, Data Structures' },
  ];

  const milestones = [
    { 
      icon: FaUserGraduate, 
      title: 'Education',
      desc: 'Masters of Computer Application',
      year: '2024-Present',
      details: 'Pursing'
    },
    { 
      icon: FaCertificate, 
      title: 'Certifications',
      desc: 'IBM Full Stack Web Development',
      year: '2024',
      details: 'Advanced Web Development'
    },
    { 
      icon: FaRocket, 
      title: 'Experience',
      desc: 'Frontend Developer Intern at Roabix',
      year: '2025-Present',
      details: 'Working on Problem Solving Projects and gaining knowledge too'
    }
  ];

  const personalInfo = {
    name: 'Varun Vangari',
    phone: '+810 45 97116',
    email: 'varunvangari29@gmail.com',
    address: 'Sion, Pratiksha Nagar, Mumbai-400022',
    languages: ['English', 'Hindi', 'Marathi', 'Telugu'],
    hobbies: ['Coding', 'Reading', 'Travel', 'Photography', 'Sports', 'Fitness']
  };

  return (
    <section 
      id="aboutme-section"
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 
                text-white overflow-hidden py-20 px-4"
    >
      <div className={`relative container mx-auto max-w-6xl transition-all duration-1000 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {['About', 'Me'].map((word, i) => (
              <span key={i} className="inline-block">
                {word.split('').map((letter, j) => (
                  <span
                    key={j}
                    className="inline-block animate-bounce-in"
                    style={{ animationDelay: `${(i * word.length + j) * 0.1}s` }}
                  >
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                      {letter}
                    </span>
                  </span>
                ))}
                &nbsp;
              </span>
            ))}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed 
                      animate-fade-in">
            I'm a passionate developer dedicated to creating exceptional digital experiences. 
            With expertise in modern web technologies and a keen eye for design, I transform ideas 
            into elegant, functional solutions.
          </p>
        </div>

        <div className="flex justify-center mb-12 space-x-4">
          {['professional', 'personal', 'skills'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300
                ${activeTab === tab 
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white' 
                  : 'bg-white/5 hover:bg-white/10 text-gray-300'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="transition-all duration-500">
          <div className={`${activeTab === 'professional' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 
                            hover:bg-white/10 transition-all duration-300 overflow-hidden
                            transform hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br 
                              from-emerald-400/20 to-teal-500/20 rounded-bl-full 
                              transform translate-x-8 -translate-y-8 group-hover:translate-x-2 
                              group-hover:-translate-y-2 transition-transform duration-500">
                  </div>
                  
                  <milestone.icon className="text-4xl text-emerald-400 mb-4 
                                          transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300 mb-2">{milestone.desc}</p>
                  <p className="text-sm text-emerald-400">{milestone.year}</p>
                  <p className="text-sm text-gray-400 mt-2">{milestone.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${activeTab === 'personal' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Contact Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <FaUser className="text-teal-500" />
                    <span>{personalInfo.name}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaPhone className="text-teal-500" />
                    <span>{personalInfo.phone}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaEnvelope className="text-teal-500" />
                    <span>{personalInfo.email}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-teal-500" />
                    <span>{personalInfo.address}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
                    <FaLanguage className="inline-block mr-2 mb-1" />
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {personalInfo.languages.map((lang, index) => (
                      <span key={index} 
                            className="px-4 py-2 bg-white/10 rounded-full text-sm
                                    hover:bg-white/20 transition-colors duration-300">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Hobbies</h3>
                  <div className="flex flex-wrap gap-3">
                    {personalInfo.hobbies.map((hobby, index) => (
                      <span key={index}
                            className="px-4 py-2 bg-white/10 rounded-full text-sm
                                    hover:bg-white/20 transition-colors duration-300">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${activeTab === 'skills' ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 
                            hover:bg-white/10 transform hover:-translate-y-2 
                            transition-all duration-300"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="text-3xl text-emerald-400 mr-3 
                                        transform group-hover:rotate-12 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="text-sm text-gray-400">{skill.details}</div>
                  {hoveredSkill === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-teal-500/5 
                                  rounded-xl animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between 
                      bg-white/5 backdrop-blur-sm rounded-xl p-6">
          <div className="flex space-x-6 mb-6 md:mb-0">
            {[ 
              // { icon: FaTwitter, url: '#', color: 'hover:text-blue-400' },
              // { icon: FaFacebookF, url: '#', color: 'hover:text-blue-600' },
              { icon: FaLinkedinIn, url: '#', color: 'hover:text-blue-500' },
              { icon: FaInstagram, url: 'https://www.instagram.com/varun.vangari/', color: 'hover:text-pink-500' },
              { icon: FaGithub, url: 'https://github.com/varun7537', color: 'hover:text-purple-400' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`text-2xl text-gray-400 transform hover:-translate-y-1 
                          transition-all duration-300 ${social.color}`}
              >
                <social.icon />
              </a>
            ))}
          </div>

          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 
                            rounded-lg font-semibold text-white shadow-lg overflow-hidden 
                            relative transform hover:-translate-y-1 transition-all duration-300 
                            group">
              <span className="relative z-10 flex items-center">
                <FaDownload className="mr-2" />
                Download CV
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
