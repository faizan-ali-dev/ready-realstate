import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ValuationCalculator from '../components/ValuationCalculator';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  useEffect(() => {
    // If URL has hash like #valuation, scroll to it smoothly
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <ValuationCalculator />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
