import React from 'react'
import { Building2 } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-icon">
            <Building2 size={13} />
          </div>
          <span className="footer-brand-name">Estatelane</span>
        </div>
        <p>© {new Date().getFullYear()} Estatelane. All rights reserved. Demo UI — dummy data only.</p>
      </div>
    </footer>
  )
}
