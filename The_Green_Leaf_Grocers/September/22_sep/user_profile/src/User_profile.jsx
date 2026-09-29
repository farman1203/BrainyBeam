import React, { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: "Farman Ansari",
    email: "farman@example.com",
    phone: "9876543210",
    address: "Ahmedabad, Gujarat",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="user-profile">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <FiUser />
          </div>

          <div>
            <h2>My Profile</h2>
            <p>Update your personal information</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-box">
              <FiUser />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <div className="input-box">
              <FiMail />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Phone</label>
            <div className="input-box">
              <FiPhone />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <div className="input-box">
              <FiMapPin />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="update-btn">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;