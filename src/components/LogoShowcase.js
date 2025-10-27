import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

const LogoShowcase = ({ isDarkMode, variant = 'floating' }) => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const animations = ['cycle', 'particles', 'glitch', 'pulse', 'morph'];

  // Cycle through different animation types
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % animations.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Floating logos variant
  const FloatingLogos = () => (
    <div className="relative w-full h-96 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 360, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <AnimatedLogo
            isDarkMode={isDarkMode}
            size="medium"
            showText={i % 2 === 0}
            animationType={animations[i % animations.length]}
          />
        </motion.div>
      ))}
    </div>
  );

  // Interactive logo that follows mouse
  const InteractiveLogo = () => (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 30,
        y: mousePosition.y - 30,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
    >
      <AnimatedLogo
        isDarkMode={isDarkMode}
        size="small"
        showText={false}
        animationType="glitch"
      />
    </motion.div>
  );

  // Logo morphing showcase
  const LogoMorphing = () => (
    <div className="flex justify-center items-center h-64">
      <motion.div
        key={currentAnimation}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <AnimatedLogo
          isDarkMode={isDarkMode}
          size="xlarge"
          showText={true}
          animationType={animations[currentAnimation]}
        />
      </motion.div>
    </div>
  );

  // Logo grid showcase
  const LogoGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
      {animations.map((animation, index) => (
        <motion.div
          key={animation}
          className="flex flex-col items-center space-y-4 p-6 rounded-2xl border-2 border-transparent hover:border-blue-500 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <AnimatedLogo
            isDarkMode={isDarkMode}
            size="medium"
            showText={false}
            animationType={animation}
          />
          <span className={`text-sm font-medium capitalize ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {animation}
          </span>
        </motion.div>
      ))}
    </div>
  );

  // Particle system with logos
  const ParticleSystem = () => (
    <div className="relative w-full h-96 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 400,
            scale: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * 400,
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <AnimatedLogo
            isDarkMode={isDarkMode}
            size="small"
            showText={Math.random() > 0.5}
            animationType="particles"
          />
        </motion.div>
      ))}
    </div>
  );

  // 3D rotating logo
  const Rotating3DLogo = () => (
    <div className="flex justify-center items-center h-64 perspective-1000">
      <motion.div
        className="transform-gpu"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <AnimatedLogo
          isDarkMode={isDarkMode}
          size="xlarge"
          showText={true}
          animationType="morph"
        />
      </motion.div>
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'floating':
        return <FloatingLogos />;
      case 'interactive':
        return <InteractiveLogo />;
      case 'morphing':
        return <LogoMorphing />;
      case 'grid':
        return <LogoGrid />;
      case 'particles':
        return <ParticleSystem />;
      case '3d':
        return <Rotating3DLogo />;
      default:
        return <LogoMorphing />;
    }
  };

  return (
    <div className="relative">
      {renderVariant()}
    </div>
  );
};

export default LogoShowcase;


