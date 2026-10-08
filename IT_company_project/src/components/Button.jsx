import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const MotionLink = motion.create(Link);

export default function Button({
  children,
  to,
  variant = 'primary', // primary | secondary | dark | outline-white
  size = 'md',        // sm | md | lg
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const classes = `btn btn-${variant} ${size !== 'md' ? `btn-${size}` : ''} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Icon size={size === 'sm' ? 16 : 18} />
        </span>
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <motion.span
          style={{ display: 'inline-flex', alignItems: 'center' }}
          variants={{
            hover: { x: 4 }
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Icon size={size === 'sm' ? 16 : 18} />
        </motion.span>
      )}
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : 'hover',
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { duration: 0.2, ease: 'easeOut' }
  };

  if (to) {
    return (
      <MotionLink
        to={to}
        className={classes}
        {...motionProps}
        {...props}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}
