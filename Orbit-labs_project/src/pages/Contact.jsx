import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, m } from 'motion/react';
import { ArrowUpRight, CircleAlert, CircleCheck, LoaderCircle, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';
import { contactDetails } from '@/data/siteData';
import Reveal from '../components/Reveal';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Returns an error message for a field, or '' when valid.
function validateField(name, rawValue) {
  const value = rawValue.trim();
  switch (name) {
    case 'user_name':
      return value ? '' : 'Enter your name.';
    case 'user_email':
      if (!value) return 'Enter your work email.';
      return EMAIL_PATTERN.test(value) ? '' : 'Enter a valid email address, like you@company.com.';
    case 'project_type':
      return value ? '' : 'Choose the service you need.';
    case 'message':
      return value ? '' : 'Tell us a little about your project.';
    default:
      return '';
  }
}

const FIELD_NAMES = ['user_name', 'user_email', 'project_type', 'message'];

function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });

  const checkField = (event) => {
    const { name, value } = event.target;
    setErrors((previous) => ({ ...previous, [name]: validateField(name, value) }));
  };

  // Once a field shows an error, re-check it as the visitor types so it clears immediately.
  const recheckField = (event) => {
    const { name, value } = event.target;
    if (errors[name]) setErrors((previous) => ({ ...previous, [name]: validateField(name, value) }));
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (sending) return;

    const form = formRef.current;

    const nextErrors = {};
    FIELD_NAMES.forEach((name) => {
      nextErrors[name] = validateField(name, form.elements[name].value);
    });
    setErrors(nextErrors);

    const firstInvalid = FIELD_NAMES.find((name) => nextErrors[name]);
    if (firstInvalid) {
      setStatus({ type: '', message: '' });
      form.elements[firstInvalid].focus();
      return;
    }

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
      setErrors({});

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

  // Shared props for each control: validation wiring + accessibility.
  const fieldProps = (name) => ({
    id: name,
    name,
    onBlur: checkField,
    onChange: recheckField,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  const renderError = (name) =>
    errors[name] ? (
      <p id={`${name}-error`} className="field-error">
        <CircleAlert size={15} aria-hidden="true" /> {errors[name]}
      </p>
    ) : null;

  return (
    <main id="main">
      <title>Contact | Orbit Labs</title>

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
          <Reveal>
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
                <a href={`mailto:${contactDetails.email}`}>
                  <Mail aria-hidden="true" />
                  <span>
                    <small>Email</small>
                    {contactDetails.email}
                  </span>
                </a>

                <a href={contactDetails.phoneHref}>
                  <Phone aria-hidden="true" />
                  <span>
                    <small>Call us</small>
                    {contactDetails.phone}
                  </span>
                </a>

                <div>
                  <MapPin aria-hidden="true" />
                  <span>
                    <small>Studio</small>
                    {contactDetails.location}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card asChild className="contact-form">
              <form ref={formRef} onSubmit={sendEmail} noValidate>
                <div className="form-top">
                  <span>START A PROJECT</span>
                  <Sparkles size={20} aria-hidden="true" />
                </div>

                <div className="field">
                  <Label htmlFor="user_name">Name</Label>
                  <Input
                    {...fieldProps('user_name')}
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                  {renderError('user_name')}
                </div>

                <div className="field">
                  <Label htmlFor="user_email">Work email</Label>
                  <Input
                    {...fieldProps('user_email')}
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                    maxLength={150}
                  />
                  {renderError('user_email')}
                </div>

                <div className="field">
                  <Label htmlFor="project_type">What are you building?</Label>
                  <NativeSelect {...fieldProps('project_type')} defaultValue="" required>
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Web / App Development">Web / App Development</option>
                    <option value="Product Design">Product Design</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Other">Other</option>
                  </NativeSelect>
                  {renderError('project_type')}
                </div>

                <div className="field">
                  <Label htmlFor="message">Tell us more</Label>
                  <Textarea
                    {...fieldProps('message')}
                    rows={5}
                    placeholder="Project details, goals, timeline or budget..."
                    required
                    maxLength={5000}
                  />
                  {renderError('message')}
                </div>

                <Button className="form-submit" size="lg" type="submit" disabled={sending}>
                  {sending ? (
                    <>
                      <LoaderCircle size={18} className="spin" aria-hidden="true" /> Sending inquiry...
                    </>
                  ) : (
                    <>
                      Send inquiry <ArrowUpRight size={18} className="arrow-nudge" aria-hidden="true" />
                    </>
                  )}
                </Button>

                {/* The live region stays mounted so screen readers announce the message when it appears. */}
                <div className="form-status-region" aria-live="polite">
                  <AnimatePresence mode="wait">
                    {status.message && (
                      <m.p
                        key={status.type + status.message}
                        className={`form-status ${status.type}`}
                        role={status.type === 'error' ? 'alert' : 'status'}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {status.type === 'success' ? (
                          <CircleCheck size={18} aria-hidden="true" />
                        ) : (
                          <CircleAlert size={18} aria-hidden="true" />
                        )}
                        <span>{status.message}</span>
                      </m.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </Card>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default Contact;
