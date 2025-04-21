import React, { useState, useEffect } from 'react';
import { FaHeart, FaEye, FaArrowRight, FaComment, FaBookmark, FaShare, FaSearch } from 'react-icons/fa';

const Blog = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

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

        // Load the bookmarked posts from localStorage when the component mounts
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarkedPosts')) || [];
        setBookmarkedPosts(savedBookmarks);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const categories = ['All', 'Technology', 'Design', 'Development', 'Career'];

    const blogPosts = [
        {
            title: "The Future of Artificial Intelligence: Transforming Industries and Shaping Tomorrow",
            date: "August 25, 2024",
            category: "Development",
            imageUrl: "https://miro.medium.com/v2/resize:fit:788/1*ajS-NKJYTlnXZ_SNTp-D1A.jpeg",
            description: "This blog explores how artificial intelligence is transforming industries, from healthcare to creative fields, and shaping the future of work, while also addressing the challenges and ethical considerations it brings.",
            readTime: "5 min read",
            tags: ["Artificial Intelligence", "AI Ethics", "Machine Learning", "Future of Technology"],
            readmore: "https://medium.com/@varunvangari29/the-future-of-artificial-intelligence-transforming-industries-and-shaping-tomorrow-27e2a74ea5df"
        },
        {
            title: "The Future of UI/UX Design: Trends, Innovations, and Tools to Watch in 2025",
            date: "March 14, 2025",
            category: "Design",
            imageUrl: "https://miro.medium.com/v2/resize:fit:788/1*pmg1P9pMcJ3S18ZXKfoPGg.jpeg",
            description: "This article explores the future of UI/UX design in 2025, highlighting emerging trends like AI integration, voice/gesture-driven interfaces, immersive design, and sustainability.",
            readTime: "5 min read",
            tags: ["UI/UX Design", "Artificial Intelligence", "Augmented Reality", "Sustainability"],
            readmore: "https://medium.com/@varunvangari29/the-future-of-ui-ux-design-trends-innovations-and-tools-to-watch-in-2025-d13349c87444"
        },
        {
            title: "Machine Learning in Web Development: Unlocking the Future of Smarter Websites",
            date: "March 14, 2025",
            category: "Technology",
            imageUrl: "https://miro.medium.com/v2/resize:fit:788/1*OIKpkzFCpn2TrrXd1S2cag.png",
            description: "This blog explores how machine learning is revolutionizing web development by enhancing user experience, improving security, and automating processes to create smarter, more dynamic websites.",
            readTime: "6 min read",
            tags: ["Machine Learning", "Web Development", "AI in Technology"],
            readmore: "https://medium.com/@varunvangari29/machine-learning-in-web-development-unlocking-the-future-of-smarter-websites-3dec4892aef6"
        },
        {
            title: "Career Growth in the Tech Industry: A Path to Success",
            date: "January 14, 2025",
            category: "Career",
            imageUrl: "https://miro.medium.com/v2/resize:fit:788/1*5vd3nNR6lIMAWgxD-d9xKw.png",
            description: "Explore key strategies for career growth in the tech industry, from identifying your niche to continuous learning, building a strong portfolio, networking, and maintaining work-life balance for long-term success.",
            readTime: "6 min read",
            tags: ["TechCareerGrowth", "TechIndustrySuccess", "CareerSuccessInTech"],
            readmore: "https://medium.com/@varunvangari29/career-growth-in-the-tech-industry-a-path-to-success-bf6ac443a60c"
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesFilter = filter === 'all' || post.category.toLowerCase() === filter.toLowerCase();
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesFilter && matchesSearch;
    });

    // Toggle Bookmark
    const handleBookmark = (post) => {
        let updatedBookmarks = [...bookmarkedPosts];
        if (updatedBookmarks.some(bookmarkedPost => bookmarkedPost.title === post.title)) {
            // Remove the post if it's already bookmarked
            updatedBookmarks = updatedBookmarks.filter(bookmarkedPost => bookmarkedPost.title !== post.title);
        } else {
            // Add the post to bookmarks
            updatedBookmarks.push(post);
        }
        setBookmarkedPosts(updatedBookmarks);
        localStorage.setItem('bookmarkedPosts', JSON.stringify(updatedBookmarks));
    };

    return (
        <section id="blog-section" className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 -top-10 -left-10 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className={`relative container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

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
                                className="w-full px-4 py-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 focus:border-emerald-400 outline-none transition-all duration-300"
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
                                            ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
                                >
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
                                    <button
                                        onClick={() => handleBookmark(post)}
                                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-emerald-400/50 transition-all duration-300"
                                    >
                                        <FaBookmark
                                            className={`text-white ${bookmarkedPosts.some(bookmarkedPost => bookmarkedPost.title === post.title) ? 'text-emerald-400' : ''}`}
                                        />
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
                                    <a href={post.readmore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300">
                                        Read More <FaArrowRight />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Posts Button */}
                <div className="text-center mt-12">
                    <button className="group px-8 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg font-semibold text-white shadow-lg overflow-hidden relative transform hover:-translate-y-1 transition-all duration-300">
                        <span className="relative z-10">Load More Posts</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
