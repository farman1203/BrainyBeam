import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  const { quote, author, role, company, avatar, rating = 5 } = testimonial;

  const initials = author
    ? author
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'CL';

  return (
    <motion.div
      className="testimonial-card"
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(21,128,61,0.10)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      {/* Quote icon */}
      <div className="testimonial-card__quote-icon">
        <Quote size={22} strokeWidth={1.5} />
      </div>

      {/* Star rating */}
      <div className="testimonial-card__stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? '#F59E0B' : 'none'}
            stroke={i < rating ? '#F59E0B' : '#CBD5E1'}
            strokeWidth={1.5}
          />
        ))}
      </div>

      {/* Quote text */}
      <blockquote className="testimonial-card__quote">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author block */}
      <div className="testimonial-card__author">
        {/* Avatar: use image if provided, else initials circle */}
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="testimonial-card__avatar testimonial-card__avatar--img"
          />
        ) : (
          <div className="testimonial-card__avatar testimonial-card__avatar--initials">
            {initials}
          </div>
        )}

        <div className="testimonial-card__author-info">
          <span className="testimonial-card__author-name">{author}</span>
          <span className="testimonial-card__author-meta">
            {role}
            {company && <> &mdash; {company}</>}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
