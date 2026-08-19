import React from 'react';
import { MapPin, Home, Trees, Building, Landmark, Compass, CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
  const cities = [
    {
      name: 'Ardmore',
      state: 'Oklahoma',
      icon: <Building size={22} color="var(--primary-red)" />,
      tagline: 'Southern Oklahoma Real Estate',
      description: 'Full-service representation for residential properties, historic homes, and land investments in Ardmore.'
    },
    {
      name: 'Gainesville',
      state: 'Texas',
      icon: <Landmark size={22} color="#F59E0B" />,
      tagline: 'North Texas Gateway',
      description: 'Expert guidance for buying & selling homes, ranch land, and suburban developments in Gainesville.'
    },
    {
      name: 'Lindsay',
      state: 'Texas',
      icon: <Home size={22} color="var(--primary-red)" />,
      tagline: 'Country Living & Estates',
      description: 'Specialized local expertise for modern family residences, quiet country properties, and acreage around Lindsay.'
    },
    {
      name: 'Marietta',
      state: 'Oklahoma',
      icon: <Trees size={22} color="#F59E0B" />,
      tagline: 'Lake & Ranch Properties',
      description: 'Dedicated buyer & seller representation for acreage, farmland, and country retreats in Marietta.'
    },
    {
      name: 'Muenster',
      state: 'Texas',
      icon: <Compass size={22} color="var(--primary-red)" />,
      tagline: 'Heritage & Acreage Homes',
      description: 'In-depth market knowledge helping clients buy and sell premier homes, custom estates, and land in Muenster.'
    },
    {
      name: 'North Texas Metroplex',
      state: 'Texas',
      icon: <MapPin size={22} color="#F59E0B" />,
      tagline: 'Premier Metro Coverage',
      description: 'Comprehensive 10+ year track record serving Celina, Tioga, Weatherford, Frisco, and the DFW area.'
    }
  ];

  return (
    <section id="services" style={{ padding: '3.5rem 0', background: '#0B0F19', position: 'relative' }}>
      <div className="container">
        
        {/* Compact Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.4rem', color: '#FFF' }}>Specialized Services Built Around You</h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Dedicated local real estate representation across North Texas & Southern Oklahoma cities.</p>
        </div>

        {/* Cities Grid (3 BOXES ON TOP, 3 BOXES BELOW) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem'
        }} className="cities-grid-layout">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(200, 16, 46, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--dark-border)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {city.icon}
                </div>

                {/* Full State Name Badge */}
                <span style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  {city.state}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.25rem', color: '#FFF' }}>
                  {city.name}
                </h3>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary-red)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                  {city.tagline}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  {city.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4ADE80', fontSize: '0.8rem', fontWeight: '600', marginTop: 'auto', paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <CheckCircle2 size={14} /> Specialized Local Expertise
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .cities-grid-layout {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .cities-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
