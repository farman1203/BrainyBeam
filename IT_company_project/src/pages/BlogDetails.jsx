import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';
import { blogData } from '../data/blogData';
import '../styles/pages.css';

export default function BlogDetails() {
  const { id } = useParams();

  const post = blogData.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container" style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <p style={{ margin: '1rem 0 2rem', color: 'var(--text-secondary)' }}>
          The article you are searching for does not exist or may have been updated.
        </p>
        <Button to="/blog" variant="primary">
          Back to Blog
        </Button>
      </div>
    );
  }

  const relatedPosts = blogData.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="blog-details-page-root">
      {/* 1. ARTICLE HEADER */}
      <section className="case-study-hero">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <Link
              to="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--accent-primary)'
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to All Articles</span>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <span className="badge badge-blue">{post.category}</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={15} /> {post.readTime}
            </span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {post.date}
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', fontWeight: 800, color: '#111111', lineHeight: 1.2, marginBottom: '1.5rem', maxWidth: '900px' }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '820px' }}>
            {post.excerpt}
          </p>

          {/* Author snippet */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-color)'
            }}
          >
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
                justifyContent: 'center',
                fontSize: '0.9375rem'
              }}
            >
              {post.author.avatar}
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#111111' }}>{post.author.name}</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT */}
      <section className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            {/* Key Takeaways Box */}
            <div
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderLeft: '4px solid var(--accent-primary)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                marginBottom: '2.5rem'
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111111', marginBottom: '0.75rem' }}>
                Executive Summary & Key Takeaways:
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {post.keyTakeaways.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              {post.content.map((para, idx) => (
                <p key={idx} style={{ color: 'var(--text-secondary)' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div
              style={{
                marginTop: '3.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}
            >
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginRight: '0.5rem' }}>
                Tagged Under:
              </span>
              {post.tags.map((tag, idx) => (
                <span key={idx} className="project-tag" style={{ fontSize: '0.8125rem', padding: '0.3rem 0.75rem' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. RELATED POSTS */}
      <section className="section section-secondary">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-blue">More From Our Architects</span>
            <h2 style={{ marginTop: '0.5rem' }}>Related Engineering Articles</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {relatedPosts.map((rPost) => (
              <BlogCard key={rPost.id} post={rPost} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="cta-banner-root">
        <div className="container">
          <div className="cta-banner-box">
            <div className="cta-banner-content">
              <span className="badge badge-dark" style={{ marginBottom: '1rem' }}>Technical Partnership</span>
              <h2 className="cta-banner-title">Turn Insights Into Scalable Code</h2>
              <p className="cta-banner-text">
                Speak directly with the architects who authored our engineering playbooks. Let's build your next digital platform.
              </p>
            </div>
            <div className="cta-banner-actions">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                Start A Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
