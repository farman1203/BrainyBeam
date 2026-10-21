import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import '../styles/hero.css';

export default function HeroVisual() {
  return (
    <div className="hero-visual-container" aria-label="TechNova Platform Visual">
      {/* Floating Card Top-Right */}
      <motion.div
        className="floating-card-1"
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -8, 0]
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.5 },
          x:       { duration: 0.5, delay: 0.5 },
          y:       { repeat: Infinity, duration: 5, ease: 'easeInOut' }
        }}
      >
        <div
          className="floating-icon-wrap"
          style={{ backgroundColor: 'var(--light-mint)', color: 'var(--primary-green)' }}
        >
          <ShieldCheck size={20} strokeWidth={2.2} />
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            Reliability
          </div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            99.98% Uptime
          </div>
        </div>
      </motion.div>

      {/* Floating Card Bottom-Left */}
      <motion.div
        className="floating-card-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -9, 0]
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.6 },
          x:       { duration: 0.5, delay: 0.6 },
          y:       { repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 0.9 }
        }}
      >
        <div
          className="floating-icon-wrap"
          style={{ backgroundColor: 'var(--light-mint)', color: 'var(--accent-green)' }}
        >
          <Zap size={20} strokeWidth={2.2} />
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            Performance
          </div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            &lt; 12ms Latency
          </div>
        </div>
      </motion.div>

      {/* Placeholder — replaced by EmeraldHero3D when 3D is needed */}
      <motion.div
        className="hero-visual-card-main"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'rgba(255,255,255,0.9)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-card)',
          padding: '1.75rem',
          boxShadow: 'var(--shadow-elevated)',
          backdropFilter: 'blur(12px)',
          maxWidth: 460
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: 'var(--bright-green)',
              boxShadow: '0 0 6px rgba(34, 197, 94, 0.5)',
              animation: 'pulseGreen 2s infinite'
            }} />
            <span style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>
              TechNova Platform
            </span>
          </div>
          <span style={{
            fontSize: '0.6875rem', fontWeight: 700,
            color: 'var(--primary-green)',
            background: 'var(--light-mint)',
            padding: '0.2rem 0.625rem',
            borderRadius: '20px',
            border: '1px solid rgba(34, 197, 94, 0.2)'
          }}>
            LIVE
          </span>
        </div>

        {/* Metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {/* Chart Row */}
          <div style={{
            background: 'var(--bg-green)',
            border: '1px solid var(--border-green)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                  Throughput
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  14,820 <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>req/s</span>
                </div>
              </div>
              <span style={{
                display: 'flex', alignItems: 'center', gap: '3px',
                fontSize: '0.75rem', fontWeight: 700,
                color: 'var(--primary-green)',
                background: 'var(--light-mint)',
                padding: '0.2rem 0.5rem', borderRadius: '4px'
              }}>
                <TrendingUp size={12} /> +28.4%
              </span>
            </div>
            {/* SVG Chart */}
            <div style={{ height: '52px', width: '100%' }}>
              <svg viewBox="0 0 300 50" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22C55E" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,42 Q30,18 60,32 T120,18 T180,36 T240,8 T300,22 L300,50 L0,50 Z"
                  fill="url(#emeraldGradient)"
                />
                <path
                  d="M0,42 Q30,18 60,32 T120,18 T180,36 T240,8 T300,22"
                  fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round"
                />
                <circle cx="240" cy="8" r="3.5" fill="#16A34A" />
              </svg>
            </div>
          </div>

          {/* Architecture Stack */}
          {[
            { layer: 'FRONTEND',   tech: 'React.js / Next.js + TypeScript' },
            { layer: 'API LAYER',  tech: 'Node.js Microservices + GraphQL' },
            { layer: 'DATABASE',   tech: 'PostgreSQL + Redis Cluster' },
            { layer: 'CLOUD',      tech: 'AWS Multi-AZ Kubernetes + CI/CD' },
          ].map(({ layer, tech }) => (
            <div key={layer} style={{
              background: '#FAFAFA',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '0.6rem 0.875rem',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {layer}
              </span>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                {tech}
              </span>
            </div>
          ))}

          {/* Footer status */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: '0.75rem', borderTop: '1px solid var(--border-light)',
            fontSize: '0.75rem', color: 'var(--text-secondary)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={13} color="var(--accent-green)" />
              SOC2 Ready
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={13} color="var(--accent-green)" />
              HIPAA Compliant
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={13} color="var(--accent-green)" />
              ISO 27001
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
