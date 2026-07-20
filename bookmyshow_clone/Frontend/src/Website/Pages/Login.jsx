import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
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

    if (!isLogin) {
      // SIGN UP

      if (formData.password !== formData.confirmPassword) {
        alert("Password not matched");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const exist = users.find(
        (item) => item.email === formData.email
      );

      if (exist) {
        alert("Email already exists");
        return;
      }

      users.push({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("users", JSON.stringify(users));

      alert("Account Created Successfully");

      setIsLogin(true);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      return;
    }

    // LOGIN

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (item) =>
        item.email === formData.email &&
        item.password === formData.password
    );

    if (!user) {
      toast.info("Invalid Email or Password",{theme: "colored",});
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    toast.success("Login Success", { theme: "colored", });

    navigate("/");
  };


  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          )}

          <button className="main-btn">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

        </form>

        <p className="switch">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Sign In"}
          </span>

        </p>

      </div>

    </div>
  );
};

export default Login;