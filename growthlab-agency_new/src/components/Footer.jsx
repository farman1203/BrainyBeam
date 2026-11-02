import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Instagram, Linkedin, Twitter, Youtube, ArrowUp, Mail, Phone, MapPin } from 'lucide-react'
import Logo from './Logo'
import { scrollToY } from '../lib/smooth'
import { navLinks } from '../data/nav'
import { services } from '../data/services'

const socials = [['Instagram', Instagram], ['LinkedIn', Linkedin], ['X (Twitter)', Twitter], ['YouTube', Youtube]]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div className="foot-brand">
          <Logo />
          <p>Make your brand visible. A creative and marketing studio for brands that want more.</p>
          <div className="socials">
            {socials.map(([n, Icon]) => (
              <motion.span key={n} className="soc" role="img" aria-label={`${n} — link coming soon`} title={`${n} — link coming soon`} whileHover={{ y: -4, scale: 1.08 }}><Icon size={18} /></motion.span>
            ))}
          </div>
        </div>
        <div><h4>Explore</h4><ul>{navLinks.map(l => <li key={l.to}><Link className="flink" to={l.to}>{l.label}</Link></li>)}</ul></div>
        <div><h4>Services</h4><ul>{services.map(s => <li key={s.slug}><Link className="flink" to={`/services#${s.slug}`}>{s.title}</Link></li>)}</ul></div>
        <div>
          <h4>Contact</h4>
          <ul className="foot-contact">
            <li><Mail size={16} /> hello@yourdomain.com</li>
            <li><Phone size={16} /> +00 000 000 0000</li>
            <li><MapPin size={16} /> Office address, City, Country</li>
          </ul>
          <small className="muted">Placeholder details — replace later.</small>
        </div>
      </div>
      <div className="footer-word" aria-hidden="true">GROWTH LAB</div>
      <div className="container foot-bottom">
        <span>© {new Date().getFullYear()} GrowthLab. All rights reserved.</span>
        <span className="foot-legal"><span>Privacy Policy</span><span>Terms</span></span>
        <motion.button className="totop" onClick={() => scrollToY(0)} aria-label="Back to top" whileHover={{ y: -3 }} whileTap={{ scale: 0.92 }}>Back to top <ArrowUp size={16} /></motion.button>
      </div>
    </footer>
  )
}
