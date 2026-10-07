import React from 'react';
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Target,
  BookOpen,
  ArrowRight,
  Compass
} from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from '../components/SocialIcons';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import StatsCounter from '../components/StatsCounter';
import { teamData } from '../data/teamData';
import '../styles/pages.css';

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We relentlessly challenge conventional paradigms, continually adopting modern architecture patterns that give our clients sustainable market advantage."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Radical engineering transparency. We never recommend unnecessary technology, hide technical debt, or compromise on data privacy and security."
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We operate as an extension of your core leadership team, cultivating open communication, shared accountability, and mutual respect."
  },
  {
    icon: Target,
    title: "Customer Success",
    desc: "Our code is measured strictly by real business outcomes: higher conversion, lower latency, resilient uptime, and rapid time-to-market."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "In an industry shifting by the day, our teams invest 10% of every sprint into exploring emerging technologies, security audits, and architectural benchmarks."
  }
];

export default function About() {
  return (
    <div className="about-page-root">
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>Our Heritage & Culture</span>
            <h1 className="page-hero-title">We Build Technology With Purpose</h1>
            <p className="page-hero-desc">
              TechNova Solutions is an elite digital engineering and technology consulting company. We partner with forward-thinking enterprises, high-growth scale-ups, and startups to engineer scalable software products that endure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. COMPANY STORY & MISSION / VISION */}
      <section className="section">
        <div className="container">
          <div className="about-preview-grid">
            <div>
              <span className="badge badge-blue">Our Story</span>
              <h2 style={{ margin: '1rem 0 1.25rem' }}>Engineered by Builders, for Builders</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
                TechNova Solutions was founded in 2016 by a group of systems architects who grew tired of agency bureaucracies, bloated estimates, and fragile templates. They set out to build an engineering-first consultancy where every team member is deeply technical and committed to clean code.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                Today, TechNova operates as a global engineering force with over 50+ senior technologists, delivering mission-critical applications across North America, Europe, and the Asia-Pacific region.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Mission */}
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-card)',
                  padding: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Compass size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Our Mission</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  To empower organizations worldwide with scalable, secure, and beautiful digital software that unlocks operational efficiency and drives sustainable human progress.
                </p>
              </div>

              {/* Vision */}
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-card)',
                  padding: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--accent-light)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Target size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Our Vision</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  To be the most trusted software engineering partner for ambitious companies, recognized globally for zero-compromise architectural excellence and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="section section-secondary">
        <div className="container">
          <SectionHeading
            badge="The Foundation"
            title="Our Core Values"
            subtitle="The five principles that guide every technical decision, sprint review, and client relationship."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {values.map((v, i) => {
              const VIcon = v.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-card)',
                    padding: '2.25rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    boxShadow: 'var(--shadow-card)',
                    transition: 'all var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#BFDBFE';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      background: 'var(--accent-light)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <VIcon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{v.title}</h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. COMPANY STATS */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="By The Numbers"
            title="Proven Delivery at Scale"
            subtitle="Consistent execution across high-stakes software engagements."
          />
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-card)',
              padding: '3rem 2.5rem',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <StatsCounter />
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP & ENGINEERING TEAM */}
      <section className="section section-secondary">
        <div className="container">
          <SectionHeading
            badge="Leadership"
            title="Meet Our Engineering Leaders"
            subtitle="Distinguished systems architects, designers, and engineering directors driving our technical vision."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {teamData.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-card)',
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all var(--transition-normal)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#BFDBFE';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: '#0F172A',
                      color: '#38BDF8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '1.15rem'
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {member.name}
                    </h3>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {member.bio}
                </p>

                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <span>Focus: <strong>{member.specialty}</strong></span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <a href={member.socials.linkedin} className="social-icon-btn" style={{ width: 28, height: 28 }} aria-label="LinkedIn">
                      <LinkedinIcon size={14} />
                    </a>
                    <a href={member.socials.twitter} className="social-icon-btn" style={{ width: 28, height: 28 }} aria-label="Twitter">
                      <TwitterIcon size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="cta-banner-root">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>Join Forces</span>
              <h2 className="cta-banner-title">Build With TechNova Solutions</h2>
              <p className="cta-banner-text">
                Whether you're modernizing a legacy enterprise or architecting a breakthrough SaaS platform, we bring the talent and architecture to make it succeed.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Start A Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
