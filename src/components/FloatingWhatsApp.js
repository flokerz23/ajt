import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp = ({ isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Salut! Am nevoie de ajutor cu serviciile voastre digitale.";
    const phoneNumber = "40728518802";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Main WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Button Background */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 shadow-2xl overflow-hidden">
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600"
            animate={{
              background: isHovered 
                ? "linear-gradient(135deg, #4ade80, #22c55e, #16a34a)"
                : "linear-gradient(135deg, #22c55e, #16a34a, #15803d)"
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            animate={{
              x: isHovered ? ["-100%", "100%"] : "-100%"
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut"
            }}
          />
          
          {/* WhatsApp Icon */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-lg" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
        </div>

        {/* Pulse Animation Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-400"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Second Pulse Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-300"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute right-16 top-1/2 transform -translate-y-1/2"
          >
            <div className={`relative px-4 py-2 rounded-lg shadow-lg ${
              isDarkMode 
                ? 'bg-gray-800 text-white border border-gray-700' 
                : 'bg-white text-gray-900 border border-gray-200'
            }`}>
              <div className="text-sm font-semibold whitespace-nowrap">
                Contactează-ne pe WhatsApp
              </div>
              <div className="text-xs opacity-75">
                +40 (728) 518 802
              </div>
              
              {/* Tooltip Arrow */}
              <div className={`absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                isDarkMode 
                  ? 'border-l-gray-800' 
                  : 'border-l-white'
              }`} style={{
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: `6px solid ${isDarkMode ? '#1f2937' : '#ffffff'}`
              }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile-specific notification badge */}
      <motion.div
        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center sm:hidden"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-xs text-white font-bold">!</span>
      </motion.div>
    </motion.div>
  );
};

export default FloatingWhatsApp;
