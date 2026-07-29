import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, Lock, Phone, UserPlus } from 'lucide-react'
import './Register.css'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    navigate('/buyer/dashboard')
  }

  return (
    <div>
      <h2 className="register-heading">Create your account</h2>
      <p className="register-subtext">Register as a buyer to start browsing properties.</p>

      <form onSubmit={handleSubmit} className="register-form">
        <div>
          <label className="form-field-label">Full Name</label>
          <div className="register-input-icon-wrap">
            <User size={16} className="register-input-icon" />
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Karan Patel"
              className="register-input"
            />
          </div>
        </div>

        <div>
          <label className="form-field-label">Email</label>
          <div className="register-input-icon-wrap">
            <Mail size={16} className="register-input-icon" />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="register-input"
            />
          </div>
        </div>

        <div>
          <label className="form-field-label">Phone Number</label>
          <div className="register-input-icon-wrap">
            <Phone size={16} className="register-input-icon" />
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 90000 00000"
              className="register-input"
            />
          </div>
        </div>

        <div>
          <label className="form-field-label">Password</label>
          <div className="register-input-icon-wrap">
            <Lock size={16} className="register-input-icon" />
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="register-input"
            />
          </div>
        </div>

        <label className="register-terms-label">
          <input type="checkbox" required className="register-terms-checkbox" />
          I agree to the Terms of Service and Privacy Policy.
        </label>

        <button
          type="submit"
          className="btn-primary register-submit-btn"
        >
          <UserPlus size={16} /> Create Account
        </button>
      </form>

      <p className="register-footer-text">
        Already have an account?{' '}
        <Link to="/login" className="register-footer-link">Log In</Link>
      </p>
    </div>
  )
}
