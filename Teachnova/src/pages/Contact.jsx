import { motion } from 'motion/react'
import { useState, useRef } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { pageTransition } from '../hooks/useAnimations'
import { siteConfig } from '../data/siteData'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <motion.div className="page-wrapper" {...pageTransition}>
      <ContactHero />
      <ContactSection />
    </motion.div>
  )
}

function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className="container">
        <div className={styles.heroInner}>
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="dot" />Get In Touch
          </motion.div>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Let's Build Something
            <br />
            <span className="text-green-gradient">Exceptional</span>
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
          >
            Tell us about your project. We respond to every inquiry within 24 hours
            and provide an initial assessment within 3 business days.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.layout}>
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactInfo() {
  const infos = [
    { icon: Mail, label: 'Email Us', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: 'Call Us', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: MapPin, label: 'Visit Us', value: siteConfig.address, href: '#' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
  ]

  return (
    <motion.div
      className={styles.infoSide}
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.infoCard}>
        <h2 className={styles.infoTitle}>Contact Information</h2>
        <p className={styles.infoSub}>
          Whether you have a detailed spec or just a rough idea — we'd love to hear from you.
        </p>

        <div className={styles.infoList}>
          {infos.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <Icon size={18} />
              </div>
              <div>
                <span className={styles.infoLabel}>{label}</span>
                {href ? (
                  <a href={href} className={styles.infoValue}>{value}</a>
                ) : (
                  <span className={styles.infoValue}>{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.infoGlow} />
      </div>
    </motion.div>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    setStatus('loading')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1800))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  if (status === 'success') {
    return (
      <motion.div
        className={styles.formSide}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.successBox}>
          <div className={styles.successIcon}>
            <CheckCircle size={40} />
          </div>
          <h3 className={styles.successTitle}>Message Sent!</h3>
          <p className={styles.successSub}>
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button className="btn btn-outline" onClick={() => setStatus('idle')}>
            Send Another Message
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={styles.formSide}
      initial={{ opacity: 0, x: 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.formRow}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className={`form-input ${errors.name ? styles.inputError : ''}`}
              placeholder="Alexandra Chen"
              value={form.name}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
            {errors.name && <span className={styles.errorMsg}><AlertCircle size={12} />{errors.name}</span>}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-input ${errors.email ? styles.inputError : ''}`}
              placeholder="alex@company.com"
              value={form.email}
              onChange={handleChange}
              disabled={status === 'loading'}
            />
            {errors.email && <span className={styles.errorMsg}><AlertCircle size={12} />{errors.email}</span>}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            className={`form-input ${errors.subject ? styles.inputError : ''}`}
            placeholder="Web Application Development"
            value={form.subject}
            onChange={handleChange}
            disabled={status === 'loading'}
          />
          {errors.subject && <span className={styles.errorMsg}><AlertCircle size={12} />{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className={`form-textarea ${errors.message ? styles.inputError : ''}`}
            placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
            value={form.message}
            onChange={handleChange}
            disabled={status === 'loading'}
            rows={6}
          />
          {errors.message && <span className={styles.errorMsg}><AlertCircle size={12} />{errors.message}</span>}
        </div>

        <button
          type="submit"
          className={`btn btn-primary btn-lg ${styles.submitBtn}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <div className={styles.spinner} />
              Sending…
            </>
          ) : (
            <>
              Send Message <Send size={17} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
