import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BusinessCardSection from './components/BusinessCardSection';
import ValuationCalculator from './components/ValuationCalculator';
import SoldPropertiesSection from './components/SoldPropertiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--dark-bg)' }}>
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <HeroSection />
        <BusinessCardSection />
        <ValuationCalculator />
        <SoldPropertiesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
