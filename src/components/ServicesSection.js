import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServicesSection = ({ isDarkMode, pageTransition }) => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const services = [
    {
      title: 'Dezvoltare Web',
      description: 'Site-uri web moderne și aplicații responsive construite cu tehnologii de vârf.',
      features: ['Design Responsive', 'Optimizare SEO', 'Mobile-First'],
      color: 'from-blue-500 to-blue-600',
      backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      slug: 'dezvoltare-web'
    },
    {
      title: 'Gestionare Google Ads',
      description: 'Campanii Google Ads strategice care maximizează ROI-ul și generează trafic calificat.',
      features: ['Configurare Campanii', 'Optimizare Anunțuri', 'Urmărire Performanță'],
      color: 'from-green-500 to-green-600',
      backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      slug: 'gestionare-google-ads'
    },
    {
      title: 'Video & Fotografie',
      description: 'Conținut vizual profesional de înaltă calitate pentru marca ta.',
      features: ['Fotografie Produse', 'Videoclipuri Corporate', 'Sesiuni Brand'],
      color: 'from-purple-500 to-purple-600',
      backgroundImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      slug: 'video-fotografie'
    },
    {
      title: 'Editare Video & Foto',
      description: 'Post-producție expertă cu editare profesională și efecte vizuale.',
      features: ['Color Grading', 'Grafică în Mișcare', 'Editare Audio'],
      color: 'from-pink-500 to-pink-600',
      backgroundImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      slug: 'editare-video-foto'
    }
  ];

  return (
    <section id="services" className={`section-padding overflow-x-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Serviciile Noastre
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Oferim soluții digitale cuprinzătoare pentru a ajuta afacerea ta să crească și să aibă succes 
            în piața competitivă de astăzi. Fiecare serviciu este personalizat pentru a îndeplini nevoile tale specifice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Enhanced Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-65 transition-all duration-500"></div>
              
              {/* Subtle Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-15 group-hover:opacity-25 transition-opacity duration-500`}></div>

              <div className="relative p-8 z-10 h-full flex flex-col">
                {/* Main Content */}
                <div className="flex-1 mb-8">
                  <h3 className="text-3xl font-black mb-4 text-white drop-shadow-2xl leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-gray-100 drop-shadow-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color} shadow-lg`}></div>
                        <span className="text-base font-bold text-white drop-shadow-md">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Glassy CTA Button */}
                <button
                  onClick={() => {
                    if (pageTransition?.triggerTransition) {
                      pageTransition.triggerTransition(`/servicii/${service.slug}`, service.slug);
                    }
                  }}
                  className="group/btn w-full py-4 px-8 rounded-2xl font-black text-lg transition-all duration-300 bg-white bg-opacity-10 backdrop-blur-md border-2 border-white border-opacity-30 text-white hover:bg-opacity-20 hover:border-opacity-50 hover:shadow-2xl hover:scale-105 active:scale-95 relative overflow-hidden"
                >
                  <span className="relative z-10 drop-shadow-lg">Vezi Detalii</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-15 transform -skew-x-12 transition-all duration-700 translate-x-[-100%] group-hover/btn:translate-x-[100%]"></div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} text-center`}
        >
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Gata să Începi?
          </h3>
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Să discutăm despre proiectul tău și să creăm o soluție personalizată care se potrivește nevoilor și bugetului tău.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className={`group/btn px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-primary-600 bg-opacity-80 backdrop-blur-sm border border-primary-500 text-white hover:bg-opacity-90 shadow-lg' 
                  : 'bg-primary-600 bg-opacity-90 backdrop-blur-sm border border-primary-500 text-white hover:bg-opacity-100 shadow-lg'
              }`}
            >
              <span className="relative z-10">Solicită Ofertă</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => setShowPhonePopup(true)}
              className={`group/btn px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-green-600 bg-opacity-80 backdrop-blur-sm border border-green-500 text-white hover:bg-opacity-90 shadow-lg' 
                  : 'bg-green-600 bg-opacity-90 backdrop-blur-sm border border-green-500 text-white hover:bg-opacity-100 shadow-lg'
              }`}
            >
              <span className="relative z-10">Sună-ne Acum</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Phone Number Popup Modal */}
      {showPhonePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`relative rounded-2xl p-8 max-w-md w-full shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPhonePopup(false)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors duration-200 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <svg className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Phone Icon */}
            <div className="text-center mb-6">
              <div className={`inline-flex p-4 rounded-full mb-4 ${isDarkMode ? 'bg-green-900' : 'bg-green-100'}`}>
                <svg className={`w-8 h-8 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Sună-ne Acum
              </h3>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Ne poți contacta la numerele de telefon:
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-4 mb-6">
              <div className={`p-4 rounded-lg border-2 ${isDarkMode ? 'bg-gray-700 border-green-800' : 'bg-green-50 border-green-200'}`}>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Telefon Principal</p>
                <p className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>+40 (728) 518 802</p>
              </div>
              <div className={`p-4 rounded-lg border-2 ${isDarkMode ? 'bg-gray-700 border-green-800' : 'bg-green-50 border-green-200'}`}>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mesaj WhatsApp</p>
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Trimite-ne un mesaj rapid</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.open('tel:+40728518802', '_self')}
                className="group/btn flex-1 backdrop-blur-md border-2 border-green-400 border-opacity-50 py-3 px-6 rounded-lg font-semibold hover:border-opacity-70 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden bg-green-400 bg-opacity-10 text-green-700 hover:bg-opacity-20"
              >
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="relative z-10">Sună Principal</span>
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => window.open('https://wa.me/40728518802?text=Salut! Am nevoie de ajutor cu serviciile voastre digitale.', '_blank')}
                className="group/btn flex-1 backdrop-blur-md border-2 border-green-500 border-opacity-50 py-3 px-6 rounded-lg font-semibold hover:border-opacity-70 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden bg-green-500 bg-opacity-10 text-green-600 hover:bg-opacity-20"
              >
                <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span className="relative z-10">WhatsApp</span>
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => setShowPhonePopup(false)}
                className={`group/btn flex-1 backdrop-blur-md border-2 py-3 px-6 rounded-lg font-semibold hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-white bg-opacity-5 border-white border-opacity-20 text-white hover:bg-opacity-15 hover:border-opacity-40' 
                    : 'bg-black bg-opacity-5 border-black border-opacity-20 text-gray-700 hover:bg-opacity-15 hover:border-opacity-40'
                }`}
              >
                <span className="relative z-10">Închide</span>
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-white' : 'bg-black'} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300`}></div>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
