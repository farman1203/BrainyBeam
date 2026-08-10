import React, { useEffect, useState } from 'react'
import { Camera, Save } from 'lucide-react'
import '../buyer/style/Profile.css'
import axios from 'axios'

export default function BuyerProfile() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/profile",
        {
          withCredentials: true,
        },
      )
      setForm({
        name: res.data.user.name,
        email: res.data.user.email,
        phone: res.data.user.phone,
      })
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:3000/api/user/profile", form,
        {
          withCredentials: true,
        }
      )
      setSaved(true)

      setTimeout(() => {
        setSaved(false)
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="profile-page page-stack-6">
      <div className="profile-header">
        <h1 className="page-title">My Profile</h1>
        <p className="page-subtitle">Manage your account information.</p>
      </div>

      {saved && (
        <div className="success-banner profile-banner">
          Profile updated successfully.
        </div>
      )}

      <div className="profile-card">
        <div className="profile-top-row">
          <div className="pdv-agent-avatar">
            {form.name ? form.name.charAt(0).toUpperCase() : ""}
          </div>
          <div>
            <p className="profile-name">{form.name}</p>
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
