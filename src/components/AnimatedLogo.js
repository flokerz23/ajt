import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLogo = ({ 
  isDarkMode = true, 
  size = 'medium', 
  showText = true, 
  animationType = 'cycle',
  className = ''
}) => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Logo variations - using the clean no-background logo
  const logoVariations = {
    dark: {
      withText: '/clean-logo.svg',
      noText: '/clean-logo.svg'
    },
    light: {
      withText: '/clean-logo.svg',
      noText: '/clean-logo.svg'
    }
  };

  const currentTheme = isDarkMode ? 'dark' : 'light';
  const logoPath = showText 
    ? logoVariations[currentTheme].withText 
    : logoVariations[currentTheme].noText;

  // Size configurations
  const sizeConfig = {
    small: { width: 60, height: 60 },
    medium: { width: 80, height: 80 },
    large: { width: 160, height: 160 },
    xlarge: { width: 240, height: 240 },
    xxlarge: { width: 320, height: 320 }
  };

  const currentSize = sizeConfig[size] || sizeConfig.medium;

  // Cycle through logos on hover (for animationType: 'cycle')
  useEffect(() => {
    if (animationType === 'cycle' && isHovered) {
      const interval = setInterval(() => {
        setCurrentLogoIndex((prev) => (prev + 1) % 2);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isHovered, animationType]);

  // Get logo source based on current state
  const getLogoSrc = () => {
    if (animationType === 'cycle' && isHovered) {
      // Cycle between with text and no text versions
      return currentLogoIndex === 0 
        ? logoVariations[currentTheme].withText 
        : logoVariations[currentTheme].noText;
    }
    return logoPath;
  };

  // Advanced animation variants
  const logoVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
      rotateY: -90
    },
    animate: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.1,
      rotateY: 10,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    tap: {
      scale: 0.95,
      rotateY: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    },
    morph: {
      scale: [1, 1.2, 1],
      rotateZ: [0, 180, 360],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  // Floating particles animation
  const ParticleLogo = () => (
    <div className="relative">
      {/* Main logo */}
      <motion.img
        src={getLogoSrc()}
        alt="Logo"
        className={`${className} cursor-pointer`}
        style={{
          width: currentSize.width,
          height: currentSize.height,
          objectFit: 'contain'
        }}
        variants={logoVariants}
        initial="initial"
        animate={animationType === 'morph' ? "morph" : "animate"}
        whileHover={animationType !== 'morph' ? "hover" : {}}
        whileTap={animationType !== 'morph' ? "tap" : {}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      {/* Floating particles around logo */}
      {isHovered && animationType === 'particles' && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-70"
              initial={{ 
                x: currentSize.width / 2, 
                y: currentSize.height / 2,
                scale: 0 
              }}
              animate={{
                x: currentSize.width / 2 + Math.cos(i * 60 * Math.PI / 180) * 40,
                y: currentSize.height / 2 + Math.sin(i * 60 * Math.PI / 180) * 40,
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );

  // Glitch effect animation
  const GlitchLogo = () => (
    <div className="relative">
      <motion.img
        src={getLogoSrc()}
        alt="Logo"
        className={`${className} cursor-pointer relative z-10`}
        style={{
          width: currentSize.width,
          height: currentSize.height,
          objectFit: 'contain'
        }}
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover={{
          scale: 1.05,
          filter: [
            "hue-rotate(0deg) contrast(1)",
            "hue-rotate(90deg) contrast(1.2)",
            "hue-rotate(180deg) contrast(0.8)",
            "hue-rotate(270deg) contrast(1.1)",
            "hue-rotate(360deg) contrast(1)"
          ],
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      
      {/* Glitch layers */}
      {isHovered && animationType === 'glitch' && (
        <>
          <motion.img
            src={getLogoSrc()}
            alt="Logo Glitch"
            className={`absolute top-0 left-0 ${className}`}
            style={{
              width: currentSize.width,
              height: currentSize.height,
              objectFit: 'contain',
              filter: 'hue-rotate(120deg) contrast(1.5)'
            }}
            animate={{
              x: [-2, 2, -1, 1, 0],
              opacity: [0, 0.7, 0, 0.5, 0]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          <motion.img
            src={getLogoSrc()}
            alt="Logo Glitch"
            className={`absolute top-0 left-0 ${className}`}
            style={{
              width: currentSize.width,
              height: currentSize.height,
              objectFit: 'contain',
              filter: 'hue-rotate(240deg) contrast(0.8)'
            }}
            animate={{
              x: [2, -2, 1, -1, 0],
              opacity: [0, 0.5, 0, 0.3, 0]
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.1
            }}
          />
        </>
      )}
    </div>
  );

  // Pulse with glow effect
  const PulseLogo = () => (
    <div className="relative">
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${
            isDarkMode ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.3)'
          } 0%, transparent 70%)`,
          width: currentSize.width * 1.8,
          height: currentSize.height * 1.8,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Logo with enhanced effects */}
      <motion.img
        src={getLogoSrc()}
        alt="Logo"
        className={`${className} cursor-pointer relative z-10 drop-shadow-lg`}
        style={{
          width: currentSize.width,
          height: currentSize.height,
          objectFit: 'contain',
          filter: isDarkMode ? 'brightness(1.1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))' : 'drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))'
        }}
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover={{
          scale: 1.15,
          filter: isDarkMode 
            ? 'brightness(1.3) drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))' 
            : 'brightness(1.1) drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))',
          transition: { duration: 0.3 }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );

  // Render based on animation type
  const renderLogo = () => {
    switch (animationType) {
      case 'particles':
        return <ParticleLogo />;
      case 'glitch':
        return <GlitchLogo />;
      case 'pulse':
        return <PulseLogo />;
      case 'cycle':
      default:
        return (
          <AnimatePresence mode="wait">
            <motion.img
              key={`${currentLogoIndex}-${isDarkMode}`}
              src={getLogoSrc()}
              alt="Logo"
              className={`${className} cursor-pointer drop-shadow-lg`}
              style={{
                width: currentSize.width,
                height: currentSize.height,
                objectFit: 'contain',
                filter: isDarkMode 
                  ? 'brightness(1.1) drop-shadow(0 0 8px rgba(59, 130, 246, 0.2))' 
                  : 'drop-shadow(0 0 6px rgba(0, 0, 0, 0.1))'
              }}
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.1,
                filter: isDarkMode 
                  ? 'brightness(1.2) drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))' 
                  : 'brightness(1.05) drop-shadow(0 0 12px rgba(59, 130, 246, 0.3))',
                transition: { duration: 0.2 }
              }}
              whileTap="tap"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </AnimatePresence>
        );
    }
  };

  return (
    <div className="relative">
      {renderLogo()}
    </div>
  );
};

export default AnimatedLogo;
