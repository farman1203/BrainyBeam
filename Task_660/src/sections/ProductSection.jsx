import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';

const products = [
  {
    id: 1,
    name: 'Soft Travel Bag',
    price: '$79',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1647540945262-7da3bd1a3d96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvZnQlMjB0cmF2ZWwlMjBiYWd8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    name: 'Minimal Sneakers',
    price: '$129',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    name: 'Comfort Hoodie',
    price: '$59',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 4,
    name: 'Desk Essentials',
    price: '$42',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 5,
    name: 'Casual Mug Set',
    price: '$28',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1530968831187-a937ade474cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzdWFsJTIwbXVnJTIwc2V0fGVufDB8fDB8fHww',
  },
  {
    id: 6,
    name: 'Desk Lamp',
    price: '$34',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80',
  },
];

function ProductSection() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount((prev) => prev + 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <section className="product-section container">
      <div className="section-header">
        <div>
          <p className="eyebrow">Featured Products</p>
          <h2>Product cards with subtle motion and ratings.</h2>
        </div>
        <div className="product-section__counter">
          <FiShoppingCart />
          <span>{cartCount} added</span>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product, index) => (
          <motion.article
            className="product-card"
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            whileHover={{ y: -7, boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)' }}
          >
            <div className="product-card__image-wrap">
              <motion.img
                src={product.image}
                alt={product.name}
                className="product-card__image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <div className="product-card__body">
              <div className="product-card__rating">
                <FiStar className="icon icon--star" />
                <span>{product.rating}</span>
              </div>
              <h3>{product.name}</h3>
              <p className="product-card__price">{product.price}</p>
              <motion.button
                className="btn btn--secondary"
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAddToCart(product)}
              >
                <FiShoppingCart className="btn__icon" />
                Add to Cart
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
