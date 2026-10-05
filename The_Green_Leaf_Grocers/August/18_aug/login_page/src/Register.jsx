import React, { useState } from "react";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiLock,
    FiUserPlus
} from "react-icons/fi";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        toast.success("Registration successful!");
    };

    return (
        <div className="registration-page">

            <div className="registration-card">

                <div className="registration-header">
                    <div className="registration-logo">
                        <FiUserPlus />
                    </div>

                    <h2>Create Account</h2>
                    <p>Join Green Leaf Grocers today</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="registration-input-group">
                        <label>Full Name</label>

                        <div className="registration-input-box">
                            <FiUser />

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="registration-input-group">
                        <label>Email Address</label>

                        <div className="registration-input-box">
                            <FiMail />

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="registration-input-group">
                        <label>Phone Number</label>

                        <div className="registration-input-box">
                            <FiPhone />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="registration-input-group">
                        <label>Password</label>

                        <div className="registration-input-box">
                            <FiLock />

                            <input
                                type="password"
                                name="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="registration-input-group">
                        <label>Confirm Password</label>

                        <div className="registration-input-box">
                            <FiLock />

                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <label className="terms-check">
                        <input type="checkbox" required />
                        <span>
                            I agree to the Terms & Conditions
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="registration-btn"
                    >
                        <FiUserPlus />
                        Create Account
                    </button>

                </form>

                <p className="login-text">
                    Already have an account?
                    <Link to="/"> Login</Link>
                </p>

            </div>

        </div>
    );
};

export default Registration;