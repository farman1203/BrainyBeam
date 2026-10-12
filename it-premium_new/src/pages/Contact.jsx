import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, Mail, Phone, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';

function Contact() {
    return <main>
        <section className="page-hero contact-hero">
            <div className="container">
                <Reveal>
                    <span className="kicker">LET’S TALK</span>
                    <h1>Have a bold idea? <em>Good.</em></h1>
                    <p>Share a little about your project and we'll get back to you within one business day.</p>
                </Reveal>
            </div>
        </section>
        <section className="section contact-section">
            <div className="container contact-grid">
                <Reveal direction="left">
                    <div className="contact-info">
                        <span className="kicker">CONTACT</span>
                        <h2>Let's turn your <em>next idea</em> into something real.</h2>
                        <p>Whether you need a product team, a technical partner or a fresh perspective, we're ready.</p>
                        <div className="contact-items">
                            <a href="mailto:hello@orbitlabs.dev"><Mail />
                                <span><small>Email</small>hello@orbitlabs.dev</span>
                            </a>
                            <a href="tel:+919999999999"><Phone /> <span><small>Call us</small>+91 99999 99999</span>
                            </a>
                            <div>
                                <MapPin /><span><small>Studio</small>Ahmedabad, India</span>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <Reveal direction="right" delay={.12}>
                    <form className="contact-form" onSubmit={e => e.preventDefault()}>
                        <div className="form-top"><span>START A PROJECT</span><Sparkles size={20} />
                        </div>
                        <label>Name<input required placeholder="Your name" /></label>.
                        <label>Work email<input required type="email" placeholder="you@company.com" /></label>
                        <label>What are you building?<select defaultValue=""><option value="" disabled>Select a service</option>
                            <option>Web / App Development</option><option>Product Design</option><option>AI & Automation</option><option>Cloud & DevOps</option>
                        </select></label><label>Tell us more<textarea rows="5" placeholder="A few details about your goals, timeline or budget..." /></label>
                        <button className="btn primary" type="submit">Send inquiry <ArrowUpRight size={18} /></button>
                    </form>
                </Reveal>
            </div>
        </section>
    </main>
}

export default Contact;
