import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { FiTruck, FiShield } from 'react-icons/fi';

function Checkout() {
  return (
    <main className="page container">
      <Helmet>
        <title>Checkout </title>
        <meta name="description" content="A mobile-friendly checkout experience with shipping details and order summary." />
        <meta name="keywords" content="checkout, responsive layout, React checkout, SEO demo" />
      </Helmet>

      <motion.div
        className="page__header"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h1>Checkout</h1>
        <p>Complete your order with a streamlined layout that adapts beautifully on smaller screens.</p>
      </motion.div>

      <div className="checkout-grid">
        <section className="checkout-card">
          <h2>Shipping Information</h2>
          <div className="form-grid">
            <label>
              Full Name
              <input type="text" placeholder="Aisha Khan" />
            </label>
            <label>
              Email
              <input type="email" placeholder="aisha@example.com" />
            </label>
            <label>
              Address
              <input type="text" placeholder="123 Market Street" />
            </label>
            <label>
              City
              <input type="text" placeholder="Seattle" />
            </label>
          </div>

          <div className="checkout-card__benefits">
            <div>
              <FiTruck />
              <span>Free delivery in 2–3 days</span>
            </div>
            <div>
              <FiShield />
              <span>Secure checkout with SSL</span>
            </div>
          </div>
        </section>

        <aside className="checkout-card checkout-card--summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Nova Sneakers</span>
            <strong>$129</strong>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <strong>Free</strong>
          </div>
          <div className="summary-row summary-row--total">
            <span>Total</span>
            <strong>$129</strong>
          </div>
          <button type="button" className="btn btn--primary btn--full">
            Place Order
          </button>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
