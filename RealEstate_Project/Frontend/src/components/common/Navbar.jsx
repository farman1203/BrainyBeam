import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Building2, Menu, X, Bell, ChevronDown, LogOut, User as UserIcon } from 'lucide-react'
import './Navbar.css'

/**
 * Top navbar shown inside authenticated layouts (Admin / Agent / Buyer).
 * Props:
 *  - user: { name, role, avatar }
 *  - onMenuClick: toggles the mobile sidebar
 */
export default function Navbar({ user, onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="navbar">
      <button
        onClick={onMenuClick}
        className="navbar-menu-btn"
        aria-label="Toggle sidebar"
      >
        <Menu size={22} />
      </button>

      <Link to="/" className="navbar-brand">
        <div className="navbar-brand-icon">
          <Building2 size={17} />
        </div>
        <span className="navbar-brand-name">Estatelane</span>
      </Link>

      <div className="navbar-spacer" />

      <button className="navbar-notif-btn" aria-label="Notifications">
        <Bell size={19} />
        <span className="navbar-notif-dot" />
      </button>

      <div className="navbar-user-wrap">
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="navbar-user-btn"
        >
          <img src={user.avatar} alt={user.name} className="navbar-user-avatar" />
          <span className="navbar-user-name">{user.name}</span>
          <ChevronDown size={15} className="navbar-user-chevron" />
        </button>

        {menuOpen && (
          <div className="navbar-user-menu">
            <div className="navbar-user-menu-header">
              <p className="navbar-user-menu-name">{user.name}</p>
              <p className="navbar-user-menu-role">{user.role}</p>
            </div>
            <Link
              to="profile"
              onClick={() => setMenuOpen(false)}
              className="navbar-user-menu-link"
            >
              <UserIcon size={15} /> My Profile
            </Link>
            <button
              onClick={() => navigate('/login')}
              className="navbar-user-menu-logout"
            >
              <LogOut size={15} /> Log Out
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
