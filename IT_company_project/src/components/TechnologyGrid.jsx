import React, { useState } from 'react';
import {
  Code,
  Server,
  Database,
  Cloud,
  Smartphone,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { techStackData } from '../data/techStackData';
import '../styles/components.css';

const categoryIcons = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  'Cloud & DevOps': Cloud,
  Mobile: Smartphone
};

export default function TechnologyGrid() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...techStackData.map((d) => d.category)];

  const filteredData = activeTab === 'All'
    ? techStackData
    : techStackData.filter((d) => d.category === activeTab);

  return (
    <div>
      {/* Category Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem'
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveTab(cat)}
            className={`btn btn-sm ${activeTab === cat ? 'btn-primary' : 'btn-secondary'}`}
            style={{ borderRadius: 'var(--radius-full)' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Categories and Technologies */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {filteredData.map((group) => {
          const CategoryIcon = categoryIcons[group.category] || Cpu;

          return (
            <div
              key={group.category}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-card)',
                padding: '2rem',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  borderBottom: '1px solid var(--border-light)',
                  paddingBottom: '1rem'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--accent-light)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <CategoryIcon size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {group.category} Technologies
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    {group.description}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '1rem'
                }}
              >
                {group.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                      transition: 'all var(--transition-fast)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#BFDBFE';
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>
                        {tech.name}
                      </span>
                      <CheckCircle2 size={14} color="var(--accent-primary)" opacity={0.7} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                      {tech.type}
                    </span>
                    <span style={{ fontSize: '0.78125rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                      {tech.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
