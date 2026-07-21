import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (item) =>
        item.email === formData.email &&
        item.password === formData.password
    );

    if (!user) {
      toast.error("Invalid Email or Password", { theme: "colored", });
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    toast.success("Login Successful", { theme: "colored", });

    setFormData({ ...formData, email: "", password: "" })
    navigate("/");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>

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

          <button className="main-btn">
            Sign In
          </button>

        </form>

        <p className="switch">
          Don't have an account?
          <span><Link to="/signup" > Sign Up</Link></span>
        </p>

      </div>

    </div>
  );
};

export default Login;