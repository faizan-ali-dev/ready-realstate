import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ChevronRight, Trees } from 'lucide-react';

export default function ValuationCalculator() {
  // Valuation Tool State
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Celina');
  const [sqft, setSqft] = useState('2500');
  const [condition, setCondition] = useState('excellent');
  const [valuationResult, setValuationResult] = useState(null);

  // US Mortgage Calculator State
  const [homePrice, setHomePrice] = useState(450000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.75); // Current US national benchmark
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.85); // % annual (North Texas benchmark)
  const [annualHomeInsurance, setAnnualHomeInsurance] = useState(1800); // $ / year (~$150/mo)
  const [monthlyHoa, setMonthlyHoa] = useState(50); // $ / mo

  const calculateValuation = (e) => {
    e.preventDefault();
    const parsedSqft = parseFloat(sqft) || 2500;
    let basePricePerSqft = 220;
    if (city.toLowerCase().includes('celina')) basePricePerSqft = 235;
    if (city.toLowerCase().includes('dallas')) basePricePerSqft = 260;
    if (city.toLowerCase().includes('tioga')) basePricePerSqft = 210;
    if (city.toLowerCase().includes('frisco')) basePricePerSqft = 250;

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

  // --- US Mortgage Calculation Engine ---
  const downPaymentAmount = Math.round((homePrice * downPaymentPercent) / 100);
  const loanAmount = Math.max(0, homePrice - downPaymentAmount);
  
  // Monthly Principal & Interest (P&I)
  const monthlyRate = (interestRate / 100) / 12;
  const numberOfPayments = loanTermYears * 12;
  
  const monthlyPrincipalAndInterest = monthlyRate > 0 && loanAmount > 0
    ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    : (loanAmount / (numberOfPayments || 1));

  // Monthly US Property Tax
  const monthlyPropertyTax = Math.round((homePrice * (propertyTaxRate / 100)) / 12);

  // Monthly Homeowners Hazard Insurance
  const monthlyInsurance = Math.round(annualHomeInsurance / 12);

  // US PMI (Private Mortgage Insurance) - Required if down payment < 20%
  const isPmiApplicable = downPaymentPercent < 20 && loanAmount > 0;
  const monthlyPmi = isPmiApplicable ? Math.round((loanAmount * 0.0075) / 12) : 0;

  // Monthly HOA Dues
  const hoaDues = Number(monthlyHoa) || 0;

  // Total Monthly PITI + PMI + HOA
  const totalMonthlyPayment = Math.round(monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyInsurance + monthlyPmi + hoaDues);

  // Segmented progress bar percentages
  const piPercent = totalMonthlyPayment > 0 ? (monthlyPrincipalAndInterest / totalMonthlyPayment) * 100 : 60;
  const taxPercent = totalMonthlyPayment > 0 ? (monthlyPropertyTax / totalMonthlyPayment) * 100 : 25;
  const insPercent = totalMonthlyPayment > 0 ? (monthlyInsurance / totalMonthlyPayment) * 100 : 10;
  const pmiPercent = totalMonthlyPayment > 0 ? (monthlyPmi / totalMonthlyPayment) * 100 : 0;
  const hoaPercent = totalMonthlyPayment > 0 ? (hoaDues / totalMonthlyPayment) * 100 : 5;

  return (
    <section id="valuation" style={{ padding: '2.5rem 0', background: '#0B0F19', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1240px' }}>
        
        {/* Compact Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: '800', marginBottom: '0.25rem', color: '#FFF' }}>
            Home Valuation & <span style={{ color: 'var(--primary-red)' }}>US Mortgage Calculator</span>
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Instant North Texas home equity estimation & US PITI mortgage payment calculations.
          </p>
        </div>

        {/* 2-Column Compact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '1.25rem', alignItems: 'stretch' }} className="calc-layout-grid">
          
          {/* Tool 1: Compact US Mortgage Calculator */}
          <div className="glass-card" style={{ padding: '1.35rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            
            {/* Tool Header with Term Pills */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ padding: '0.45rem', borderRadius: '8px', background: 'rgba(200, 16, 46, 0.15)', color: '#F87171', border: '1px solid rgba(200, 16, 46, 0.3)' }}>
                  <DollarSign size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: '700', color: '#FFF' }}>US Mortgage Calculator</h3>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>PITI + PMI + HOA Monthly Breakdown</div>
                </div>
              </div>

              {/* Term Pills */}
              <div style={{ display: 'flex', gap: '0.25rem', background: 'rgba(15, 23, 42, 0.8)', padding: '0.2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {[30, 20, 15].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setLoanTermYears(term)}
                    style={{
                      background: loanTermYears === term ? 'var(--primary-gradient)' : 'transparent',
                      color: loanTermYears === term ? '#FFF' : 'var(--text-secondary)',
                      border: 'none',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    {term}Y Fixed
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              
              {/* Home Price */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                  <label style={{ fontSize: '0.78rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Home Price</label>
                  <span style={{ fontSize: '0.88rem', fontWeight: '700', color: '#FFF' }}>${homePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="5000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  style={{ width: '100%', height: '5px', accentColor: 'var(--primary-red)', cursor: 'pointer' }}
                />
              </div>

              {/* Down Payment & Interest Rate */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                    <label style={{ fontSize: '0.76rem', fontWeight: '600', color: 'var(--text-secondary)' }}>
                      Down ({downPaymentPercent}%)
                    </label>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#FBBF24' }}>
                      ${downPaymentAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    style={{ width: '100%', height: '5px', accentColor: 'var(--primary-red)', cursor: 'pointer' }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                    <label style={{ fontSize: '0.76rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Interest Rate</label>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#FFF' }}>{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="3.0"
                    max="10.0"
                    step="0.125"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    style={{ width: '100%', height: '5px', accentColor: 'var(--primary-red)', cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Texas Taxes, Insurance & HOA Inline Inputs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))', gap: '0.5rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '0.4rem 0.55rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Property Tax</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#FFF' }}>{propertyTaxRate}%/yr</div>
                </div>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '0.4rem 0.55rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Home Ins.</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#FFF' }}>${annualHomeInsurance}/yr</div>
                </div>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '0.4rem 0.55rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>HOA Dues</div>
                  <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#FFF' }}>${monthlyHoa}/mo</div>
                </div>
              </div>

              {/* Payment Summary Box */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.8) 100%)',
                padding: '0.9rem 1.1rem',
                borderRadius: '12px',
                border: '1px solid rgba(200, 16, 46, 0.3)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.35rem' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Estimated Monthly Payment
                    </span>
                    <div style={{ fontSize: '1.75rem', fontWeight: '900', color: '#FFF', lineHeight: '1.1' }}>
                      ${totalMonthlyPayment.toLocaleString()}
                      <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-muted)', marginLeft: '0.25rem' }}>/mo</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    Loan: <strong style={{ color: '#38BDF8' }}>${loanAmount.toLocaleString()}</strong>
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={{ height: '6px', borderRadius: '999px', display: 'flex', overflow: 'hidden', margin: '0.45rem 0', backgroundColor: '#334155' }}>
                  <div style={{ width: `${piPercent}%`, background: '#C8102E' }} title="Principal & Interest"></div>
                  <div style={{ width: `${taxPercent}%`, background: '#F59E0B' }} title="Taxes"></div>
                  <div style={{ width: `${insPercent}%`, background: '#3B82F6' }} title="Insurance"></div>
                  {isPmiApplicable && <div style={{ width: `${pmiPercent}%`, background: '#EC4899' }} title="PMI"></div>}
                  {hoaDues > 0 && <div style={{ width: `${hoaPercent}%`, background: '#10B981' }} title="HOA"></div>}
                </div>

                {/* Legend */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem 0.9rem', fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  <span>P&I: <strong style={{ color: '#FFF' }}>${Math.round(monthlyPrincipalAndInterest).toLocaleString()}</strong></span>
                  <span>Taxes: <strong style={{ color: '#FFF' }}>${monthlyPropertyTax.toLocaleString()}</strong></span>
                  <span>Ins: <strong style={{ color: '#FFF' }}>${monthlyInsurance.toLocaleString()}</strong></span>
                  {isPmiApplicable && <span>PMI: <strong style={{ color: '#F87171' }}>${monthlyPmi.toLocaleString()}</strong></span>}
                  {hoaDues > 0 && <span>HOA: <strong style={{ color: '#FFF' }}>${hoaDues.toLocaleString()}</strong></span>}
                </div>
              </div>

            </div>

          </div>

          {/* Tool 2: Compact Home Valuation Estimator */}
          <div className="glass-card" style={{ padding: '1.35rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.85rem' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <div style={{ padding: '0.45rem', borderRadius: '8px', background: 'var(--primary-gradient)', color: '#FFF', flexShrink: 0 }}>
                  <TrendingUp size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.08rem', fontWeight: '700', color: '#FFF' }}>What Is Your Home Worth?</h3>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Instant Local Market Equity Estimate</p>
                </div>
              </div>

              <form onSubmit={calculateValuation} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                    Property Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1204 Oak Meadow Trail"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.82rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                      City / Area
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.5rem 0.65rem',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        color: '#FFF',
                        fontSize: '0.82rem'
                      }}
                    >
                      <option value="Celina" style={{ background: '#1E293B' }}>Celina, TX</option>
                      <option value="Tioga" style={{ background: '#1E293B' }}>Tioga, TX</option>
                      <option value="Frisco" style={{ background: '#1E293B' }}>Frisco, TX</option>
                      <option value="Pilot Point" style={{ background: '#1E293B' }}>Pilot Point, TX</option>
                      <option value="Gainesville" style={{ background: '#1E293B' }}>Gainesville, TX</option>
                      <option value="Dallas" style={{ background: '#1E293B' }}>Dallas, TX</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                      Sq Ft
                    </label>
                    <input
                      type="number"
                      value={sqft}
                      onChange={(e) => setSqft(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.5rem 0.65rem',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        color: '#FFF',
                        fontSize: '0.82rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>
                    Condition
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.65rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      color: '#FFF',
                      fontSize: '0.82rem'
                    }}
                  >
                    <option value="luxury" style={{ background: '#1E293B' }}>Luxury Custom Upgrades</option>
                    <option value="excellent" style={{ background: '#1E293B' }}>Excellent (Move-in Ready)</option>
                    <option value="good" style={{ background: '#1E293B' }}>Good (Standard Finish)</option>
                    <option value="fair" style={{ background: '#1E293B' }}>Fair / Fixer Opportunity</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: '0.25rem', padding: '0.65rem 1rem', borderRadius: '8px', fontSize: '0.85rem' }}>
                  <Calculator size={15} /> Estimate Value
                </button>
              </form>

              {valuationResult && (
                <div style={{
                  marginTop: '0.75rem',
                  background: 'rgba(200, 16, 46, 0.12)',
                  border: '1px solid var(--primary-red)',
                  borderRadius: '10px',
                  padding: '0.75rem',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.7rem', color: '#F87171', fontWeight: '700', textTransform: 'uppercase' }}>
                    Estimated Value
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#FFF', margin: '0.1rem 0' }}>
                    {valuationResult.formattedValue}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Range: {valuationResult.range}
                  </div>
                </div>
              )}
            </div>

            <div style={{ paddingTop: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <a
                href="#contact"
                className="btn-outline"
                style={{ width: '100%', fontSize: '0.8rem', padding: '0.5rem 0.75rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.35rem' }}
              >
                Request Free CMA Report by Gail <ChevronRight size={14} />
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 920px) {
          .calc-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
