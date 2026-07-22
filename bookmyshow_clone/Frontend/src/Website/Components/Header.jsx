import React from 'react'
import { Search } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Menu } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const Header = () => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("currentUser"));


    const logout = () => {

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        toast.success('Logout Successfully', { theme: 'colored' })
        navigate("/login");
    }

    return (
        <div>
            <header>
                <Link to="/"><img src="data:image/png;base64,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" alt="logo" /></Link>
                <div className='search'>
                    {/* <span><Search size={19} /></span> */}
                    <input type='text' className='set' placeholder='Search for Movies,Events,Plays,Sports and Activities' />
                    {/* <span style={{ marginLeft: '10px' }}>Search for Movies,Events,Plays,Sports and Activities</span> */}

                </div>
                <div className='p-3' style={{ margin: '25px' }}>
                    <p>Ahmedabad <ChevronDown size={16} /></p>
                </div>

                <div className="signb">
                    {isLoggedIn ? (
                        <>
                            <span>
                                {user?.name}
                            </span>
                            <button onClick={logout}>
                                Logout
                            </button>
                        </>

                    ) : (

                        <button onClick={() => navigate("/login")}>
                            Sign In
                        </button>
                    )}

                </div>
                <Menu style={{ marginLeft: '18px' }} size={24} />

            </header>

            <div className='ful'>
                <ul>
                    <li>
                        <NavLink to='/movie' >Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to='*'>Stream</NavLink>
                    </li>
                    <li>
                        <NavLink to="*">Plays</NavLink>
                    </li>
                    <li>
                        <NavLink to="*">Sports</NavLink>
                    </li>
                    <li>
                        <NavLink to="*">Activities</NavLink>
                    </li>

                    <div className='sul'>
                        <li>

                            <NavLink to="*">List your show</NavLink>
                        </li>
                        <li>
                            <NavLink to="*">Corporate</NavLink>
                        </li>
                        <li>
                            <NavLink to="*">Offers</NavLink>
                        </li>
                        <li>
                            <NavLink to="*">Gift cards</NavLink>
                        </li>

                    </div>
                </ul>
            </div>

        </div>
    )
}

export default Header

