import React, { useState } from 'react';
import { MapPin, Bed, Bath, Maximize, ExternalLink, Filter, CheckCircle } from 'lucide-react';
import PropertyModal from './PropertyModal';

export default function ListingsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const listings = [
    {
      id: 1,
      title: 'Legacy Ridge Modern Craftsman',
      address: '7420 Legacy Ridge Dr',
      city: 'Celina',
      price: '$649,000',
      beds: 4,
      baths: 3.5,
      sqft: '3,420',
      category: 'active',
      type: 'Single Family',
      status: 'Active Listing',
      image: '/images/home1.png',
      mlsId: 'NT2049182',
      description: 'Exquisite custom craftsman home in Celina, Texas. Features an open-concept gourmet kitchen with quartz countertops, soaring two-story ceiling in the family room, primary suite with luxury spa bath, and a covered patio overlooking a expansive backyard perfect for entertaining.'
    },
    {
      id: 2,
      title: 'Oak Meadow Farm & Country Ranch',
      address: '1204 Oak Meadow Trail',
      city: 'Tioga',
      price: '$785,000',
      beds: 5,
      baths: 4.0,
      sqft: '4,100',
      category: 'ranch',
      type: 'Farm & Ranch',
      status: 'Active Listing',
      image: '/images/home2.png',
      mlsId: 'NT2058319',
      description: 'Breathtaking 5-acre North Texas modern farmhouse estate in Tioga! Features a wrap-around porch, custom timber beams, barn/workshop with electric & water, stock tank, and pristine pasture land. Quiet luxury living just minutes from Ray Roberts Lake.'
    },
    {
      id: 3,
      title: 'Lone Star Country Estate',
      address: '4508 Lone Star Pkwy',
      city: 'Weatherford',
      price: '$425,000',
      beds: 3,
      baths: 2.0,
      sqft: '2,250',
      category: 'sold',
      type: 'Single Family',
      status: 'Recently Sold',
      image: '/images/home3.png',
      mlsId: 'NT1992014',
      description: 'Charming Weatherford Texas home sold by Gail Harpole above asking price in under 7 days! Features upgraded brick construction, manicured oak-shaded lot, upgraded energy-efficient HVAC, and custom stone fireplace.'
    },
    {
      id: 4,
      title: 'Preston Creek Luxury Villa',
      address: '8812 Preston Creek Way',
      city: 'Dallas',
      price: '$920,000',
      beds: 4,
      baths: 4.5,
      sqft: '3,850',
      category: 'luxury',
      type: 'Luxury Estate',
      status: 'Recently Sold',
      image: '/images/home1.png',
      mlsId: 'NT1984711',
      description: 'Prestige Dallas executive residence represented by Gail Harpole. Features high-end wolf appliances, resort-style swimming pool, climate-controlled 3-car garage, and custom wine cellar.'
    }
  ];

  const filteredListings = listings.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') return item.status === 'Active Listing';
    if (activeFilter === 'sold') return item.status === 'Recently Sold';
    return item.category === activeFilter;
  });

  return (
    <section id="listings" style={{ padding: '6rem 0', background: '#0B0F19', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-red">Featured Properties</div>
          <h2>Explore North Texas Real Estate</h2>
          <p>Discover current active listings and recently sold properties across Celina, Tioga, Weatherford, and Dallas.</p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {[
            { id: 'all', label: 'All Properties' },
            { id: 'active', label: 'Active Listings' },
            { id: 'sold', label: 'Recently Sold' },
            { id: 'ranch', label: 'Farm & Ranch' },
            { id: 'luxury', label: 'Luxury Estates' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              style={{
                background: activeFilter === btn.id ? 'var(--primary-red)' : 'rgba(255, 255, 255, 0.05)',
                color: activeFilter === btn.id ? '#FFF' : 'var(--text-secondary)',
                border: activeFilter === btn.id ? '1px solid var(--primary-red)' : '1px solid var(--dark-border)',
                padding: '0.65rem 1.4rem',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Property Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredListings.map((property) => (
            <div
              key={property.id}
              className="glass-card"
              style={{
                overflow: 'hidden',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              onClick={() => setSelectedProperty(property)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(200, 16, 46, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              
              {/* Card Image Banner */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={property.image}
                  alt={property.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                
                {/* Status Tag */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: property.status === 'Active Listing' ? 'var(--primary-red)' : 'rgba(15, 23, 42, 0.85)',
                  color: '#FFF',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                }}>
                  {property.status}
                </div>

                {/* City Tag */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#FFF',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}>
                  {property.city}, TX
                </div>

                {/* Price Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  fontSize: '1.6rem',
                  fontWeight: '800',
                  color: '#FFF',
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                }}>
                  {property.price}
                </div>
              </div>

              {/* Card Details */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.4rem', color: '#FFF' }}>
                    {property.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                    <MapPin size={16} color="var(--primary-red)" /> {property.address}, {property.city}
                  </div>
                </div>

                {/* Specs */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Bed size={16} color="#94A3B8" /> {property.beds} Beds
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Bath size={16} color="#94A3B8" /> {property.baths} Baths
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Maximize size={16} color="#94A3B8" /> {property.sqft} sqft
                  </span>
                </div>

                {/* View Details CTA */}
                <button
                  style={{
                    marginTop: '1.25rem',
                    width: '100%',
                    padding: '0.65rem',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: '#FFF',
                    borderRadius: '10px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    transition: 'var(--transition)'
                  }}
                >
                  View Details & Schedule Tour <ExternalLink size={14} />
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}
