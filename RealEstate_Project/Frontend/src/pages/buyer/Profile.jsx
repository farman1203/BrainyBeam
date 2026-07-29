import React, { useState } from 'react'
import { Camera, Save } from 'lucide-react'
import { currentUser } from '../../data/dummyData'
import './Profile.css'

export default function BuyerProfile() {
  const user = currentUser.buyer
  const [form, setForm] = useState({ name: user.name, email: user.email, phone: user.phone })
  const [saved, setSaved] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="profile-page page-stack-6">
      <div className="profile-header">
        <h1 className="page-title">My Profile</h1>
        <p className="page-subtitle">Manage your account information.</p>
      </div>

      {saved && (
        <div className="success-banner profile-banner">
          Profile updated successfully (demo only).
        </div>
      )}

      <div className="profile-card">
        <div className="profile-top-row">
          <div className="profile-avatar-wrap">
            <img src={user.avatar} alt={user.name} className="profile-avatar" />
            <button className="profile-avatar-edit-btn">
              <Camera size={13} />
            </button>
          </div>
          <div>
            <p className="profile-name">{user.name}</p>
            <span className="profile-role-badge profile-role-badge--buyer">Buyer</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-form-grid-2">
            <div>
              <label className="form-field-label">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="form-field-input" />
            </div>
            <div>
              <label className="form-field-label">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="form-field-input" />
            </div>
          </div>
          <div>
            <label className="form-field-label">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="form-field-input" />
          </div>
          <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>
            <Save size={16} /> Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}
