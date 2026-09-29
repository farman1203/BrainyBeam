import React, { useState } from "react";
import {
    FiUser,
    FiMail,
    FiPhone,
    FiMapPin,
    FiShoppingBag,
} from "react-icons/fi";


const VendorProfile = () => {
    const [formData, setFormData] = useState({
        storeName: "Green Leaf Store",
        ownerName: "Farman Ansari",
        email: "vendor@example.com",
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
        alert("Vendor profile updated successfully!");
    };

    return (
        <div className="vendor-profile">
            <div className="vendor-profile-card">

                <div className="vendor-profile-header">
                    <div className="vendor-icon">
                        <FiShoppingBag />
                    </div>

                    <div>
                        <h2>Vendor Profile</h2>
                        <p>Update your store information</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Store Name</label>

                        <div className="vendor-input">
                            <FiShoppingBag />

                            <input
                                type="text"
                                name="storeName"
                                value={formData.storeName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Owner Name</label>

                        <div className="vendor-input">
                            <FiUser />

                            <input
                                type="text"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email</label>

                        <div className="vendor-input">
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

                        <div className="vendor-input">
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
                        <label>Store Address</label>
                        <div className="vendor-input">
                            <FiMapPin />
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className="vendor-update-btn">
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VendorProfile;