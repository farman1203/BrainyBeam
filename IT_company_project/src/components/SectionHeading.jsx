import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const SectionHeading = ({
  badge,
  title,
  subtitle,
  theme = 'light',
  align = 'center',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  const isDark = theme === 'dark';
  const textAlign = align === 'center' ? 'center' : 'left';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      className="section-heading"
      style={{ textAlign, maxWidth: align === 'center' ? 720 : '100%', margin: align === 'center' ? '0 auto' : '0' }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {badge && (
        <motion.div variants={itemVariants} style={{ marginBottom: '1rem' }}>
          <span className={isDark ? 'badge badge-dark' : 'badge badge-green'}>
            {badge}
          </span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          variants={itemVariants}
          className="section-title"
          style={{
            color: isDark ? '#FFFFFF' : 'var(--text-primary)',
            marginBottom: subtitle ? '1rem' : 0,
          }}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="section-subtitle"
          style={{
            color: isDark ? 'rgba(255,255,255,0.72)' : 'var(--text-secondary)',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
