import React, { useState } from 'react'
import {
    FiSend,
    FiCheckCircle,
} from "react-icons/fi";

const Feedback = () => {
    const [form, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        rating: "",
        message: "",
    })

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            rating: "",
            message: "",
        })
    }
    return (
        <div>
            <section className="feedback-hero">
                <div className="feedback-hero-content">
                    <h1>Feedback Form</h1>
                </div>
            </section>

            <section className='feedback-content'>
                <div className="feedback-layout">
                    <div className="feedback-form-card">
                        <div className="feedback-form-header">
                            <h2>
                                Send your feedback
                            </h2>
                        </div>
                        {submitted && (
                            <div className="feedback-success">
                                <FiCheckCircle />
                                <span>
                                    Thank you! Your message has been
                                    submitted successfully.
                                </span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="feedback-form-row">
                                <div className="feedback-form-group">
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
                                <div className="feedback-form-group">
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

                            <div className="feedback-form-row">
                                <div className="feedback-form-group">
                                    <label>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter phone number"
                                    />
                                </div>

                                <div className="feedback-form-group">
                                    <label>
                                        Rating
                                    </label>
                                    <select  name="subject" required>
                                        <option value="">
                                            Select a number
                                        </option>
                                        <option value="order">
                                            1
                                        </option>
                                        <option value="product">
                                            2
                                        </option>
                                        <option value="delivery">
                                            3
                                        </option>
                                        <option value="payment">
                                            4
                                        </option>
                                        <option value="other">
                                            5
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="feedback-form-group">
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
                                className="feedback-submit-btn"
                            >
                                <FiSend />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Feedback
