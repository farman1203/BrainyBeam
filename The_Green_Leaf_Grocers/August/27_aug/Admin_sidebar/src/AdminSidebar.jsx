import React, { useState } from "react";
import {
  FiGrid,
  FiUsers,
  FiPackage,
  FiShoppingCart,
  FiHeart,
  FiMessageSquare,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

const AdminSidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FiGrid />,
    },
    {
      title: "Customers",
      icon: <FiUsers />,
    },
    {
      title: "Products",
      icon: <FiPackage />,
    },
    {
      title: "Orders",
      icon: <FiShoppingCart />,
    },
    {
      title: "Wishlist",
      icon: <FiHeart />,
    },
    {
      title: "Messages",
      icon: <FiMessageSquare />,
    },
    {
      title: "Analytics",
      icon: <FiBarChart2 />,
    },
  ];

  const handleMenuClick = (title) => {
    setActiveItem(title);
    setSidebarOpen(false);
  };

  return (
    <div className="admin-layout">
      <aside
        className={`admin-sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >
        <div className="admin-logo">
          <div className="admin-logo-icon">
            <FiPackage />
          </div>
          <div>
            <h2>Green Leaf</h2>
            <span>GROCERS ADMIN</span>
          </div>
          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>
        
        <nav className="admin-nav">
          <p className="nav-title">
            MAIN MENU
          </p>
          {menuItems.map((item) => (
            <button
              key={item.title}
              className={`admin-nav-item ${
                activeItem === item.title
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleMenuClick(item.title)
              }
            >
              <span className="nav-icon">
                {item.icon}
              </span>
              <span className="nav-text">
                {item.title}
              </span>
              {item.title === "Messages" && (
                <span className="message-count">
                  
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button className="logout-btn">
            <FiLogOut />
            <span>
              Logout
            </span>
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <button
            className="sidebar-menu-btn"
            onClick={() =>
              setSidebarOpen(true)
            }
          >
            <FiMenu />
          </button>
        </header>

        <section className="admin-dashboard-preview">
          <span className="preview-label">
            ADMIN DASHBOARD
          </span>
          <h1>
            Welcome back, Admin!
          </h1>
        </section>
      </main>

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminSidebar;