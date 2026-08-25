import React from 'react'
import {FaFacebook, FaInstagram ,FaYoutube} from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">

                    {/* About */}
                    <div className="footer-column footer-about">
                        <h2 className="footer-logo">
                            The Green Leaf <span>Grocers</span>
                        </h2>

                        <p>
                            Fresh, healthy and quality groceries delivered to your doorstep.
                            We bring nature's goodness closer to you.
                        </p>

                        <div className="footer-social">
                            <a href="#" aria-label="Facebook">
                                <FaFacebook />
                            </a>

                            <a href="#" aria-label="Instagram">
                               <FaInstagram />
                            </a>

                            <a href="#" aria-label="Twitter">
                               <CiTwitter />
                            </a>

                            <a href="#" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h3>Quick Links</h3>

                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/products">Products</a>
                            </li>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div className="footer-column">
                        <h3>Customer Service</h3>

                        <ul>
                            <li>
                                <a href="#">My Account</a>
                            </li>
                            <li>
                                <a href="#">Order Tracking</a>
                            </li>
                            <li>
                                <a href="#">Shipping & Delivery</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-column footer-contact">
                        <h3>Contact Us</h3>

                        <div className="contact-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>
                                123 Green Street,<br />
                                Ahmedabad, Gujarat, India
                            </p>
                        </div>

                        <div className="contact-item">
                            <i className="fa-solid fa-phone"></i>
                            <a href="tel:+919876543210">
                                +91 9988776655
                            </a>
                        </div>

                        <div className="contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <a href="mailto:info@greenleafgrocers.com">
                                info@greenleafgrocers.com
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} The Green Leaf Grocers. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
