import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'buying',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '3.5rem 0', background: '#0B0F19', position: 'relative' }}>
      <div className="container">
        
        {/* Compact Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.4rem', color: '#FFF' }}>
            Contact Gail Harpole
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
            Whether buying, selling, or inquiring about property values, Gail is ready to assist you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.75rem', alignItems: 'start' }}>
          
          {/* Contact Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div className="glass-card" style={{ padding: '1.35rem', borderRadius: '16px', border: '1px solid rgba(200, 16, 46, 0.25)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: '#FFF', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                Direct Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                
                {/* Phone (Unbolded Info as requested) */}
                <a href="tel:9405977327" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFF' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(200, 16, 46, 0.12)', border: '1px solid rgba(200, 16, 46, 0.25)', color: 'var(--primary-red)', flexShrink: 0 }}>
                    <Phone size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '400' }}>Direct Phone</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '400', color: 'var(--text-secondary)' }}>(940) 597-7327</div>
                  </div>
                </a>

                {/* Email (Unbolded Info) */}
                <a href="mailto:gailharpolerealtor@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFF' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(200, 16, 46, 0.12)', border: '1px solid rgba(200, 16, 46, 0.25)', color: 'var(--primary-red)', flexShrink: 0 }}>
                    <Mail size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '400' }}>Direct Email</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: '400', color: 'var(--text-secondary)' }}>gailharpolerealtor@gmail.com</div>
                  </div>
                </a>

                {/* Office Address (Unbolded Info) */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(200, 16, 46, 0.12)', border: '1px solid rgba(200, 16, 46, 0.25)', color: 'var(--primary-red)', flexShrink: 0, marginTop: '2px' }}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '400' }}>Brokerage Office</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '400', color: 'var(--text-secondary)', lineHeight: '1.35' }}>
                      Ready Real Estate LLC <br />
                      8080 N. Central Expy, Ste. 1700, Dallas, TX 75206
                    </div>
                  </div>
                </div>

                {/* Hours (Unbolded Info) */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.25)', color: '#FBBF24', flexShrink: 0, marginTop: '2px' }}>
                    <Clock size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: '400' }}>Operating Hours</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '400', color: 'var(--text-secondary)', lineHeight: '1.35' }}>
                      Monday to Saturday: 8:00 AM to 7:00 PM <br />
                      Sunday: By Appointment
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Service Areas Badge */}
            <div className="glass-card" style={{ padding: '1.1rem', borderRadius: '14px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: '600', color: '#FFF', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={15} color="var(--primary-red)" /> Service Areas
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.45', fontWeight: '400' }}>
                Ardmore, Gainesville, Lindsay, Marietta, Muenster, Celina, Tioga, Weatherford, Dallas, Frisco, Prosper, Denton, and Fort Worth.
              </p>
            </div>

          </div>

          {/* Contact / Appointment Form Column */}
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFF', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MessageSquare size={18} color="var(--primary-red)" /> Send a Message
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Fill out the form below and Gail Harpole will get back to you.
            </p>

            {submitted ? (
              <div style={{
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#4ADE80',
                padding: '1.25rem',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={32} style={{ margin: '0 auto 0.4rem auto' }} />
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700' }}>Thank You, {formData.name}!</h4>
                <p style={{ fontSize: '0.82rem', color: '#CBD5E1', marginTop: '0.3rem' }}>
                  Your message has been delivered directly to Gail Harpole.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: 'buying', message: '' }); }}
                  className="btn-outline"
                  style={{ marginTop: '0.85rem', fontSize: '0.8rem', padding: '0.45rem 0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.88rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: '0.75rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(940) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        color: '#FFF',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        color: '#FFF',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Reason for Contact</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.88rem'
                    }}
                  >
                    <option value="buying" style={{ background: '#1E293B' }}>Interested in Buying a Home</option>
                    <option value="selling" style={{ background: '#1E293B' }}>Looking to Sell My Property</option>
                    <option value="valuation" style={{ background: '#1E293B' }}>Free Home Valuation / CMA</option>
                    <option value="ranch" style={{ background: '#1E293B' }}>Farm, Ranch and Land Consultation</option>
                    <option value="notary" style={{ background: '#1E293B' }}>In-House Notary Services</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Message / Details</label>
                  <textarea
                    rows={3}
                    placeholder="Tell Gail about your target area, budget, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.88rem',
                      resize: 'vertical'
                    }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '0.7rem 1.25rem', borderRadius: '99px', fontSize: '0.88rem', marginTop: '0.2rem' }}>
                  <Send size={15} /> Send Message
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
