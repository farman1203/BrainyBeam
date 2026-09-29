import React from "react";
import { FiShoppingBag, FiMapPin, FiCreditCard } from "react-icons/fi";

const CheckoutSummary = () => {
    const items = [
        {
            id: 1,
            name: "Fresh Apples",
            quantity: 2,
            price: 120,
        },
        {
            id: 2,
            name: "Organic Milk",
            quantity: 1,
            price: 65,
        },
        {
            id: 3,
            name: "Basmati Rice",
            quantity: 1,
            price: 180,
        },
    ];

    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const delivery = 40;
    const total = subtotal + delivery;

    return (
        <div className="checkout-page">
            <div className="checkout-container">

                <h2>Checkout Summary</h2>
                <p className="checkout-subtitle">
                    Review your order before placing it
                </p>

                {/* Products */}
                <div className="checkout-box">
                    <div className="box-title">
                        <FiShoppingBag />
                        <h3>Order Items</h3>
                    </div>

                    {items.map((item) => (
                        <div className="checkout-item" key={item.id}>
                            <div>
                                <h4>{item.name}</h4>
                                <p>Quantity: {item.quantity}</p>
                            </div>

                            <strong>
                                ₹{item.price * item.quantity}
                            </strong>
                        </div>
                    ))}
                </div>

                {/* Address */}
                <div className="checkout-box">
                    <div className="box-title">
                        <FiMapPin />
                        <h3>Delivery Address</h3>
                    </div>

                    <p className="address">
                        Farman Ansari
                        <br />
                        Ahmedabad, Gujarat
                        <br />
                        India - 380001
                    </p>
                </div>

                {/* Payment */}
                <div className="checkout-box">
                    <div className="box-title">
                        <FiCreditCard />
                        <h3>Payment Method</h3>
                    </div>

                    <p className="payment-method">
                        Cash on Delivery
                    </p>
                </div>

                {/* Price Summary */}
                <div className="price-box">
                    <div>
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>

                    <div>
                        <span>Delivery</span>
                        <span>₹{delivery}</span>
                    </div>

                    <hr />

                    <div className="total">
                        <strong>Total</strong>
                        <strong>₹{total}</strong>
                    </div>

                    <button className="place-order-btn">
                        Place Order
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CheckoutSummary;