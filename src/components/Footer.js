import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Dezvoltare Web', href: '#services' },
      { name: 'Gestionare Google Ads', href: '#services' },
      { name: 'Video & Fotografie', href: '#services' },
      { name: 'Editare Video & Foto', href: '#services' }
    ],
    company: [
      { name: 'Despre Noi', href: '#about' },
      { name: 'Echipa Noastră', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'Politica de Confidențialitate', href: '/privacy-policy' },
      { name: 'Termeni și Condiții', href: '/terms-of-service' },
      { name: 'Politica de Cookie-uri', href: '/cookie-policy' }
    ]
  };


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`overflow-x-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/clean-logo.svg" 
                  alt="Ajutor Technologia Logo" 
                  className="w-20 h-20"
                />
                <span className="text-2xl font-bold uppercase tracking-wide">Ajutor Technologia</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ajutăm afacerile să își transforme prezența digitală cu dezvoltare web inovatoare, 
                marketing și servicii creative.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Servicii</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Companie</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Suport</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Ajutor Technologia. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Politica de Confidențialitate
              </a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">
                Termeni și Condiții
              </a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Politica de Cookie-uri
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
