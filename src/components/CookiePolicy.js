import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = ({ isDarkMode }) => {
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const headingColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const listColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className={`min-h-screen py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Politica de Cookie-uri
          </h1>
          
          <div className={`prose prose-lg max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
            <p className={`text-lg mb-6 ${textColor}`}>
              <strong>Data ultimei actualizări:</strong> {new Date().toLocaleDateString('ro-RO')}
            </p>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>1. Ce sunt Cookie-urile?</h2>
              <p className={`mb-4 ${textColor}`}>
                Cookie-urile sunt fișiere text mici care sunt plasate pe dispozitivul 
                dumneavoastră (computer, telefon, tabletă) când vizitați un site web. 
                Acestea ajută site-ul să își "amintească" informații despre vizita 
                dumneavoastră, ceea ce poate face următoarea vizită mai ușoară și 
                mai utilă.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>2. Cum Folosim Cookie-urile</h2>
              <p className={`mb-4 ${textColor}`}>Folosim cookie-uri pentru:</p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Îmbunătățirea funcționalității site-ului</li>
                <li>Analizarea traficului și comportamentului utilizatorilor</li>
                <li>Personalizarea experienței de navigare</li>
                <li>Reținerea preferințelor (ex: tema întunecată/luminoasă)</li>
                <li>Asigurarea securității site-ului</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>3. Tipuri de Cookie-uri</h2>
              
              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>3.1 Cookie-uri Esențiale</h3>
              <p className={`mb-4 ${textColor}`}>
                Aceste cookie-uri sunt necesare pentru funcționarea de bază a site-ului 
                și nu pot fi dezactivate. Ele includ:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Cookie-uri de sesiune pentru navigare</li>
                <li>Cookie-uri de securitate</li>
                <li>Cookie-uri pentru reținerea preferințelor de bază</li>
              </ul>

              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>3.2 Cookie-uri de Analiză</h3>
              <p className={`mb-4 ${textColor}`}>
                Aceste cookie-uri ne ajută să înțelegem cum vizitatorii interactionează 
                cu site-ul nostru, colectând informații în mod anonim:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Numărul de vizitatori</li>
                <li>Paginile cele mai populare</li>
                <li>Timpul petrecut pe site</li>
                <li>Sursa traficului</li>
              </ul>

              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>3.3 Cookie-uri de Funcționalitate</h3>
              <p className={`mb-4 ${textColor}`}>
                Aceste cookie-uri permit site-ului să își amintească alegerile făcute 
                de dumneavoastră:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Preferințele de limbă</li>
                <li>Tema aleasă (întunecată/luminoasă)</li>
                <li>Setările de afișare</li>
              </ul>

              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>3.4 Cookie-uri de Marketing și Publicitate</h3>
              <p className={`mb-4 ${textColor}`}>
                Aceste cookie-uri sunt folosite pentru a afișa reclame relevante 
                și pentru a măsura performanța campaniilor publicitare:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Urmărirea comportamentului de navigare pentru publicitate personalizată</li>
                <li>Personalizarea reclamelor pe baza preferințelor și interesele</li>
                <li>Măsurarea eficacității campaniilor publicitare</li>
                <li>Remarketing și retargeting pentru utilizatori care au vizitat site-ul</li>
                <li>Conversii și acțiuni rezultate din campaniile publicitare</li>
                <li>Crearea de audiențe personalizate pentru campanii viitoare</li>
              </ul>

              <h4 className={`text-lg font-medium mb-2 ${headingColor}`}>3.4.1. Servicii de Publicitate Folosite:</h4>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li><strong>Google Ads:</strong> Cookie-uri pentru afișarea anunțurilor pe Google și rețeaua de afiliere</li>
                <li><strong>Facebook/Meta Ads:</strong> Cookie-uri pentru publicitate pe Facebook și Instagram</li>
                <li><strong>Google Analytics:</strong> Cookie-uri pentru analiza traficului și comportamentului</li>
                <li><strong>Rețele de publicitate terțe:</strong> Pentru afișarea anunțurilor relevante</li>
              </ul>

              <h4 className={`text-lg font-medium mb-2 ${headingColor}`}>3.4.2. Durata de Viață a Cookie-urilor de Marketing:</h4>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Cookie-uri de sesiune: Se șterg la închiderea browserului</li>
                <li>Cookie-uri persistente: 30 zile - 2 ani (în funcție de serviciul folosit)</li>
                <li>Cookie-uri de remarketing: Până la 540 de zile (Google Ads)</li>
                <li>Cookie-uri de conversie: Până la 90 de zile</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>4. Cookie-uri de la Terți</h2>
              <p className={`mb-4 ${textColor}`}>Site-ul nostru poate folosi servicii de la terți care plasează propriile cookie-uri:</p>
              
              <div className={`p-4 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${headingColor}`}>Google Analytics</h4>
                <p className={`text-sm ${textColor}`}>
                  Pentru analiza traficului și comportamentului utilizatorilor.
                  <br />
                  <a href="https://policies.google.com/privacy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Politica de confidențialitate Google
                  </a>
                </p>
              </div>

              <div className={`p-4 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${headingColor}`}>Google Ads</h4>
                <p className={`text-sm ${textColor}`}>
                  Pentru urmărirea conversiilor și optimizarea campaniilor publicitare.
                  <br />
                  <a href="https://policies.google.com/technologies/ads" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Politica de publicitate Google
                  </a>
                </p>
              </div>

              <div className={`p-4 rounded-lg mb-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${headingColor}`}>EmailJS</h4>
                <p className={`text-sm ${textColor}`}>
                  Pentru funcționarea formularului de contact.
                  <br />
                  <a href="https://www.emailjs.com/legal/privacy-policy/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Politica de confidențialitate EmailJS
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>5. Gestionarea Cookie-urilor</h2>
              
              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>5.1 Setările Browser-ului</h3>
              <p className={`mb-4 ${textColor}`}>
                Majoritatea browser-elor vă permit să controlați cookie-urile prin setări. 
                Puteți:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Bloca toate cookie-urile</li>
                <li>Permite doar cookie-uri de la prima parte</li>
                <li>Șterge cookie-urile existente</li>
                <li>Primi notificări când sunt plasate cookie-uri</li>
              </ul>

              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>5.2 Linkuri Utile pentru Setări</h3>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/ro/kb/cookies-informatii-pe-care-site-urile-web-le-stochez-pe" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/ro-ro/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Internet Explorer
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Safari
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>6. Consimțământul</h2>
              <p className={`mb-4 ${textColor}`}>
                Prin continuarea utilizării site-ului nostru, vă dați consimțământul 
                pentru utilizarea cookie-urilor conform acestei politici. Puteți să 
                vă retrageți consimțământul oricând prin modificarea setărilor 
                browser-ului sau contactându-ne.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>7. Modificări ale Politicii</h2>
              <p className={`mb-4 ${textColor}`}>
                Ne rezervăm dreptul de a actualiza această politică de cookie-uri. 
                Orice modificări vor fi publicate pe această pagină cu data actualizării.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>8. Contact</h2>
              <p className={`mb-4 ${textColor}`}>
                Pentru întrebări despre această politică de cookie-uri, ne puteți contacta:
              </p>
              <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <p className={textColor}><strong>Email:</strong> office@ajutortechnologia.ro</p>
                <p className={textColor}><strong>Telefon:</strong> +40 (728) 518 802</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
