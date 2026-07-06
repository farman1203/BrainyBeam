import { motion } from 'motion/react';
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useWishlist } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, onAddToCart }) {
    const { wishlistIds, toggleWishlist } = useWishlist();
    const inWishlist = wishlistIds.includes(product.id);

    const redirect = useNavigate();

    const handleAddToCart = () => {
        onAddToCart?.();
        redirect('/cart'); // Redirect to the cart page
        toast.success(`${product.name} added to cart`);
    };

    return (
        <motion.article
            className="product-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -6, boxShadow: '0 20px 45px rgba(15, 23, 42, 0.14)' }}
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
                <div className="product-card__topline">
                    <div className="product-card__rating">
                        <FiStar className="icon icon--star" />
                        <span>{product.rating}</span>
                    </div>
                    <button
                        type="button"
                        className={`product-card__wishlist ${inWishlist ? 'is-active' : ''}`}
                        aria-label={`Toggle ${product.name} wishlist`}
                        onClick={() => {
                            toggleWishlist(product.id);
                            toast.info(`${product.name} ${inWishlist ? 'removed from' : 'added to'} wishlist`);
                        }}
                    >
                        <FiHeart />
                    </button>
                </div>
                <h3>{product.name}</h3>
                <p className="product-card__price">{product.price}</p>
                <button className="btn btn--secondary" type="button" onClick={handleAddToCart}>
                    <FiShoppingCart className="btn__icon" />
                    Add to Cart
                </button>
            </div>
        </motion.article>
    );
}

export default ProductCard;
