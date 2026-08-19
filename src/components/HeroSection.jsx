import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '65vh', display: 'flex', alignItems: 'center', padding: '5rem 0 4rem 0', overflow: 'hidden' }}>
      
      {/* Background Image with Dark Vignette */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `linear-gradient(to bottom, rgba(11, 15, 25, 0.8), rgba(11, 15, 25, 0.95)), url(/images/home1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}></div>

      {/* Radiant Glowing Accent Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200, 16, 46, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
        zIndex: 2,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Main Title */}
          <h1 style={{
            fontSize: 'calc(2.4rem + 1.8vw)',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '1.2rem',
            color: '#FFFFFF',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            Your North Texas Dream Home <br />
            <span style={{
              background: 'linear-gradient(135deg, #FFF 0%, #F87171 50%, #C8102E 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Starts With Gail Harpole
            </span>
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.6'
          }}>
            Dedicated, personalized real estate expertise in Celina, Tioga, Weatherford, Dallas, and surrounding Metroplex communities. <strong style={{ color: '#FFF' }}>Your referrals are my greatest compliment!</strong>
          </p>

          {/* Rating & Premier Agent Portion (KEPT AS REQUESTED) */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFF' }}>5.0 Rating</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>(Zillow & Realtor.com)</span>
            </div>

            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)' }} className="desktop-only"></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              <ShieldCheck size={20} color="#F87171" />
              <span><strong style={{ color: '#FFF' }}>Ready Real Estate</strong> Premier Agent</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
