import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import '../styles/components.css';

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card-header">
        <span className="badge badge-blue">{post.category}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          <Clock size={14} />
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="blog-card-body">
        <Link to={`/blog/${post.id}`}>
          <h3 className="blog-card-title">{post.title}</h3>
        </Link>
        <p className="blog-card-excerpt">{post.excerpt}</p>
      </div>

      <div className="blog-card-footer">
        <div className="blog-author-snippet">
          <div className="blog-author-avatar" aria-hidden="true">
            {post.author.avatar}
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{post.author.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{post.date}</div>
          </div>
        </div>

        <Link
          to={`/blog/${post.id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            color: 'var(--accent-primary)',
            fontWeight: 600,
            fontSize: '0.875rem'
          }}
          aria-label={`Read article: ${post.title}`}
        >
          <span>Read</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
