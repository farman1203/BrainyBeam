import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'motion/react';

const STATS = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    desc: 'Across web, mobile & cloud',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Years Experience',
    desc: 'In the IT industry',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    desc: 'Average retention rate',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Expert Engineers',
    desc: 'Full-stack & specialized',
  },
];

const useCountUp = (target, duration = 1800, started = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, started]);

  return count;
};

const StatItem = ({ value, suffix, label, desc, started }) => {
  const count = useCountUp(value, 1800, started);
  return (
    <div className="stat-item">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-desc">{desc}</div>
    </div>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  return (
    <div ref={ref} className="stats-grid">
      {STATS.map((stat) => (
        <StatItem key={stat.label} {...stat} started={isInView} />
      ))}
    </div>
  );
};

export default StatsCounter;
