import React, { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function ValuationCalculator() {
  // Valuation Tool State
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Celina');
  const [sqft, setSqft] = useState('2800');
  const [condition, setCondition] = useState('excellent');
  const [valuationResult, setValuationResult] = useState(null);

  // Mortgage Calculator State
  const [homePrice, setHomePrice] = useState(550000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const calculateValuation = (e) => {
    e.preventDefault();
    const parsedSqft = parseFloat(sqft) || 2500;
    let basePricePerSqft = 220; // North Texas average
    if (city.toLowerCase().includes('celina')) basePricePerSqft = 235;
    if (city.toLowerCase().includes('dallas')) basePricePerSqft = 260;
    if (city.toLowerCase().includes('tioga')) basePricePerSqft = 210;

    let conditionMultiplier = 1.0;
    if (condition === 'luxury') conditionMultiplier = 1.2;
    if (condition === 'excellent') conditionMultiplier = 1.1;
    if (condition === 'good') conditionMultiplier = 1.0;
    if (condition === 'fair') conditionMultiplier = 0.9;

    const estimatedValue = Math.round(parsedSqft * basePricePerSqft * conditionMultiplier);
    const minVal = Math.round(estimatedValue * 0.95);
    const maxVal = Math.round(estimatedValue * 1.05);

    setValuationResult({
      estimatedValue,
      range: `$${minVal.toLocaleString()} - $${maxVal.toLocaleString()}`,
      formattedValue: `$${estimatedValue.toLocaleString()}`
    });
  };

  // Calculate Monthly Payment
  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const principal = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  
  const monthlyPrincipalAndInterest = monthlyRate > 0
    ? (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    : principal / numberOfPayments;
    
  const estimatedTax = (homePrice * 0.018) / 12; // ~1.8% TX property tax average
  const estimatedInsurance = 150;
  const totalMonthly = Math.round(monthlyPrincipalAndInterest + estimatedTax + estimatedInsurance);

  return (
    <section id="valuation" style={{ padding: '3.5rem 0', background: '#0F172A', position: 'relative' }}>
      <div className="container">
        
        {/* Compact Section Header */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.4rem', color: '#FFF' }}>Home Valuation & Mortgage Estimator</h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>Get instant estimates for your property value in North Texas and calculate monthly mortgage payments.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Tool 1: Home Valuation Request */}
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '18px', border: '1px solid rgba(200, 16, 46, 0.25)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'var(--primary-gradient)', color: '#FFF', flexShrink: 0 }}>
                <TrendingUp size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFF' }}>What Is Your Home Worth?</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Instant Estimated North Texas Market Value</p>
              </div>
            </div>

            <form onSubmit={calculateValuation} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Street Address</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1204 Oak Meadow Trail"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '9px',
                    color: '#FFF',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '9px',
                      color: '#FFF',
                      fontSize: '0.88rem'
                    }}
                  >
                    <option value="Celina" style={{ background: '#1E293B' }}>Celina, TX</option>
                    <option value="Tioga" style={{ background: '#1E293B' }}>Tioga, TX</option>
                    <option value="Weatherford" style={{ background: '#1E293B' }}>Weatherford, TX</option>
                    <option value="Dallas" style={{ background: '#1E293B' }}>Dallas, TX</option>
                    <option value="Frisco" style={{ background: '#1E293B' }}>Frisco, TX</option>
                    <option value="Prosper" style={{ background: '#1E293B' }}>Prosper, TX</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Approx. Sq Ft</label>
                  <input
                    type="number"
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '9px',
                      color: '#FFF',
                      fontSize: '0.88rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>Property Condition</label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '9px',
                    color: '#FFF',
                    fontSize: '0.88rem'
                  }}
                >
                  <option value="luxury" style={{ background: '#1E293B' }}>Luxury Custom Upgrades</option>
                  <option value="excellent" style={{ background: '#1E293B' }}>Excellent (Move-in Ready)</option>
                  <option value="good" style={{ background: '#1E293B' }}>Good (Minor Updates Needed)</option>
                  <option value="fair" style={{ background: '#1E293B' }}>Fair / Fixer Opportunity</option>
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.3rem', padding: '0.7rem 1.2rem', borderRadius: '9px', fontSize: '0.88rem' }}>
                <Calculator size={16} /> Calculate Valuation
              </button>
            </form>

            {valuationResult && (
              <div style={{
                marginTop: '1.25rem',
                background: 'rgba(200, 16, 46, 0.1)',
                border: '1px solid var(--primary-red)',
                borderRadius: '12px',
                padding: '1rem',
                textAlign: 'center',
                animation: 'fadeIn 0.5s ease'
              }}>
                <div style={{ fontSize: '0.78rem', color: '#F87171', fontWeight: '700', textTransform: 'uppercase' }}>
                  Estimated Market Value
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FFF', margin: '0.2rem 0' }}>
                  {valuationResult.formattedValue}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Estimated Range: {valuationResult.range}
                </div>

                <a href="#contact" className="btn-outline" style={{ marginTop: '0.75rem', width: '100%', fontSize: '0.82rem', padding: '0.5rem' }}>
                  Request Free Official CMA Report by Gail
                </a>
              </div>
            )}

          </div>

          {/* Tool 2: Interactive Mortgage Calculator */}
          <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '18px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24', border: '1px solid rgba(245, 158, 11, 0.3)', flexShrink: 0 }}>
                <Calculator size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFF' }}>Mortgage Calculator</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Estimate your total monthly home payment</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                  <span>Home Purchase Price</span>
                  <span style={{ fontWeight: '700', color: '#FFF' }}>${homePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="150000"
                  max="2000000"
                  step="10000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary-red)' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                    <span>Down Payment</span>
                    <span style={{ fontWeight: '700', color: '#FFF' }}>{downPaymentPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="50"
                    step="1"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--primary-red)' }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                    <span>Interest Rate</span>
                    <span style={{ fontWeight: '700', color: '#FFF' }}>{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="3.5"
                    max="10.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--primary-red)' }}
                  />
                </div>
              </div>

              {/* Breakdown Card */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.7)',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Estimated Monthly Payment</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FBBF24', margin: '0.15rem 0' }}>
                  ${totalMonthly.toLocaleString()}<span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/mo</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.6rem', paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Principal & Interest:</span>
                    <strong>${Math.round(monthlyPrincipalAndInterest).toLocaleString()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Est. Texas Property Tax:</span>
                    <strong>${Math.round(estimatedTax).toLocaleString()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Homeowners Insurance:</span>
                    <strong>${Math.round(estimatedInsurance).toLocaleString()}</strong>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
