import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = ({ isDarkMode }) => {
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
            Politica de Confidențialitate
          </h1>
          
          <div className={`prose prose-lg max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
            <p className={`text-lg mb-6 ${textColor}`}>
              <strong>Data ultimei actualizări:</strong> {new Date().toLocaleDateString('ro-RO')}
            </p>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>1. Informații Generale</h2>
              <p className={`mb-4 ${textColor}`}>
                Ajutor Technologia ("noi", "noastră" sau "compania") respectă confidențialitatea 
                vizitatorilor site-ului nostru web și a clienților noștri. Această politică de 
                confidențialitate explică cum colectăm, folosim, stocăm și protejăm informațiile 
                dumneavoastră personale în conformitate cu Regulamentul General privind Protecția 
                Datelor (GDPR) și legislația română aplicabilă.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>2. Informații pe care le Colectăm</h2>
              
              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>2.1 Informații furnizate direct de dumneavoastră:</h3>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Nume și prenume</li>
                <li>Adresa de email</li>
                <li>Numărul de telefon (opțional)</li>
                <li>Mesajele trimise prin formularul de contact</li>
                <li>Alte informații pe care alegeți să ni le furnizați</li>
              </ul>

              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>2.2 Informații colectate automat:</h3>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Adresa IP</li>
                <li>Tipul de browser și versiunea</li>
                <li>Sistemul de operare</li>
                <li>Paginile vizitate și timpul petrecut pe site</li>
                <li>Data și ora vizitei</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>3. Cum Folosim Informațiile</h2>
              <p className={`mb-4 ${textColor}`}>Folosim informațiile colectate pentru:</p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Răspunderea la întrebările și solicitările dumneavoastră</li>
                <li>Furnizarea serviciilor noastre</li>
                <li>Îmbunătățirea site-ului web și a serviciilor</li>
                <li>Comunicarea cu dumneavoastră despre serviciile noastre</li>
                <li>Respectarea obligațiilor legale</li>
                <li>Dezvoltarea și optimizarea campaniilor publicitare</li>
                <li>Analiza comportamentului utilizatorilor pentru personalizare</li>
                <li>Măsurarea performanței campaniilor de marketing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>3.1. Colectarea și Prelucrarea Datelor pentru Publicitate</h2>
              <p className={`mb-4 ${textColor}`}>
                Pentru a vă oferi experiențe publicitare relevante și pentru a măsura eficacitatea 
                campaniilor noastre, colectăm și prelucrăm următoarele informații:
              </p>
              
              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>3.1.1. Date pentru Publicitate Digitală:</h3>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Interacțiunile cu anunțurile noastre (click-uri, vizualizări, conversii)</li>
                <li>Comportamentul de navigare pe site-ul nostru</li>
                <li>Preferințele și interesele identificate prin analiza comportamentului</li>
                <li>Date demografice și de localizare (cu consimțământul dumneavoastră)</li>
                <li>Informații despre dispozitivul și browserul folosit</li>
              </ul>

              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>3.1.2. Servicii de Publicitate Folosite:</h3>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li><strong>Google Ads:</strong> Pentru afișarea anunțurilor pe Google și rețeaua de afiliere</li>
                <li><strong>Facebook/Meta Ads:</strong> Pentru publicitate pe Facebook și Instagram</li>
                <li><strong>Google Analytics:</strong> Pentru analiza traficului și comportamentului utilizatorilor</li>
                <li><strong>Remarketing/Retargeting:</strong> Pentru afișarea anunțurilor personalizate</li>
              </ul>

              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>3.1.3. Scopurile Prelucrării pentru Publicitate:</h3>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Crearea de audiențe personalizate pentru campaniile publicitare</li>
                <li>Optimizarea anunțurilor pentru a fi mai relevante pentru dumneavoastră</li>
                <li>Măsurarea performanței campaniilor și a ROI-ului</li>
                <li>Prevenirea afișării anunțurilor duplicat sau irelevante</li>
                <li>Analiza tendințelor și preferințelor clienților noștri</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>4. Baza Legală pentru Prelucrare</h2>
              <p className={`mb-4 ${textColor}`}>Prelucrăm datele dumneavoastră pe baza următoarelor:</p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li><strong>Consimțământ:</strong> Când vă dați acordul explicit</li>
                <li><strong>Interes legitim:</strong> Pentru îmbunătățirea serviciilor</li>
                <li><strong>Executarea contractului:</strong> Pentru furnizarea serviciilor</li>
                <li><strong>Obligații legale:</strong> Pentru respectarea legilor aplicabile</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>5. Partajarea Informațiilor</h2>
              <p className={`mb-4 ${textColor}`}>
                Nu vindem, închiriem sau partajăm informațiile dumneavoastră personale cu terți, 
                cu excepția următoarelor situații:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Cu furnizori de servicii de încredere (ex: EmailJS pentru trimiterea mesajelor)</li>
                <li>Când este necesar pentru respectarea legii</li>
                <li>Pentru protejarea drepturilor și siguranței noastre</li>
                <li>Cu consimțământul dumneavoastră explicit</li>
              </ul>

              <h3 className={`text-xl font-medium mb-3 ${headingColor}`}>5.1. Parteneri de Publicitate și Analiză:</h3>
              <p className={`mb-4 ${textColor}`}>
                Pentru a vă oferi experiențe publicitare personalizate și pentru a analiza performanța 
                site-ului nostru, partajăm informații cu următorii parteneri de încredere:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li><strong>Google LLC:</strong> Pentru Google Ads, Google Analytics și servicii de remarketing</li>
                <li><strong>Meta Platforms Inc.:</strong> Pentru Facebook Ads și Instagram Ads</li>
                <li><strong>Furnizori de servicii de analiză:</strong> Pentru măsurarea performanței campaniilor</li>
                <li><strong>Rețele de publicitate:</strong> Pentru afișarea anunțurilor relevante</li>
              </ul>
              
              <p className={`mb-4 ${textColor}`}>
                <strong>Important:</strong> Acești parteneri au propriile politici de confidențialitate 
                și proceduri de protecție a datelor. Vă încurajăm să le citiți pentru a înțelege 
                cum își prelucrează datele dumneavoastră.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>6. Securitatea Datelor</h2>
              <p className={`mb-4 ${textColor}`}>
                Implementăm măsuri de securitate tehnice și organizatorice pentru protejarea 
                datelor dumneavoastră împotriva accesului neautorizat, modificării, divulgării 
                sau distrugerii.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>7. Drepturile Dumneavoastră (GDPR)</h2>
              <p className={`mb-4 ${textColor}`}>În conformitate cu GDPR, aveți următoarele drepturi:</p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li><strong>Dreptul de acces:</strong> Să solicitați informații despre datele procesate</li>
                <li><strong>Dreptul la rectificare:</strong> Să corectați datele inexacte</li>
                <li><strong>Dreptul la ștergere:</strong> Să solicitați ștergerea datelor</li>
                <li><strong>Dreptul la restricționare:</strong> Să limitați prelucrarea</li>
                <li><strong>Dreptul la portabilitate:</strong> Să primiți datele într-un format structurat</li>
                <li><strong>Dreptul la opoziție:</strong> Să vă opuneți prelucrării</li>
                <li><strong>Dreptul de a retrage consimțământul:</strong> Oricând și fără penalități</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>8. Cookie-uri</h2>
              <p className={`mb-4 ${textColor}`}>
                Site-ul nostru poate folosi cookie-uri pentru îmbunătățirea experienței de navigare. 
                Pentru mai multe informații, consultați 
                <a href="/cookie-policy" className="text-primary-600 hover:underline"> Politica de Cookie-uri</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>9. Păstrarea Datelor</h2>
              <p className={`mb-4 ${textColor}`}>
                Păstrăm datele dumneavoastră doar pe perioada necesară pentru îndeplinirea 
                scopurilor pentru care au fost colectate sau conform cerințelor legale.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>10. Modificări ale Politicii</h2>
              <p className={`mb-4 ${textColor}`}>
                Ne rezervăm dreptul de a actualiza această politică de confidențialitate. 
                Modificările vor fi publicate pe această pagină cu data actualizării.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>11. Contact</h2>
              <p className={`mb-4 ${textColor}`}>
                Pentru întrebări despre această politică de confidențialitate sau pentru 
                exercitarea drepturilor dumneavoastră, ne puteți contacta:
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

export default PrivacyPolicy;
