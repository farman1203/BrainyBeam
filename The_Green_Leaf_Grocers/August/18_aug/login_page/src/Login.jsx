import React, { useState } from "react";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";
import { Link } from "react-router";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Login successful!");
    };

    return (
        <div className="login-page">
            <div className="login-card">

                <div className="login-header">
                    <div className="login-logo">
                        <FiLogIn />
                    </div>

                    <h2>Welcome Back!</h2>
                    <p>Login to Green Leaf Grocers</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="login-input-group">
                        <label>Email Address</label>

                        <div className="login-input-box">
                            <FiMail />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="login-input-group">
                        <label>Password</label>

                        <div className="login-input-box">
                            <FiLock />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="login-options">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-btn">
                        <FiLogIn />
                        Login
                    </button>

                </form>

                <p className="register-text">
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;