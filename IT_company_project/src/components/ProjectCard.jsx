import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight, BarChart2, Users, Clock } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    category,
    year,
    tags = [],
    featured,
    stats = {},
    link,
  } = project;

  const statEntries = Object.entries(stats).slice(0, 3);
  const statIcons = [BarChart2, Users, Clock];

  return (
    <motion.div
      className={`project-card${featured ? ' project-card--featured' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      {/* Visual mockup wrapper */}
      <div className="project-card__visual">
        {/* Decorative green gradient background */}
        <div className="project-card__gradient-bg" />

        {/* Browser-style mockup frame */}
        <div className="project-card__mockup">
          <div className="project-card__mockup-bar">
            <span className="project-card__dot" style={{ background: '#ef4444' }} />
            <span className="project-card__dot" style={{ background: '#f59e0b' }} />
            <span className="project-card__dot" style={{ background: '#22c55e' }} />
            <div className="project-card__url-bar" />
          </div>
          <div className="project-card__mockup-body">
            {/* Mini stat cards inside mockup */}
            {statEntries.map(([key, val], i) => {
              const Icon = statIcons[i] ?? BarChart2;
              return (
                <div key={key} className="project-card__stat-chip">
                  <Icon size={12} style={{ color: 'var(--bright-green)', flexShrink: 0 }} />
                  <span className="project-card__stat-val">{val}</span>
                  <span className="project-card__stat-key">{key}</span>
                </div>
              );
            })}

            {/* Decorative bars */}
            <div className="project-card__bars">
              {[80, 55, 70, 45, 90].map((w, i) => (
                <div key={i} className="project-card__bar-row">
                  <div
                    className="project-card__bar"
                    style={{ width: `${w}%`, opacity: 0.6 + i * 0.06 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Year badge */}
        <div className="project-card__year-badge">{year}</div>
      </div>

      {/* Content */}
      <div className="project-card__content">
        <span className="project-card__category">{category}</span>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="project-card__tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="project-card__footer">
          {link ? (
            <Link to={link} className="project-card__cta">
              View Case Study <ArrowUpRight size={15} strokeWidth={2} />
            </Link>
          ) : (
            <span className="project-card__cta project-card__cta--disabled">
              View Case Study <ArrowUpRight size={15} strokeWidth={2} />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
