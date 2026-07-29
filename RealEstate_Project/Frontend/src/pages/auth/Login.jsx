import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import axios from "axios";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";


export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login(form);

      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (user.role === "agent") {
        navigate("/agent/dashboard");
      } else {
        navigate("/buyer/dashboard");
      }
    } catch (error) {
      console.log(error);
      console.log(error.response);

      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      <h2 className="login-heading">Welcome back</h2>

      <p className="login-subtext">
        Log in to manage your properties and leads.
      </p>

      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label className="form-field-label">Email</label>

          <div className="login-input-icon-wrap">
            <Mail size={16} className="login-input-icon" />

            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="login-input"
            />
          </div>
        </div>

        <div>
          <label className="form-field-label">Password</label>

          <div className="login-input-icon-wrap">
            <Lock size={16} className="login-input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="login-input login-input--with-right-icon"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="login-toggle-password-btn"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="login-row-between">
          <label className="login-remember-label">
            <input type="checkbox" className="login-checkbox" />
            Remember me
          </label>

          <a href="#" className="login-forgot-link">
            Forgot password?
          </a>
        </div>

        <button type="submit" className="btn-primary login-submit-btn">
          <LogIn size={16} />
          Login
        </button>
      </form>

      <p className="login-footer-text">
        Don't have an account?{" "}
        <Link to="/register" className="login-footer-link">
          Register
        </Link>
      </p>
    </div>
  );
}