import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { itemFadeUp } from '../utils/motionVariants';
import '../styles/components.css';

export default function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      className="testimonial-card"
      variants={itemFadeUp}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
    >
      <div className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
        ))}
      </div>

      <blockquote className="testimonial-quote">
        "{testimonial.quote}"
      </blockquote>

      {testimonial.metrics && (
        <div style={{ marginBottom: '1.25rem' }}>
          <span className="badge badge-blue" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
            {testimonial.metrics}
          </span>
        </div>
      )}

      <div className="testimonial-author-block">
        <div className="testimonial-avatar" aria-hidden="true">
          {testimonial.avatar || 'TN'}
        </div>
        <div className="testimonial-info">
          <h4>{testimonial.author}</h4>
          <p>{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
}
