import React from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';
import {
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  InstagramIcon,
  FacebookIcon
} from '../components/SocialIcons';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import FaqAccordion from '../components/FaqAccordion';
import '../styles/pages.css';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  return (
    <div className="contact-page-root">
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>Get in Touch</span>
            <h1 className="page-hero-title">Let's Build Something Great Together</h1>
            <p className="page-hero-desc">
              Have an idea, an upcoming RFQ, or a system scaling challenge? Tell us about your goals and our technical leads will get back to you with an architectural review within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN TWO-COLUMN CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '4rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Left: Contact Form */}
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111111', marginBottom: '0.5rem' }}>
                  Project Inquiry & Discovery Form
                </h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                  Please share as much detail as possible so we can pair you with the most relevant solutions architect.
                </p>
              </div>

              <ContactForm defaultService={preselectedService} />
            </div>

            {/* Right: Direct Contact Info & Office Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Quick Info Box */}
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-card)',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111' }}>
                  Corporate Headquarters
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#FFFFFF', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#111111' }}>Head Office Location</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        TechNova Tower, SG Highway, Ahmedabad, Gujarat 380054, India
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#FFFFFF', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#111111' }}>Email Inquiries</div>
                      <a href="mailto:hello@technovasolutions.com" style={{ fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                        hello@technovasolutions.com
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#FFFFFF', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#111111' }}>Direct Telephone</div>
                      <a href="tel:+919876543210" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#FFFFFF', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', flexShrink: 0 }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: '#111111' }}>Operating Hours</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        Monday – Friday: 9:00 AM – 7:00 PM IST
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        (24/7 dedicated telemetry monitoring for enterprise SLA clients)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    Follow TechNova on Social Media:
                  </div>
                  <div style={{ display: 'flex', gap: '0.625rem' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" style={{ background: '#FFFFFF' }} aria-label="LinkedIn">
                      <LinkedinIcon size={16} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" style={{ background: '#FFFFFF' }} aria-label="Twitter">
                      <TwitterIcon size={16} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" style={{ background: '#FFFFFF' }} aria-label="GitHub">
                      <GithubIcon size={16} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" style={{ background: '#FFFFFF' }} aria-label="Instagram">
                      <InstagramIcon size={16} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" style={{ background: '#FFFFFF' }} aria-label="Facebook">
                      <FacebookIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps / Office Visual Placeholder */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <MapPin size={14} color="var(--accent-primary)" />
                    Ahmedabad Tech Campus
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Interactive Map</span>
                </div>

                {/* Map Graphic / Interactive styled frame */}
                <div
                  style={{
                    height: '240px',
                    width: '100%',
                    background: 'linear-gradient(135deg, #EFF6FF 0%, #F1F5F9 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '1.5rem',
                    textAlign: 'center'
                  }}
                >
                  {/* Subtle map pattern */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.15,
                      backgroundImage: 'radial-gradient(#2563EB 1.5px, transparent 1.5px)',
                      backgroundSize: '16px 16px'
                    }}
                  />

                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 0 10px rgba(37, 99, 235, 0.2)',
                      marginBottom: '1rem',
                      zIndex: 2
                    }}
                  >
                    <MapPin size={24} />
                  </div>

                  <div style={{ zIndex: 2 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111111' }}>TechNova Solutions HQ</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>SG Highway, Ahmedabad, Gujarat, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION ON CONTACT */}
      <section className="section section-secondary">
        <div className="container">
          <SectionHeading
            badge="Inquiry FAQ"
            title="What to Expect Next"
            subtitle="Clear expectations about how our team handles your project inquiry."
          />

          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
