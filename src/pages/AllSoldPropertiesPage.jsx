import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Maximize, CheckCircle2, ShieldCheck, ArrowRight, Trees } from 'lucide-react';
import PropertyModal from '../components/PropertyModal';
import { soldPropertiesData } from '../components/SoldPropertiesSection';

export default function AllSoldPropertiesPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Scroll to top and check for property ID in URL query params
  useEffect(() => {
    window.scrollTo(0, 0);
    const propId = searchParams.get('id');
    if (propId) {
      const found = soldPropertiesData.find((p) => p.id === propId);
      if (found) {
        setSelectedProperty(found);
      }
    }
  }, [searchParams]);

  // Open Property Modal and reflect in URL
  const handleOpenPropertyModal = (prop) => {
    setSelectedProperty(prop);
    setSearchParams({ id: prop.id });
  };

  // Close Property Modal and clear URL param
  const handleCloseModal = () => {
    setSelectedProperty(null);
    setSearchParams({});
  };

  // Filter items based on active pill
  const filteredProperties = soldPropertiesData.filter((item) => {
    if (activeFilter === 'Seller Rep') return item.role.includes('Seller') || item.role.includes('Listing');
    if (activeFilter === 'Buyer Rep') return item.role.includes('Buyer');
    if (activeFilter === 'Texas') return item.state === 'TX';
    if (activeFilter === 'Oklahoma') return item.state === 'OK';
    return true;
  });

  return (
    <div style={{ background: '#0B0F19', color: '#FFF', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Top Navigation Bar / Back Button */}
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

        {/* Clean Header (No Box / No Search) */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.6rem', fontWeight: '900', marginBottom: '0.8rem', color: '#FFF' }}>
            All Closed Deals & <span style={{ color: 'var(--primary-red)' }}>Sold Properties</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', maxWidth: '720px', margin: '0 auto', lineHeight: '1.6' }}>
            Explore the complete portfolio of {soldPropertiesData.length} successfully closed residential homes, luxury country estates, and acreage transactions represented by Gail Harpole across North Texas & Southern Oklahoma.
          </p>
        </div>

        {/* Filter Pills Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.65rem',
          marginBottom: '2.5rem'
        }}>
          {[
            { label: `All Closed Deals (${soldPropertiesData.length})`, key: 'All' },
            { label: 'Seller & Listing Rep', key: 'Seller Rep' },
            { label: 'Buyer Representation', key: 'Buyer Rep' },
            { label: 'Texas Deals (TX)', key: 'Texas' },
            { label: 'Oklahoma Deals (OK)', key: 'Oklahoma' }
          ].map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                style={{
                  background: isActive ? 'var(--primary-gradient)' : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#FFF' : 'var(--text-secondary)',
                  border: isActive ? '1px solid transparent' : '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '0.65rem 1.3rem',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  boxShadow: isActive ? '0 4px 18px rgba(200, 16, 46, 0.4)' : 'none'
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Properties Count Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
          <span>Showing <strong>{filteredProperties.length}</strong> sold properties</span>
        </div>

        {/* Properties Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.75rem'
        }} className="sold-properties-grid">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="glass-card"
              onClick={() => handleOpenPropertyModal(prop)}
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

                {/* Bottom Overlay Title & State */}
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

                {/* Specs */}
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
                    View Details <ArrowRight size={14} />
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Property Details Modal */}
        {selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onClose={handleCloseModal}
          />
        )}

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
    </div>
  );
}
