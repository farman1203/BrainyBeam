import React, { useState } from "react";
import axios from "axios";
import { UserPlus, User, Mail, Phone, Lock } from "lucide-react";
import "./CreateAgent.css";
import { toast } from 'react-toastify'


export default function CreateAgent() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value, }); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/admin/create-agent", form,
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);

      setForm({ name: "", email: "", password: "", phone: "", });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-agent-page">

      <div className="create-agent-header">
        <h1 className="page-title">Create Agent</h1>
        <p className="page-subtitle">
          Add a new agent to the platform.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="create-agent-form">

        <div>
          <label className="form-field-label">Full Name</label>

          <div className="create-agent-input-icon-wrap">
            <User size={16} className="create-agent-input-icon" />

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter Full Name"
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
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter Email"
                className="create-agent-input"
              />
            </div>
          </div>

          <div>
            <label className="form-field-label">Phone</label>

            <div className="create-agent-input-icon-wrap">
              <Phone size={16} className="create-agent-input-icon" />

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Enter Phone"
                className="create-agent-input"
              />
            </div>
          </div>

        </div>

        <div>
          <label className="form-field-label">Password</label>

          <div className="create-agent-input-icon-wrap">
            <Lock size={16} className="create-agent-input-icon" />

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter Password"
              className="create-agent-input"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-primary create-agent-submit-btn"
        >
          <UserPlus size={16} />
          {loading ? "Creating..." : "Create Agent"}
        </button>

      </form>
    </div>
  );
}