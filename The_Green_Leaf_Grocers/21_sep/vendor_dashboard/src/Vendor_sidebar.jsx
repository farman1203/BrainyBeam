import React, { useState } from "react";
import {
  FiGrid,
  FiPackage,
  FiShoppingBag,
  FiUsers,
  FiBarChart2,
  FiStar,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiChevronDown,
  FiUser,
  FiBell,
  FiSearch,
  FiPlus,
} from "react-icons/fi";

const VendorSidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <FiGrid />,
    },
    {
      title: "My Products",
      icon: <FiPackage />,
    },
    {
      title: "Orders",
      icon: <FiShoppingBag />,
    },
    {
      title: "Customers",
      icon: <FiUsers />,
    },
    {
      title: "Sales",
      icon: <FiBarChart2 />,
    },
    {
      title: "Reviews",
      icon: <FiStar />,
    },
  ];

  const handleMenuClick = (title) => {
    setActiveItem(title);
    setSidebarOpen(false);
  };

  return (
    <div className="vendor-layout">

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`vendor-sidebar ${
          sidebarOpen ? "vendor-sidebar-open" : ""
        }`}
      >

        {/* Logo */}

        <div className="vendor-logo">

          <div className="vendor-logo-icon">
            <FiPackage />
          </div>

          <div className="vendor-logo-text">
            <h2>Green Leaf</h2>
            <span>VENDOR PANEL</span>
          </div>

          <button
            className="vendor-close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>

        </div>


        {/* Navigation */}

        <nav className="vendor-nav">

          <p className="vendor-nav-title">
            VENDOR MENU
          </p>

          {menuItems.map((item) => (
            <button
              key={item.title}
              className={`vendor-nav-item ${
                activeItem === item.title
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleMenuClick(item.title)
              }
            >

              <span className="vendor-nav-icon">
                {item.icon}
              </span>

              <span className="vendor-nav-text">
                {item.title}
              </span>

              {item.title === "Orders" && (
                <span className="vendor-order-count">
                  8
                </span>
              )}

            </button>
          ))}


          {/* Settings */}

          <p className="vendor-nav-title vendor-settings-title">
            ACCOUNT
          </p>

          <button
            className={`vendor-nav-item ${
              activeItem === "Settings"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick("Settings")
            }
          >
            <span className="vendor-nav-icon">
              <FiSettings />
            </span>

            <span className="vendor-nav-text">
              Settings
            </span>
          </button>

        </nav>


        {/* ================= BOTTOM ================= */}

        <div className="vendor-sidebar-bottom">

          {/* Vendor Profile */}

          <div className="vendor-profile">

            <div className="vendor-avatar">
              <FiUser />
            </div>

            <div className="vendor-profile-info">

              <strong>
                Green Leaf Store
              </strong>

              <span>
                Verified Vendor
              </span>

            </div>

            <FiChevronDown className="vendor-profile-arrow" />

          </div>


          {/* Logout */}

          <button className="vendor-logout">

            <FiLogOut />

            <span>
              Logout
            </span>

          </button>

        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="vendor-main">

        {/* Topbar */}

        <header className="vendor-topbar">

          <button
            className="vendor-menu-btn"
            onClick={() =>
              setSidebarOpen(true)
            }
          >
            <FiMenu />
          </button>


          <div className="vendor-search">

            <FiSearch />

            <input
              type="text"
              placeholder="Search products, orders..."
            />

          </div>


          <div className="vendor-topbar-right">

            <button className="vendor-notification">

              <FiBell />

              <span>3</span>

            </button>


            <div className="vendor-top-user">

              <div className="vendor-top-avatar">
                <FiUser />
              </div>

              <div>
                <strong>
                  Green Leaf Store
                </strong>

                <span>
                  Vendor
                </span>
              </div>

            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}

        <section className="vendor-content">

          <div className="vendor-welcome">

            <div>

              <span>
                VENDOR DASHBOARD
              </span>

              <h1>
                Welcome back, Green Leaf!
              </h1>

              <p>
                Manage your products, orders and
                store performance from one place.
              </p>

            </div>

            <button className="add-product-btn">
              <FiPlus />
              Add Product
            </button>

          </div>


          {/* Stats */}

          <div className="vendor-stats">

            <div className="vendor-stat-card">

              <div className="vendor-stat-icon">
                <FiPackage />
              </div>

              <span>
                My Products
              </span>

              <strong>
                128
              </strong>

              <small>
                +8 this month
              </small>

            </div>


            <div className="vendor-stat-card">

              <div className="vendor-stat-icon">
                <FiShoppingBag />
              </div>

              <span>
                Total Orders
              </span>

              <strong>
                342
              </strong>

              <small>
                +12.5% this month
              </small>

            </div>


            <div className="vendor-stat-card">

              <div className="vendor-stat-icon">
                <FiBarChart2 />
              </div>

              <span>
                Total Sales
              </span>

              <strong>
                ₹84,520
              </strong>

              <small>
                +18.2% this month
              </small>

            </div>


            <div className="vendor-stat-card">

              <div className="vendor-stat-icon">
                <FiStar />
              </div>

              <span>
                Store Rating
              </span>

              <strong>
                4.8
              </strong>

              <small>
                From 245 reviews
              </small>

            </div>

          </div>

        </section>

      </main>


      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="vendor-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

    </div>
  );
};

export default VendorSidebar;