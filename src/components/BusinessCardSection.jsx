import React from 'react';
import { Phone, Mail, Award, CheckCircle2, FileCheck, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function BusinessCardSection() {
  return (
    <section id="about" style={{ padding: '3.5rem 0', position: 'relative', background: '#0F172A' }}>
      <div className="container">
        
        {/* Compact Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.4rem', color: '#FFF' }}>Dedicated Local Knowledge, Trusted Results</h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Over 10 years of North Texas real estate success combined with 20+ years of high-touch customer care.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', alignItems: 'center' }}>
          
          {/* Digital Business Card Showcase (Edited Studio Blazer Portrait Perfectly Fitted) */}
          <div style={{ perspective: '1000px' }}>
            <div style={{
              background: '#FFFFFF',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 15px 45px rgba(0,0,0,0.6), 0 0 10px rgba(153, 27, 27, 0.15)',
              border: '1px solid rgba(255,255,255,0.15)',
              position: 'relative',
              transition: 'transform 0.4s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotateY(2deg) scale(1.01)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotateY(0deg) scale(1)')}
            >

              {/* Card Top: Edited Studio Blazer Photo Perfectly Fitted */}
              <div style={{ position: 'relative', height: '275px', overflow: 'hidden', background: '#1E293B' }}>
                <img
                  src="/images/gail_harpole.png"
                  alt="Gail Harpole REALTOR"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 12%',
                    display: 'block'
                  }}
                />

                {/* Gold Accent Line */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderTop: '3px solid #D97706',
                  pointerEvents: 'none'
                }}></div>

                {/* Floating Badges */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#F87171',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '99px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  border: '1px solid rgba(248, 113, 113, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                }}>
                  <ShieldCheck size={13} color="#F87171" /> Verified REALTOR®
                </div>

                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#FBBF24',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '99px',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  border: '1px solid rgba(245,158,11,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                }}>
                  <Award size={13} color="#FBBF24" /> GRI Certified
                </div>
              </div>

              {/* Card Bottom: Muted Sophisticated Deep Ruby Red Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #991B1B 0%, #7F1D1D 60%, #4C0519 100%)',
                color: '#FFFFFF',
                padding: '1.25rem 1.25rem',
                position: 'relative'
              }}>
                {/* READY REAL ESTATE LOGO */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: '0.6rem' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.01em', lineHeight: '1' }}>
                      READY<span style={{ fontSize: '0.9rem', opacity: 0.95, marginLeft: '2px' }}>™</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.12em', marginTop: '2px', color: '#FECDD3' }}>
                      REAL ESTATE
                    </div>
                  </div>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 3px 8px rgba(0,0,0,0.2)'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#991B1B">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                </div>

                {/* Agent Info */}
                <div style={{ marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFF', margin: 0, lineHeight: 1.1 }}>
                    Gail Harpole
                  </h3>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: '#FFE4E6', letterSpacing: '0.03em', marginTop: '2px' }}>
                    REALTOR® • GRI • Notary Public
                  </div>
                </div>

                {/* Direct Contact List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.85rem' }}>
                  <a href="tel:9405977327" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFF' }}>
                    <Phone size={14} /> 9405977327
                  </a>
                  <a href="mailto:gailharpolerealtor@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFF', opacity: 0.95 }}>
                    <Mail size={14} /> gailharpolerealtor@gmail.com
                  </a>
                </div>

                {/* Slogan Banner */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  padding: '0.55rem 0.75rem',
                  borderRadius: '8px',
                  border: '1px dashed rgba(255,255,255,0.25)',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  lineHeight: '1.3'
                }}>
                  <div>• Serving North Texas for 10 years strong!</div>
                  <div style={{ color: '#FDE047', fontWeight: '700', marginTop: '2px' }}>
                    • Your referrals are the greatest compliment!!!!!!
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Biography & Key Highlights Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', color: '#FFF' }}>
                Meet Gail Harpole
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                With over <strong style={{ color: '#FFF' }}>10 years of real estate experience</strong> and more than 20 years in high-touch customer service, Gail Harpole has earned a reputation across North Texas and Southern Oklahoma as a deeply committed, transparent, and results-driven Realtor.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Holding the prestigious <strong style={{ color: '#F87171' }}>GRI (Graduate, REALTOR® Institute)</strong> designation, Gail places extreme emphasis on educating her buyers and sellers, ensuring every step of the transaction is smooth and clear.
              </p>
            </div>

            {/* Feature Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '0.75rem' }}>
              
              <div className="glass-card" style={{ padding: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', borderRadius: '12px' }}>
                <CheckCircle2 color="#F87171" size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#FFF' }}>Buyer & Seller Representation</h4>
                  <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Expert pricing strategies & offer negotiations.</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', borderRadius: '12px' }}>
                <Award color="#F59E0B" size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#FFF' }}>GRI Certified Realtor</h4>
                  <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Top 15% nationally recognized standard.</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', borderRadius: '12px' }}>
                <FileCheck color="#F87171" size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#FFF' }}>Certified Notary Public</h4>
                  <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>In-house document authentication & closing ease.</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem', borderRadius: '12px' }}>
                <HeartHandshake color="#F59E0B" size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#FFF' }}>North Texas & OK Coverage</h4>
                  <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Ardmore, Gainesville, Lindsay, Marietta & beyond.</p>
                </div>
              </div>

            </div>

            {/* License & Office details */}
            <div style={{
              background: 'rgba(153, 27, 27, 0.1)',
              borderLeft: '3px solid #B91C1C',
              padding: '0.75rem 1rem',
              borderRadius: '0 10px 10px 0',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)'
            }}>
              <strong>Texas Real Estate Commission License #682500</strong> <br />
              Brokerage: <em>Ready Real Estate LLC • 8080 N. Central Expy, Ste. 1700, Dallas, TX 75206</em>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
