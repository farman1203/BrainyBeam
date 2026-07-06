import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductSection from '../sections/ProductSection';

function Home() {
  return (
    <main>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Task 661 showcases responsive navigation, breadcrumb updates, SEO metadata, and a wishlist-driven product demo." />
        <meta name="keywords" content="React Vite SEO, breadcrumb navigation, wishlist, checkout" />
      </Helmet>

      <section className="hero container">
        <div className="hero__content">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple navigation and SEO experiences for modern storefronts.
          </motion.h1>

          <motion.p
            className="hero__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse products, save favorites, and test a responsive checkout flow in a compact React app.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <NavLink to="/shop" className="btn btn--primary">
              Shop Now
            </NavLink>
            <NavLink to="/checkout" className="btn btn--secondary">
              Checkout
            </NavLink>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hero__image-frame">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
              alt="Featured product collection"
            />
          </div>
        </motion.div>
      </section>

      <ProductSection />
    </main>
  );
}

export default Home;
