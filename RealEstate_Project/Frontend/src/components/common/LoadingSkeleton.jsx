import React from 'react'
import './LoadingSkeleton.css'


export default function LoadingSkeleton({ variant = 'card', count = 3 }) {
  const items = Array.from({ length: count })

  if (variant === 'row') {
    return (
      <div className="skeleton-stack-3">
        {items.map((_, i) => (
          <div key={i} className="skeleton-row animate-pulse" />
        ))}
      </div>
    )
  }

  if (variant === 'text') {
    return (
      <div className="skeleton-stack-2">
        {items.map((_, i) => (
          <div key={i} className="skeleton-text-line animate-pulse" style={{ width: `${90 - i * 10}%` }} />
        ))}
      </div>
    )
  }

  return (
    <div className="skeleton-card-grid">
      {items.map((_, i) => (
        <div key={i} className="skeleton-card animate-pulse">
          <div className="skeleton-card-image" />
          <div className="skeleton-card-body">
            <div className="skeleton-card-line-1" />
            <div className="skeleton-card-line-2" />
            <div className="skeleton-card-line-3" />
          </div>
        </div>
      ))}
    </div>
  )
}
