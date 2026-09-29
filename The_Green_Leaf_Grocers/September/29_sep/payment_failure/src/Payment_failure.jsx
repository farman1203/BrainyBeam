import React from "react";
import { FiXCircle, FiRefreshCw } from "react-icons/fi";

const PaymentFailed = () => {
  return (
    <div className="failed-page">
      <div className="failed-card">

        <div className="failed-icon">
          <FiXCircle />
        </div>

        <h2>Payment Failed!</h2>

        <p className="failed-message">
          Unfortunately, your payment could not be completed.
        </p>

        <div className="order-info">
          <div>
            <span>Order ID</span>
            <strong>#GLG10245</strong>
          </div>

          <div>
            <span>Amount</span>
            <strong>₹645</strong>
          </div>

          <div>
            <span>Payment Status</span>
            <strong>Failed</strong>
          </div>
        </div>

        <div className="failed-buttons">
          <button className="retry-btn">
            <FiRefreshCw />
            Retry Payment
          </button>

          <button className="back-btn">
            Back to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default PaymentFailed;