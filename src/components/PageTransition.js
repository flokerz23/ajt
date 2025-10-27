import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

const PageTransition = ({ children, isDarkMode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionColor, setTransitionColor] = useState('');
  const [logoSize, setLogoSize] = useState('small');
  const [logoAnimation, setLogoAnimation] = useState('cycle');
  const [fillOrigin, setFillOrigin] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  // Color mapping using the exact dark blue color
  const serviceColors = {
    'dezvoltare-web': '#1A202C', // exact dark blue color
    'gestionare-google-ads': '#1A202C', // exact dark blue color
    'video-fotografie': '#1A202C', // exact dark blue color  
    'editare-video-foto': '#1A202C', // exact dark blue color
    'default': '#1A202C' // exact dark blue color
  };

  // Logo animation mapping for different services
  const serviceAnimations = {
    'dezvoltare-web': 'pulse',
    'gestionare-google-ads': 'glitch',
    'video-fotografie': 'particles',
    'editare-video-foto': 'morph',
    'default': 'cycle'
  };

  // Function to trigger page transition
  const triggerTransition = (path, serviceType = 'default') => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTransitionColor(serviceColors[serviceType] || serviceColors.default);
    setLogoAnimation(serviceAnimations[serviceType] || serviceAnimations.default);

    // Set random corner for fill origin
    const corners = [
      { x: 0, y: 0 }, // top-left
      { x: 1, y: 0 }, // top-right
      { x: 0, y: 1 }, // bottom-left
      { x: 1, y: 1 }  // bottom-right
    ];
    const randomCorner = corners[Math.floor(Math.random() * corners.length)];
    setFillOrigin(randomCorner);

    // Start with small logo
    setLogoSize('small');

    // Animate logo growth smoothly
    setTimeout(() => {
      setLogoSize('large');
    }, 200);

    // Navigate after logo animation completes
    setTimeout(() => {
      navigate(path);
    }, 900);

    // Reset transition state
    setTimeout(() => {
      setIsTransitioning(false);
      setLogoSize('small');
      setTransitionColor('');
    }, 1800);
  };

  // Ultra smooth animation variants
  const logoVariants = {
    initial: { 
      scale: 0.3, 
      opacity: 0,
      y: 20
    },
    pop: { 
      scale: [0.3, 1.05, 1], 
      opacity: [0, 1, 1],
      y: [20, -10, 0],
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1], // Ultra smooth easing
        times: [0, 0.6, 1]
      }
    },
    grow: { 
      scale: [1, 1.8, 3.5],
      opacity: [1, 0.8, 0],
      transition: { 
        duration: 1.0, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }
    }
  };

  // Provide transition function to children
  const contextValue = {
    triggerTransition,
    isTransitioning
  };

  return (
    <>
      {/* Page Transition Overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Color Fill Background - starts from corner */}
            <motion.div
              className="absolute inset-0"
              style={{ 
                backgroundColor: transitionColor,
                transformOrigin: `${fillOrigin.x === 0 ? 'left' : 'right'} ${fillOrigin.y === 0 ? 'top' : 'bottom'}`,
                clipPath: fillOrigin.x === 0 && fillOrigin.y === 0 
                  ? 'circle(0% at 0% 0%)' 
                  : fillOrigin.x === 1 && fillOrigin.y === 0
                  ? 'circle(0% at 100% 0%)'
                  : fillOrigin.x === 0 && fillOrigin.y === 1
                  ? 'circle(0% at 0% 100%)'
                  : 'circle(0% at 100% 100%)'
              }}
              animate={{
                clipPath: fillOrigin.x === 0 && fillOrigin.y === 0 
                  ? 'circle(150% at 0% 0%)' 
                  : fillOrigin.x === 1 && fillOrigin.y === 0
                  ? 'circle(150% at 100% 0%)'
                  : fillOrigin.x === 0 && fillOrigin.y === 1
                  ? 'circle(150% at 0% 100%)'
                  : 'circle(150% at 100% 100%)'
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5
              }}
            />

            {/* Logo Animation - centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                variants={logoVariants}
                initial="initial"
                animate={["pop", "grow"]}
                style={{ willChange: 'transform, opacity' }}
              >
                <AnimatedLogo
                  isDarkMode={isDarkMode}
                  size={logoSize}
                  showText={false}
                  animationType={logoAnimation}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative">
        {React.cloneElement(children, { pageTransition: contextValue })}
      </div>
    </>
  );
};

export default PageTransition;
