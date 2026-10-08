import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
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
import { itemFadeUp } from '../utils/motionVariants';
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
    <motion.div
      className="service-card"
      variants={itemFadeUp}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      initial="initial"
    >
      <motion.div
        className="service-icon-box"
        aria-hidden="true"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.2 }}
      >
        <IconComponent size={28} strokeWidth={2} />
      </motion.div>

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
        <motion.span
          style={{ display: 'inline-flex', alignItems: 'center' }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </Link>
    </motion.div>
  );
}
