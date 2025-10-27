import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import LegalPageWrapper from './components/LegalPageWrapper';
import ServicePage from './components/ServicePage';
import PageTransition from './components/PageTransition';
import CookieConsent from './components/CookieConsent';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <PageTransition isDarkMode={true}>
              <LandingPage />
            </PageTransition>
            <CookieConsent isDarkMode={true} />
            <FloatingWhatsApp isDarkMode={true} />
          </>
        } />
        <Route 
          path="/privacy-policy" 
          element={
            <>
              <LegalPageWrapper>
                <PrivacyPolicy />
              </LegalPageWrapper>
              <CookieConsent isDarkMode={true} />
              <FloatingWhatsApp isDarkMode={true} />
            </>
          } 
        />
        <Route 
          path="/terms-of-service" 
          element={
            <>
              <LegalPageWrapper>
                <TermsOfService />
              </LegalPageWrapper>
              <CookieConsent isDarkMode={true} />
              <FloatingWhatsApp isDarkMode={true} />
            </>
          } 
        />
        <Route 
          path="/cookie-policy" 
          element={
            <>
              <LegalPageWrapper>
                <CookiePolicy />
              </LegalPageWrapper>
              <CookieConsent isDarkMode={true} />
              <FloatingWhatsApp isDarkMode={true} />
            </>
          } 
        />
        <Route path="/servicii/:serviceSlug" element={
          <>
            <PageTransition isDarkMode={true}>
              <ServicePage />
            </PageTransition>
            <CookieConsent isDarkMode={true} />
            <FloatingWhatsApp isDarkMode={true} />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;

