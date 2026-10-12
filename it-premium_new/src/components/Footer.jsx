
import { Link } from 'react-router-dom';
import { Mail, Phone, Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Link className="brand" to="/">
            <span className="brand-mark">O</span>
            <span>
              ORBIT<span>LABS</span>
            </span>
          </Link>
          <p>Digital products, engineered with intention.</p>
          <Link><Mail size={18} /> orbitlabs@gmail.com</Link> <br />
          <Link><Phone size={16} /> 9999999999</Link>
        </div>

        <div>
          <span className=''>EXPLORE</span>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <span>Services</span>
          <Link to="/services">Web Development</Link>
          <Link to="/services">Mobile Apps</Link>
          <Link to="/services">Cloud & Devops</Link>
          <Link to="/services">AI & Automation</Link>
          <Link to="/services">Cyber Security</Link>
        </div>

        <div>
          <span>SOCIAL</span>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">GitHub</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Orbit Labs. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
