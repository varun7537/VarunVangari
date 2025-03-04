import React, { useState, useEffect } from 'react';
import { FaHeart, FaEye, FaArrowRight, FaComment, FaBookmark, FaShare, FaSearch } from 'react-icons/fa';

const Blog = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        },
        { threshold: 0.1 }
    );

    const section = document.getElementById('blog-section');
    if (section) observer.observe(section);

    return () => {
        if (section) observer.unobserve(section);
    };
}, []);

const categories = ['All', 'Technology', 'Design', 'Development', 'Career'];

const blogPosts = [
    {
        title: "Building Modern Web Applications with React",
        date: "January 14, 2025",
        category: "Development",
        imageUrl: "/api/placeholder/800/600",
        description: "Explore the latest features and best practices in React development. Learn how to build scalable and performant applications.",
        likes: 849,
        views: 2308,
        comments: 56,
        readTime: "8 min read",
        tags: ["React", "JavaScript", "Web Development"]
    },
    {
        title: "The Future of UI/UX Design",
        date: "January 12, 2025",
        category: "Design",
        imageUrl: "/api/placeholder/800/600",
        description: "Discover emerging trends in user interface and experience design. Learn how AI is shaping the future of design.",
        likes: 635,
        views: 1892,
        comments: 43,
        readTime: "6 min read",
        tags: ["UI/UX", "Design", "AI"]
    },
    {
        title: "Machine Learning in Web Development",
        date: "January 10, 2025",
        category: "Technology",
        imageUrl: "/api/placeholder/800/600",
        description: "Learn how to integrate machine learning models into your web applications for enhanced user experiences.",
        likes: 723,
        views: 2156,
        comments: 38,
        readTime: "10 min read",
        tags: ["ML", "AI", "Web Development"]
    },
    {
        title: "Career Growth in Tech Industry",
        date: "January 8, 2025",
        category: "Career",
        imageUrl: "/api/placeholder/800/600",
        description: "Tips and strategies for advancing your career in the fast-paced technology industry.",
        likes: 512,
        views: 1645,
        comments: 29,
        readTime: "7 min read",
        tags: ["Career", "Technology", "Growth"]
    }
];

    const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = filter === 'all' || post.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
});

return (
    <section 
        id="blog-section"
        className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 overflow-hidden"
    >
    {/* Background Animation */}
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className={`relative container mx-auto max-w-6xl transition-all duration-1000 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Header Section */}
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                    Latest Blog Posts
                </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Explore the latest insights, tutorials, and thoughts about technology, 
                design, and development from our expert team.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                <div className="relative w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 focus:border-emerald-400 outline-nonetransition-all duration-300"
                    />
                    <FaSearch className="absolute right-3 top-3 text-gray-400" />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                    {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category.toLowerCase())}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300
                        ${filter === category.toLowerCase()
                            ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white': 'bg-white/10 text-gray-300 hover:bg-white/20'}`}> 
                            {category}
                    </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
                <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                >
                <div className="relative overflow-hidden h-64">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                        <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-emerald-400/50 transition-all duration-300">
                            <FaBookmark className="text-white" />
                        </button>
                        <button className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-emerald-400/50 transition-all duration-300">
                            <FaShare className="text-white" />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-emerald-400 text-sm">{post.category}</span>
                        <span className="text-gray-400 text-sm">{post.readTime}</span>
                        <span className="text-gray-400 text-sm">{post.date}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                        {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">{post.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, i) => (
                            <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-sm text-emerald-400">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                                <FaHeart /> {post.likes}
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                                <FaComment /> {post.comments}
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                                <FaEye /> {post.views}
                            </button>
                        </div>
                        <button className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                            Read More <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        ))}
        </div>

            {/* More Posts Button */}
            <div className="text-center mt-12">
                <button className="group px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg font-semibold text-white shadow-lg overflow-hidden 
                    relative transform hover:-translate-y-1 transition-all duration-300">
                    <span className="relative z-10">Load More Posts</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform translate-y-full group-hover:translate-y-0 
                        transition-all duration-300">
                    </div>
                </button>
            </div>
        </div>
    </section>
    );
};

export default Blog;
