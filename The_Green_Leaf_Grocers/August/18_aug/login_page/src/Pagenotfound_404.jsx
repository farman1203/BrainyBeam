import React from "react";
import { FiAlertCircle, FiHome, FiArrowLeft } from "react-icons/fi";


const Pagenotfound_404 = () => {
    return (
        <div className="error404-page">

            <div className="error404-card">

                <div className="error404-icon">
                    <FiAlertCircle />
                </div>

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    Sorry, the page you are looking for doesn't exist
                    or has been moved.
                </p>

                <div className="error404-buttons">

                    <a href="/" className="error404-home-btn">
                        <FiHome />
                        Go to Home
                    </a>

                    <button
                        className="error404-back-btn"
                        onClick={() => window.history.back()}
                    >
                        <FiArrowLeft />
                        Go Back
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Pagenotfound_404;