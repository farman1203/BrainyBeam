import React from 'react'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import './Sidebar.css'

/**
 * Sidebar navigation used inside Admin / Agent / Buyer layouts.
 * Props:
 *  - items: [{ label, to, icon }]
 *  - open: boolean (mobile drawer state)
 *  - onClose: callback to close mobile drawer
 */
export default function Sidebar({ items, open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}

      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <div className="sidebar-mobile-header">
          <span className="sidebar-mobile-title">Menu</span>
          <button onClick={onClose} aria-label="Close menu" className="sidebar-close-btn">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {items.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `sidebar-nav-link ${isActive ? 'sidebar-nav-link--active' : ''}`
              }
            >
              <Icon size={17} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
