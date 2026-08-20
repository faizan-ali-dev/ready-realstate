import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize, CheckCircle2, ShieldCheck, ArrowRight, Trees } from 'lucide-react';
import PropertyModal from './PropertyModal';

export const soldPropertiesData = [
  {
    id: '303-n-lamar-st',
    title: '303 N Lamar St',
    address: '303 N Lamar St',
    city: 'Tioga',
    state: 'TX',
    zip: '76271',
    status: 'SOLD',
    price: 'Contact for Price',
    role: 'Represented Buyer',
    beds: 2,
    baths: 1,
    sqft: 1221,
    propertyType: 'Single Family Residence',
    image: '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m2995295912rd-w960_h720.webp',
    images: [
      '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m2995295912rd-w960_h720.webp',
      '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m3135208555rd-w960_h720.webp',
      '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m3198717335rd-w960_h720.webp',
      '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m359131795rd-w960_h720.webp',
      '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m899598765rd-w960_h720.webp',
      '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m927368179rd-w960_h720.webp',
      '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m1079368492rd-w960_h720.webp',
      '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m1404152142rd-w960_h720.webp',
      '/images/sold/303-n-lamar-st/65bf6e78f42766940cf9df2698c56115l-m1573694846rd-w960_h720.webp'
    ],
    description: 'Charming single-family home located at 303 N Lamar St in the heart of Tioga, Texas. Features 2 Bedrooms, 1 Bathroom, and 1,221 sqft of comfortable living space. Gail Harpole expertly represented the buyers to closing.'
  },
  {
    id: '10513-evans-rd',
    title: '10513 Evans Rd',
    address: '10513 Evans Rd',
    city: 'Marietta',
    state: 'OK',
    zip: '73448',
    status: 'SOLD',
    role: 'Represented Seller',
    beds: 3,
    baths: 2,
    sqft: 1869,
    propertyType: 'Single Family Residence',
    image: '/images/sold/10513-evans-rd.jpg',
    description: 'Beautiful country residence situated on acreage in Marietta, Oklahoma. Gail Harpole successfully represented the seller to closing.'
  },
  {
    id: '4708-lake-shore-dr',
    title: '4708 Lake Shore Dr',
    address: '4708 Lake Shore Dr',
    city: 'Ardmore',
    state: 'OK',
    zip: '73401',
    status: 'SOLD',
    role: 'Represented Buyer',
    beds: 3,
    baths: 2,
    sqft: 1498,
    propertyType: 'Lakeside Vicinity Home',
    image: '/images/sold/4708-lake-shore-dr.jpg',
    description: 'Scenic property near Lake Ardmore. Gail Harpole expertly represented the buyers throughout the purchase.'
  },
  {
    id: '203-fitzgerald-ct',
    title: '203 Fitzgerald Ct',
    address: '203 Fitzgerald Ct',
    city: 'Tioga',
    state: 'TX',
    zip: '76271',
    status: 'SOLD',
    role: 'Co-Listing Agent',
    beds: 3,
    baths: 2.5,
    sqft: 1646,
    propertyType: 'Single Family Home',
    image: '/images/sold/203-fitzgerald-ct.jpg',
    description: 'Custom cul-de-sac residence in Tioga, Texas. Gail Harpole served as Co-Listing Agent representing the property.'
  },
  {
    id: '4455-donegal-dr',
    title: '4455 Donegal Dr',
    address: '4455 Donegal Dr',
    city: 'Frisco',
    state: 'TX',
    zip: '75034',
    status: 'SOLD',
    role: 'Co-Listing Agent',
    beds: 3,
    baths: 3,
    sqft: 2820,
    propertyType: 'Executive Residence',
    image: '/images/sold/4455-donegal-dr.jpg',
    description: 'Spacious single-family home located in premier Frisco neighborhood. Gail Harpole served as Co-Listing Agent.'
  },
  {
    id: '602-w-grand-st',
    title: '602 W Grand St',
    address: '602 W Grand St',
    city: 'Whitewright',
    state: 'TX',
    zip: '75491',
    status: 'SOLD',
    role: 'Represented Buyer',
    beds: 3,
    baths: 1,
    sqft: 1472,
    propertyType: 'Single Family Home',
    image: '/images/sold/602-w-grand-st.jpg',
    description: 'Charming residential property in Whitewright. Gail Harpole represented the buyers from offer to close.'
  },
  {
    id: '11115-hames-rd',
    title: '11115 Hames Rd',
    address: '11115 Hames Rd',
    city: 'Pilot Point',
    state: 'TX',
    zip: '76258',
    status: 'SOLD',
    role: 'Co-Listing Agent',
    beds: 3,
    baths: 2,
    sqft: 2016,
    propertyType: 'Country Property',
    image: '/images/sold/11115-hames-rd.jpg',
    description: 'Country living property in Pilot Point horse country. Gail Harpole served as Co-Listing Agent.'
  },
  {
    id: '928-big-mineral-rd',
    title: '928 Big Mineral Rd',
    address: '928 Big Mineral Rd',
    city: 'Sadler',
    state: 'TX',
    zip: '76264',
    status: 'SOLD',
    role: 'Represented Buyer',
    beds: 3,
    baths: 2,
    sqft: 1480,
    propertyType: 'Lake Texoma Vicinity',
    image: '/images/sold/928-big-mineral-rd.jpg',
    description: 'Quiet residential property located near Big Mineral arm of Lake Texoma in Sadler, TX. Represented the buyers.'
  },
  {
    id: '0000-harpole',
    title: '0000 Harpole',
    address: '0000 Harpole',
    city: 'Tioga',
    state: 'TX',
    zip: '76271',
    status: 'SOLD',
    role: 'Co-Listing Agent',
    beds: null,
    baths: null,
    sqft: null,
    propertyType: 'Land / Acreage',
    image: '/images/sold/0000-harpole.jpg',
    description: 'Prime Texas land acreage located in Tioga, Texas. Gail Harpole served as Co-Listing Agent.'
  },
  {
    id: '1102-blackjack-rd',
    title: '1102 Blackjack Rd',
    address: '1102 Blackjack Rd',
    city: 'Valley View',
    state: 'TX',
    zip: '76272',
    status: 'SOLD',
    role: 'Represented Buyer',
    beds: 3,
    baths: 2,
    sqft: 1350,
    propertyType: 'Single Family Home',
    image: '/images/sold/1102-blackjack-rd.jpg',
    description: 'Quiet neighborhood home in Valley View, TX. Gail Harpole represented the buyers.'
  },
  {
    id: '1518-harpole-rd',
    title: '1518 Harpole Rd',
    address: '1518 Harpole Rd',
    city: 'Tioga',
    state: 'TX',
    zip: '76271',
    status: 'SOLD',
    role: 'Co-Listing Agent',
    beds: null,
    baths: null,
    sqft: null,
    propertyType: 'Land / Acreage',
    image: '/images/sold/1518-harpole-rd.jpg',
    description: 'Desirable land tract in Tioga, Texas. Successfully marketed and represented as Co-Listing Agent.'
  },
  {
    id: '707-mill-st',
    title: '707 Mill St',
    address: '707 Mill St',
    city: 'Gainesville',
    state: 'TX',
    zip: '76240',
    status: 'SOLD',
    role: 'Represented Buyer',
    beds: 3,
    baths: 2,
    sqft: 1500,
    propertyType: 'Single Family Home',
    image: '/images/sold/707-mill-st.jpg',
    description: 'Traditional home in Gainesville, Texas. Represented the buyers with attentive service.'
  },
  {
    id: '400-smokebrush-st',
    title: '400 Smokebrush St',
    address: '400 Smokebrush St',
    city: 'Celina',
    state: 'TX',
    zip: '75009',
    status: 'SOLD',
    role: 'Co-Listing Agent',
    beds: 5,
    baths: 3,
    sqft: 2757,
    propertyType: 'Modern Family Home',
    image: '/images/sold/400-smokebrush-st.jpg',
    description: 'Spacious 5-bedroom residence in high-demand Celina master-planned community. Co-Listing Agent representation.'
  },
  {
    id: '325-w-division-st',
    title: '325 W Division St',
    address: '325 W Division St',
    city: 'Pilot Point',
    state: 'TX',
    zip: '76258',
    status: 'SOLD',
    role: 'Co-Listing Agent',
    beds: 3,
    baths: 2,
    sqft: 2180,
    propertyType: 'Single Family Home',
    image: '/images/sold/325-w-division-st.jpg',
    description: 'Custom home located in historic Pilot Point, Texas. Gail Harpole served as Co-Listing Agent.'
  }
];

