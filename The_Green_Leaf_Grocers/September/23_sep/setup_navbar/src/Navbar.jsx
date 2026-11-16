
import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      alert("Please enter something to search!");
      return;
    }

    alert(`Searching for: ${search}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold text-success" href="/">
          Green Leaf
        </a>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

          {/* Search Bar */}
          <form
            className="navbar-search"
            onSubmit={handleSearch}
          >
            <FiSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <FiX />
              </button>
            )}

            <button type="submit" className="search-button">
              Search
            </button>
          </form>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/orders">
                Orders
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>

          </ul>

          {/* Login Button */}
          <div className="ms-lg-3 mt-3 mt-lg-0">
            <button className="btn btn-success">
              Login
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
