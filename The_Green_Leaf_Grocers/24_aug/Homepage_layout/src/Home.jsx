import React from "react";
import {
    FiArrowRight,
    FiShoppingBag,
    FiTruck,
    FiShield,
    FiHeadphones,
} from "react-icons/fi";

const Home = () => {
    return (
        <div className="home">
            <section className="hero-section">
                <div className="hero-container">

                    <div className="hero-content">
                        <span className="hero-tagline">
                            FRESH & ORGANIC GROCERIES
                        </span>

                        <h1>
                            Freshness You Can
                            <span> Trust</span>
                        </h1>

                        <p>
                            Discover fresh, healthy and quality groceries delivered
                            right to your doorstep. Eat fresh, live healthy.
                        </p>

                        <div className="hero-buttons">
                            <button className="primary-btn">
                                Shop Now
                                <FiArrowRight />
                            </button>

                            <button className="secondary-btn">
                                Explore Products
                            </button>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="hero-image-circle">
                            <div className="hero-placeholder">
                                <FiShoppingBag />
                                <span>Fresh Groceries</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="features-section">
                <div className="features-container">

                    <div className="feature-card">
                        <div className="feature-icon">
                            <FiTruck />
                        </div>

                        <div>
                            <h3>Fast Delivery</h3>
                            <p>Quick delivery to your doorstep</p>
                        </div>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon">
                            <FiShield />
                        </div>

                        <div>
                            <h3>Quality Products</h3>
                            <p>Fresh and high quality products</p>
                        </div>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon">
                            <FiShoppingBag />
                        </div>

                        <div>
                            <h3>Easy Shopping</h3>
                            <p>Simple and convenient shopping</p>
                        </div>
                    </div>


                    <div className="feature-card">
                        <div className="feature-icon">
                            <FiHeadphones />
                        </div>

                        <div>
                            <h3>24/7 Support</h3>
                            <p>We're always here to help</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="welcome-section">
                <div className="welcome-container">

                    <div className="welcome-image">
                        <div className="welcome-placeholder">
                            <span>THE GREEN LEAF</span>
                            <strong>GROCERS</strong>
                        </div>
                    </div>

                    <div className="welcome-content">

                        <span className="section-label">
                            WELCOME TO THE GREEN LEAF GROCERS
                        </span>

                        <h2>
                            Your Trusted Partner For
                            <span> Fresh Groceries</span>
                        </h2>

                        <p>
                            At The Green Leaf Grocers, we believe that healthy living
                            starts with fresh and quality food. We carefully select
                            our products to bring you the best groceries for your
                            everyday needs.
                        </p>

                        <p>
                            From fresh fruits and vegetables to everyday essentials,
                            everything you need is available in one place.
                        </p>

                        <button className="outline-btn">
                            Learn More
                            <FiArrowRight />
                        </button>

                    </div>

                </div>
            </section>


           
            <section className="category-section">
                <div className="section-heading">
                    <span>SHOP BY CATEGORY</span>
                    <h2>
                        Everything You Need,
                        <span> All In One Place</span>
                    </h2>
                    <p>
                        Explore our wide range of fresh and quality grocery products.
                    </p>
                </div>
                <div className="category-container">
                    <div className="category-card">
                        <div className="category-placeholder">
                            Fruits
                        </div>
                        <h3>Fresh Fruits</h3>
                        <p>Fresh & healthy fruits</p>
                    </div>

                    <div className="category-card">
                        <div className="category-placeholder">
                            Vegetables
                        </div>
                        <h3>Vegetables</h3>
                        <p>Farm fresh vegetables</p>
                    </div>

                    <div className="category-card">
                        <div className="category-placeholder">
                            Dairy
                        </div>
                        <h3>Dairy Products</h3>
                        <p>Fresh dairy essentials</p>
                    </div>

                    <div className="category-card">
                        <div className="category-placeholder">
                            Grocery
                        </div>
                        <h3>Daily Grocery</h3>
                        <p>Everyday grocery essentials</p>
                    </div>
                </div>
            </section>


            <section className="cta-section">
                <div className="cta-content">
                    <span>FRESHNESS DELIVERED TO YOUR DOOR</span>
                    <h2>
                        Make Your Everyday
                        <br />
                        Shopping <strong>Fresh & Easy</strong>
                    </h2>
                    <p>
                        Shop fresh groceries from the comfort of your home.
                    </p>
                    <button className="primary-btn">
                        Start Shopping
                        <FiArrowRight />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;