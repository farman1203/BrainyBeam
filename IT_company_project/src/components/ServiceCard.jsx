import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const { title, description, icon: Icon, features = [], link } = service;

  return (
    <motion.div
      className="service-card"
      whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(21,128,61,0.13)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {/* Icon box */}
      <div className="service-card__icon-box">
        {Icon && <Icon size={28} strokeWidth={1.75} />}
      </div>

      {/* Title */}
      <h3 className="service-card__title">{title}</h3>

      {/* Description */}
      <p className="service-card__desc">{description}</p>

      {/* Features list */}
      {features.length > 0 && (
        <ul className="service-card__features">
          {features.slice(0, 3).map((feat, i) => (
            <li key={i} className="service-card__feature-item">
              <CheckCircle2
                size={14}
                strokeWidth={2}
                style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: 2 }}
              />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Learn More link */}
      <div className="service-card__footer">
        {link ? (
          <Link to={link} className="service-card__link">
            <span>Learn More</span>
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        ) : (
          <span className="service-card__link service-card__link--disabled">
            <span>Learn More</span>
            <ArrowRight size={15} strokeWidth={2} />
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
