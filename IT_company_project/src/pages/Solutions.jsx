import React from 'react';
import {
  Cloud,
  Cpu,
  ShieldCheck,
  Server,
  Layers,
  ArrowRight,
  Check,
  Workflow
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import '../styles/pages.css';

const solutionPillars = [
  {
    icon: Cloud,
    title: "Cloud Migration & Infrastructure As Code",
    desc: "Seamlessly transition legacy workloads to AWS or Azure with zero downtime. We implement Terraform IaC, multi-region Kubernetes, and automated FinOps budget controls.",
    highlights: ["40% average cloud bill reduction", "Automated multi-AZ disaster failover", "Zero downtime cutover guarantee"]
  },
  {
    icon: Layers,
    title: "Custom Multi-Tenant SaaS Platforms",
    desc: "From seed-stage concept to enterprise-ready SaaS. We engineer multi-tenant database isolation, subscription metering, role-based access control (RBAC), and customer admin suites.",
    highlights: ["SOC2 Type II compliance readiness", "Automated Stripe billing pipelines", "Sub-20ms tenant data queries"]
  },
  {
    icon: Server,
    title: "API & Microservices Architecture",
    desc: "Decouple monolithic applications into resilient, loosely coupled microservices. We design high-speed GraphQL and REST gateways with Redis caching and Kafka event streams.",
    highlights: ["100,000+ concurrent requests handling", "Comprehensive OpenAPI documentation", "Distributed tracing & telemetry"]
  },
  {
    icon: Cpu,
    title: "Autonomous AI & Workflow Automation",
    desc: "Embed private, fine-tuned machine learning models directly into your business processes. Automate manual invoice reconciliation, customer support, and document ingestion.",
    highlights: ["Self-hosted models with strict data sovereignty", "Over 70% routine task reduction", "Human-in-the-loop validation"]
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Cyber Defense & Governance",
    desc: "Proactive security architecture audits, penetration testing, automated static code analysis, and compliance hardening for HIPAA, PCI-DSS, and GDPR standards.",
    highlights: ["OWASP Top 10 automated CI checks", "End-to-end payload encryption", "Continuous dependency scanning"]
  },
  {
    icon: Workflow,
    title: "Legacy Monolith Modernization",
    desc: "Safely refactor 10-year-old codebases without freezing ongoing business operations using the Strangler Fig pattern, incremental micro-frontends, and modernized CI/CD pipelines.",
    highlights: ["Zero operational halts during refactoring", "Drastic reduction in technical debt", "Future-proof developer onboarding"]
  }
];

export default function Solutions() {
  return (
    <div className="solutions-page-root">
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>Enterprise Solutions</span>
            <h1 className="page-hero-title">Architected for Speed, Security & Massive Scale</h1>
            <p className="page-hero-desc">
              Turnkey architectural blueprints and specialized technical solutions engineered to solve high-concurrency challenges, eliminate technical debt, and ensure regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SOLUTION PILLARS */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Strategic Offerings"
            title="Enterprise Solution Pillars"
            subtitle="Engineered frameworks addressing the most critical operational and infrastructural bottlenecks."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}
          >
            {solutionPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-card)',
                    padding: '2.5rem 2rem',
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
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 12,
                      background: 'var(--accent-light)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <PillarIcon size={26} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                    {pillar.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                    {pillar.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                    {pillar.highlights.map((item, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem' }}>
                        <Check size={14} color="var(--accent-primary)" strokeWidth={2.5} />
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE: IN-HOUSE VS TECHNOVA */}
      <section className="section section-secondary">
        <div className="container">
          <SectionHeading
            badge="The ROI Case"
            title="Comparing Delivery Models"
            subtitle="Why leading CTOs choose TechNova over lengthy in-house hiring or traditional generalist agencies."
          />

          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-card)',
              overflowX: 'auto',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>Dimension</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 700, color: 'var(--accent-primary)' }}>TechNova Solutions</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>Internal Hiring</th>
                  <th style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: 'var(--text-muted)' }}>Generic Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dim: "Time to Deployment",
                    tn: "10-14 days to sprint kickoff",
                    ih: "3-6 months recruiting & ramp-up",
                    ga: "4-8 weeks account onboarding"
                  },
                  {
                    dim: "Technical Seniority",
                    tn: "100% senior architects & leads",
                    ih: "Mixed seniority, high hiring risk",
                    ga: "Often delegated to junior interns"
                  },
                  {
                    dim: "Source Code & IP Ownership",
                    tn: "100% full transfer on day one",
                    ih: "Full ownership (internal)",
                    ga: "Often restricted or proprietary lock-in"
                  },
                  {
                    dim: "Architecture Standards",
                    tn: "Enterprise type-safety, CI/CD & microservices",
                    ih: "Varies by developer habits",
                    ga: "Rushed shortcuts & fragile templates"
                  },
                  {
                    dim: "Scalability SLA",
                    tn: "Guaranteed 99.98% high-availability",
                    ih: "Depends on in-house DevOps bandwidth",
                    ga: "Rarely guaranteed post-launch"
                  }
                ].map((row, rIdx) => (
                  <tr key={rIdx} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{row.dim}</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Check size={16} /> {row.tn}
                      </span>
                    </td>
                    <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-secondary)' }}>{row.ih}</td>
                    <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-secondary)' }}>{row.ga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="cta-banner-root">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>Architectural Advisory</span>
              <h2 className="cta-banner-title">Ready to Modernize Your Stack?</h2>
              <p className="cta-banner-text">
                Book an architecture audit with our principal cloud and software engineers. We will analyze your system vulnerabilities and deliver an executable roadmap.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Schedule Architecture Review
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
