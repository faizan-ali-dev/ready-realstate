import React, { useState, useEffect } from 'react';
import { Phone, Mail, Home, Menu, X, Award, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Gail', href: '#about', id: 'about' },
    { name: 'Valuation', href: '#valuation', id: 'valuation' },
    { name: 'Sold Deals', href: '#services', id: 'services' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Scroll Listener for Navbar Styling & Active Section Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar background toggle
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // ScrollSpy: Calculate which section is currently in view
      const scrollPosition = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #1E1B4B 0%, #881337 50%, #C8102E 100%)',
        color: '#F8FAFC',
        fontSize: '0.85rem',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        fontWeight: '500'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} color="#F87171" /> Serving North Texas
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', opacity: 0.9 }} className="desktop-only">
              <Award size={14} color="#FBBF24" /> GRI Certified REALTOR® | License #682500
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href="tel:9405977327" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFF', fontWeight: '600' }}>
              <Phone size={14} color="#F87171" /> (940) 597-7327
            </a>
            <a href="mailto:gailharpolerealtor@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.9)' }} className="desktop-only">
              <Mail size={14} /> gailharpolerealtor@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(11, 15, 25, 0.95)' : 'rgba(11, 15, 25, 0.8)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled ? '1px solid rgba(200, 16, 46, 0.35)' : '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '76px' }}>
          
          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #E11D48 0%, #C8102E 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(200, 16, 46, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <Home size={24} color="white" strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.35rem', letterSpacing: '-0.02em', lineHeight: '1', color: '#FFF' }}>
                READY <span style={{ color: 'var(--primary-red)' }}>REAL ESTATE</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '600', marginTop: '3px' }}>
                Gail Harpole • REALTOR®
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links with Clean Active Red Highlight (No bottom bar) */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="nav-desktop">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    color: isActive ? '#F87171' : 'var(--text-secondary)',
                    fontWeight: isActive ? '700' : '500',
                    fontSize: '0.92rem',
                    padding: '0.4rem 0',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#FFF';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="tel:9405977327" className="btn-primary desktop-only" style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}>
              <Phone size={15} /> Call Gail
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--dark-border)',
                color: 'white',
                padding: '0.55rem',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'none'
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--dark-surface)',
            borderBottom: '1px solid var(--dark-border)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: isActive ? '#F87171' : 'var(--text-main)',
                    fontWeight: isActive ? '700' : '600',
                    fontSize: '1rem',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="tel:9405977327"
              className="btn-primary"
              onClick={() => setMobileMenuOpen(false)}
              style={{ marginTop: '0.4rem', padding: '0.7rem' }}
            >
              <Phone size={16} /> Call (940) 597-7327
            </a>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 992px) {
          .nav-desktop, .desktop-only {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
