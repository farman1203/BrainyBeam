import React from 'react';
import { Link } from 'react-router-dom';
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
  Check
} from 'lucide-react';
import '../styles/components.css';

const iconMap = {
  Globe,
  Smartphone,
  Layout,
  Code2,
  Cloud,
  Cpu,
  ShoppingBag,
  RefreshCw
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <div className="service-card">
      <div className="service-icon-box" aria-hidden="true">
        <IconComponent size={28} strokeWidth={2} />
      </div>

      <h3 className="service-title">{service.title}</h3>

      <p className="service-desc">{service.shortDescription}</p>

      {service.features && service.features.length > 0 && (
        <ul style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {service.features.slice(0, 3).map((feat, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)'
              }}
            >
              <Check size={14} color="var(--accent-primary)" strokeWidth={2.5} />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <Link to="/services" className="service-link">
        <span>Learn More</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
