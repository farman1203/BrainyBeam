import React, { useState } from 'react';
import { Search, Layers } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { projectsData } from '../data/projectsData';
import '../styles/pages.css';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Web', 'Mobile', 'E-Commerce', 'SaaS', 'Enterprise'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.type === selectedCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projects-page-root">
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>Case Studies & Portfolio</span>
            <h1 className="page-hero-title">Engineering That Drives Real Impact</h1>
            <p className="page-hero-desc">
              Explore our portfolio of high-concurrency platforms, custom enterprise software, and consumer mobile apps delivered for world-class organizations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTERS & SEARCH */}
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '3rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ borderRadius: 'var(--radius-full)' }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '0.4rem 0.875rem',
                width: '100%',
                maxWidth: '300px'
              }}
            >
              <Search size={16} color="var(--text-muted)" />
              <input
                type="text"
                placeholder="Search projects or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  fontSize: '0.875rem',
                  width: '100%',
                  color: 'var(--text-primary)'
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div style={{ marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Showing <strong>{filteredProjects.length}</strong> of {projectsData.length} case studies
          </div>

          {/* Project Grid */}
          {filteredProjects.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '2rem'
              }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-card)',
                border: '1px dashed var(--border-color)'
              }}
            >
              <Layers size={36} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No case studies found</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                We couldn't find any projects matching your filter criteria.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="cta-banner-root">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>Collaborate</span>
              <h2 className="cta-banner-title">Want Results Like These?</h2>
              <p className="cta-banner-text">
                Every project begins with a deep discovery sprint. Tell us what you're building and let's craft an executable roadmap.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
