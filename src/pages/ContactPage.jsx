import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#0B0F19', color: '#FFF', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Top Back Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFF',
              padding: '0.65rem 1.4rem',
              borderRadius: '999px',
              fontSize: '0.92rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'var(--transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-red)';
              e.currentTarget.style.borderColor = 'var(--primary-red)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
        </div>

        {/* Clean Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.6rem', fontWeight: '900', marginBottom: '0.8rem', color: '#FFF' }}>
            Get In Touch With <span style={{ color: 'var(--primary-red)' }}>Gail Harpole</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
            Have a question about buying, selling, or property valuation in North Texas? Send a direct message or connect via phone or email.
          </p>
        </div>

        {/* Contact Form & Info Section */}
        <ContactSection />

      </div>
    </div>
  );
}
