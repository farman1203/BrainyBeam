import React from "react";
import { FiCheckCircle, FiShoppingBag } from "react-icons/fi";


const PaymentSuccess = () => {
  return (
    <div className="success-page">
      <div className="success-card">

        <div className="success-icon">
          <FiCheckCircle />
        </div>

        <h2>Payment Successful!</h2>

        <p className="success-message">
          Your payment has been completed successfully.
        </p>

        <div className="order-info">
          <div>
            <span>Order ID</span>
            <strong>#GLG10245</strong>
          </div>

          <div>
            <span>Amount Paid</span>
            <strong>₹645</strong>
          </div>

          <div>
            <span>Payment Method</span>
            <strong>UPI</strong>
          </div>
        </div>

        <div className="success-buttons">
          <button className="order-btn">
            <FiShoppingBag />
            View Order
          </button>

          <button className="home-btn">
            Continue Shopping
          </button>
        </div>

      </div>
    </div>
  );
};

export default PaymentSuccess;