import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import Button from './Button';
import '../styles/components.css';

export default function ContactForm({ defaultService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Software Development',
    'Cloud & DevOps',
    'AI & Automation',
    'E-Commerce Development',
    'Digital Transformation',
    'Other / Custom Consulting'
  ];

  const budgetList = [
    '< $10,000 (Small Prototype)',
    '$10,000 - $25,000 (MVP)',
    '$25,000 - $50,000 (Complete Platform)',
    '$50,000 - $100,000 (Enterprise Scaling)',
    '$100,000+ (Turnkey Digital Transformation)'
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Work email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid work email address.';
        return '';
      case 'phone':
        if (!value.trim()) return 'Contact phone number is required.';
        if (!/^[+0-9\s\-()]{8,20}$/.test(value.trim())) return 'Please enter a valid phone number (min 8 digits).';
        return '';
      case 'service':
        if (!value) return 'Please select a primary service needed.';
        return '';
      case 'budget':
        if (!value) return 'Please select an estimated project budget.';
        return '';
      case 'message':
        if (!value.trim()) return 'Project details message is required.';
        if (value.trim().length < 15) return 'Please describe your project in at least 15 characters.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'company') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      service: true,
      budget: true,
      message: true
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate client-side processing
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 700);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="contact-form-card" style={{ padding: '3.5rem 2.5rem' }}>
        <div className="form-success-banner">
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#D1FAE5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CheckCircle2 size={36} />
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#065F46' }}>
            Thank You, {formData.fullName.split(' ')[0]}!
          </h3>

          <p style={{ maxWidth: '480px', color: '#047857', fontSize: '1rem', lineHeight: 1.6 }}>
            Thank you! We'll get back to you shortly. A Senior Technical Solutions Architect will review your requirements for <strong>{formData.service}</strong> and respond within 24 hours.
          </p>

          <div
            style={{
              width: '100%',
              background: '#FFFFFF',
              border: '1px solid #A7F3D0',
              borderRadius: '8px',
              padding: '1.25rem',
              textAlign: 'left',
              fontSize: '0.875rem',
              color: '#1F2937',
              margin: '1rem 0'
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: '0.5rem', color: '#065F46' }}>Inquiry Summary:</div>
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Phone:</strong> {formData.phone}</div>
            <div><strong>Budget Range:</strong> {formData.budget}</div>
            {formData.company && <div><strong>Company:</strong> {formData.company}</div>}
          </div>

          <Button
            variant="secondary"
            size="md"
            icon={RefreshCw}
            iconPosition="left"
            onClick={handleReset}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form-card">
      <form onSubmit={handleSubmit} noValidate>
        <div className="contact-form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`form-input ${errors.fullName ? 'error' : ''}`}
              placeholder="e.g. Alex Mercer"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.fullName && (
              <span className="form-error-msg">
                <AlertCircle size={12} /> {errors.fullName}
              </span>
            )}
          </div>

          {/* Work Email */}
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Work Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="alex@company.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.email && (
              <span className="form-error-msg">
                <AlertCircle size={12} /> {errors.email}
              </span>
            )}
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.phone && (
              <span className="form-error-msg">
                <AlertCircle size={12} /> {errors.phone}
              </span>
            )}
          </div>

          {/* Company Name */}
          <div className="form-group">
            <label className="form-label" htmlFor="company">
              Company / Organization <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input"
              placeholder="e.g. Acorn Ventures Ltd"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          {/* Service Dropdown */}
          <div className="form-group">
            <label className="form-label" htmlFor="service">
              Service Needed <span className="required">*</span>
            </label>
            <select
              id="service"
              name="service"
              className={`form-select ${errors.service ? 'error' : ''}`}
              value={formData.service}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="">Select a service category...</option>
              {servicesList.map((svc) => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
            {errors.service && (
              <span className="form-error-msg">
                <AlertCircle size={12} /> {errors.service}
              </span>
            )}
          </div>

          {/* Budget Dropdown */}
          <div className="form-group">
            <label className="form-label" htmlFor="budget">
              Estimated Budget <span className="required">*</span>
            </label>
            <select
              id="budget"
              name="budget"
              className={`form-select ${errors.budget ? 'error' : ''}`}
              value={formData.budget}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            >
              <option value="">Select project budget tier...</option>
              {budgetList.map((tier) => (
                <option key={tier} value={tier}>{tier}</option>
              ))}
            </select>
            {errors.budget && (
              <span className="form-error-msg">
                <AlertCircle size={12} /> {errors.budget}
              </span>
            )}
          </div>

          {/* Message Textarea */}
          <div className="form-group full-width">
            <label className="form-label" htmlFor="message">
              Project Overview & Objectives <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              placeholder="Tell us about your project goals, desired timelines, target users, and key architectural requirements..."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.message && (
              <span className="form-error-msg">
                <AlertCircle size={12} /> {errors.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-group full-width" style={{ marginTop: '0.5rem' }}>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              icon={isSubmitting ? undefined : Send}
              disabled={isSubmitting}
              style={{ width: '100%' }}
            >
              {isSubmitting ? 'Validating & Submitting...' : 'Send Inquiry'}
            </Button>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              🔒 Strictly confidential. 100% IP retention guarantee under our mutual NDA.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
