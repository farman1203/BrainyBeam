import React from "react";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container">

                {/* Logo */}
                <a className="navbar-brand fw-bold text-success" href="#">
                    Green Leaf
                </a>

                {/* Mobile Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Products
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Orders
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>

                        <li className="nav-item ms-lg-3">
                            <button className="btn btn-success">
                                Login
                            </button>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;