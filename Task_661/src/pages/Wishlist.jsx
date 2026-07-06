import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';

function Wishlist() {
  const { wishlistProducts } = useWishlist();

  return (
    <main className="page container">
      <Helmet>
        <title>Wishlist</title>
        <meta name="description" content="Review your saved products in the Task 661 wishlist demo." />
        <meta name="keywords" content="wishlist, saved products, UX demo, React SEO" />
      </Helmet>

      <motion.div
        className="page__header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h1>Wishlist</h1>
        <p>Keep your favorite products close by and manage them from one simple place.</p>
      </motion.div>

      {wishlistProducts.length === 0 ? (
        <p className="empty-state">No products saved yet. Add a few from the home or shop pages.</p>
      ) : (
        <div className="product-grid">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Wishlist;
