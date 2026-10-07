import React, { useState } from 'react';
import { Search, Clock, ArrowRight, BookOpen } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import { blogData } from '../data/blogData';
import '../styles/pages.css';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Technology',
    'Web Development',
    'AI',
    'Business',
    'UI/UX',
    'Cloud'
  ];

  const filteredPosts = blogData.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogData[0];

  return (
    <div className="blog-page-root">
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>TechNova Insights</span>
            <h1 className="page-hero-title">Engineering Perspectives & Tech Architecture</h1>
            <p className="page-hero-desc">
              In-depth articles, system design patterns, and strategic engineering insights from the senior software architects at TechNova Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FEATURED POST SPOTLIGHT (when All is selected and no search) */}
      {selectedCategory === 'All' && !searchQuery && (
        <section className="section" style={{ paddingBottom: '2rem' }}>
          <div className="container">
            <div
              style={{
                background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-card)',
                padding: '3rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span className="badge badge-blue">Featured Publication</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{featuredPost.date}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#111111', marginBottom: '1rem' }}>
                  {featuredPost.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <Button
                    to={`/blog/${featuredPost.id}`}
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                  >
                    Read Full Article
                  </Button>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={16} /> {featuredPost.readTime}
                  </span>
                </div>
              </div>

              {/* Author & Highlights Card */}
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#0F172A',
                      color: '#38BDF8',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#111111' }}>{featuredPost.author.name}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{featuredPost.author.role}</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                  Key Takeaways Inside:
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {featuredPost.keyTakeaways.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. CATEGORY FILTERS & SEARCH */}
      <section className="section" style={{ paddingTop: '2rem' }}>
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
                maxWidth: '280px'
              }}
            >
              <Search size={16} color="var(--text-muted)" />
              <input
                type="text"
                placeholder="Search articles..."
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

          {/* Grid of Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '2rem'
              }}
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
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
              <BookOpen size={36} color="var(--text-muted)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No articles found</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                We couldn't find any articles matching "{searchQuery}".
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear Search & Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 4. NEWSLETTER CTA */}
      <section className="cta-banner-root">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>Stay Informed</span>
              <h2 className="cta-banner-title">Never Miss An Engineering Deep Dive</h2>
              <p className="cta-banner-text">
                Join over 12,000 engineers, CTOs, and tech leaders receiving our curated breakdown of system designs, code refactoring patterns, and AI benchmarks.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
