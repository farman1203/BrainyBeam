import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Building2, Menu, X, Bell, ChevronDown, LogOut, User as UserIcon } from 'lucide-react'
import './Navbar.css'
import { useAuth } from "../../context/AuthContext";

export default function Navbar({ onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="navbar">
      <button
        onClick={onMenuClick}
        className="navbar-menu-btn"
        aria-label="Toggle sidebar"
      >
        <Menu size={22} />
      </button>

      <Link className="navbar-brand">
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
          <div className="navbar-user-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <span className="navbar-user-name">{user?.name}</span>
          <ChevronDown size={15} className="navbar-user-chevron" />
        </button>

        {menuOpen && (
          <div className="navbar-user-menu">
            <div className="navbar-user-menu-header">
              <p className="navbar-user-menu-name">{user?.name}</p>
              <p className="navbar-user-menu-role">{user?.role}</p>
            </div>
            <Link
              to="profile"
              onClick={() => setMenuOpen(false)}
              className="navbar-user-menu-link"
            >
              <UserIcon size={15} /> My Profile
            </Link>
            <button
              onClick={handleLogout}
              className="navbar-user-menu-logout"
            >
              <LogOut size={15} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
