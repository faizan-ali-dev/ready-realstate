import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize, Calendar, CheckCircle2, Phone, Send, ShieldAlert } from 'lucide-react';

export default function PropertyModal({ property, onClose }) {
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('10:00');
  const [tourName, setTourName] = useState('');
  const [tourPhone, setTourPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!property) return null;

  const handleSubmitTour = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
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
    }}>
      <div style={{
        background: '#1E293B',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '24px',
        maxWidth: '850px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 30px 80px rgba(0,0,0,0.8)',
        color: '#FFF'
      }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#FFF',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'var(--transition)'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Image Header */}
        <div style={{ position: 'relative', height: '360px', width: '100%' }}>
          <img
            src={property.image}
            alt={property.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #1E293B 0%, transparent 60%)'
          }}></div>

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <span className="badge-red">{property.status}</span>
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
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', lineHeight: 1.2 }}>{property.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '0.3rem' }}>
              <MapPin size={18} color="var(--primary-red)" /> {property.address}, {property.city}, TX
            </div>
          </div>
        </div>

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
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Price</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-red)' }}>{property.price}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bedrooms</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Bed size={18} color="#94A3B8" /> {property.beds} Beds
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bathrooms</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Bath size={18} color="#94A3B8" /> {property.baths} Baths
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Square Feet</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Maximize size={18} color="#94A3B8" /> {property.sqft} sqft
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: '#FFF' }}>Property Details</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
              {property.description}
            </p>
          </div>

          {/* Schedule Private Showing Form */}
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

        </div>

      </div>
    </div>
  );
}
