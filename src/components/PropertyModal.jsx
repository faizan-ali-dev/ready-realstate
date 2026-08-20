import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize, Calendar, CheckCircle2, Phone, Send, ShieldAlert, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function PropertyModal({ property, onClose }) {
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('10:00');
  const [tourName, setTourName] = useState('');
  const [tourPhone, setTourPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) return null;

  const imageList = property.images && property.images.length > 0 ? property.images : [property.image];
  const isSold = property.status && property.status.toUpperCase().includes('SOLD');

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const handleSubmitTour = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#1E293B',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '24px',
          maxWidth: '880px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
          color: '#FFF'
        }}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0,0,0,0.65)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#FFF',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 30,
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-red)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.65)'}
        >
          <X size={22} />
        </button>

        {/* Modal Image Header Carousel */}
        <div style={{ position: 'relative', height: '400px', width: '100%', overflow: 'hidden', backgroundColor: '#0B0F19' }}>
          <img
            src={imageList[currentImageIndex]}
            alt={`${property.title} - Photo ${currentImageIndex + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'all 0.35s ease'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #1E293B 0%, transparent 65%)',
            pointerEvents: 'none'
          }}></div>

          {/* Left Arrow Button */}
          {imageList.length > 1 && (
            <button
              onClick={handlePrevImage}
              aria-label="Previous Image"
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFF',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20,
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-red)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.75)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Right Arrow Button */}
          {imageList.length > 1 && (
            <button
              onClick={handleNextImage}
              aria-label="Next Image"
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFF',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 20,
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary-red)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.75)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              <ChevronRight size={26} />
            </button>
          )}

          {/* Image Counter Badge */}
          {imageList.length > 1 && (
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              background: 'rgba(15, 23, 42, 0.85)',
              color: '#FFF',
              fontSize: '0.8rem',
              fontWeight: '700',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backdropFilter: 'blur(8px)',
              zIndex: 20
            }}>
              <ImageIcon size={14} color="var(--primary-red)" /> {currentImageIndex + 1} / {imageList.length} Photos
            </div>
          )}

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', zIndex: 10 }}>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
              <span className="badge-red">{property.status}</span>
              {property.price && (
                <span style={{
                  background: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
                  color: '#FFF',
                  fontSize: '0.85rem',
                  fontWeight: '800',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '999px',
                  boxShadow: '0 2px 10px rgba(16, 185, 129, 0.3)'
                }}>
                  {property.price}
                </span>
              )}
              {property.mlsId && (
                <span style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: '#CBD5E1',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  MLS #{property.mlsId}
                </span>
              )}
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: 1.2 }}>{property.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '0.3rem' }}>
              <MapPin size={18} color="var(--primary-red)" /> {property.address}, {property.city}, {property.state || 'TX'} {property.zip || ''}
            </div>
          </div>
        </div>

        {/* Thumbnail Gallery Strip (If Multiple Images) */}
        {imageList.length > 1 && (
          <div style={{
            background: '#0F172A',
            padding: '0.85rem 1.25rem',
            display: 'flex',
            gap: '0.65rem',
            overflowX: 'auto',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            {imageList.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setCurrentImageIndex(idx)}
                style={{
                  width: '75px',
                  height: '52px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: idx === currentImageIndex ? '2px solid var(--primary-red)' : '2px solid transparent',
                  opacity: idx === currentImageIndex ? 1 : 0.6,
                  transition: 'all 0.25s ease',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (idx !== currentImageIndex) e.currentTarget.style.opacity = '0.95';
                }}
                onMouseLeave={(e) => {
                  if (idx !== currentImageIndex) e.currentTarget.style.opacity = '0.6';
                }}
              />
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          
          {/* Specs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1rem',
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '1.25rem',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Representation</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--primary-red)' }}>{property.role || 'Closed Deal'}</div>
            </div>
            {property.beds !== null && property.beds !== undefined && (
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bedrooms</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Bed size={18} color="#94A3B8" /> {property.beds} Beds
                </div>
              </div>
            )}
            {property.baths !== null && property.baths !== undefined && (
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bathrooms</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Bath size={18} color="#94A3B8" /> {property.baths} Baths
                </div>
              </div>
            )}
            {property.sqft !== null && property.sqft !== undefined ? (
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Square Feet</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Maximize size={18} color="#94A3B8" /> {typeof property.sqft === 'number' ? property.sqft.toLocaleString() : property.sqft} sqft
                </div>
              </div>
            ) : (
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Property Type</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#38BDF8' }}>
                  {property.propertyType || 'Land / Acreage'}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div style={{ marginBottom: isSold ? '0' : '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: '#FFF' }}>Property Details</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
              {property.description}
            </p>
          </div>

          {/* Schedule Private Showing Form (Hidden for Sold Properties) */}
          {!isSold && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(200, 16, 46, 0.1) 0%, rgba(15, 23, 42, 0.8) 100%)',
              border: '1px solid rgba(200, 16, 46, 0.3)',
              borderRadius: '20px',
              padding: '1.75rem'
            }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={20} color="var(--primary-red)" /> Schedule a Private Tour with Gail
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Pick your preferred date & time. Gail Harpole will personally confirm your private walkthrough.
              </p>

              {submitted ? (
                <div style={{
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                  color: '#4ADE80',
                  padding: '1.25rem',
                  borderRadius: '14px',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={36} style={{ margin: '0 auto 0.5rem auto' }} />
                  <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Showing Request Sent!</div>
                  <p style={{ fontSize: '0.9rem', color: '#CBD5E1', marginTop: '0.3rem' }}>
                    Gail Harpole will reach out to you shortly at {tourPhone || 'your contact number'}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitTour} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={tourName}
                    onChange={(e) => setTourName(e.target.value)}
                    style={{
                      padding: '0.8rem 1rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.95rem'
                    }}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={tourPhone}
                    onChange={(e) => setTourPhone(e.target.value)}
                    style={{
                      padding: '0.8rem 1rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.95rem'
                    }}
                  />
                  <input
                    type="date"
                    required
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    style={{
                      padding: '0.8rem 1rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '10px',
                      color: '#FFF',
                      fontSize: '0.95rem'
                    }}
                  />
                  <button type="submit" className="btn-primary" style={{ padding: '0.8rem 1.5rem', borderRadius: '10px' }}>
                    <Send size={16} /> Request Tour
                  </button>
                </form>
              )}

              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Prefer an immediate call?</span>
                <a href="tel:9405977327" style={{ color: 'var(--primary-red)', fontWeight: '700', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={16} /> (940) 597-7327
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
