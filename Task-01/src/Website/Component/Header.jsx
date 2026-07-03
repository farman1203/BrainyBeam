import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <section className="header_area ">
                <div className="header_navbar bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar  navbar-expand-lg">
                                    <Link className="navbar-brand" to="/">
                                        <h1 >Traveland</h1>
                                    </Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon" />
                                        <span className="toggler-icon" />
                                        <span className="toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ml-auto text-secondary">
                                            <li className="nav-item ">
                                                <NavLink className="page-scroll" to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="page-scroll" to="/about">About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="page-scroll" to="/packges">Packges</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="page-scroll" to="/services">Services</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="page-scroll" to="/gallery">Gallery</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="page-scroll" to="/blog">Blog</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="page-scroll" to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
