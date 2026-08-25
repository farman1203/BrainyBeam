import React, { useState } from "react";
import {
    FiHeart,
    FiShoppingCart,
    FiTrash2,
} from "react-icons/fi";

const products = [
    {
        id: 1,
        name: "Fresh Red Apples",
        category: "Fresh Fruits",
        price: 120,
        oldPrice: 150,
        image: "data:image/webp;base64,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",
        rating: 4.8,
        description:
            "Fresh and juicy red apples, carefully selected for quality and taste.",
    },
    {
        id: 2,
        name: "Fresh Tomatoes",
        category: "Vegetables",
        price: 60,
        oldPrice: 80,
        image: "data:image/webp;base64,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",
        rating: 4.7,
        description:
            "Fresh farm-grown tomatoes perfect for everyday cooking.",
    },
    {
        id: 3,
        name: "Organic Bananas",
        category: "Fresh Fruits",
        price: 50,
        oldPrice: 70,
        image: "data:image/webp;base64,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",
        rating: 4.9,
        description:
            "Naturally fresh bananas with a delicious sweet taste.",
    },
    {
        id: 4,
        name: "Fresh Milk",
        category: "Dairy Products",
        price: 65,
        oldPrice: 75,
        image: "data:image/webp;base64,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",
        rating: 4.6,
        description:
            "Fresh and nutritious milk for your everyday needs.",
    },
];

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (productId) => {
        setWishlist((prevWishlist) => {

            // Agar already wishlist mein hai
            if (prevWishlist.includes(productId)) {
                return prevWishlist.filter(
                    (id) => id !== productId
                );
            }

            // Agar wishlist mein nahi hai
            return [...prevWishlist, productId];
        });
    };

    const clearWishlist = () => {
        setWishlist([]);
    };

    return (
        <div className="wishlist-page">
            <section className="wishlist-content">
                <div className="wishlist-top">
                    <h2>
                        Products
                        <span>
                            {" "}({wishlist.length} Wishlisted)
                        </span>
                    </h2>
                    {wishlist.length > 0 && (
                        <button
                            className="clear-wishlist-btn"
                            onClick={clearWishlist}
                        >
                            <FiTrash2 />
                            Clear Wishlist
                        </button>
                    )}
                </div>
                <div className="wishlist-grid">
                    {products.map((product) => {
                        const isWishlisted =
                            wishlist.includes(product.id);
                        return (
                            <div
                                className="wishlist-card"
                                key={product.id}
                            >
                                <div className="wishlist-image">
                                    <button
                                        className={`wishlist-heart ${isWishlisted
                                            ? "active"
                                            : ""
                                            }`}
                                        onClick={() =>
                                            toggleWishlist(product.id)
                                        }
                                        aria-label="Wishlist"
                                    >
                                        <FiHeart />
                                    </button>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                                <div className="wishlist-details">
                                    <span className="wishlist-category">
                                        {product.category}
                                    </span>
                                    <h3>
                                        {product.name}
                                    </h3>
                                    <div className="wishlist-price">
                                        <strong>
                                            ₹{product.price}
                                        </strong>
                                        <del>
                                            ₹{product.oldPrice}
                                        </del>
                                    </div>
                                    <button className="wishlist-cart-btn">
                                        <FiShoppingCart />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Wishlist;