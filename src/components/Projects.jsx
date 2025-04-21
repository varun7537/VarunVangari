import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTags } from 'react-icons/fa';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const projects = [
    {
      title: 'Paradise Nursery Shopping Website',
      description: 'An e-commerce platform for purchasing plants, gardening supplies, and accessories with a user-friendly interface and secure payment system.',
      image: 'paradise-nursery-shopping.jpg',
      category: 'fullstack',
      technologies: ['ReactJS', 'NodeJS', 'MongoDB', 'Stripe', 'ExpressJS'],
      demoUrl: '#',
      githubUrl: '#',
      features: [
        'Plant and product catalog',
        'Secure payment processing',
        'User accounts and order history',
        'Shopping cart functionality',
        'Admin panel for product management',
        'Real-time stock updates'
      ]
    },    
    {
      "title": "Movie Database App",
      "description": "A movie search app where you can find all the movies you can think of. Users can search, explore, and get detailed information about movies, including ratings, release dates, and more.",
      "image": "movie-database-app.jpg",
      "category": "developed",
      "technologies": ["AngularJS", "CSS", "JavaScript", "OMDb API"],
      "demoUrl": "https://github.com/varun7537/Movie-Database.git",
      "githubUrl": "https://github.com/varun7537/Movie-Database.git",
      "features": [
        "Search movies by title, genre, or actor",
        "View detailed information including ratings, release date, and plot",
        "Responsive design for all devices",
        "Real-time movie data updates using OMDb API",
        "Save favorite movies to a watchlist",
        "User-friendly navigation and interface"
      ]
    },    
    {
      "title": "Expense Tracker App",
      "description": "A simple and intuitive expense tracker app that helps users manage their personal finances by tracking income and expenses. It provides visualizations to help users see their spending habits and stay within their budget.",
      "image": "expense-tracker-app.jpg",
      "category": "developed",
      "technologies": ["AngularJS", "CSS", "JavaScript"],
      "demoUrl": "https://github.com/varun7537/Expense-Tracker-App.git",
      "githubUrl": "https://github.com/varun7537/Expense-Tracker-App.git",
      "features": [
        "Track income and expenses",
        "Add and categorize expenses",
        "Set monthly budget goals",
        "View transaction history",
        "Responsive design for mobile and desktop"
      ]
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by machine learning for customer support.',
      image: 'ai-chat-assistant.jpg',
      category: 'ai',
      technologies: ['Python', 'Flask', 'FastAPI', 'React'],
      demoUrl: '#',
      githubUrl: '#',
      features: [
        'Natural language processing',
        'Context awareness',
        'Multi-language support',
        'Analytics dashboard'
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'developed', label: 'Developed' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'design', label: 'Design' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="projects-section"
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-20 px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-emerald-500/10 rounded-full 
                      blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-teal-500/10 rounded-full 
                      blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative container mx-auto max-w-6xl transition-all duration-1000 
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of projects showcasing my expertise in web development, 
            mobile applications, and innovative solutions.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                          ${activeFilter === category.id 
                            ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white' 
                            : 'bg-white/10 hover:bg-white/20 text-gray-300'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 text-white rounded-lg pl-10 pr-4 py-2 
                        placeholder-gray-400 focus:outline-none focus:ring-2 
                        focus:ring-emerald-400 transition-all duration-300"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden 
                        hover:bg-white/10 transition-all duration-300 transform 
                        hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 
                          transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 
                              transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-white/10 rounded-full 
                                text-emerald-400">
                        {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <FaTags className="text-emerald-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                              bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg 
                              font-medium hover:shadow-lg hover:shadow-emerald-500/25 
                              transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 
                              bg-white/10 rounded-lg font-medium hover:bg-white/20 
                              transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <FaGithub size={14} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