export default function SoldPropertiesSection() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter items
  const filteredProperties = soldPropertiesData.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Seller Rep') return item.role.includes('Seller') || item.role.includes('Listing');
    if (activeFilter === 'Buyer Rep') return item.role.includes('Buyer');
    if (activeFilter === 'Texas') return item.state === 'TX';
    if (activeFilter === 'Oklahoma') return item.state === 'OK';
    return true;
  });

  // Display strictly first 3 in single row for home page
  const displayedProperties = filteredProperties.slice(0, 3);

  return (
    <section id="services" style={{ padding: '5rem 0', background: '#0B0F19', position: 'relative' }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(200, 16, 46, 0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', marginBottom: '0.6rem', color: '#FFF' }}>
            Recently Sold <span style={{ color: 'var(--primary-red)' }}>Properties & Closed Deals</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto' }}>
            Browse featured closed deals represented by Gail Harpole across North Texas & Southern Oklahoma. Click any deal or "See All" to view full portfolio.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '2.5rem'
        }}>
          {[
            { label: `All Sold Deals (${soldPropertiesData.length})`, key: 'All' },
            { label: 'Seller & Listing Rep', key: 'Seller Rep' },
            { label: 'Buyer Representation', key: 'Buyer Rep' },
            { label: 'Texas Deals', key: 'Texas' },
            { label: 'Oklahoma Deals', key: 'Oklahoma' }
          ].map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => {
                  setActiveFilter(f.key);
                }}
                style={{
                  background: isActive ? 'var(--primary-gradient)' : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#FFF' : 'var(--text-secondary)',
                  border: isActive ? '1px solid transparent' : '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.5rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.88rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  boxShadow: isActive ? '0 4px 15px rgba(200, 16, 46, 0.35)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#FFF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Properties Grid (Strict 3 Columns in 1 Row) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.75rem'
        }} className="sold-properties-grid">
          {displayedProperties.map((prop) => (
            <div
              key={prop.id}
              className="glass-card"
              onClick={() => navigate('/sold-properties?id=' + prop.id)}
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '18px',
                cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(200, 16, 46, 0.5)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.45), 0 0 20px rgba(200, 16, 46, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden', backgroundColor: '#1E293B' }}>
                <img
                  src={prop.image}
                  alt={prop.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17, 24, 39, 0.85) 0%, transparent 50%)'
                }}></div>

                {/* Top Badges */}
                <div style={{
                  position: 'absolute',
                  top: '0.85rem',
                  left: '0.85rem',
                  right: '0.85rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    color: '#FFF',
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    letterSpacing: '0.05em',
                    boxShadow: '0 2px 10px rgba(16, 185, 129, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    <CheckCircle2 size={12} /> {prop.status}
                  </span>

                  <span style={{
                    background: 'rgba(15, 23, 42, 0.85)',
                    color: '#F87171',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(200, 16, 46, 0.35)',
                    backdropFilter: 'blur(8px)'
                  }}>
                    {prop.role}
                  </span>
                </div>

                {/* Bottom Overlay Info (Address / City) */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '1rem',
                  right: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline'
                }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFF', textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
                    {prop.title}
                  </div>
                  <span style={{
                    background: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(6px)',
                    color: '#CBD5E1',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px'
                  }}>
                    {prop.state}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '0.85rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                    <MapPin size={14} color="var(--primary-red)" />
                    {prop.address}, {prop.city}, {prop.state} {prop.zip}
                  </div>
                </div>

                {/* Specs: Display only if present */}
                {prop.beds !== null && prop.sqft !== null ? (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(15, 23, 42, 0.6)',
                    padding: '0.65rem 0.9rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Bed size={15} color="#94A3B8" /> <strong style={{ color: '#FFF' }}>{prop.beds}</strong> Beds
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Bath size={15} color="#94A3B8" /> <strong style={{ color: '#FFF' }}>{prop.baths}</strong> Baths
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Maximize size={15} color="#94A3B8" /> <strong style={{ color: '#FFF' }}>{prop.sqft.toLocaleString()}</strong> sqft
                    </span>
                  </div>
                ) : (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(15, 23, 42, 0.6)',
                    padding: '0.65rem 0.9rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    fontSize: '0.82rem',
                    color: '#38BDF8'
                  }}>
                    <Trees size={16} /> <strong>{prop.propertyType}</strong>
                  </div>
                )}

                {/* Description snippet */}
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.83rem',
                  lineHeight: '1.45',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {prop.description}
                </p>

                {/* Footer Action */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.82rem'
                }}>
                  <span style={{ color: '#FBBF24', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <ShieldCheck size={14} /> Ready Real Estate
                  </span>
                  <span style={{ color: 'var(--primary-red)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    View Deal <ArrowRight size={14} />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Redirect Button to Full Page */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={() => navigate('/sold-properties')}
            className="btn-outline"
            style={{
              padding: '0.9rem 2.4rem',
              fontSize: '0.98rem',
              fontWeight: '700',
              borderColor: 'rgba(200, 16, 46, 0.5)',
              background: 'rgba(200, 16, 46, 0.12)',
              boxShadow: '0 4px 20px rgba(200, 16, 46, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            Explore All Sold Properties ({soldPropertiesData.length} Deals) <ArrowRight size={18} color="var(--primary-red)" />
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .sold-properties-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .sold-properties-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
