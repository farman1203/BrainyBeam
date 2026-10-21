import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Button = ({
  to,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  children,
  style,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} className="btn-icon btn-icon-left" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} className="btn-icon btn-icon-right" />
      )}
    </>
  );

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03, y: -1 },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <Link to={to} className={classes} style={style} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      className={classes}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
};

export default Button;
