import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    website: '' // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [gdprConsent, setGdprConsent] = useState(false);

  // Rate limiting configuration (60 seconds cooldown)
  const RATE_LIMIT_COOLDOWN = 60 * 1000; // 60 seconds in milliseconds
  const STORAGE_KEY = 'contactFormLastSubmission';

  // Input sanitization function
  const sanitizeInput = (input) => {
    if (typeof input !== 'string') return '';
    
    // Remove potentially dangerous characters and trim
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/\0/g, '') // Remove null bytes
      .replace(/[\x00-\x1F\x7F]/g, ''); // Remove control characters
  };

  // Sanitize email - more permissive for email format
  const sanitizeEmail = (email) => {
    if (typeof email !== 'string') return '';
    return email.trim().toLowerCase();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Don't allow changes to honeypot field through UI
    if (name === 'website') return;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Check rate limiting
  const checkRateLimit = () => {
    const lastSubmission = localStorage.getItem(STORAGE_KEY);
    if (!lastSubmission) return null;
    
    const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission, 10);
    if (timeSinceLastSubmission < RATE_LIMIT_COOLDOWN) {
      const secondsRemaining = Math.ceil((RATE_LIMIT_COOLDOWN - timeSinceLastSubmission) / 1000);
      return secondsRemaining;
    }
    
    return null;
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Check honeypot field - if filled, it's a bot
    if (formData.website && formData.website.trim() !== '') {
      // Silently reject without showing error (bot detected)
      return { bot: true };
    }
    
    // Check rate limiting
    const rateLimitError = checkRateLimit();
    if (rateLimitError) {
      newErrors.rateLimit = `Te rugăm să aștepți ${rateLimitError} secunde înainte de a trimite din nou.`;
      return newErrors;
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Numele nu poate depăși 100 de caractere';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-ul nu este valid';
    } else if (formData.email.length > 254) {
      newErrors.email = 'Email-ul nu poate depăși 254 de caractere';
    }
    
    if (formData.phone && formData.phone.length > 20) {
      newErrors.phone = 'Numărul de telefon nu poate depăși 20 de caractere';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mesajul este obligatoriu';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mesajul trebuie să aibă cel puțin 10 caractere';
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Mesajul nu poate depăși 2000 de caractere';
    }
    
    if (!gdprConsent) {
      newErrors.gdpr = 'Trebuie să acceptați prelucrarea datelor personale';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const formErrors = validateForm();
    
    // Check if bot was detected (honeypot filled)
    if (formErrors.bot) {
      // Silently reject - don't show error to bot, but don't submit
      setSubmitStatus(null);
      return;
    }
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Sanitize all inputs before sending
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeEmail(formData.email),
        phone: formData.phone ? sanitizeInput(formData.phone) : 'Nu a fost specificat',
        message: sanitizeInput(formData.message),
      };
      
      // EmailJS configuration
      const serviceId = 'service_8tyhlwt';
      const templateId = 'template_iuigl1b'; 
      const publicKey = 'c94WFrwW_FzUwmLQG';
      
      const templateParams = {
        name: sanitizedData.name,
        email: sanitizedData.email,
        phone: sanitizedData.phone,
        message: sanitizedData.message,
      };
      
      // Only log in development mode
      if (process.env.NODE_ENV === 'development') {
        console.log('Sending email with params:', templateParams);
      }
      
      // Initialize EmailJS with public key
      emailjs.init(publicKey);
      
      const result = await emailjs.send(serviceId, templateId, templateParams);
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Email sent successfully:', result);
      }
      
      // Store submission timestamp for rate limiting
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', phone: '', website: '' });
      setErrors({});
      setGdprConsent(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('EmailJS Error:', error);
        console.error('Error Text:', error.text);
        console.error('Error Status:', error.status);
      }
      
      // Show generic error message in production, specific in development
      if (process.env.NODE_ENV === 'development' && error.text) {
        alert(`EmailJS Error: ${error.text}`);
      }
      
      setSubmitStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: 'Telefon',
      details: '+40 (728) 518 802'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: 'Email',
      details: 'office@ajutortechnologia.ro'
    }
  ];

  return (
    <section id="contact" className={`section-padding overflow-x-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Contactează-ne
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Gata să începi următorul tău proiect? Așteptăm să ne contactezi. 
            Trimite-ne un mesaj și îți vom răspunde cât mai repede posibil.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Trimite-ne un Mesaj
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users, visible to bots */}
              <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                <label htmlFor="website">Website (leave blank)</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Numele Complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : isDarkMode 
                        ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Numele tău complet"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Adresa de Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : isDarkMode 
                        ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="emailul.tau@exemplu.ro"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Telefon (opțional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={20}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.phone
                      ? 'border-red-500 focus:ring-red-500'
                      : isDarkMode 
                        ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="+40 123 456 789"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Mesajul *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}

                  maxLength={2000}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : isDarkMode 
                        ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Spune-ne despre proiectul tău..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* GDPR Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="gdpr-consent"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <label htmlFor="gdpr-consent" className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Sunt de acord cu prelucrarea datelor mele personale conform{' '}
                  <a 
                    href="/privacy-policy" 
                    className="text-primary-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Politicii de Confidențialitate
                  </a>
                  {' '}și accept{' '}
                  <a 
                    href="/terms-of-service" 
                    className="text-primary-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Termenii și Condițiile
                  </a>
                  . *
                </label>
              </div>
              {errors.gdpr && (
                <p className="text-sm text-red-500">{errors.gdpr}</p>
              )}
              {errors.rateLimit && (
                <p className="text-sm text-red-500">{errors.rateLimit}</p>
              )}

              {/* Advertising Disclaimer */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                      Informații despre Publicitate
                    </h4>
                    <p className={`text-xs mt-1 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                      Datele furnizate pot fi folosite pentru campanii publicitare personalizate pe Google, 
                      Facebook și alte platforme. Puteți retrage consimțământul oricând prin{' '}
                      <a 
                        href="/privacy-policy" 
                        className="underline hover:no-underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Politica de Confidențialitate
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                  isSubmitting
                    ? 'bg-gray-400 bg-opacity-50 cursor-not-allowed backdrop-blur-sm text-gray-600'
                    : isDarkMode
                      ? 'bg-primary-600 bg-opacity-80 backdrop-blur-sm border border-primary-500 text-white hover:bg-opacity-90 hover:shadow-xl hover:scale-105 active:scale-95 shadow-lg'
                      : 'bg-primary-600 bg-opacity-90 backdrop-blur-sm border border-primary-500 text-white hover:bg-opacity-100 hover:shadow-xl hover:scale-105 active:scale-95 shadow-lg'
                }`}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Se trimite...' : 'Trimite Mesajul'}
                </span>
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                >
                  ✅ Mulțumim! Mesajul tău a fost trimis cu succes. Îți vom răspunde în cel mai scurt timp.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                >
                  ❌ A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou sau să ne contactezi direct.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Informații de Contact
              </h3>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Suntem aici să te ajutăm! Ne poți contacta prin oricare dintre canalele de mai jos, 
                și îți vom răspunde în cel mai scurt timp.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-start space-x-4 p-6 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}
                >
                  <div className="text-primary-600 flex-shrink-0 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {info.title}
                    </h4>
                    <p className={`whitespace-pre-line ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {info.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
