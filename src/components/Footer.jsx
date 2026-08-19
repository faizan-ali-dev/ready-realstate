import React from 'react';
import { Home, Phone, Mail, MapPin, Award, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#070A12', color: '#94A3B8', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '4rem 0 2rem 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          
          {/* Column 1: Brand & Slogan */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #E11D48 0%, #C8102E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(200, 16, 46, 0.4)'
              }}>
                <Home size={22} color="white" />
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.3rem', color: '#FFF' }}>
                READY <span style={{ color: 'var(--primary-red)' }}>REAL ESTATE</span>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: '1.55', color: 'var(--text-secondary)' }}>
              Gail Harpole • REALTOR®, GRI & Notary Public with Ready Real Estate LLC. Dedicated to helping North Texas families buy and sell homes.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFF', marginBottom: '1rem', fontWeight: '700' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <li><a href="#home" style={{ color: 'var(--text-secondary)' }}>Home</a></li>
              <li><a href="#about" style={{ color: 'var(--text-secondary)' }}>About Gail Harpole</a></li>
              <li><a href="#valuation" style={{ color: 'var(--text-secondary)' }}>Free Home Valuation</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)' }}>Real Estate Services</a></li>
              <li><a href="#reviews" style={{ color: 'var(--text-secondary)' }}>Client Testimonials</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact Gail</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Office */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFF', marginBottom: '1rem', fontWeight: '700' }}>Brokerage Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} color="var(--primary-red)" /> (940) 597-7327
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} color="var(--primary-red)" /> gailharpolerealtor@gmail.com
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={15} color="var(--primary-red)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>8080 N. Central Expy, Ste. 1700, Dallas, TX 75206</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FBBF24', fontSize: '0.82rem', fontWeight: '600', marginTop: '0.2rem' }}>
                <Award size={15} /> TREC License #682500
              </div>
            </div>
          </div>

          {/* Column 4: Regulatory Disclosures */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFF', marginBottom: '1rem', fontWeight: '700' }}>Professional Standards</h4>
            <p style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--text-muted)' }}>
              Equal Housing Opportunity. Texas Real Estate Commission Consumer Protection Notice and Information About Brokerage Services.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem' }}>
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.4rem 0.7rem',
                borderRadius: '6px',
                fontSize: '0.72rem',
                color: '#FFF',
                fontWeight: '700'
              }}>
                NTREIS MEMBER
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.4rem 0.7rem',
                borderRadius: '6px',
                fontSize: '0.72rem',
                color: '#FFF',
                fontWeight: '700'
              }}>
                REALTOR®
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Gail Harpole • Ready Real Estate LLC. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#FFF',
              padding: '0.45rem 0.9rem',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.82rem',
              fontWeight: '600'
            }}
          >
            Back to Top <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
