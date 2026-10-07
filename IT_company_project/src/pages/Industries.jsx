import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  LineChart,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Plane,
  Factory,
  ArrowRight,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import Button from '../components/Button';
import { industriesData } from '../data/industriesData';
import '../styles/pages.css';

const industryIcons = {
  HeartPulse,
  LineChart,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Plane,
  Factory
};

export default function Industries() {
  return (
    <div className="industries-page-root">
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>Sector Expertise</span>
            <h1 className="page-hero-title">Technology Tailored For Every Industry</h1>
            <p className="page-hero-desc">
              We translate regulatory demands, mission-critical workflows, and complex operational dynamics into elegant, high-throughput digital software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES DETAILED BREAKDOWN */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {industriesData.map((ind) => {
              const IndIcon = industryIcons[ind.icon] || HeartPulse;

              return (
                <div
                  key={ind.id}
                  id={ind.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-card)',
                    padding: '3rem',
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  {/* Top Bar */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid var(--border-color)',
                      marginBottom: '2rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: 12,
                          background: 'var(--accent-light)',
                          color: 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IndIcon size={26} />
                      </div>
                      <div>
                        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#111111' }}>
                          {ind.title}
                        </h2>
                        <span style={{ fontSize: '0.9375rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                          {ind.tagline}
                        </span>
                      </div>
                    </div>

                    {ind.caseStudyRef && (
                      <Link
                        to={`/projects/${ind.caseStudyRef}`}
                        className="btn btn-secondary btn-sm"
                      >
                        <span>View Related Case Study</span>
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>

                  <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                    {ind.description}
                  </p>

                  {/* 2-Column: Challenges vs Our Solutions */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                      gap: '2rem',
                      marginBottom: '2.5rem'
                    }}
                  >
                    {/* Common Challenges */}
                    <div
                      style={{
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.75rem'
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: '#DC2626',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '1rem'
                        }}
                      >
                        <AlertCircle size={18} />
                        <span>Common Industry Challenges</span>
                      </h4>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {ind.challenges.map((ch, cIdx) => (
                          <li
                            key={cIdx}
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.5,
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem'
                            }}
                          >
                            <span style={{ color: '#EF4444', fontWeight: 700, marginTop: '-1px' }}>✕</span>
                            <span>{ch}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Our Solutions */}
                    <div
                      style={{
                        background: 'var(--accent-light)',
                        border: '1px solid rgba(37, 99, 235, 0.2)',
                        borderRadius: 'var(--radius-md)',
                        padding: '1.75rem'
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '1rem'
                        }}
                      >
                        <CheckCircle2 size={18} />
                        <span>TechNova Engineering Solutions</span>
                      </h4>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {ind.solutions.map((sol, sIdx) => (
                          <li
                            key={sIdx}
                            style={{
                              fontSize: '0.875rem',
                              color: '#1E3A8A',
                              lineHeight: 1.5,
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem'
                            }}
                          >
                            <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Benefits & Tech Bottom Strip */}
                  <div
                    style={{
                      background: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr',
                      gap: '1.5rem',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Measurable Industry Benefits
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {ind.benefits.map((b, bIdx) => (
                          <div key={bIdx} style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                            <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }} />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <Button
                        to={`/contact?industry=${encodeURIComponent(ind.title)}`}
                        variant="primary"
                        size="sm"
                        icon={ArrowRight}
                      >
                        Inquire for {ind.title.split('&')[0]}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="cta-banner-root">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>Domain Consultation</span>
              <h2 className="cta-banner-title">Build Industry-Grade Software</h2>
              <p className="cta-banner-text">
                Our architects combine deep regulatory fluency with world-class engineering execution. Let's design a compliant, competitive solution for your vertical.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Consult With A Domain Specialist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
