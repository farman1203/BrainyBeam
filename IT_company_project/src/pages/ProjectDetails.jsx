import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Building,
  Clock,
  Quote
} from 'lucide-react';
import Button from '../components/Button';
import { projectsData } from '../data/projectsData';
import '../styles/pages.css';

export default function ProjectDetails() {
  const { id } = useParams();

  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
        <h2>Case Study Not Found</h2>
        <p style={{ margin: '1rem 0 2rem', color: 'var(--text-secondary)' }}>
          The case study you are looking for does not exist or has been archived.
        </p>
        <Button to="/projects" variant="primary">
          Back to Case Studies
        </Button>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className="project-details-page">
      {/* 1. HERO BANNER */}
      <section className="case-study-hero">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <Link
              to="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--accent-primary)'
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to All Case Studies</span>
            </Link>
          </div>

          <div className="case-study-meta-bar">
            <span className="badge badge-blue">{project.category}</span>
            <div className="case-study-meta-item">
              <Building size={16} color="var(--text-muted)" />
              <span>{project.client}</span>
            </div>
            <div className="case-study-meta-item">
              <Calendar size={16} color="var(--text-muted)" />
              <span>{project.year}</span>
            </div>
            <div className="case-study-meta-item">
              <Clock size={16} color="var(--text-muted)" />
              <span>{project.timeline}</span>
            </div>
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, color: '#111111', lineHeight: 1.15, marginBottom: '1rem' }}>
            {project.title}
          </h1>

          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '820px', lineHeight: 1.6 }}>
            {project.subtitle} — {project.summary}
          </p>
        </div>
      </section>

      {/* 2. CASE STUDY CONTENT & SIDEBAR */}
      <section className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className="case-study-grid">
            {/* Main Narrative Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {/* Challenge */}
              <div>
                <span className="badge badge-gray" style={{ marginBottom: '0.75rem' }}>The Challenge</span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
                  Operational Bottlenecks & Legacy Friction
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '0.75rem' }}>The Engineering Solution</span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
                  Resilient, Scalable Architecture
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  {project.solution}
                </p>

                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.75rem'
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
                    Key Architectural Capabilities Delivered:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {project.keyFeatures.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9375rem' }}>
                        <CheckCircle2 size={16} color="var(--accent-primary)" />
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client Review Box */}
              {project.clientReview && (
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-card)',
                    padding: '2.5rem',
                    boxShadow: 'var(--shadow-card)',
                    position: 'relative'
                  }}
                >
                  <Quote size={36} color="var(--accent-primary)" opacity={0.2} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} />
                  <blockquote style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    "{project.clientReview.quote}"
                  </blockquote>
                  <div>
                    <div style={{ fontWeight: 700, color: '#111111' }}>{project.clientReview.author}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{project.clientReview.role}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div>
              <aside className="case-study-sidebar-card">
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Measurable Results
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="case-study-metric-box">
                        <div className="case-study-metric-val">{metric.value}</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                  <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    Technology Stack
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="project-tag" style={{ fontSize: '0.8125rem', padding: '0.3rem 0.6rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                  <Button
                    to={`/contact?project=${project.id}`}
                    variant="primary"
                    size="md"
                    style={{ width: '100%' }}
                  >
                    Build A Similar Platform
                  </Button>
                </div>
              </aside>
            </div>
          </div>

          {/* Navigation between projects */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid var(--border-color)',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <Link
              to={`/projects/${prevProject.id}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
            >
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowLeft size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Previous Project</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{prevProject.title}</div>
              </div>
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', textAlign: 'right' }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Next Project</div>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{nextProject.title}</div>
              </div>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
