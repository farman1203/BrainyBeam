import { motion } from 'framer-motion';
import ProductSection from '../sections/ProductSection';

function Shop() {
  return (
    <main className="page page--shop container">
      <motion.div
        className="page__header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1>Shop</h1>
        <p>Browse the same product cards with smooth hover states and rating interactions.</p>
      </motion.div>
      <ProductSection />
    </main>
  );
}

export default Shop;
