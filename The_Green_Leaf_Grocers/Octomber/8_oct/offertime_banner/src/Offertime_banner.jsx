import React from "react";
import {
  FiClock,
  FiShoppingBag,
  FiArrowRight
} from "react-icons/fi";

const OffersBanner = () => {
  return (
    <section className="offers-section">

      <div className="offers-content">

        <div className="offers-icon">
          <FiShoppingBag />
        </div>

        <div className="offers-text">

          <span className="limited-text">
            LIMITED TIME OFFER
          </span>

          <h2>
            Get 20% OFF on Fresh Groceries!
          </h2>

          <p>
            Shop your favorite products before
            the offer ends.
          </p>

          <div className="offers-timer">

            <div className="timer-box">
              <strong>02</strong>
              <span>Days</span>
            </div>

            <div className="timer-box">
              <strong>12</strong>
              <span>Hours</span>
            </div>

            <div className="timer-box">
              <strong>45</strong>
              <span>Min</span>
            </div>

            <div className="timer-box">
              <strong>30</strong>
              <span>Sec</span>
            </div>

          </div>

        </div>

        <div className="offers-action">

          <button>
            Shop Now
            <FiArrowRight />
          </button>

          <span>
            <FiClock />
            Offer ends soon
          </span>

        </div>

      </div>

    </section>
  );
};

export default OffersBanner;