import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPhp, FaWordpress,
        FaPython, FaDatabase, FaReact, FaNode, FaServer,
        FaDesktop, FaCode, FaBrain } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiJquery, SiTypescript } from 'react-icons/si';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('skills-section');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const skillCategories = [
        { id: 'all', name: 'All Skills', icon: FaCode },
        { id: 'frontend', name: 'Frontend', icon: FaDesktop },
        { id: 'backend', name: 'Backend', icon: FaServer },
        { id: 'other', name: 'Other', icon: FaBrain },
    ];

    const skills = [
        { 
            name: 'HTML5', 
            icon: FaHtml5, 
            category: 'frontend',
            color: 'from-orange-400 to-red-500',
            description: 'Semantic HTML, Accessibility, SEO'
        },
        { 
            name: 'CSS3', 
            icon: FaCss3Alt, 
            category: 'frontend',
            color: 'from-blue-400 to-blue-600',
            description: 'Flexbox, Grid, Animations'
        },
        { 
            name: 'JavaScript', 
            icon: FaJs, 
            category: 'frontend',
            color: 'from-yellow-400 to-yellow-600',
            description: 'ES6+, DOM, Async/Await'
        },
        { 
            name: 'TypeScript', 
            icon: SiTypescript, 
            category: 'frontend',
            color: 'from-blue-500 to-blue-700',
            description: 'Types, Interfaces, Generics'
        },
        { 
            name: 'Bootstrap', 
            icon: FaBootstrap, 
            category: 'frontend',
            color: 'from-purple-400 to-purple-600',
            description: 'Components, Grid System'
        },
        { 
            name: 'Tailwind', 
            icon: SiTailwindcss, 
            category: 'frontend',
            color: 'from-teal-400 to-teal-600',
            description: 'Utility Classes, Custom Config'
        },
        { 
            name: 'jQuery', 
            icon: SiJquery, 
            category: 'frontend',
            color: 'from-blue-300 to-blue-500',
            description: 'DOM Manipulation, AJAX'
        },
        { 
            name: 'Node.js', 
            icon: FaNode, 
            category: 'backend',
            color: 'from-green-400 to-green-600',
            description: 'Express, APIs, Authentication'
        },
        { 
            name: 'PHP', 
            icon: FaPhp, 
            category: 'backend',
            color: 'from-indigo-400 to-indigo-600',
            description: 'MVC, Laravel, APIs'
        },
        { 
            name: 'MySQL', 
            icon: FaDatabase, 
            category: 'backend',
            color: 'from-orange-400 to-red-400',
            description: 'Queries, Optimization'
        },
        { 
            name: 'Python', 
            icon: FaPython, 
            category: 'backend',
            color: 'from-blue-400 to-green-400',
            description: 'Data Analysis, Scripting'
        },
        { 
            name: 'Django', 
            icon: SiDjango, 
            category: 'backend',
            color: 'from-green-500 to-green-700',
            description: 'MVT, Admin, ORM'
        },
        { 
            name: 'WordPress', 
            icon: FaWordpress, 
            category: 'other',
            color: 'from-blue-400 to-blue-600',
            description: 'Themes, Plugins'
        },
        { 
            name: 'Figma', 
            icon: FaDesktop, 
            category: 'other',
            color: 'from-purple-400 to-purple-600',
            description: 'UI/UX Design, Prototyping'
        },
        { 
            name: 'Canva', 
            icon: FaDesktop, 
            category: 'other',
            color: 'from-blue-400 to-blue-600',
            description: 'Design, Branding'
        },
        { 
            name: 'UI/UX', 
            icon: FaDesktop, 
            category: 'other',
            color: 'from-pink-400 to-pink-600',
            description: 'User Research, Wireframing'
        },
        { 
            name: 'ReactJs', 
            icon: FaReact, 
            category: 'frontend',
            color: 'from-cyan-400 to-cyan-600',
            description: 'Front-end Framework'
        },
        { 
            name: 'ExpressJs', 
            icon: FaServer, 
            category: 'backend',
            color: 'from-gray-400 to-gray-600',
            description: 'Web Framework for Node'
        },
        { 
            name: 'PostgreSQL', 
            icon: FaDatabase, 
            category: 'backend',
            color: 'from-purple-400 to-purple-600',
            description: 'Relational Database'
        },
        { 
            name: 'MongoDB', 
            icon: FaDatabase, 
            category: 'backend',
            color: 'from-green-400 to-green-600',
            description: 'NoSQL Database'
        },
        { 
            name: 'Material UI', 
            icon: FaDesktop, 
            category: 'frontend',
            color: 'from-blue-500 to-blue-700',
            description: 'React UI Framework'
        }
    ];

    const filteredSkills = selectedCategory === 'all' ? skills : skills.filter(skill => skill.category === selectedCategory);

    return (
        <section 
            id="skills-section"
            className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-20 px-4"
        >
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 -top-10 -left-10 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className={`relative container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                            Technical Skills
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        I specialize in modern web technologies and continuously expand my skill set to stay
                        current with industry trends and best practices.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {skillCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                                        ${selectedCategory === category.id
                                            ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white'
                                            : 'bg-white/10 hover:bg-white/20 text-gray-300'}`}>
                            <category.icon className="text-xl" />
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300"
                            style={{ 
                                animationDelay: `${index * 100}ms`,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `all 0.6s ease-out ${index * 0.1}s`
                            }}>
                            {/* Skill Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                                        <skill.icon className="text-2xl text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                                </div>
                            </div>

                            {/* Skill Description */}
                            <p className="text-sm text-gray-400">
                                {skill.description}
                            </p>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
