import React, { useEffect, useState } from "react";
import {
  FiCreditCard,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const RazorpayPayment = () => {

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {

    const script = document.createElement("script");

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

  }, []);


  const handlePayment = () => {

    const options = {

      key: "YOUR_RAZORPAY_KEY_ID",

      amount: 50000,

      currency: "INR",

      name: "The Green Leaf Grocers",

      description:
        "Grocery Product Purchase",

      image:"/images/logo.png",

      handler: function (response) {

        console.log(
          "Payment ID:",
          response.razorpay_payment_id
        );

        setPaymentSuccess(true);
      },

      prefill: {
        name: "Farman",
        email: "customer@example.com",
        contact: "9999999999",
      },

      notes: {
        address:
          "The Green Leaf Grocers",
      },

      theme: {
        color: "#76a942",
      },

    };


    if (!window.Razorpay) {

      alert(
        "Razorpay is still loading. Please try again."
      );

      return;
    }


    const razorpay =
      new window.Razorpay(options);

    razorpay.open();
  };


  return (
    <div className="razorpay-page">

      {/* Header */}

      <section className="razorpay-header">

        <span>SECURE PAYMENT</span>
        

        <h1>
          Complete Your Payment
        </h1>

        <p>
          Pay securely using Razorpay.
        </p>

      </section>


      {/* Payment Card */}

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


          {/* Amount */}

          <div className="payment-amount">

            <span>
              Total Amount
            </span>

            <strong>
              ₹500
            </strong>

          </div>


          {/* Pay Button */}

          {!paymentSuccess ? (

            <button
              className="razorpay-pay-btn"
              onClick={handlePayment}
            >

              <FiCreditCard />

              Pay ₹500

            </button>

          ) : (

            <div className="payment-success">

              <FiCheckCircle />

              <div>

                <strong>
                  Payment Successful
                </strong>

                <span>
                  Your payment has been completed.
                </span>

              </div>

            </div>

          )}


          {/* Security */}

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