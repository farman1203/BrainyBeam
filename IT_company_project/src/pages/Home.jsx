import React, { lazy, Suspense } from 'react';
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
import Reveal from '../components/Reveal';

import { servicesData }    from '../data/servicesData';
import { projectsData }    from '../data/projectsData';
import { testimonialsData } from '../data/testimonialsData';
import { industriesData }  from '../data/industriesData';

import '../styles/hero.css';
import '../styles/pages.css';

// Lazy-load heavy 3D component
const EmeraldHero3D = lazy(() =>
  import('../components/three/EmeraldHero3D').catch(() => ({
    default: () => <HeroVisual />,
  }))
);

// ── Animation Variants ──────────────────────────────────────────
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};
const heroBadge = {
  hidden: { opacity: 0, y: -14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const clientLogos = [
  { name: 'NEXORA',    desc: 'Enterprise Cloud' },
  { name: 'Cloudify',  desc: 'DevOps Automation' },
  { name: 'Finora',    desc: 'Fintech Banking' },
  { name: 'Medix',     desc: 'Healthcare Systems' },
  { name: 'UrbanGrid', desc: 'Smart Infrastructure' },
  { name: 'LogiCore',  desc: 'Global Logistics' },
];

const industryIconMap = {
  HeartPulse, LineChart, GraduationCap,
  ShoppingBag, Building2, Truck, Plane, Factory
};

const whyCards = [
  { num: '01', title: 'Experienced Team',          desc: 'Engineers and system architects averaging 8+ years of production experience across enterprise software, high-load fintech, and venture-backed SaaS.' },
  { num: '02', title: 'Business-First Approach',   desc: 'Every architectural decision maps directly to user acquisition, operational efficiency, and revenue growth — never technology for its own sake.' },
  { num: '03', title: 'Modern Technology Stack',   desc: 'We build exclusively with contemporary, proven frameworks: React, Next.js, Node.js, Python, and cloud-native Kubernetes infrastructure.' },
  { num: '04', title: 'Long-Term Partnership',      desc: 'Our relationship doesn\'t end at deployment. Proactive maintenance, cloud cost optimization, and ongoing feature roadmaps ensure lasting value.' },
];

export default function Home() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="home-page-root">

      {/* ═══ 1. HERO ═══════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-bg-ambient" aria-hidden="true" />
        <div className="hero-bg-grid"    aria-hidden="true" />

        <div className="container">
          <div className="hero-grid-layout">
            {/* Left: Text Content */}
            <motion.div
              className="hero-content"
              variants={heroContainer}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={heroBadge} className="hero-badge-tag">
                <span className="hero-badge-dot" />
                Next-Gen Enterprise Engineering
              </motion.div>

              <motion.h1 variants={heroItem} className="hero-headline">
                Building Digital Solutions That{' '}
                <span className="accent-highlight">Move Businesses</span>{' '}
                Forward
              </motion.h1>

              <motion.p variants={heroItem} className="hero-subtitle">
                We help ambitious businesses transform ideas into scalable digital products,
                intelligent software, and powerful customer experiences that drive real growth.
              </motion.p>

              <motion.div variants={heroItem} className="hero-buttons-row">
                <Button to="/contact" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Start a Project
                </Button>
                <Button to="/projects" variant="secondary" size="lg">
                  Explore Our Work
                </Button>
              </motion.div>

              <motion.div variants={heroItem} className="hero-trust-indicators">
                {[
                  '100% IP Ownership',
                  'Agile 2-Week Sprints',
                  'SOC2 & HIPAA Ready',
                ].map((item) => (
                  <div key={item} className="hero-trust-item">
                    <CheckCircle2 size={15} color="var(--accent-green)" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: 3D Visual */}
            <div className="hero-visual-container">
              <Suspense fallback={<HeroVisual />}>
                <div className="hero-3d-canvas-wrapper">
                  <EmeraldHero3D />
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. TRUST STRIP ════════════════════════════════════ */}
      <section className="trust-strip">
        <div className="container">
          <div className="trust-title">Trusted By Growing Businesses &amp; Global Innovators</div>
          <div className="trust-logos-grid">
            {clientLogos.map((client) => (
              <motion.div
                key={client.name}
                className="trust-logo-item"
                title={client.desc}
                whileHover={{ y: -3, color: 'var(--accent-green)' }}
              >
                <span className="trust-logo-mark" />
                <span>{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ABOUT PREVIEW ══════════════════════════════════ */}
      <section className="section section-soft">
        <div className="container">
          <div className="about-preview-grid">
            <Reveal direction="left">
              <div className="about-preview-content">
                <span className="badge badge-green">About TechNova Solutions</span>
                <h2>We Build Technology With Purpose</h2>
                <p className="about-preview-text">
                  At TechNova Solutions, we bridge the gap between ambitious business vision
                  and resilient software engineering. Founded by veteran systems architects,
                  we partner with visionary startups, high-growth SMEs, and Fortune 500
                  enterprises to engineer software products that scale effortlessly.
                </p>
                <p className="about-preview-text">
                  We do not believe in cookie-cutter templates or bloated codebases.
                  Every architecture is crafted for maximum speed, strict compliance,
                  and intuitive human experience.
                </p>
                <Button to="/about" variant="primary" icon={ArrowRight}>
                  Discover Our Story
                </Button>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="stats-card-wrapper">
                <div style={{ marginBottom: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.375rem' }}>
                    Measurable Engineering Impact
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    A decade of consistent technical execution across industries.
                  </p>
                </div>
                <StatsCounter />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 4. SERVICES ═══════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Capabilities"
            title="Our Digital Expertise"
            subtitle="Full-cycle software engineering, intelligent cloud architecture, and human-centered design built for ambitious companies."
            align="center"
          />
          <div className="services-cards-grid">
            {servicesData.slice(0, 6).map((service, i) => (
              <Reveal key={service.id} delay={i * 0.07}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. FEATURED CAPABILITY SPLIT ═════════════════════ */}
      <section className="section section-green">
        <div className="container">
          <div className="featured-service-grid">
            {/* Visual Panel */}
            <Reveal direction="left">
              <div className="featured-service-visual">
                <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--bright-green)', boxShadow: '0 0 8px rgba(34,197,94,0.5)' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                      Product Architecture Blueprint
                    </span>
                  </div>
                  <span className="badge badge-green" style={{ fontSize: '0.65rem' }}>Production Ready</span>
                </div>
                {[
                  { layer: 'FRONTEND LAYER',     tech: 'React.js / Next.js SSR + TypeScript' },
                  { layer: 'API & BUSINESS LOGIC', tech: 'Node.js / Python Microservices & GraphQL' },
                  { layer: 'DATA & CACHE',        tech: 'PostgreSQL + Redis In-Memory Cluster' },
                  { layer: 'CLOUD DEPLOYMENT',    tech: 'AWS Multi-AZ Kubernetes with CI/CD' },
                ].map(({ layer, tech }) => (
                  <div key={layer} style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.875rem 1rem',
                    marginBottom: '0.75rem'
                  }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                      {layer}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Content */}
            <Reveal direction="right">
              <div>
                <span className="badge badge-green">Specialized Delivery</span>
                <h2 style={{ margin: '1.25rem 0 1.25rem' }}>
                  End-to-End Digital Product Development
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  From initial market research and UI/UX prototypes to scalable backend
                  microservices and automated cloud infrastructure, we take full responsibility
                  for delivering your production digital product on schedule and within budget.
                </p>
                <div className="featured-check-list">
                  {['Scalable Architecture', 'Modern UI/UX', 'Secure Development', 'Continuous Support'].map((item) => (
                    <div key={item} className="featured-check-item">
                      <span className="check-icon-circle"><Check size={14} /></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Button to="/services" variant="primary" icon={ArrowRight}>Explore All Services</Button>
                  <Button to="/contact" variant="secondary">Request Architecture Review</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 6. WHY CHOOSE US (dark forest) ═══════════════════ */}
      <section className="section section-dark">
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34, 197, 94, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div className="container">
          <SectionHeading
            badge="The TechNova Advantage"
            title="Why Businesses Choose TechNova"
            subtitle="We combine the strategic depth of top-tier consulting firms with the agility and velocity of a dedicated software squad."
            theme="dark"
            align="center"
          />
          <div className="why-choose-grid">
            {whyCards.map((card, i) => (
              <Reveal key={card.num} delay={i * 0.1}>
                <div className="why-choose-card">
                  <span className="why-choose-num">{card.num}</span>
                  <h3 className="why-choose-title">{card.title}</h3>
                  <p className="why-choose-desc">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. TECH STACK ═════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Engineered for Performance"
            title="Technologies We Work With"
            subtitle="Battle-tested open-source frameworks, modern cloud platforms, and strict type safety standards."
            align="center"
          />
          <TechnologyGrid />
        </div>
      </section>

      {/* ═══ 8. INDUSTRIES ═════════════════════════════════════ */}
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            badge="Domain Expertise"
            title="Technology For Every Industry"
            subtitle="Deep domain engineering, compliance expertise, and workflow understanding across vital economic sectors."
            align="center"
          />
          <div className="industries-cards-grid">
            {industriesData.map((ind) => {
              const IndIcon = industryIconMap[ind.icon] || Layers;
              return (
                <Link key={ind.id} to="/industries" className="industry-compact-card">
                  <div className="industry-compact-icon">
                    <IndIcon size={24} />
                  </div>
                  <h3 className="industry-compact-title">{ind.title.split('&')[0]}</h3>
                  <p className="industry-compact-desc">{ind.tagline}</p>
                  <div style={{
                    marginTop: 'auto', paddingTop: '1rem',
                    display: 'flex', alignItems: 'center', gap: '4px',
                    fontSize: '0.8125rem', color: 'var(--accent-green)', fontWeight: 600
                  }}>
                    <span>View Solutions</span>
                    <ArrowRight size={13} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 9. FEATURED PROJECTS ══════════════════════════════ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Proven Case Studies"
            title="Featured Work"
            subtitle="Explore how we engineered scalable platforms and digital products for our clients worldwide."
            align="center"
          />
          <div className="projects-cards-grid">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/projects" variant="secondary" size="lg" icon={ArrowRight}>
              View All Case Studies ({projectsData.length})
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 10. PROCESS ════════════════════════════════════════ */}
      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            badge="Our Methodology"
            title="How We Bring Ideas To Life"
            subtitle="A transparent, agile, and disciplined 6-stage engineering process designed to eliminate risks and deliver high velocity."
            align="center"
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* ═══ 11. TESTIMONIALS ══════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Client Feedback"
            title="What Our Clients Say"
            subtitle="Hear directly from founders, CTOs, and product executives who trust TechNova Solutions."
            align="center"
          />
          <div className="testimonials-grid">
            {testimonialsData.slice(0, 3).map((t, i) => (
              <Reveal key={t.id} delay={i * 0.1}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. FAQ ═══════════════════════════════════════════ */}
      <section className="section section-green">
        <div className="container">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about partnering with TechNova Solutions."
            align="center"
          />
          <FaqAccordion />
        </div>
      </section>

      {/* ═══ 13. CTA BANNER ════════════════════════════════════ */}
      <section className="cta-banner-root">
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div className="container">
          <Reveal>
            <div className="cta-banner-box">
              <div className="cta-banner-content">
                <span className="badge badge-dark" style={{ marginBottom: '1.25rem' }}>
                  Start Your Digital Evolution
                </span>
                <h2 className="cta-banner-title">Have A Project In Mind?</h2>
                <p className="cta-banner-text">
                  Let's turn your idea into a powerful digital product. Schedule a discovery
                  session with our senior solution architects today.
                </p>
              </div>
              <div className="cta-banner-actions">
                <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                  Start A Conversation
                </Button>
                <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--dark-forest-muted)' }}>
                  Guaranteed response in &lt; 24 hours
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
