import React from "react";
import {
  FiUsers,
  FiPackage,
  FiShoppingCart,
} from "react-icons/fi";

const AdminOverview = () => {
  const cards = [
    {
      title: "Total Users",
      value: "1,250",
      icon: <FiUsers />,
    },
    {
      title: "Total Products",
      value: "356",
      icon: <FiPackage />,
    },
    {
      title: "Total Orders",
      value: "892",
      icon: <FiShoppingCart />,
    },
  ];

  return (
    <div className="admin-overview">
      <h2>Admin Dashboard</h2>
      <p className="overview-subtitle">
        Overview of your store
      </p>

      <div className="overview-cards">
        {cards.map((card, index) => (
          <div className="overview-card" key={index}>
            <div className="overview-icon">
              {card.icon}
            </div>

            <div>
              <p>{card.title}</p>
              <h3>{card.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOverview;