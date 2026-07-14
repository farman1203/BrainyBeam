import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='front'>
                <h1>CRUD </h1>
            </div>
            <div className="hero">
                <li>
                    <NavLink to="/">Add Product</NavLink>
                </li>
                <li>
                    <NavLink to="/manage_product">Manage Product</NavLink>
                </li>
            </div>
        </div>
    )
}

export default Header
