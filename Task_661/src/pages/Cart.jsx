import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { redirect, useNavigate } from "react-router-dom";

const Cart = () => {
    const redirect = useNavigate();

    const [data,setData] = useState(0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <div className="cart-content">
        {/* Cart Items */}
        <div className="cart-items">
          <div className="cart-item">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
              alt="Product"
            />

            <div className="item-details">
              <h3>Nike Air Max</h3>
              <p>₹2,999</p>

              <div className="quantity">
                <button onClick={() =>{ 
                    if (data > 0){
                        setData(data-1)
                    }
                    }}>-</button>
                <span>{data}</span>
                <button onClick={() => {setData(data +1)}}>+</button>
              </div>
            </div>

            <button className="remove-btn">
              <FaTrash />
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="summary">
          <h2>Order Summary</h2>

          <div className="row">
            <span>Items</span>
            <span>3</span>
          </div>

          <div className="row">
            <span>Subtotal</span>
            <span>₹9,997</span>
          </div>

          <div className="row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <hr />

          <div className="row total">
            <span>Total</span>
            <span>₹9,997</span>
          </div>

          <button className="checkout-btn" onClick={()=>redirect('/checkout')}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;