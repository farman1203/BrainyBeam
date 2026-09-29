import {
  FiCreditCard,
  FiShield,
} from "react-icons/fi";

const RazorpayPayment = () => {

  return (
    <div className="razorpay-page">
      <section className="razorpay-content">
        <div className="payment-card">
          <div className="payment-icon">
            <FiCreditCard />
          </div>
          <h2>
            Order Payment
          </h2>
          <p className="payment-description">
            You are about to make a secure payment
            for your grocery order.
          </p>
          <div className="payment-amount">
            <span>
              Total Amount
            </span>
            <strong>
              ₹500
            </strong>
          </div>
          <button
            className="razorpay-pay-btn"
          >
            <FiCreditCard />
            Payment with Razorpay ₹500
          </button>

          <div className="payment-security">
            <FiShield />
            <span>
              Secure payment powered by Razorpay
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RazorpayPayment;