import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import ProductSection from '../sections/ProductSection';

function Home() {
  return (
    <main>
      <section className="hero container">
        <div className="hero__content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Smooth UX Collection
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Delightful micro-animations for modern shopping.
          </motion.h1>

          <motion.p
            className="hero__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore a clean design demo with product cards, hover effects, animated buttons, and responsive navigation.
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
              alt="Hero product showcase"
            />
          </div>
        </motion.div>
      </section>

      <ProductSection />
    </main>
  );
}

export default Home;
