import React from 'react'
import { Outlet } from 'react-router-dom'
import { Building2, ShieldCheck, Users, TrendingUp } from 'lucide-react'
import './AuthLayout.css'


export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-layout-branding">
        <div className="auth-layout-blob-1" />
        <div className="auth-layout-blob-2" />

        <div className="auth-layout-brand-row">
          <div className="auth-layout-brand-icon">
            <Building2 size={19} />
          </div>
          <span className="auth-layout-brand-name">Estatelane</span>
        </div>

        <div className="auth-layout-content">
          <h1 className="auth-layout-heading">
            Manage listings and leads, all in one place.
          </h1>
          <p className="auth-layout-subtext">
            A single workspace for admins, agents and buyers to list properties, track leads and close deals faster.
          </p>

          <div className="auth-layout-features">
            <div className="auth-layout-feature">
              <ShieldCheck size={20} className="auth-layout-feature-icon" />
              <p className="auth-layout-feature-label">Verified Listings</p>
            </div>
            <div className="auth-layout-feature">
              <Users size={20} className="auth-layout-feature-icon" />
              <p className="auth-layout-feature-label">Lead Tracking</p>
            </div>
            <div className="auth-layout-feature">
              <TrendingUp size={20} className="auth-layout-feature-icon" />
              <p className="auth-layout-feature-label">Sales Insights</p>
            </div>
          </div>
        </div>

        <p className="auth-layout-copyright">© {new Date().getFullYear()} Estatelane Demo</p>
      </div>

      <div className="auth-layout-form-side">
        <div className="auth-layout-form-wrap">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
