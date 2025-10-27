import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = ({ isDarkMode, toggleDarkMode, pageTransition }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're not on the main page, navigate to main page first
    if (location.pathname !== '/') {
      if (pageTransition?.triggerTransition) {
        pageTransition.triggerTransition('/', 'default');
      } else {
        navigate('/', { state: { scrollTo: sectionId } });
      }
    } else {
      // If we're on the main page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    // If we're not on the main page, navigate to main page first
    if (location.pathname !== '/') {
      if (pageTransition?.triggerTransition) {
        pageTransition.triggerTransition('/', 'default');
      } else {
        navigate('/', { state: { scrollTo: 'home' } });
      }
    } else {
      // If we're on the main page, scroll directly to hero section
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg`
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={handleHomeClick}
          >
            <motion.img
              src="/clean-logo.svg"
              alt="Ajutor Technologia Logo"
              className="w-32 h-32 sm:w-28 sm:h-28 md:w-32 md:h-32 py-8"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.span 
              className={`-ml-2 sm:-ml-3 md:-ml-4 text-lg sm:text-xl md:text-2xl font-bold uppercase transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              whileHover={{ scale: 1.05 }}
            >
              Ajutor Technologia
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Acasă
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Despre Noi
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Servicii
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-600'
            }`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${isDarkMode ? 'border-gray-700 bg-gray-900/95 backdrop-blur-md' : 'border-gray-200 bg-white/95 backdrop-blur-md'}`}
          >
            <div className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`block w-full text-left font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Acasă
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Despre Noi
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`block w-full text-left font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Servicii
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`block w-full text-left font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
