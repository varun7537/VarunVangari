import React, { useState, useEffect, useRef } from 'react';
import { FaMedal, FaTrophy, FaCertificate, FaUniversity, 
        FaUserGraduate, FaAward } from 'react-icons/fa';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item'); // Select all timeline items
    timelineItems.forEach(item => observer.observe(item)); // Observe each timeline item

    // Clean up the observer when component unmounts
    return () => {
      timelineItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  const educationData = [
    {
      title: 'Masters Degree',
      institution: 'Aditya Institute of Management Studies and Research',
      period: '2024 - present',
      description: 'NA',
      achievements: [
        'NA',
        'NA',
        'NA'
      ],
      icon: FaUniversity,
      grade: '0.0 GPA',
      skills: ['NA'],
      certifications: ['NA']
    },
    {
      title: 'Bachelors Degree',
      institution: 'South Indian Education Society',
      period: '2021 - 2024',
      description: 'Computer Science major with minor in Data Science.',
      achievements: [
        'NA'
      ],
      icon: FaUserGraduate,
      grade: '6.75 CGPA',
      skills: ['Programming', 'Web Development', 'Team Leadership'],
      certifications: ['Postman API Fundamentals Student Expert', 'The Joy of Computing with Python', 'Fundamentals of Algorithms', 'Cloud Computing']
    },
    {
      title: 'HSC (11, 12th Examination)',
      institution: 'Rao Junior College of Science',
      period: '2019 - 2021',
      description: 'Science stream with focus on Computer Science and Mathematics.',
      achievements: [
        'State level Mathematics Olympiad Winner',
        'Science Exhibition First Prize',
        'Perfect score in Computer Science'
      ],
      icon: FaMedal,
      grade: '95%',
      skills: ['Mathematics', 'Physics', 'Computer Science'],
      certifications: ['Python Programming', 'Web Development Basics']
    },
    {
      title: 'SSC (10th Examination)',
      institution: "People's Welfare Society High School",
      period: '2018 - 2019',
      description: 'Strong foundation in Mathematics and Sciences with perfect attendance record.',
      achievements: [
        'State-level Kudo and Kickboxing Champion, awarded a Silver Medal.'      
      ],
      icon: FaTrophy,
      grade: '58.80%',
      skills: ['Mathematics', 'Science', 'Leadership'],
      certifications: ['Basic Programming']
    }
  ];

  return (
    <section
      ref={educationRef}
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 overflow-hidden"
    id="education">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Educational Journey
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My academic pursuit of excellence and continuous learning in the field of technology and computer science.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full"></div>

          {educationData.map((item, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-16 md:mb-24`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 rounded-full p-3 z-10">
                <item.icon className="text-2xl text-emerald-400" />
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ${visibleItems.has(index.toString()) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`}
              >
                <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 border border-white/10">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.institution}</p>
                    <p className="text-sm text-emerald-400 font-semibold">{item.period}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4">{item.description}</p>

                  {/* Grade */}
                  <div className="inline-block px-4 py-2 bg-emerald-400/10 rounded-lg text-emerald-400 font-semibold mb-4">
                    {item.grade}
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Achievements</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <FaAward className="text-emerald-400 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center px-3 py-1 bg-emerald-400/10 rounded-lg text-emerald-400 text-sm">
                          <FaCertificate className="mr-2" />
                          {cert}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
