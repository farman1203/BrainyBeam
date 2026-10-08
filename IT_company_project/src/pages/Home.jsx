import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Layers,
  HeartPulse,
  LineChart,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Plane,
  Factory
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsCounter from '../components/StatsCounter';
import ProcessTimeline from '../components/ProcessTimeline';
import TechnologyGrid from '../components/TechnologyGrid';
import HeroVisual from '../components/HeroVisual';
import FaqAccordion from '../components/FaqAccordion';
import {
  containerVariants,
  itemFadeUp,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight
} from '../utils/motionVariants';

import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { testimonialsData } from '../data/testimonialsData';
import { industriesData } from '../data/industriesData';

import '../styles/pages.css';

// Hero stagger variants
const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.05 }
  }
};
const heroBadge  = { hidden: { opacity: 0, y: -16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };
const heroItem   = { hidden: { opacity: 0, y: 28  }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

const clientLogos = [
  { name: 'NEXORA', desc: 'Enterprise Cloud' },
  { name: 'Cloudify', desc: 'DevOps Automation' },
  { name: 'Finora', desc: 'Fintech Banking' },
  { name: 'Medix', desc: 'Healthcare Systems' },
  { name: 'UrbanGrid', desc: 'Smart Infrastructure' },
  { name: 'LogiCore', desc: 'Global Logistics' }
];

const industryIconMap = {
  HeartPulse,
  LineChart,
  GraduationCap,
  ShoppingBag,
  Building2,
  Truck,
  Plane,
  Factory
};

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="home-page-root">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-grid" />
        <div className="hero-glow-blob" />

        <div className="container">
          <div className="hero-grid-layout">
            <div className="hero-content">
              <div className="hero-badge-tag">
                <span className="hero-badge-dot" />
                <span>Next-Gen Enterprise Engineering</span>
              </div>

              <h1 className="hero-headline">
                Building Digital Solutions That{' '}
                <span className="accent-highlight">Move Businesses</span> Forward
              </h1>

              <p className="hero-subtitle">
                We help ambitious businesses transform ideas into scalable digital products, intelligent software and powerful customer experiences.
              </p>

              <div className="hero-buttons-row">
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                >
                  Start a Project
                </Button>

                <Button
                  to="/projects"
                  variant="secondary"
                  size="lg"
                >
                  Explore Our Work
                </Button>
              </div>

              <div className="hero-trust-indicators">
                <div className="hero-trust-item">
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>100% IP Ownership</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>Agile 2-Week Sprints</span>
                </div>
                <div className="hero-trust-item">
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>SOC2 & HIPAA Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Side Abstract Tech Composition */}
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 2. TRUST / CLIENT SECTION */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-title">
            Trusted By Growing Businesses & Global Innovators
          </div>
          <div className="trust-logos-grid">
            {clientLogos.map((client) => (
              <div key={client.name} className="trust-logo-item" title={client.desc}>
                <span className="trust-logo-mark" />
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW SECTION */}
      <section className="section section-secondary">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-content">
              <span className="badge badge-blue">About TechNova Solutions</span>
              <h2>We Build Technology With Purpose</h2>
              <p className="about-preview-text">
                At TechNova Solutions, we bridge the gap between ambitious business vision and resilient software engineering. Founded by veteran systems architects, we partner with visionary startups, high-growth SMEs, and Fortune 500 enterprises to engineer software products that scale effortlessly.
              </p>
              <p className="about-preview-text">
                We do not believe in cookie-cutter templates or bloated codebases. Every architecture is crafted for maximum speed, strict compliance, and intuitive human experience.
              </p>
              <div>
                <Button
                  to="/about"
                  variant="primary"
                  icon={ArrowRight}
                >
                  Discover Our Story
                </Button>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-card)',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    Measurable Engineering Impact
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    A decade of consistent technical execution across industries.
                  </p>
                </div>
                <StatsCounter />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Capabilities"
            title="Our Digital Expertise"
            subtitle="Full-cycle software engineering, intelligent cloud architecture, and human-centered design built for ambitious companies."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED SERVICE (END-TO-END DIGITAL PRODUCT DEVELOPMENT) */}
      <section className="section section-secondary">
        <div className="container">
          <div className="featured-service-grid">
            {/* Visual Dashboard Preview Left */}
            <div className="featured-service-visual">
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#2563EB' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.875rem', color: '#111111' }}>Product Architecture Blueprint</span>
                  </div>
                  <span className="badge badge-blue" style={{ fontSize: '0.7rem' }}>Production Ready</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <div style={{ background: '#F8FAFC', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>FRONTEND LAYER</div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#111111' }}>React.js / Next.js SSR + TypeScript</div>
                  </div>
                  <div style={{ background: '#F8FAFC', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>API & BUSINESS LOGIC</div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#111111' }}>Node.js / Python Microservices & GraphQL</div>
                  </div>
                  <div style={{ background: '#F8FAFC', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>DATA & CACHE</div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#111111' }}>PostgreSQL + Redis In-Memory Cluster</div>
                  </div>
                  <div style={{ background: '#F8FAFC', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CLOUD DEPLOYMENT</div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#111111' }}>AWS Multi-AZ Kubernetes with Automated CI/CD</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div>
              <span className="badge badge-blue">Specialized Delivery</span>
              <h2 style={{ margin: '1rem 0 1.25rem' }}>
                End-to-End Digital Product Development
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                From initial market research and UI/UX clickable prototypes to scalable backend microservices and automated cloud infrastructure, we take full responsibility for delivering your production digital product on schedule and within budget.
              </p>

              <div className="featured-check-list">
                <div className="featured-check-item">
                  <span className="check-icon-circle"><Check size={14} /></span>
                  <span>Scalable Architecture</span>
                </div>
                <div className="featured-check-item">
                  <span className="check-icon-circle"><Check size={14} /></span>
                  <span>Modern UI/UX</span>
                </div>
                <div className="featured-check-item">
                  <span className="check-icon-circle"><Check size={14} /></span>
                  <span>Secure Development</span>
                </div>
                <div className="featured-check-item">
                  <span className="check-icon-circle"><Check size={14} /></span>
                  <span>Continuous Support</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button to="/services" variant="primary" icon={ArrowRight}>
                  Explore All Services
                </Button>
                <Button to="/contact" variant="secondary">
                  Request an Architecture Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (DARK NAVY SECTION #0F172A) */}
      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            badge="The TechNova Advantage"
            title="Why Businesses Choose TechNova"
            subtitle="We combine the strategic depth of top-tier consulting firms with the agility and velocity of a dedicated software squad."
            theme="dark"
          />

          <div className="why-choose-grid">
            <div className="why-choose-card">
              <span className="why-choose-num">01</span>
              <h3 className="why-choose-title">Experienced Team</h3>
              <p className="why-choose-desc">
                Our engineers and system architects average 8+ years of production experience across enterprise software, high-load fintechs, and venture-backed SaaS.
              </p>
            </div>

            <div className="why-choose-card">
              <span className="why-choose-num">02</span>
              <h3 className="why-choose-title">Business-Focused Solutions</h3>
              <p className="why-choose-desc">
                We don't build technology for technology's sake. Every architectural decision is mapped directly to user acquisition, operational efficiency, and revenue generation.
              </p>
            </div>

            <div className="why-choose-card">
              <span className="why-choose-num">03</span>
              <h3 className="why-choose-title">Modern Technology</h3>
              <p className="why-choose-desc">
                We build exclusively with contemporary, proven, and high-performance stacks—leveraging React, Next.js, Node.js, Python, and cloud-native Kubernetes frameworks.
              </p>
            </div>

            <div className="why-choose-card">
              <span className="why-choose-num">04</span>
              <h3 className="why-choose-title">Long-Term Partnership</h3>
              <p className="why-choose-desc">
                Our relationship doesn't end at deployment. We stand behind our code with proactive maintenance, cloud cost optimization, and ongoing feature roadmaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TECHNOLOGY STACK SECTION */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Engineered for Performance"
            title="Technologies We Work With"
            subtitle="Battle-tested open-source frameworks, modern cloud platforms, and strict type safety standards."
          />

          <TechnologyGrid />
        </div>
      </section>

      {/* 8. INDUSTRIES SECTION */}
      <section className="section section-secondary">
        <div className="container">
          <SectionHeading
            badge="Domain Expertise"
            title="Technology For Every Industry"
            subtitle="Deep domain engineering compliance and workflow understanding across vital economic sectors."
          />

          <div className="industries-cards-grid">
            {industriesData.map((ind) => {
              const IndIcon = industryIconMap[ind.icon] || Layers;
              return (
                <Link
                  key={ind.id}
                  to="/industries"
                  className="industry-compact-card"
                >
                  <div className="industry-compact-icon">
                    <IndIcon size={24} />
                  </div>
                  <h3 className="industry-compact-title">{ind.title.split('&')[0]}</h3>
                  <p className="industry-compact-desc">{ind.tagline}</p>
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.8125rem',
                      color: 'var(--accent-primary)',
                      fontWeight: 600
                    }}
                  >
                    <span>View Solutions</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FEATURED WORK / CASE STUDIES */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Proven Case Studies"
            title="Featured Work"
            subtitle="Explore how we engineered scalable platforms and digital products for our clients worldwide."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem'
            }}
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button
              to="/projects"
              variant="secondary"
              size="lg"
              icon={ArrowRight}
            >
              View All Case Studies ({projectsData.length})
            </Button>
          </div>
        </div>
      </section>

      {/* 10. PROCESS SECTION */}
      <section className="section section-secondary">
        <div className="container">
          <SectionHeading
            badge="Our Methodology"
            title="How We Bring Ideas To Life"
            subtitle="A transparent, agile, and disciplined 6-stage engineering process designed to eliminate risks and deliver high velocity."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* 11. TESTIMONIALS SECTION */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Client Feedback"
            title="What Our Clients Say"
            subtitle="Hear directly from founders, CTOs, and product executives who trust TechNova Solutions."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {testimonialsData.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ ACCORDION */}
      <section className="section section-secondary">
        <div className="container">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about partnering with TechNova Solutions."
          />

          <FaqAccordion />
        </div>
      </section>

      {/* 13. CTA SECTION (DARK NAVY #0F172A) */}
      <section className="cta-banner-root">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>
                Start Your Digital Evolution
              </span>
              <h2 className="cta-banner-title">
                Have A Project In Mind?
              </h2>
              <p className="cta-banner-text">
                Let's turn your idea into a powerful digital product. Schedule a discovery session with our senior solution architects today.
              </p>
            </div>

            <div className="cta-banner-actions">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                Start A Conversation
              </Button>
              <div style={{ textAlign: 'center', fontSize: '0.8125rem', color: '#94A3B8' }}>
                Guaranteed response in &lt; 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
