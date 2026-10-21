import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { siteConfig, navLinks, services } from '../../data/siteData'
import styles from './Footer.module.css'

// Inline SVG social icons
function XIcon({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
}
function LinkedInIcon({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
}
function GithubIcon({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
}
function DribbbleIcon({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>
}

const socialIconComponents = {
  twitter: XIcon,
  linkedin: LinkedInIcon,
  github: GithubIcon,
  dribbble: DribbbleIcon,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.gradientBar} />
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoIcon}><Zap size={16} /></div>
              <span>{siteConfig.name}</span>
            </Link>
            <p className={styles.tagline}>{siteConfig.description}</p>
            <div className={styles.socials}>
              {Object.entries(siteConfig.social).map(([name, href]) => {
                const Icon = socialIconComponents[name.toLowerCase()]
                return Icon ? (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={name}>
                    <Icon size={16} />
                  </a>
                ) : null
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className={styles.footerLink}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Services</h4>
            <ul className={styles.linkList}>
              {services.slice(0, 5).map(s => (
                <li key={s.id}>
                  <Link to="/services" className={styles.footerLink}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <Mail size={14} />
                <a href={`mailto:${siteConfig.email}`} className={styles.footerLink}>{siteConfig.email}</a>
              </li>
              <li>
                <Phone size={14} />
                <a href={`tel:${siteConfig.phone}`} className={styles.footerLink}>{siteConfig.phone}</a>
              </li>
              <li>
                <MapPin size={14} />
                <span className={styles.footerText}>{siteConfig.address}</span>
              </li>
            </ul>
            <Link to="/contact" className={styles.ctaLink}>
              Start a Project <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
