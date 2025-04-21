import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSpinner, FaPaperPlane, FaCheckCircle, FaExclamationCircle, 
        FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, 
        FaInstagram, FaClock } from 'react-icons/fa';

const ContactMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contactme-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = 'First name is required';
    if (!formData.lname.trim()) newErrors.lname = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (formData.phone && !/^\+?[\d\s-]+$/.test(formData.phone)) newErrors.phone = 'Invalid phone format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'message') {
      setCharacterCount(value.length);
    }
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here, you would typically send the form data to your backend or an API
      // Replace the following line with actual API call:
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormData({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setCharacterCount(0);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: FaPhone, title: 'Phone', content: '8104597116'},
    { icon: FaEnvelope, title: 'Email', content: 'varunvangari29@gmail.com'},
    { icon: FaMapMarkerAlt, title: 'Address', content: 'Sion Koliwada, Pratiksha Nagar, Mumbai, 400022' },
    { icon: FaClock, title: 'Working Hours', content: 'Mon - Fri: 9AM - 6PM' }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/varun-vangari-092895277/', color: 'hover:bg-blue-600' },
    { icon: FaGithub, url: 'https://github.com/varun7537', color: 'hover:bg-gray-800' },
    { icon: FaInstagram, url: 'https://www.instagram.com/varun.vangari/', color: 'hover:bg-sky-500' }
  ];

  return (
    <section 
      id="contactme-section"
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 
                text-white py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-emerald-500/10 rounded-full 
                      blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-teal-500/10 rounded-full 
                      blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`relative container mx-auto max-w-6xl transition-all duration-1000 
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to work together? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl 
                        hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-500 p-3 rounded-lg
                              group-hover:scale-110 transition-transform duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} 
                          className="text-gray-300 hover:text-emerald-400 transition-colors duration-300">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="flex justify-center space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg bg-white/5 backdrop-blur-sm 
                          transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['fname', 'lname', 'email', 'phone'].map((field) => (
                  <motion.div
                    key={field}
                    whileHover={{ scale: 1.01 }}
                    className="relative"
                  >
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className={`w-full p-3 bg-white/10 border border-white/20 rounded-lg 
                              text-white placeholder-gray-400 transition-all duration-300
                              ${errors[field] ? 'border-red-500' : 'focus:border-emerald-500'}`}
                      placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    />
                    <AnimatePresence>
                      {errors[field] && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm mt-1"
                        >
                          {errors[field]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full p-3 bg-white/10 border border-white/20 rounded-lg 
                          text-white placeholder-gray-400 transition-all duration-300
                          ${errors.subject ? 'border-red-500' : 'focus:border-emerald-500'}`}
                  placeholder="Subject"
                />
                <AnimatePresence>
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full p-3 bg-white/10 border border-white/20 rounded-lg 
                          text-white placeholder-gray-400 transition-all duration-300
                          ${errors.message ? 'border-red-500' : 'focus:border-emerald-500'}`}
                  placeholder="Your Message"
                />
                <div className="flex justify-between mt-1">
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <span className="text-sm text-gray-400">
                    {characterCount} characters
                  </span>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full p-4 rounded-lg font-medium flex items-center justify-center 
                          space-x-2 bg-gradient-to-r from-emerald-400 to-teal-500 
                          hover:from-emerald-500 hover:to-teal-600 transition-all duration-300
                          ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <FaSpinner className="animate-spin" size={20} />
                ) : (
                  <>
                    <FaPaperPlane size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`p-4 rounded-lg flex items-center space-x-2
                            ${submitStatus === 'success' 
                              ? 'bg-emerald-500/20 text-emerald-400' 
                              : 'bg-red-500/20 text-red-400'}`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FaCheckCircle size={20} />
                        <span>Message sent successfully!</span>
                      </>
                    ) : (
                      <>
                        <FaExclamationCircle size={20} />
                        <span>Failed to send message. Please try again.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
