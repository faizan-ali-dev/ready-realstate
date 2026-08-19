import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Exact 7 authentic reviews provided directly from Realtor.com profile
  const reviews = [
    {
      id: 1,
      author: 'Realtor.com Verified Client',
      source: 'Sourced by realtor.com',
      rating: 5,
      title: 'Fantastic Service & Support',
      content: 'Thank you for your helpful service. You have been fantastic in handling all my real estate needs from beginning and even after the sale. Thank you so much for all of your support throughout the whole process.'
    },
    {
      id: 2,
      author: 'Realtor.com Verified Client',
      source: 'Sourced by realtor.com',
      rating: 5,
      title: 'Genuine, Friendly & Professional',
      content: 'Gail was very easy to work with. She really cares about her customers. She was very responsive and explained every step throughout my home purchase. She is genuine, friendly and very professional. I highly recommend her to anyone looking to buy or sell.'
    },
    {
      id: 3,
      author: 'First Time Home Owner',
      source: 'Sourced by realtor.com',
      rating: 5,
      title: 'Made Buying Our First Home Easier',
      content: 'Gail was amazing to work with! She answered quickly and took her time to show us multiple houses. We are first time home owners so we had plenty of questions and concerns but she answered all of them and was very helpful the whole time! Gail made the process of buying our first home a lot easier and less stressful.'
    },
    {
      id: 4,
      author: 'Realtor.com Verified Client',
      source: 'Sourced by realtor.com',
      rating: 5,
      title: 'Very Nice & Accommodating',
      content: 'Gaul is very nice & she worked with us on showing times etc.'
    },
    {
      id: 5,
      author: 'Realtor.com Verified Client',
      source: 'Sourced by realtor.com',
      rating: 5,
      title: 'Amazing & Great Recommended Realtor',
      content: 'Gaile was amazing! She helped as much as she could! She was great !!! I would recommend her to anyone that I know.'
    },
    {
      id: 6,
      author: 'Anonymous',
      source: 'Realtor.com Recommendation',
      rating: 5,
      title: 'Great Agent Who Knows The Market',
      content: 'She is a great Agent to work with. She knows the market and she is professional.'
    },
    {
      id: 7,
      author: 'Ronda Hightower',
      source: 'Realtor.com Recommendation • 4 years ago',
      rating: 5,
      title: 'Assisted Beyond Expectations',
      content: 'I have never worked with a realtor before, Gail. She not only took care of the tedious parts but assisted me with stripping down cabinet doors, cleaned, planted flowers and raked leaves. She is amazing.'
    }
  ];

  // Fast Auto-Play Slider (2.6s) with Hover Pause
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" style={{ padding: '4.5rem 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
      
      {/* CSS Animation Keyframes for Smooth Side Slide */}
      <style>{`
        @keyframes slideInSide {
          0% {
            opacity: 0;
            transform: translateX(40px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        .slide-animated-box {
          animation: slideInSide 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes progressLineFast {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .progress-line-bar-fast {
          animation: progressLineFast 2.6s linear infinite;
        }
      `}</style>

      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '700', marginBottom: '0.4rem', color: '#FFF' }}>
            Ratings & Reviews (5.0 Stars)
          </h2>
          <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)' }}>
            Authentic client reviews and recommendations for Gail Harpole directly from Realtor.com.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          
          {/* Animated Slide Box with Hover Pause */}
          <div
            key={currentIndex}
            className="glass-card slide-animated-box"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              padding: '2.25rem 2rem',
              borderRadius: '20px',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 20px rgba(200, 16, 46, 0.12)',
              position: 'relative',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            {/* Top Progress Bar Line (Pauses on Hover) */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #F59E0B, #C8102E)',
              animationPlayState: isPaused ? 'paused' : 'running'
            }} className="progress-line-bar-fast"></div>

            <Quote size={42} color="var(--primary-red)" style={{ opacity: 0.2, position: 'absolute', top: '20px', right: '22px' }} />

            <div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFF', marginBottom: '0.75rem', lineHeight: '1.35' }}>
                "{reviews[currentIndex].title}"
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.65', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "{reviews[currentIndex].content}"
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
              <div>
                <div style={{ fontWeight: '700', fontSize: '0.98rem', color: '#FFF' }}>
                  {reviews[currentIndex].author}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  {reviews[currentIndex].source}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#4ADE80', fontSize: '0.82rem', fontWeight: '600' }}>
                <CheckCircle size={15} /> Verified Realtor.com Review
              </div>
            </div>

          </div>

          {/* Controls & Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', marginTop: '1.75rem' }}>
            <button
              onClick={handlePrev}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--dark-border)',
                color: '#FFF',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }}
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {reviews.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: currentIndex === idx ? '26px' : '9px',
                    height: '9px',
                    borderRadius: '5px',
                    background: currentIndex === idx ? 'var(--primary-red)' : 'rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--dark-border)',
                color: '#FFF',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }}
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
