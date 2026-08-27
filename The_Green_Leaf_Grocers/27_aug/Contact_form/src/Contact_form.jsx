import React, { useState } from "react";
import {
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

const Contact = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>GET IN TOUCH</span>
          <h1>Contact Us</h1>
        </div>
      </section>


      <section className="contact-content">
        <div className="contact-layout">
          <div className="contact-form-card">
            <div className="contact-form-header">
              <h2>
                Send us a message
              </h2>
            </div>


            {submitted && (
              <div className="contact-success">
                <FiCheckCircle />
                <span>
                  Thank you! Your message has been
                  submitted successfully.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                  />
                </div>

                <div className="contact-form-group">
                  <label>
                    Subject
                  </label>
                  <select
                    name="subject"
                    required
                  >
                    <option value="">
                      Select a subject
                    </option>
                    <option value="order">
                      Order Related
                    </option>
                    <option value="product">
                      Product Related
                    </option>
                    <option value="delivery">
                      Delivery Related
                    </option>
                    <option value="payment">
                      Payment Related
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div className="contact-form-group">
                <label>
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;