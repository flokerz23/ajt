import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = ({ isDarkMode }) => {
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
            Termeni și Condiții
          </h1>
          
          <div className={`prose prose-lg max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
            <p className={`text-lg mb-6 ${textColor}`}>
              <strong>Data ultimei actualizări:</strong> {new Date().toLocaleDateString('ro-RO')}
            </p>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>1. Acceptarea Termenilor</h2>
              <p className={`mb-4 ${textColor}`}>
                Prin accesarea și utilizarea site-ului web al Ajutor Technologia, acceptați 
                să respectați acești termeni și condiții. Dacă nu sunteți de acord cu acești 
                termeni, vă rugăm să nu utilizați site-ul nostru.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>2. Serviciile Noastre</h2>
              <p className={`mb-4 ${textColor}`}>Ajutor Technologia oferă următoarele servicii:</p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Dezvoltare și design site-uri web</li>
                <li>Gestionarea campaniilor Google Ads</li>
                <li>Optimizare SEO pentru motoarele de căutare</li>
                <li>Producție video și foto profesională</li>
                <li>Marketing digital și branding</li>
                <li>Analitică web și raportare</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>3. Utilizarea Site-ului</h2>
              <p className={`mb-4 ${textColor}`}>Vă angajați să utilizați site-ul nostru doar pentru scopuri legale și să nu:</p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Încălcați orice legi locale, naționale sau internaționale</li>
                <li>Transmiteți materiale dăunătoare, amenințătoare sau obscene</li>
                <li>Încercați să accesați neautorizat sistemele noastre</li>
                <li>Interferați cu funcționarea normală a site-ului</li>
                <li>Copiați sau distribuiți conținutul nostru fără permisiune</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>4. Proprietatea Intelectuală</h2>
              <p className={`mb-4 ${textColor}`}>
                Tot conținutul de pe acest site, inclusiv textele, imaginile, logo-urile, 
                design-ul și codul, este proprietatea Agenției Digitale și este protejat 
                de legile dreptului de autor și mărcilor comerciale.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>5. Contracte de Servicii</h2>
              <p className={`mb-4 ${textColor}`}>
                Serviciile specifice sunt guvernate de contracte separate care vor detalia:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Scopul și specificațiile proiectului</li>
                <li>Prețurile și condițiile de plată</li>
                <li>Termenele de livrare</li>
                <li>Responsabilitățile părților</li>
                <li>Condițiile de modificare și anulare</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>6. Plăți și Facturare</h2>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Toate prețurile sunt exprimate în lei (RON) și includ TVA</li>
                <li>Plățile se efectuează conform termenilor stabiliți în contract</li>
                <li>Întârzierea plății poate rezulta în suspendarea serviciilor</li>
                <li>Rambursările se fac conform politicii de rambursare stabilite</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>7. Limitarea Răspunderii</h2>
              <p className={`mb-4 ${textColor}`}>
                În măsura maximă permisă de lege, Ajutor Technologia nu va fi răspunzătoare pentru:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Daune indirecte, incidentale sau consecvente</li>
                <li>Pierderea de profit sau venituri</li>
                <li>Întreruperea activității</li>
                <li>Pierderea de date sau informații</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>8. Garanții și Disclaimers</h2>
              <p className={`mb-4 ${textColor}`}>
                Site-ul și serviciile sunt furnizate "ca atare". Nu garantăm că:
              </p>
              <ul className={`list-disc pl-6 mb-4 ${listColor}`}>
                <li>Site-ul va fi mereu disponibil sau fără erori</li>
                <li>Defectele vor fi corectate</li>
                <li>Site-ul este liber de viruși sau alte componente dăunătoare</li>
                <li>Informațiile sunt complete, exacte sau actualizate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>9. Modificări ale Termenilor</h2>
              <p className={`mb-4 ${textColor}`}>
                Ne rezervăm dreptul de a modifica acești termeni oricând. Modificările 
                vor fi publicate pe această pagină și vor intra în vigoare imediat.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>10. Rezilierea</h2>
              <p className={`mb-4 ${textColor}`}>
                Putem suspenda sau închide accesul dumneavoastră la site dacă încălcați 
                acești termeni, fără notificare prealabilă.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>11. Legea Aplicabilă</h2>
              <p className={`mb-4 ${textColor}`}>
                Acești termeni sunt guvernați de legile României. Orice dispute vor fi 
                rezolvate de instanțele competente din București, România.
              </p>
            </section>

            <section className="mb-8">
              <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>12. Contact</h2>
              <p className={`mb-4 ${textColor}`}>
                Pentru întrebări despre acești termeni și condiții, ne puteți contacta:
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

export default TermsOfService;
