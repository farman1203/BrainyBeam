import React from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '../utils/motionVariants';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  theme = 'light',  // 'light' | 'dark'
  className = ''
}) {
  const isDark = theme === 'dark';

  return (
    <motion.div
      className={`section-header text-${align} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      {badge && (
        <span className={`badge ${isDark ? 'badge-dark' : 'badge-blue'}`} style={{ marginBottom: '0.875rem' }}>
          {badge}
        </span>
      )}
      <h2 style={{ color: isDark ? '#FFFFFF' : 'var(--text-primary)' }}>
        {title}
      </h2>
      {subtitle && (
        <p
          className="section-subtitle"
          style={{ color: isDark ? 'var(--dark-navy-muted)' : 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
