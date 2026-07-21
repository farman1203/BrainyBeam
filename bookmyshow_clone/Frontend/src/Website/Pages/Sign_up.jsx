import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Sign_up = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Password not matched", { theme: "colored", });
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const exist = users.find(
            (item) => item.email === formData.email
        );

        if (exist) {
            toast.warning("Email already exists", { theme: "colored", });
            return;
        }

        users.push({
            id : Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });

        localStorage.setItem("users", JSON.stringify(users));

        toast.success("Account Created Successfully", { theme: "colored", });
        setFormData({ ...formData, name: "", email: "", password: "", confirmPassword: "" })
        navigate("/login");
    };

    return (
        <div className="auth-container">

            <div className="auth-card">

                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    <button className="main-btn">
                        Sign Up
                    </button>

                </form>

                <p className="switch">
                    Already have an account?
                    <span><Link to="/login"> Sign In</Link></span>
                </p>

            </div>

        </div>
    );
};

export default Sign_up;