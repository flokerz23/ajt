import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ isDarkMode }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600"></div>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-900"></div>
      </div>

      <div className="container-custom relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Transformă-ți{' '}
              <span className="gradient-text">Prezența Digitală</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Creăm site-uri web uimitoare, gestionăm campaniile tale Google Ads și producem 
              conținut video profesional care generează rezultate și îți dezvoltă afacerea.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToContact}
                className={`group/btn text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-primary-600 bg-opacity-80 backdrop-blur-sm border border-primary-500 text-white hover:bg-opacity-90 shadow-lg' 
                    : 'bg-primary-600 bg-opacity-90 backdrop-blur-sm border border-primary-500 text-white hover:bg-opacity-100 shadow-lg'
                }`}
              >
                <span className="relative z-10">Contactează-ne</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className={`group/btn text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-700 bg-opacity-80 backdrop-blur-sm border border-gray-600 text-white hover:bg-opacity-90 shadow-lg' 
                    : 'bg-gray-600 bg-opacity-90 backdrop-blur-sm border border-gray-500 text-white hover:bg-opacity-100 shadow-lg'
                }`}
              >
                <span className="relative z-10">Serviciile Noastre</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </motion.div>

          {/* Network-Style Hero Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-3xl sm:max-w-4xl mx-auto mt-16 sm:mt-2 mb-12 sm:mb-0 px-4 sm:px-0"
          >
            {/* Central "Ajutor Technologia" Card */}
            <div className="relative w-full h-52 sm:h-96 bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-800 rounded-xl sm:rounded-3xl shadow-xl flex flex-col items-center justify-center" style={{boxShadow: '0 0 24px rgba(37, 99, 235, 0.28), 0 0 48px rgba(124, 58, 237, 0.2)'}}>
              {/* Logo - Centered */}
              <div className="w-32 h-32 sm:w-64 sm:h-64 mb-0 sm:mb-0">
                <motion.img
                  src="/clean-logo.svg"
                  alt="Ajutor Technologia Logo"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
                  }}
                />
              </div>
              
              {/* Text - Centered below logo */}
              <div className="text-center px-4">
                {/* Subtitle */}
                <p className="text-xs sm:text-2xl text-white/90 font-light tracking-wide antialiased">
                  Web • Anunțuri • Video • Foto
                </p>
              </div>
            </div>

            {/* Floating Service Tags */}
            {/* Top Left */}
            <motion.div
              animate={{ y: [-4, -10, -4], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 sm:-top-6 left-2 sm:left-12 bg-purple-500/90 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-2xl shadow-xl font-semibold text-xs sm:text-sm ring-2 ring-purple-300/30"
            >
              SEO
            </motion.div>

            {/* Top Center */}
            <motion.div
              animate={{ y: [-4, -10, -4], rotate: [2, -2, 2] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-3 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-teal-500/90 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-2xl shadow-xl font-semibold text-xs sm:text-sm ring-2 ring-teal-300/30"
            >
              Analytics
            </motion.div>

            {/* Top Right */}
            <motion.div
              animate={{ y: [-4, -10, -4], rotate: [1, -1, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-3 sm:-top-6 right-2 sm:right-2 bg-blue-500/90 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-2xl shadow-xl font-semibold text-xs sm:text-sm ring-2 ring-blue-300/30"
            >
              Dezvoltare Web
            </motion.div>

            {/* Right Top */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-12 sm:top-20 -right-2 sm:-right-10 bg-cyan-500/90 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-2xl shadow-xl font-semibold text-xs sm:text-sm ring-2 ring-cyan-300/30"
            >
              Video
            </motion.div>

            {/* Right Bottom */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-12 sm:bottom-20 -right-2 sm:-right-10 bg-pink-500/90 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-2xl shadow-xl font-semibold text-xs sm:text-sm ring-2 ring-pink-300/30"
            >
              Design
            </motion.div>

            {/* Bottom Center */}
            <motion.div
              animate={{ y: [4, 10, 4], rotate: [-2, 2, -2] }}
              transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-3 sm:-bottom-6 left-1/2 transform -translate-x-1/2 bg-indigo-500/90 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-2xl shadow-xl font-semibold text-xs sm:text-sm ring-2 ring-indigo-300/30"
            >
              Branding
            </motion.div>

            {/* Left Side */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-1/2 transform -translate-y-1/2 -left-2 sm:-left-10 bg-violet-500/90 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-2xl shadow-xl font-semibold text-xs sm:text-sm ring-2 ring-violet-300/30"
            >
              Google
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile, visible on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDarkMode ? 'border-white' : 'border-gray-400'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 ${
              isDarkMode ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
