import React from 'react';
import { Award, Home, DollarSign, Star, TrendingUp } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    { icon: <Award size={28} color="#F87171" />, title: '10+ Years', label: 'North Texas Experience' },
    { icon: <Home size={28} color="#FBBF24" />, title: '180+', label: 'Homes Bought & Sold' },
    { icon: <DollarSign size={28} color="#F87171" />, title: '$45M+', label: 'Total Career Volume' },
    { icon: <Star size={28} color="#FBBF24" fill="#FBBF24" />, title: '5.0 / 5.0', label: 'Client Satisfaction Rating' },
  ];

  return (
    <section style={{
      background: 'linear-gradient(180deg, #0F172A 0%, #1E1B4B 100%)',
      padding: '4rem 0',
      borderTop: '1px solid var(--dark-border)',
      borderBottom: '1px solid var(--dark-border)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2.5rem 1.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200,16,46,0.4)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(200, 16, 46, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                border: '1px solid rgba(200,16,46,0.3)'
              }}>
                {item.icon}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '800', color: '#FFF', lineHeight: 1 }}>
                {item.title}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem', fontWeight: '500' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
