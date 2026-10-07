import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/components.css';

export default function ProjectCard({ project }) {
  // Extract key metric to display on preview card
  const primaryMetric = project.metrics && project.metrics[0];
  const secondaryMetric = project.metrics && project.metrics[1];

  return (
    <article className="project-card">
      <div className="project-visual-wrapper">
        <div className="project-mockup-frame">
          <div className="mockup-header-bar">
            <div className="mockup-dots">
              <div className="mockup-dot" />
              <div className="mockup-dot" />
              <div className="mockup-dot" />
            </div>
            <span className="mockup-badge">{project.type}</span>
          </div>

          <div className="mockup-body">
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#111111', marginBottom: '2px' }}>
              {project.title} Console
            </div>
            {primaryMetric && (
              <div className="mockup-stat-row">
                <span style={{ color: 'var(--text-secondary)' }}>{primaryMetric.label}</span>
                <span className="mockup-stat-val">{primaryMetric.value}</span>
              </div>
            )}
            {secondaryMetric && (
              <div className="mockup-stat-row">
                <span style={{ color: 'var(--text-secondary)' }}>{secondaryMetric.label}</span>
                <span className="mockup-stat-val">{secondaryMetric.value}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-category-meta">
          <span className="project-category-tag">{project.category}</span>
          <span className="project-year">{project.year}</span>
        </div>

        <h3 className="project-card-title">{project.title}</h3>

        <p className="project-card-desc">{project.subtitle || project.summary}</p>

        <div className="project-tags-list">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="project-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-footer">
          <Link to={`/projects/${project.id}`} className="service-link">
            <span>View Case Study</span>
            <ArrowRight size={16} />
          </Link>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            {project.timeline}
          </span>
        </div>
      </div>
    </article>
  );
}
