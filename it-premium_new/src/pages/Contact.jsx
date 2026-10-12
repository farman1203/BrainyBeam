import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    ArrowUpRight,
    Sparkles,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';
import Reveal from '../components/Reveal';

function Contact() {
    const formRef = useRef(null);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState({
        type: '',
        message: '',
    });

    const sendEmail = async (event) => {
        event.preventDefault();

        if (sending) return;

        const form = formRef.current;

        if (
            !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ) {
            setStatus({
                type: 'error',
                message: 'Email service is not configured yet. Please try again later.',
            });
            return;
        }

        try {
            setSending(true);
            setStatus({ type: '', message: '' });

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setStatus({
                type: 'success',
                message: 'Your project inquiry has been sent successfully!',
            });

            form.reset();
        } catch (error) {
            console.error('EmailJS error:', error);

            setStatus({
                type: 'error',
                message: 'Message could not be sent. Please try again.',
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <main>
            <section className="page-hero contact-hero">
                <div className="container">
                    <Reveal>
                        <span className="kicker">LET’S TALK</span>
                        <h1>
                            Have a bold idea? <em>Good.</em>
                        </h1>
                        <p>
                            Share a little about your project and we'll get back to you
                            within one business day.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container contact-grid">
                    <Reveal direction="left">
                        <div className="contact-info">
                            <span className="kicker">CONTACT</span>
                            <h2>
                                Let's turn your <em>next idea</em> into something real.
                            </h2>
                            <p>
                                Whether you need a product team, a technical partner or a
                                fresh perspective, we're ready.
                            </p>

                            <div className="contact-items">
                                <a href="mailto:hello@orbitlabs.dev">
                                    <Mail />
                                    <span>
                                        <small>Email</small>
                                        hello@orbitlabs.dev
                                    </span>
                                </a>

                                <a href="tel:+919999999999">
                                    <Phone />
                                    <span>
                                        <small>Call us</small>
                                        +91 99999 99999
                                    </span>
                                </a>

                                <div>
                                    <MapPin />
                                    <span>
                                        <small>Studio</small>
                                        Ahmedabad, India
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="right" delay={0.12}>
                        <form
                            ref={formRef}
                            className="contact-form"
                            onSubmit={sendEmail}
                        >
                            <div className="form-top">
                                <span>START A PROJECT</span>
                                <Sparkles size={20} />
                            </div>

                            <label>
                                Name
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your name"
                                    autoComplete="name"
                                    required
                                    maxLength={100}
                                />
                            </label>

                            <label>
                                Work email
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="you@company.com"
                                    autoComplete="email"
                                    required
                                    maxLength={150}
                                />
                            </label>

                            <label>
                                What are you building?
                                <select
                                    name="project_type"
                                    defaultValue=""
                                    required
                                >
                                    <option value="" disabled>
                                        Select a service
                                    </option>
                                    <option value="Web / App Development">
                                        Web / App Development
                                    </option>
                                    <option value="Product Design">Product Design</option>
                                    <option value="AI & Automation">AI & Automation</option>
                                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>

                            <label>
                                Tell us more
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Project details, goals, timeline or budget..."
                                    required
                                    maxLength={5000}
                                />
                            </label>

                            <button
                                className="btn primary"
                                type="submit"
                                disabled={sending}
                            >
                                {sending ? 'Sending inquiry...' : 'Send inquiry'}
                                {!sending && <ArrowUpRight size={18} />}
                            </button>

                            {status.message && (
                                <p
                                    className={`form-status ${status.type}`}
                                    role="status"
                                    aria-live="polite"
                                >
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}

export default Contact;
