import React, { useState } from "react";
import {
  FiHeart,
  FiShoppingCart,
  FiTrash2
} from "react-icons/fi";


const initialCart = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 120,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
  },
  {
    id: 2,
    name: "Organic Milk",
    price: 65,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b"
  },
  {
    id: 3,
    name: "Basmati Rice",
    price: 180,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c"
  }
];

const SaveForLater = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [savedItems, setSavedItems] = useState([]);

  const saveForLater = (product) => {
    setSavedItems([...savedItems, product]);

    setCartItems(
      cartItems.filter((item) => item.id !== product.id)
    );
  };

  const moveToCart = (product) => {
    setCartItems([...cartItems, product]);

    setSavedItems(
      savedItems.filter((item) => item.id !== product.id)
    );
  };

  const removeSavedItem = (id) => {
    setSavedItems(
      savedItems.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="save-later-page">

      <h1>My Cart</h1>

      {/* Cart Items */}

      <div className="cart-section">

        <h2>Cart Items</h2>

        {cartItems.length === 0 ? (
          <p className="empty-message">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div className="save-cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="save-item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <span>Quantity: {item.quantity}</span>
              </div>

              <button
                className="save-btn"
                onClick={() => saveForLater(item)}
              >
                <FiHeart />
                Save for Later
              </button>

            </div>
          ))
        )}

      </div>

      {/* Saved Items */}

      <div className="saved-section">

        <h2>
          <FiHeart />
          Saved for Later
        </h2>

        {savedItems.length === 0 ? (
          <p className="empty-message">
            No products saved for later.
          </p>
        ) : (
          savedItems.map((item) => (
            <div className="save-cart-item" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="save-item-details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <span>Quantity: {item.quantity}</span>
              </div>

              <div className="saved-actions">

                <button
                  className="move-cart-btn"
                  onClick={() => moveToCart(item)}
                >
                  <FiShoppingCart />
                  Move to Cart
                </button>

                <button
                  className="delete-saved-btn"
                  onClick={() => removeSavedItem(item.id)}
                >
                  <FiTrash2 />
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default SaveForLater;