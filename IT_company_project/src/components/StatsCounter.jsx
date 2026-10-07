import React, { useState, useEffect, useRef } from 'react';
import '../styles/components.css';

const statsData = [
  { target: 10, suffix: '+', label: 'Years Experience', desc: 'Delivering enterprise engineering' },
  { target: 150, suffix: '+', label: 'Projects Delivered', desc: 'Across 12 global countries' },
  { target: 50, suffix: '+', label: 'Technology Experts', desc: 'Senior architects & developers' },
  { target: 98, suffix: '%', label: 'Client Satisfaction', desc: 'Long-term client partnerships' }
];

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1600; // ms
    const frames = 40;
    const intervalTime = duration / frames;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / frames;
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);

      setCounts(
        statsData.map((item) => Math.floor(easeOutQuad * item.target))
      );

      if (step >= frames) {
        clearInterval(timer);
        setCounts(statsData.map((item) => item.target));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <div className="stats-grid" ref={sectionRef}>
      {statsData.map((item, idx) => (
        <div key={idx} className="stat-item">
          <div className="stat-number">
            {counts[idx]}
            {item.suffix}
          </div>
          <div className="stat-label">{item.label}</div>
          <div className="stat-desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}
