import React, { useState, useEffect } from "react";
import { FaAward, FaExternalLinkAlt, FaSearch, 
        FaSortAmountDown, FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'; 

const Certifications = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('date');
    const [currentPage, setCurrentPage] = useState(1);
    const certificatesPerPage = 6;

// Extended certifications data
const certifications = [
    {
        title: "Google Cybersecurity",
        issuer: "Coursera",
        date: "31 January 2025",
        link: "https://coursera.org/share/3249cd50526fe7ea2b44e9d4e26267ab",
        badge: "Professional",
        category: "cybersecurity",
        skills: ["Python", "SQL", "Linux", "Security Information and Event Management (SIEM)", "Intrusion Detection Systems (IDS)"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "K7LLPY681FYB",
    },
    {
        title: "Google IT Automation with Python",
        issuer: "Coursera",
        date: "30 January 2025",
        link: "https://coursera.org/share/a51d3897923a5d9e22c7738f4302ab01",
        badge: "Professional",
        category: "programming",
        skills: ["Python", "Git & Github", "IT Automation", "Troubleshooting & Debugging", "Configuration Management", "Cloud Computing", "Systems Administration", "Automation at Scale"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "X4YI1CDUOEXB",
    },
    {
        title: "AWS Fundamentals",
        issuer: "Coursera",
        date: "August 2022",
        link: "https://coursera.org/share/e859cd0f5d792fac4be149c91b680425",
        badge: "Fundamentals",
        category: "cloud",
        skills: ["AWS Identity and Access Management", "Networking on AWS", "Cloud Computing", "AWS Management Console", "AWS Security", "Software Architecture", "Data Analysis", "Data Visualization", "AWS Account Management"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "DX0IM8LAM9ZB",
    },
    {
        title: "Python Essentials 1",
        issuer: "cisco networking academy",
        date: "8 Feburary 2025",
        link: "https://www.netacad.com/certificates?issuanceId=25a2680c-4f38-4de3-b221-75ae43c2a662",
        badge: "Free Course",
        category: "programming",
        skills: ["Python"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "25a2680c-4f38-4de3-b221-75ae43c2a662",
    },
    {
        title: "PHP Tutorial Beginner to Advanced",
        issuer: "Udemy",
        date: "7 Feburary 2025",
        link: "https://www.udemy.com/certificate/UC-da75b8f7-41fc-4f07-9b8d-0816d669c94c/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
        badge: "Free Course",
        category: "programming",
        skills: ["PHP"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "UC-da75b8f7-41fc-4f07-9b8d-0816d669c94c",
    },
    {
        title: "Deep Learning Mastery",
        issuer: "Udemy",
        date: "7 Feburary 2025",
        link: "https://www.udemy.com/certificate/UC-31d7a2bc-cfac-4a99-9157-140982c97723/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
        badge: "Free Course",
        category: "programming",
        skills: ["Image Classification", "Data Science Lifecycle", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-learn (sklearn)", "Machine Learning Fundamentals", "Regression Techniques", "Classification Techniques", "Artificial Neural Networks (ANN)", "Convolutional Neural Networks (CNN)", "Recurrent Neural Networks (RNN)", "TensorFlow", "Keras", "Image Classification", "Predictive Modeling"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "UC-31d7a2bc-cfac-4a99-9157-140982c97723",
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "FreeCodeCamp",
        date: "8 Feburary 2025",
        link: "https://freecodecamp.org/certification/fccc9bffec1-075e-41e0-bd08-557a8a2dfb81/javascript-algorithms-and-data-structures-v8",
        badge: "Free Course",
        category: "programming",
        skills: ["JavaScript Fundamentals", "DOM Manipulation", "Object-Oriented Programming (OOP)", "Asynchronous Programming", "API Integration", "Regular Expressions", "Recursion", "Data Structures"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "fccc9bffec1-075e-41e0-bd08-557a8a2dfb81-jaads",
    },
    {
        title: "Spring Framework Specialization",
        issuer: "Coursera",
        date: "",
        link: "20 December 2024",
        badge: "Professional",
        category: "backend",
        skills: ["Spring Framework", "Spring Data", "Spring Configuration", "Netflix OSS", "Java Programming"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "SOL-ML-456",
    },
    {
        title: "Java: Data Structures and Algorithms Specialization",
        issuer: "Coursera",
        date: "22 January 2025",
        link: "https://coursera.org/share/80a47115cb512bf7156a85b8898b0382",
        badge: "Free Course",
        category: "programming",
        skills: ["Algorithms", "Java", "Graphs", "Hash Table", "Searching", "Binary Search Trees", "Sorting", "Linear Data Structures", "Data Structures"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "IJ3PSHXNTO7F",
    },
    {
        title: "Adobe Illustrator Course For Beginner",
        issuer: "Udemy",
        date: "7 Feburary 2025",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c3180e13-1504-460c-a4f9-438be1f2e2b6.pdf",
        badge: "Free Course",
        category: "design",
        skills: ["Illustrator Workspace Customization", "Document Creation", "Pen Tool", "Anchor Point Editing", "Shape Drawing & Customization", "Direct Selection Tool", "Colors, Swatches & Gradients", "Strokes & Fills", "Corner Radius Options", "Magic Wand Tool", "Eyedropper Tool", "Appearance Panel", "Pattern Creation & Editing", "Width Tool", "Artboard Management", "Graphic Styles"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "UC-c3180e13-1504-460c-a4f9-438be1f2e2b6",
    },
    {
        title: "Data Visualization",
        issuer: "FreeCodeCamp",
        date: "8 Feburary 2025",
        link: "https://www.freecodecamp.org/certification/fccc9bffec1-075e-41e0-bd08-557a8a2dfb81/data-visualization",
        badge: "Free Course",
        category: "programming",
        skills: ["D3.js", "Data Binding", "Data Manipulation", "SVG", "Styling D3", "Charts Creation", "Dynamic Data", "Data Presentation", "API", "AJAX", "XMLHttpRequest", "Json Parsing", "Geolocation API"],
        progress: 100,
        expiryDate: "No Expiry",
        credential: "fccc9bffec1-075e-41e0-bd08-557a8a2dfb81-dv",
    }
];

useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.1 }
    );

    const section = document.getElementById('certifications-section');
    if (section) observer.observe(section);

    return () => {
        if (section) observer.unobserve(section);
    };
}, []);

// Filter and search logic
const filteredCertifications = certifications
.filter(cert => {
    const matchesFilter = filter === 'all' || cert.category === filter;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
})
.sort((a, b) => {
    if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
    }
    return a.title.localeCompare(b.title);
});

// Pagination
const totalPages = Math.ceil(filteredCertifications.length / certificatesPerPage);
const currentCertifications = filteredCertifications.slice(
    (currentPage - 1) * certificatesPerPage,
    currentPage * certificatesPerPage
);

const categories = [
    { value: 'all', label: 'All' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'programming', label: 'Programming' },
    { value: 'cybersecurity', label: 'CyberSecurity'},
    { value: 'cloud', label: 'Cloud' },
    { value: 'design', label: 'Design' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'fullstack', label: 'Full Stack' }
];

return (
<section 
    id="certifications-section"
    className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 
            text-white py-20 px-4 overflow-hidden"
>
  {/* Background Animation */}
<div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-96 h-96 -top-10 -left-10 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
</div>

<div className={`relative container mx-auto max-w-7xl transition-all duration-1000 
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

    {/* Header Section */}
    <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                My Certifications
            </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of professional certifications and achievements that showcase my expertise 
            and continuous learning journey.
        </p>
    </div>

    {/* Filters and Search */}
    <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {categories.map(category => (
            <button
            key={category.value}
            onClick={() => setFilter(category.value)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 
                        ${filter === category.value 
                            ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white' 
                            : 'bg-white/10 hover:bg-white/20'}`}
            data-tip={`Filter by ${category.label}`} // Added Tooltip
            >
            {category.label}
            </button>
        ))}
    </div>

    <div className="flex gap-4">
        <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 rounded-lg focus:outline-none 
                    focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
            />
            {searchTerm && (
                <button 
                    onClick={() => setSearchTerm('')} 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                    <FaTimes size={16} />
                </button>
            )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
            <FaSortAmountDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 rounded-lg focus:outline-none 
                        focus:ring-2 focus:ring-emerald-400 transition-all duration-300"
                data-tip="Sort certifications by"
            >
                <option value="date">Latest First</option>
                <option value="title">By Name</option>
            </select>
        </div>
    </div>
    </div>

    {/* Certifications Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCertifications.map((cert, index) => (
            <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 
                        hover:bg-white/10 transition-all duration-300 transform 
                        hover:-translate-y-1 hover:shadow-xl"
            >
            {/* Badge */}
            <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
                    ${cert.badge === "Free Course" 
                        ? "bg-green-500/20 text-green-300" 
                        : cert.badge === "Professional" 
                            ? "bg-purple-500/20 text-purple-300" 
                            : "bg-yellow-500/20 text-yellow-300"}`}>
            {cert.badge}
            </span>

            <div className="mb-4">
                <FaAward className="text-3xl text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
            </div>

            {/* Skills */}
            <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                    <span 
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded-full"
                    >
                    {skill}
                    </span>
                ))}
                </div>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-400 mb-4">
                <p>Credential ID: {cert.credential}</p>
                <p>Expires: {cert.expiryDate}</p>
            </div>

            <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 
                        hover:text-emerald-300 transition-colors duration-300"
            >
            View Certificate
            <FaExternalLinkAlt size={12} />
            </a>
        </div>
        ))}
    </div>

    {/* Pagination */}
    {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
        <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                    disabled:opacity-50 disabled:cursor-not-allowed 
                    transition-all duration-300"
        >
            <FaChevronLeft />
        </button>

        <span className="text-gray-400">
            Page {currentPage} of {totalPages}
        </span>

        <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                    disabled:opacity-50 disabled:cursor-not-allowed 
                    transition-all duration-300"
        >
            <FaChevronRight />
        </button>
        </div>
    )}
</div>

{/* React Tooltip component */}
<Tooltip place="top" effect="solid" />
</section>
);
};

export default Certifications;