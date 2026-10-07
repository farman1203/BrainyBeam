import React from 'react';
import {
  Globe,
  Smartphone,
  Layout,
  Code2,
  Cloud,
  Cpu,
  ShoppingBag,
  RefreshCw,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ProcessTimeline from '../components/ProcessTimeline';
import TechnologyGrid from '../components/TechnologyGrid';
import { servicesData } from '../data/servicesData';
import '../styles/pages.css';

const serviceIcons = {
  Globe,
  Smartphone,
  Layout,
  Code2,
  Cloud,
  Cpu,
  ShoppingBag,
  RefreshCw
};

export default function Services() {
  return (
    <div className="services-page-root">
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>Engineering Services</span>
            <h1 className="page-hero-title">Comprehensive Digital Product Engineering</h1>
            <p className="page-hero-desc">
              We design, build, and scale enterprise web applications, mobile platforms, cloud infrastructures, and AI workflows engineered for performance and long-term maintainability.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DETAILED SERVICE BLOCKS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {servicesData.map((svc, index) => {
              const IconComp = serviceIcons[svc.icon] || Code2;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-card)',
                    padding: '3rem',
                    boxShadow: 'var(--shadow-card)',
                    display: 'grid',
                    gridTemplateColumns: isEven ? '1.2fr 1fr' : '1fr 1.2fr',
                    gap: '3rem',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          backgroundColor: 'var(--accent-light)',
                          color: 'var(--accent-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <IconComp size={24} />
                      </div>
                      <span className="badge badge-gray">{svc.category}</span>
                    </div>

                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
                      {svc.title}
                    </h2>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      {svc.longDescription}
                    </p>

                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Key Capabilities & Deliverables
                    </h4>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.625rem', marginBottom: '2rem' }}>
                      {svc.features.map((feature, fIdx) => (
                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9375rem' }}>
                          <CheckCircle2 size={16} color="var(--accent-primary)" strokeWidth={2.5} />
                          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <Button
                        to={`/contact?service=${encodeURIComponent(svc.title)}`}
                        variant="primary"
                        size="md"
                        icon={ArrowRight}
                      >
                        Request Estimate for {svc.title}
                      </Button>
                    </div>
                  </div>

                  {/* Right Box: Benefits & Tech Stack */}
                  <div
                    style={{
                      order: isEven ? 2 : 1,
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '2rem'
                    }}
                  >
                    <div style={{ marginBottom: '1.75rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: '#111111' }}>
                        Measurable Business Outcomes
                      </h4>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                        {svc.benefits.map((benefit, bIdx) => (
                          <li
                            key={bIdx}
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-secondary)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent-primary)', flexShrink: 0 }} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                      <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                        Primary Technologies
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                        {svc.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            style={{
                              fontSize: '0.8125rem',
                              background: '#FFFFFF',
                              border: '1px solid var(--border-color)',
                              padding: '0.25rem 0.65rem',
                              borderRadius: '6px',
                              fontWeight: 600,
                              color: 'var(--text-primary)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DEVELOPMENT PROCESS */}
      <section className="section section-secondary">
        <div className="container">
          <SectionHeading
            badge="The TechNova Blueprint"
            title="Our Delivery Lifecycle"
            subtitle="How we take complex technical specifications and deliver clean, verified software in predictable sprint cadences."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* 4. TECH STACK */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Technology"
            title="Modern Engineering Stacks"
            subtitle="We choose frameworks for performance, scalability, and long-term ecosystem health."
          />

          <TechnologyGrid />
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="cta-banner-root">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>Get A Quote</span>
              <h2 className="cta-banner-title">Need A Custom Solution?</h2>
              <p className="cta-banner-text">
                Speak directly with an enterprise architect. We will analyze your specifications and provide a detailed technical feasibility report.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Consult With An Architect
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
