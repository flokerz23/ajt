import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const ServicePage = ({ pageTransition }) => {
  const { serviceSlug } = useParams();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [serviceSlug]);

  // Service data with detailed information and pricing
  const servicesData = {
    'dezvoltare-web': {
      title: 'Dezvoltare Web',
      subtitle: 'Site-uri web moderne si aplicatii responsive',
      description: 'Transformam ideile tale in realitate digitala cu site-uri web moderne, responsive si optimizate pentru performanta. Folosim cele mai noi tehnologii web pentru a crea experiente utilizator exceptionale si rezultate masurabile.',
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      color: 'from-blue-500 to-blue-600',
      pricingExamples: [
        {
          name: 'Site Simplu',
          price: '500-800 RON',
          description: '3-5 pagini, design modern, responsive'
        },
        {
          name: 'Site Business',
          price: '1200-2000 RON',
          description: '8-12 pagini, funcționalități avansate, SEO'
        },
        {
          name: 'Site Complex',
          price: '2500+ RON',
          description: 'E-commerce, aplicații custom, integrare API'
        }
      ],
      features: [
        {
          title: 'Design Responsive',
          description: 'Site-uri care arată perfect pe toate dispozitivele - desktop, tablet și mobil'
        },
        {
          title: 'Optimizare SEO',
          description: 'Optimizăm site-ul pentru motoarele de căutare pentru vizibilitate maximă'
        },
        {
          title: 'Mobile-First',
          description: 'Strategia mobile-first asigură o experiență optimă pe dispozitive mobile'
        },
        {
          title: 'Performanță Rapidă',
          description: 'Site-uri ultra-rapide care încarcă în sub 3 secunde'
        },
        {
          title: 'Securitate Avansată',
          description: 'Protecție completă cu certificate SSL și sisteme de securitate'
        },
        {
          title: 'Suport 24/7',
          description: 'Asistență tehnică disponibilă 24/7 pentru întreținere și actualizări'
        }
      ],
      packages: [
        {
          name: 'Site Informativ',
          price: '500',
          currency: 'RON',
          duration: '2-3 săptămâni',
          features: [
            'Design personalizat',
            'Până la 5 pagini',
            'Design responsive',
            'Optimizare SEO de bază',
            'Integrare Google Analytics',
            'Suport 30 zile'
          ],
          popular: false
        },
        {
          name: 'Site Business',
          price: '1200',
          currency: 'RON',
          duration: '3-4 săptămâni',
          features: [
            'Design premium personalizat',
            'Până la 10 pagini',
            'Design responsive avansat',
            'Optimizare SEO completă',
            'Integrare Google Analytics',
            'Formular de contact',
            'Integrare social media',
            'Suport 60 zile',
            'Înregistrare domeniu inclus'
          ],
          popular: true
        },
        {
          name: 'Site E-commerce',
          price: '2500',
          currency: 'RON',
          duration: '4-6 săptămâni',
          features: [
            'Design premium personalizat',
            'Pagină de produse nelimitată',
            'Sistem de plată online',
            'Gestionare inventar',
            'Optimizare SEO completă',
            'Integrare Google Analytics',
            'Certificat SSL inclus',
            'Suport 90 zile',
            'Înregistrare domeniu inclus'
          ],
          popular: false
        }
      ],
      process: [
        {
          step: '1',
          title: 'Consultare & Planificare',
          description: 'Discutăm nevoile tale, obiectivele și bugetul pentru a crea un plan personalizat'
        },
        {
          step: '2',
          title: 'Design & Prototip',
          description: 'Creăm un design unic și un prototip interactiv pentru aprobare'
        },
        {
          step: '3',
          title: 'Dezvoltare',
          description: 'Programăm site-ul folosind cele mai noi tehnologii web'
        },
        {
          step: '4',
          title: 'Testare & Lansare',
          description: 'Testăm totul și lansăm site-ul live cu suport complet'
        }
      ]
    },
    'gestionare-google-ads': {
      title: 'Gestionare Google Ads',
      subtitle: 'Campanii Google Ads strategice pentru rezultate maxime',
      description: 'Gestionam campaniile tale Google Ads cu strategii dovedite care maximizeaza ROI-ul si genereaza trafic de calitate. Monitorizam performanta zilnic si optimizam continuu pentru rezultate superioare.',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-green-500 to-green-600',
      pricingExamples: [
        {
          name: 'Campanii Mici',
          price: '800-1500 RON/lună',
          description: '1-3 campanii, buget până la 5000 RON'
        },
        {
          name: 'Campanii Medii',
          price: '1500-3000 RON/lună',
          description: '3-8 campanii, buget până la 15000 RON'
        },
        {
          name: 'Campanii Enterprise',
          price: '3000+ RON/lună',
          description: 'Campanii nelimitate, buget nelimitat'
        }
      ],
      features: [
        {
          title: 'Configurare Campanii',
          description: 'Setăm campanii optimizate pentru obiectivele tale specifice'
        },
        {
          title: 'Optimizare Anunțuri',
          description: 'Creăm anunțuri atractive care convertesc vizitatorii în clienți'
        },
        {
          title: 'Urmărire Performanță',
          description: 'Monitorizăm zilnic performanța și facem optimizări necesare'
        },
        {
          title: 'Targeting Avansat',
          description: 'Strategii de targeting precise pentru audiența ta ideală'
        },
        {
          title: 'Raportare Detaliată',
          description: 'Rapoarte lunare cu analize detaliate și recomandări'
        },
        {
          title: 'Optimizare Continuă',
          description: 'Îmbunătățiri constante pentru performanță maximă'
        }
      ],
      packages: [
        {
          name: 'Starter',
          price: '800',
          currency: 'RON',
          duration: 'lunar',
          features: [
            'Până la 2 campanii',
            'Configurare completă',
            'Optimizare săptămânală',
            'Raportare lunară',
            'Suport email',
            'Până la 5000 RON buget lunar'
          ],
          popular: false
        },
        {
          name: 'Business',
          price: '1500',
          currency: 'RON',
          duration: 'lunar',
          features: [
            'Până la 5 campanii',
            'Configurare completă',
            'Optimizare zilnică',
            'Raportare săptămânală',
            'Suport telefon & email',
            'Până la 15000 RON buget lunar',
            'A/B testing anunțuri'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: '3000',
          currency: 'RON',
          duration: 'lunar',
          features: [
            'Campanii nelimitate',
            'Configurare completă',
            'Optimizare zilnică',
            'Raportare zilnică',
            'Suport priorititar 24/7',
            'Buget nelimitat',
            'A/B testing avansat',
            'Integrare CRM'
          ],
          popular: false
        }
      ],
      process: [
        {
          step: '1',
          title: 'Analiză & Strategie',
          description: 'Analizăm piața, concurența și obiectivele pentru o strategie personalizată'
        },
        {
          step: '2',
          title: 'Configurare Campanii',
          description: 'Creăm și configurăm campaniile Google Ads optimizate'
        },
        {
          step: '3',
          title: 'Lansare & Monitorizare',
          description: 'Lansăm campaniile și monitorizăm performanța zilnic'
        },
        {
          step: '4',
          title: 'Optimizare & Raportare',
          description: 'Optimizăm continuu și oferim rapoarte detaliate cu rezultate'
        }
      ]
    },
    'video-fotografie': {
      title: 'Video & Fotografie',
      subtitle: 'Continut vizual profesional pentru marca ta',
      description: 'Cream continut vizual de impact care spune povestea brandului tau. De la fotografie de produse la videoclipuri corporate, oferim solutii complete de marketing vizual care atrag atentia si convertesc.',
      heroImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      color: 'from-purple-500 to-purple-600',
      pricingExamples: [
        {
          name: 'Fotografie Produse',
          price: '300-500 RON/sesiune',
          description: 'Până la 10 produse, retușare inclusă'
        },
        {
          name: 'Video Promotional',
          price: '800-1500 RON/video',
          description: 'Video până la 60 secunde, editare profesională'
        },
        {
          name: 'Pachet Complet',
          price: '1500-3000 RON/proiect',
          description: 'Fotografie + video + conținut social media'
        }
      ],
      features: [
        {
          title: 'Fotografie Produse',
          description: 'Fotografii profesionale de produse care le fac să arate perfect'
        },
        {
          title: 'Videoclipuri Corporate',
          description: 'Video-uri corporative care prezintă afacerea ta în cel mai bun mod'
        },
        {
          title: 'Sesiuni Brand',
          description: 'Sesiuni foto/video personalizate pentru identitatea ta de brand'
        },
        {
          title: 'Conținut Social Media',
          description: 'Conținut optimizat pentru platformele de social media'
        },
        {
          title: 'Echipamente Profesionale',
          description: 'Folosim echipamente de top pentru rezultate de calitate profesională'
        },
        {
          title: 'Livrare Rapidă',
          description: 'Livrăm materialele finale în termenele stabilite'
        }
      ],
      packages: [
        {
          name: 'Fotografie Produse',
          price: '300',
          currency: 'RON',
          duration: 'per sesiune',
          features: [
            'Până la 10 produse',
            'Fotografii în multiple unghiuri',
            'Fundal alb simplu',
            'Retușare de bază',
            'Livrare în 3 zile',
            'Format JPG HD'
          ],
          popular: false
        },
        {
          name: 'Video Promotional',
          price: '800',
          currency: 'RON',
          duration: 'per video',
          features: [
            'Video până la 60 secunde',
            'Filmare profesională',
            'Editare de bază',
            'Muzică de fundal',
            'Livrare în 5 zile',
            'Format MP4 HD'
          ],
          popular: true
        },
        {
          name: 'Pachet Complet',
          price: '1500',
          currency: 'RON',
          duration: 'per proiect',
          features: [
            'Fotografie produse (20 produse)',
            'Video promotional (90 secunde)',
            'Conținut social media (10 posts)',
            'Retușare profesională',
            'Editare video avansată',
            'Livrare în 7 zile',
            'Toate formatele incluse'
          ],
          popular: false
        }
      ],
      process: [
        {
          step: '1',
          title: 'Briefing & Planificare',
          description: 'Discutăm conceptul, stilul și obiectivele pentru planificarea sesiunii'
        },
        {
          step: '2',
          title: 'Filmare/Fotografiere',
          description: 'Sesiunea de filmare sau fotografiere cu echipamente profesionale'
        },
        {
          step: '3',
          title: 'Post-producție',
          description: 'Editare, retușare și optimizare pentru rezultatul final'
        },
        {
          step: '4',
          title: 'Livrare & Feedback',
          description: 'Livrăm materialele finale și incorporăm feedback-ul pentru ajustări'
        }
      ]
    },
    'editare-video-foto': {
      title: 'Editare Video & Foto',
      subtitle: 'Post-productie experta cu editare profesionala',
      description: 'Transformam materialul tau raw in continut vizual de impact. De la editare foto la post-productie video, oferim servicii complete de editare cu efecte profesionale si optimizare pentru toate platformele.',
      heroImage: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      color: 'from-pink-500 to-pink-600',
      pricingExamples: [
        {
          name: 'Editare Foto',
          price: '20-50 RON/fotografie',
          description: 'Retușare profesională, ajustări de culoare'
        },
        {
          name: 'Editare Video',
          price: '100-200 RON/minut',
          description: 'Editare profesională, efecte speciale'
        },
        {
          name: 'Post-producție Premium',
          price: '200-400 RON/minut',
          description: 'Color grading, efecte avansate, grafică în mișcare'
        }
      ],
      features: [
        {
          title: 'Color Grading',
          description: 'Ajustări profesionale de culoare pentru un look cinematic'
        },
        {
          title: 'Grafică în Mișcare',
          description: 'Animații și efecte grafice care fac conținutul să prindă viață'
        },
        {
          title: 'Editare Audio',
          description: 'Optimizare audio profesională și sincronizare perfectă'
        },
        {
          title: 'Retușare Foto',
          description: 'Retușare profesională de fotografii pentru rezultate perfecte'
        },
        {
          title: 'Efecte Speciale',
          description: 'Efecte vizuale avansate și transiții cinematice'
        },
        {
          title: 'Optimizare Platformă',
          description: 'Optimizare specifică pentru fiecare platformă (YouTube, Instagram, etc.)'
        }
      ],
      packages: [
        {
          name: 'Editare Foto',
          price: '50',
          currency: 'RON',
          duration: 'per fotografie',
          features: [
            'Retușare de bază',
            'Ajustări de culoare',
            'Corectare expunere',
            'Îndepărtare imperfecțiuni',
            'Livrare în 24h',
            'Format JPG HD'
          ],
          popular: false
        },
        {
          name: 'Editare Video',
          price: '200',
          currency: 'RON',
          duration: 'per minut final',
          features: [
            'Editare de bază',
            'Transiții simple',
            'Ajustări de culoare',
            'Muzică de fundal',
            'Livrare în 3 zile',
            'Format MP4 HD'
          ],
          popular: true
        },
        {
          name: 'Post-producție Premium',
          price: '400',
          currency: 'RON',
          duration: 'per minut final',
          features: [
            'Editare avansată',
            'Color grading profesional',
            'Efecte speciale',
            'Grafică în mișcare',
            'Editare audio profesională',
            'Livrare în 5 zile',
            'Toate formatele incluse'
          ],
          popular: false
        }
      ],
      process: [
        {
          step: '1',
          title: 'Analiză Material',
          description: 'Analizăm materialul primit și planificăm procesul de editare'
        },
        {
          step: '2',
          title: 'Editare & Efecte',
          description: 'Aplicăm editarea și efectele conform brief-ului și stilului dorit'
        },
        {
          step: '3',
          title: 'Revizuire & Feedback',
          description: 'Prezentăm versiunea preliminară și incorporăm feedback-ul'
        },
        {
          step: '4',
          title: 'Finalizare & Livrare',
          description: 'Finalizăm versiunea finală și livrăm în formatele cerute'
        }
      ]
    }
  };

  const service = servicesData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Serviciu negăsit</h1>
          <Link to="/" className="text-blue-600 hover:underline">Înapoi la pagina principală</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} pageTransition={pageTransition} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service.heroImage})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.div>
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {service.title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {service.subtitle}
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Ce Include Serviciul
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" style={{gridAutoRows: 'minmax(180px, auto)'}}>
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`group relative rounded-3xl cursor-pointer transition-all duration-500 overflow-hidden backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl hover:scale-105 ${
                  // Mobile: all cards same size, Desktop: dynamic layout
                  index === 0 ? 'col-span-1 row-span-1 sm:row-span-2 p-6 sm:p-10' : // "Configurare Campanii" card
                  index === 1 ? 'col-span-1 row-span-1 p-6 sm:p-8' : // "Optimizare Anunțuri" card
                  index === 2 ? 'col-span-1 row-span-1 p-6 sm:p-8' : // "Urmărire Performanță" card
                  index === 3 ? 'col-span-1 row-span-1 sm:row-span-2 p-6 sm:p-10' : // "Raportare Detaliată" card
                  index === 4 ? 'col-span-1 row-span-1 p-6 sm:p-8' : // "Optimizare Continuă" card
                  'col-span-1 row-span-1 p-6 sm:p-8' // "Targeting Avansat" card
                } ${
                  // All services use consistent muted colors
                  service.color === 'from-blue-500 to-blue-600' ? 'bg-gradient-to-br from-slate-400/45 to-slate-500/45' :
                  service.color === 'from-green-500 to-green-600' ? 'bg-gradient-to-br from-slate-400/45 to-slate-500/45' :
                  service.color === 'from-purple-500 to-purple-600' ? 'bg-gradient-to-br from-slate-400/45 to-slate-500/45' :
                  'bg-gradient-to-br from-slate-400/45 to-slate-500/45'
                }`}
              >
                {/* Glowing background particles effect */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-1000"></div>
                </div>
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat blur-[2px]"
                    style={{
                      backgroundImage: `url(${
                        feature.title === 'Design Responsive' ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80' :
                        feature.title === 'Optimizare SEO' ? 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80' :
                        feature.title === 'Mobile-First' ? 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Performanță Rapidă' ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80' :
                        feature.title === 'Securitate Avansată' ? 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Suport 24/7' ? 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80' :
                        feature.title === 'Configurare Campanii' ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Optimizare Anunțuri' ? 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80' :
                        feature.title === 'Urmărire Performanță' ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80' :
                        feature.title === 'Raportare Detaliată' ? 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Optimizare Continuă' ? 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80' :
                        feature.title === 'Targeting Avansat' ? 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80' :
                        feature.title === 'Fotografie Profesională' ? 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80' :
                        feature.title === 'Filmare Video' ? 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Echipament Profesional' ? 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Editare Video' ? 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Editare Foto' ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80' :
                        feature.title === 'Efecte Speciale' ? 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Color Grading' ? 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Motion Graphics' ? 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80' :
                        feature.title === 'Fotografie Produse' ? 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80' :
                        feature.title === 'Videoclipuri Corporate' ? 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Sesiuni Brand' ? 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80' :
                        feature.title === 'Conținut Social Media' ? 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2039&q=80' :
                        feature.title === 'Echipamente Profesionale' ? 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Livrare Rapidă' ? 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80' :
                        feature.title === 'Grafică în Mișcare' ? 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80' :
                        feature.title === 'Editare Audio' ? 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
                        feature.title === 'Retușare Foto' ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80' :
                        feature.title === 'Optimizare Platformă' ? 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80' :
                        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80'
                      })`
                    }}
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className={`font-black mb-4 sm:mb-6 leading-tight text-white ${
                    index === 0 || index === 3 ? 'text-2xl sm:text-4xl' : // Larger for tall cards, responsive sizing
                    'text-xl sm:text-3xl' // Standard for small cards, responsive sizing
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`font-bold leading-relaxed text-white ${
                    index === 0 || index === 3 ? 'text-base sm:text-xl' : // Larger for tall cards, responsive sizing
                    'text-sm sm:text-lg' // Standard for small cards, responsive sizing
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Examples Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Exemple de Prețuri
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Prețuri transparente bazate pe complexitatea proiectului tău
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {service.pricingExamples.map((example, index) => (
                  <div key={index} className="text-center">
                    <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {example.name}
                    </h3>
                    <div className={`text-3xl font-black mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {example.price}
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {example.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`text-center p-6 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  De ce să alegi serviciile noastre?
                </h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode ? 'bg-green-400' : 'bg-green-500'}`}></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <strong>Livrare rapidă:</strong> 2-4 săptămâni pentru majoritatea proiectelor
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode ? 'bg-green-400' : 'bg-green-500'}`}></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <strong>Suport 24/7:</strong> Asistență tehnică disponibilă oricând
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode ? 'bg-green-400' : 'bg-green-500'}`}></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <strong>Garantie 100%:</strong> Satisfacție garantată sau banii înapoi
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${isDarkMode ? 'bg-green-400' : 'bg-green-500'}`}></div>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <strong>Actualizări gratuite:</strong> 6 luni de suport inclus
                    </span>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={() => {
                  if (pageTransition?.triggerTransition) {
                    pageTransition.triggerTransition('/', 'default');
                    setTimeout(() => {
                      const contactElement = document.getElementById('contact');
                      if (contactElement) {
                        contactElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 1000);
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                className="w-full mt-8 py-4 px-8 bg-blue-500 text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
              >
                Obține Ofertă Personalizată Gratuită
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Cum Funcționează
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Procesul nostru simplu și transparent în 4 pași
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="text-center cursor-pointer"
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold ${
                    isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
                  }`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  {step.step}
                </motion.div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-center p-8 rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
          >
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Gata să Începi?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Contactează-ne acum pentru o consultație gratuită și ofertă personalizată
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  if (pageTransition?.triggerTransition) {
                    pageTransition.triggerTransition('/', 'default');
                    // Scroll to contact section after transition
                    setTimeout(() => {
                      const contactElement = document.getElementById('contact');
                      if (contactElement) {
                        contactElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 1000);
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                className={`group/btn px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-primary-600 bg-opacity-80 backdrop-blur-sm border border-primary-500 text-white hover:bg-opacity-90 shadow-lg' 
                    : 'bg-primary-600 bg-opacity-90 backdrop-blur-sm border border-primary-500 text-white hover:bg-opacity-100 shadow-lg'
                }`}
              >
                <span className="relative z-10">Solicită Ofertă</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 transform -skew-x-12 transition-all duration-700 translate-x-[-100%] group-hover/btn:translate-x-[100%]"></div>
              </motion.button>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
              <button
                onClick={() => {
                  if (pageTransition?.triggerTransition) {
                    pageTransition.triggerTransition('/', 'default');
                  }
                }}
                className={`group/btn px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-600 bg-opacity-80 backdrop-blur-sm border border-gray-500 text-white hover:bg-opacity-90 shadow-lg' 
                    : 'bg-gray-600 bg-opacity-90 backdrop-blur-sm border border-gray-500 text-white hover:bg-opacity-100 shadow-lg'
                }`}
              >
                <span className="relative z-10">Înapoi la Servicii</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
              </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default ServicePage;
