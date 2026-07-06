import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ProductSection from '../sections/ProductSection';

function Shop() {
  return (
    <main className="page page--shop container">
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="Explore the reusable product card experience in the Task 661 shop page." />
        <meta name="keywords" content="shop, products, reusable cards, React app" />
      </Helmet>

      <motion.div
        className="page__header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Shop</h1>
        <p>Browse the same product cards with ratings, wishlist actions, and simple add-to-cart feedback.</p>
      </motion.div>
      <ProductSection />
    </main>
  );
}

export default Shop;
