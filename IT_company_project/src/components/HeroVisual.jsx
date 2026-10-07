import React from 'react';
import {
  ShieldCheck,
  Zap,
  Activity,
  Terminal,
  TrendingUp,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import '../styles/hero.css';

export default function HeroVisual() {
  return (
    <div className="hero-visual-container" aria-label="TechNova Cloud Architecture Console Preview">
      {/* Floating Card Top-Right: Uptime & SLA */}
      <div className="floating-card-1">
        <div className="floating-icon-wrap" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
          <ShieldCheck size={20} strokeWidth={2.2} />
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>High Availability</div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#111111' }}>99.98% Uptime SLA</div>
        </div>
      </div>

      {/* Main Center Console Card */}
      <div className="hero-visual-card-main">
        <div className="hero-card-header">
          <div className="hero-card-dots">
            <span className="hero-card-dot" style={{ backgroundColor: '#EF4444' }} />
            <span className="hero-card-dot" style={{ backgroundColor: '#F59E0B' }} />
            <span className="hero-card-dot" style={{ backgroundColor: '#10B981' }} />
          </div>
          <div className="hero-card-title">
            <Terminal size={13} />
            <span>technova-cluster-node-01</span>
          </div>
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: '#059669',
              background: '#D1FAE5',
              padding: '0.15rem 0.5rem',
              borderRadius: '4px'
            }}
          >
            ACTIVE
          </span>
        </div>

        <div className="hero-card-body">
          {/* Telemetry Metric Chart Box */}
          <div className="hero-telemetry-box">
            <div className="hero-telemetry-header">
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                  Microservice Throughput
                </span>
                <div className="hero-telemetry-value">
                  14,820 <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)' }}>req/sec</span>
                </div>
              </div>
              <span className="hero-telemetry-change">
                <TrendingUp size={12} /> +28.4%
              </span>
            </div>

            {/* SVG Wave Chart */}
            <div style={{ height: '54px', width: '100%', overflow: 'hidden' }}>
              <svg viewBox="0 0 300 50" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,40 Q30,15 60,30 T120,20 T180,35 T240,10 T300,25 L300,50 L0,50 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0,40 Q30,15 60,30 T120,20 T180,35 T240,10 T300,25"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="240" cy="10" r="3.5" fill="#2563EB" />
              </svg>
            </div>
          </div>

          {/* Microservice Architecture Snippet */}
          <div className="hero-code-box">
            <div><span className="code-comment">// Enterprise Scalable Pipeline</span></div>
            <div>
              <span className="code-keyword">async function</span> <span className="code-fn">deployService</span>(spec: <span className="code-str">ClusterSpec</span>) &#123;
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              <span className="code-keyword">const</span> node = <span className="code-keyword">await</span> orchestration.<span className="code-fn">provision</span>(spec);
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              <span className="code-keyword">return</span> node.<span className="code-fn">optimizeLatency</span>(&#123; zeroDowntime: <span className="code-keyword">true</span> &#125;);
            </div>
            <div>&#125;</div>
          </div>

          {/* Real-time status indicators */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              borderTop: '1px solid var(--border-light)',
              paddingTop: '0.75rem'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Activity size={14} color="var(--accent-primary)" />
              Latency: <strong>12ms</strong>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Cpu size={14} color="#10B981" />
              CPU Load: <strong>24%</strong>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <CheckCircle2 size={14} color="#10B981" />
              SOC2 & HIPAA Ready
            </span>
          </div>
        </div>
      </div>

      {/* Floating Card Bottom-Left: Live Deployments */}
      <div className="floating-card-2">
        <div className="floating-icon-wrap" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-primary)' }}>
          <Zap size={20} strokeWidth={2.2} />
        </div>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>Active Deployments</div>
          <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#111111' }}>42 Global Clusters</div>
        </div>
      </div>
    </div>
  );
}
