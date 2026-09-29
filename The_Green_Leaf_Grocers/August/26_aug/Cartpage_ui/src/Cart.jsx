import React, { useState } from "react";
import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowLeft,
  FiShoppingBag,
  FiShoppingCart,
} from "react-icons/fi";


const initialCart = [
  {
    id: 1,
    name: "Fresh Red Apples",
    category: "Fresh Fruits",
    price: 120,
       image: "data:image/webp;base64,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",
    quantity: 2,
  },
  {
    id: 2,
    name: "Organic Bananas",
    category: "Fresh Fruits",
    price: 50,
     image: "data:image/webp;base64,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",
    quantity: 1,
  },
  {
    id: 3,
    name: "Green Broccoli",
    category: "Vegetables",
    price: 90,
    image:"data:image/webp;base64,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",
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove product
  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const delivery = subtotal >= 500 ? 0 : 40;

  const total = subtotal + delivery;

  return (
    <div className="cart-page">
      <section className="cart-content">
        {cartItems.length > 0 ? (
          <div className="cart-layout">
            <div className="cart-products">
              <div className="cart-products-heading">
                <h2>
                  Cart Items
                  <span>
                    {" "}({cartItems.length})
                  </span>
                </h2>
                <span>
                  {cartItems.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}{" "}
                  Items
                </span>
              </div>
              {cartItems.map((item) => {
                const itemTotal =
                  item.price * item.quantity;
                return (
                  <div
                    className="cart-item"
                    key={item.id}
                  >
                    <div className="cart-item-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div className="cart-item-details">
                      <span>
                        {item.category}
                      </span>
                      <h3>
                        {item.name}
                      </h3>
                      <p>
                        ₹{item.price} / item
                      </p>
                    </div>
                    <div className="cart-quantity">
                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        <FiMinus />
                      </button>
                      <strong>
                        {item.quantity}
                      </strong>
                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        <FiPlus />
                      </button>
                    </div>
                    <div className="cart-item-total">
                      ₹{itemTotal}
                    </div>
                    <button
                      className="remove-cart-item"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                );
              })}
              <button className="continue-shopping">
                <FiArrowLeft />
                Continue Shopping
              </button>

            </div>
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>
                  ₹{subtotal}
                </strong>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <strong>
                  {delivery === 0
                    ? "FREE"
                    : `₹${delivery}`}
                </strong>
              </div>
              <div className="free-delivery-info">
                {delivery === 0
                  ? "You got free delivery!"
                  : `Add ₹${
                      500 - subtotal
                    } more for free delivery.`}
              </div>
              <div className="summary-divider" />
              <div className="summary-total">
                <span>Total</span>
                <strong>
                  ₹{total}
                </strong>
              </div>
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
              <div className="secure-checkout">
                <FiShoppingBag />
                <span>
                  Secure and safe checkout
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FiShoppingCart />
            </div>
            <h2>
              Your Cart is Empty
            </h2>
            <p>
              Looks like you haven't added anything
              to your cart yet.
            </p>
            <button>
              <FiShoppingBag />
              Start Shopping
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;