import React, { useState } from 'react'
import { UserPlus, User, Mail, Phone, MapPin } from 'lucide-react'
import './CreateAgent.css'

export default function CreateAgent() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', bio: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <div className="create-agent-page">
      <div className="create-agent-header">
        <h1 className="page-title">Create Agent</h1>
        <p className="page-subtitle">Add a new agent to the platform.</p>
      </div>

      {submitted && (
        <div className="success-banner create-agent-banner">
          Agent created successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="create-agent-form">
        <div>
          <label className="form-field-label">Full Name</label>
          <div className="create-agent-input-icon-wrap">
            <User size={16} className="create-agent-input-icon" />
            <input
              name="name" required value={form.name} onChange={handleChange}
              placeholder="Enter agent's full name"
              className="create-agent-input"
            />
          </div>
        </div>

        <div className="create-agent-grid-2">
          <div>
            <label className="form-field-label">Email</label>
            <div className="create-agent-input-icon-wrap">
              <Mail size={16} className="create-agent-input-icon" />
              <input
                type="email" name="email" required value={form.email} onChange={handleChange}
                placeholder="agent@estatelane.com"
                className="create-agent-input"
              />
            </div>
          </div>
          <div>
            <label className="form-field-label">Phone Number</label>
            <div className="create-agent-input-icon-wrap">
              <Phone size={16} className="create-agent-input-icon" />
              <input
                type="tel" name="phone" required value={form.phone} onChange={handleChange}
                placeholder="+91 90000 00000"
                className="create-agent-input"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="form-field-label">Operating City</label>
          <div className="create-agent-input-icon-wrap">
            <MapPin size={16} className="create-agent-input-icon" />
            <input
              name="city" value={form.city} onChange={handleChange}
              placeholder="e.g. Ahmedabad"
              className="create-agent-input"
            />
          </div>
        </div>

        <div>
          <label className="form-field-label">Short Bio</label>
          <textarea
            name="bio" rows={3} value={form.bio} onChange={handleChange}
            placeholder="A brief description about the agent's experience"
            className="create-agent-textarea"
          />
        </div>

        <button
          type="submit"
          className="btn-primary create-agent-submit-btn"
        >
          <UserPlus size={16} /> Create Agent
        </button>
      </form>
    </div>
  )
}
