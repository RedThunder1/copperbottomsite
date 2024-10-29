import React from 'react';
import './Navbar.css';
// @ts-ignore
import Logo from '../../Graphics/Copperbottom_Logo.png'
import { Link  } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo" />
            <ul className="navbar_list">
                <li className="nav_item">
                    <Link className="nav_button" to="/">Home</Link>
                </li>
                <li className="nav_item">
                    <Link className="nav_button" to={"/about"}>About</Link>
                </li>
                <li className="nav_item">
                    <Link className="nav_button" to="/posts">Posts</Link>
                </li>
                <li className="nav_item">
                    <Link className="nav_button" to="/support">Support</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;