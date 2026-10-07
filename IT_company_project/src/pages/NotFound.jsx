import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 1.5rem 5rem',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '540px', margin: '0 auto' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '20px',
            background: 'var(--accent-light)',
            color: 'var(--accent-primary)',
            marginBottom: '1.5rem'
          }}
        >
          <Compass size={40} strokeWidth={1.75} />
        </div>

        <div style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, letterSpacing: '-0.04em', fontFamily: 'var(--font-heading)' }}>
          404
        </div>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#111111', margin: '1rem 0 0.75rem' }}>
          Page Not Found
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          The page or architectural resource you requested does not exist or may have been relocated.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Button to="/" variant="primary" size="md" icon={Home} iconPosition="left">
            Return to Homepage
          </Button>
          <Button to="/contact" variant="secondary" size="md">
            Contact Support
          </Button>
        </div>

        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            textAlign: 'left'
          }}
        >
          <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Popular Navigation Destinations:
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.875rem' }}>
            <Link to="/services" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>• Our Services</Link>
            <Link to="/projects" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>• Featured Case Studies</Link>
            <Link to="/about" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>• About TechNova</Link>
            <Link to="/blog" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>• Engineering Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
