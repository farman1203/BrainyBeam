import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { footerContact, footerServices, socialLinks } from '@/data/siteData';
import Brand from './Brand';

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-about">
          <Brand />
          <p>Digital products, engineered with intention.</p>
          <a className="footer-contact" href={`mailto:${footerContact.email}`}>
            <Mail size={18} aria-hidden="true" /> {footerContact.email}
          </a>
          <a className="footer-contact" href={`tel:${footerContact.phone}`}>
            <Phone size={16} aria-hidden="true" /> {footerContact.phone}
          </a>
        </div>

        <nav aria-label="Explore">
          <p className="footer-title">Explore</p>
          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <nav aria-label="Services">
          <p className="footer-title">Services</p>
          {footerServices.map((service) => (
            <Link key={service} to="/services">
              {service}
            </Link>
          ))}
        </nav>

        <nav aria-label="Social">
          <p className="footer-title">Social</p>
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href}>
              {social.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Orbit Labs. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
