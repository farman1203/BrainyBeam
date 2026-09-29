import React, { useState } from "react";
import {
  FiMapPin,
  FiCreditCard,
  FiTruck,
  FiCheck,
  FiArrowLeft,
} from "react-icons/fi";

const Checkout = () => {

  const [orderPlaced, setOrderPlaced] = useState(false);

  return (
    <div className="checkout-page">
      <section className="checkout-header">
        <div>
          <span>CHECKOUT</span>
          <h1>Complete Your Order</h1>
          <p>
            Enter your details and choose your
            preferred payment method.
          </p>
        </div>
      </section>

      <section className="checkout-content">
        <div className="checkout-layout">
          <div className="checkout-left">
            <div className="checkout-card">
              <div className="checkout-card-heading">
                <div className="heading-icon">
                  <FiMapPin />
                </div>
                <div>
                  <h2>Delivery Address</h2>
                  <p>
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="checkout-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                    />
                  </div>

                </div>


                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                  />
                </div>


                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="House / Street / Area"
                  />
                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      placeholder="Enter city"
                    />
                  </div>

                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      type="text"
                      placeholder="Enter postal code"
                    />
                  </div>

                </div>
              </div>
            </div>


            {/* Delivery */}
            <div className="checkout-card">
              <div className="checkout-card-heading">
                <div className="heading-icon">
                  <FiTruck />
                </div>
                <div>
                  <h2>Delivery Method</h2>
                  <p>
                    Select your preferred delivery option.
                  </p>
                </div>

              </div>


              <div className="delivery-option selected">

                <div>
                  <strong>
                    Standard Delivery
                  </strong>

                  <span>
                    Delivery within 2-4 business days
                  </span>
                </div>

                <strong>
                  FREE
                </strong>
              </div>
            </div>
            <button className="back-cart-btn">
              <FiArrowLeft />
              Back to Cart
            </button>
          </div>


          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <div className="checkout-product">
              <div className="checkout-product-image">
                <img
                  src="/images/products/apple.jpg"
                  alt="Fresh Red Apples"
                />
              </div>
              <div>
                <h3>Fresh Red Apples</h3>
                <span>
                  Qty: 2
                </span>
              </div>
              <strong>
                ₹240
              </strong>
            </div>

            <div className="checkout-product">
              <div className="checkout-product-image">
                <img
                  src="/images/products/banana.jpg"
                  alt="Organic Bananas"
                />
              </div>
              <div>
                <h3>Organic Bananas</h3>
                <span>
                  Qty: 1
                </span>
              </div>

              <strong>
                ₹50
              </strong>

            </div>
            <div className="checkout-divider" />

            <div className="checkout-summary-row">
              <span>Subtotal</span>
              <strong>₹290</strong>
            </div>

            <div className="checkout-summary-row">
              <span>Delivery</span>
              <strong>FREE</strong>
            </div>

            <div className="checkout-divider" />
            <div className="checkout-total">
              <span>Total</span>
              <strong>₹290</strong>
            </div>

            <button
              className="place-order-btn"
              onClick={() =>
                setOrderPlaced(true)
              }
            >
              <FiCheck />
              Place Order
            </button>

            {orderPlaced && (
              <div className="order-success">
                Order placed successfully!
              </div>
            )}
            <p className="checkout-note">
              Your payment information is secure
              and protected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;