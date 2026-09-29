import React from "react";
import { FiPackage, FiEye } from "react-icons/fi";

const OrderHistory = () => {
  const orders = [
    {
      id: "#GLG10245",
      date: "21 Sep 2026",
      items: "Fresh Apples, Organic Milk",
      amount: "₹320",
      status: "Delivered",
    },
    {
      id: "#GLG10244",
      date: "18 Sep 2026",
      items: "Basmati Rice, Tomatoes",
      amount: "₹450",
      status: "Delivered",
    },
    {
      id: "#GLG10243",
      date: "15 Sep 2026",
      items: "Fresh Vegetables",
      amount: "₹280",
      status: "Processing",
    },
    {
      id: "#GLG10242",
      date: "10 Sep 2026",
      items: "Organic Milk, Bread",
      amount: "₹190",
      status: "Cancelled",
    },
  ];

  return (
    <div className="order-history">
      <div className="order-header">
        <div>
          <h2>Order History</h2>
          <p>View your previous orders</p>
        </div>

        <FiPackage className="header-icon" />
      </div>

      <div className="orders-container">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-info">
              <h3>{order.id}</h3>
              <p>{order.date}</p>
            </div>

            <div className="order-items">
              <span>Items</span>
              <p>{order.items}</p>
            </div>

            <div className="order-amount">
              <span>Total</span>
              <p>{order.amount}</p>
            </div>

            <div className="order-status">
              <span className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>

            <button className="view-btn">
              <FiEye />
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;