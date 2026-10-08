import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Layers,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  InstagramIcon,
  FacebookIcon
} from './SocialIcons';
import '../styles/footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(null); // 'success' | 'error' | null
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setNewsletterStatus('error');
      setNewsletterMsg('Please enter a valid email address.');
      return;
    }

    setNewsletterStatus('success');
    setNewsletterMsg('Thank you for subscribing to TechNova Insights!');
    setEmail('');

    setTimeout(() => {
      setNewsletterStatus(null);
      setNewsletterMsg('');
    }, 5000);
  };

  return (
    <footer className="footer-root">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo" aria-label="TechNova Solutions">
              <div className="brand-icon-box" style={{ width: 38, height: 38 }}>
                <Layers size={20} strokeWidth={2.2} />
              </div>
              <div className="brand-text">
                <span className="brand-name" style={{ fontSize: '1.2rem' }}>TechNova</span>
                <span className="brand-sub" style={{ color: '#38BDF8', fontSize: '0.72rem' }}>Solutions</span>
              </div>
            </Link>

            <p className="footer-tagline">
              Transforming Ideas Into Digital Experiences. We engineer high-performance web applications, mobile platforms, and resilient cloud architectures for modern enterprises.
            </p>

            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <Mail size={16} color="#38BDF8" />
                <a href="mailto:hello@technovasolutions.com">hello@technovasolutions.com</a>
              </div>
              <div className="footer-contact-row">
                <Phone size={16} color="#38BDF8" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="footer-contact-row">
                <MapPin size={16} color="#38BDF8" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-nav-list">
              <li><Link to="/about" className="footer-nav-link">About Us</Link></li>
              <li><Link to="/about" className="footer-nav-link">Careers</Link></li>
              <li><Link to="/blog" className="footer-nav-link">Blog & Insights</Link></li>
              <li><Link to="/contact" className="footer-nav-link">Contact</Link></li>
              <li><Link to="/solutions" className="footer-nav-link">Solutions</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-nav-list">
              <li><Link to="/services" className="footer-nav-link">Web Development</Link></li>
              <li><Link to="/services" className="footer-nav-link">Mobile Apps</Link></li>
              <li><Link to="/services" className="footer-nav-link">UI/UX Design</Link></li>
              <li><Link to="/services" className="footer-nav-link">Cloud & DevOps</Link></li>
              <li><Link to="/services" className="footer-nav-link">AI & Automation</Link></li>
              <li><Link to="/services" className="footer-nav-link">Custom Software</Link></li>
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="footer-col-title">Industries</h4>
            <ul className="footer-nav-list">
              <li><Link to="/industries" className="footer-nav-link">Healthcare</Link></li>
              <li><Link to="/industries" className="footer-nav-link">FinTech</Link></li>
              <li><Link to="/industries" className="footer-nav-link">Education</Link></li>
              <li><Link to="/industries" className="footer-nav-link">E-Commerce</Link></li>
              <li><Link to="/industries" className="footer-nav-link">Real Estate</Link></li>
              <li><Link to="/industries" className="footer-nav-link">Logistics</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-newsletter-col">
            <h4 className="footer-col-title">Newsletter</h4>
            <p className="footer-newsletter-text">
              Subscribe for monthly engineering deep dives, architecture patterns, and tech strategies.
            </p>

            <form className="footer-newsletter-form" onSubmit={handleSubscribe} noValidate>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </div>

              {newsletterStatus && (
                <div className={`newsletter-feedback ${newsletterStatus}`}>
                  {newsletterStatus === 'success' ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={14} /> {newsletterMsg}
                    </span>
                  ) : (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <AlertCircle size={14} /> {newsletterMsg}
                    </span>
                  )}
                </div>
              )}
            </form>

            <div style={{ marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748B' }}>
                Zero spam. Unsubscribe at any time.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 TechNova Solutions. All Rights Reserved.</p>

          <div className="footer-socials" aria-label="Social media links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Twitter">
              <TwitterIcon size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
