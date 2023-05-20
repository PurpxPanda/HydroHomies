import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="./subscribe" >Subscribe</Link></li>
                <li><Link to="./bundles" >Bundles</Link></li>
                <li><Link to="./products" >Products</Link></li>
                {/* logo here */}
                <img src="" />
                {/* needs conditional rendering for Admin user only */}
                <li><Link to="./admin" >Admin</Link></li>
                <li><Link to="./home" >Home</Link></li>
                <li><Link to="./login" >Login</Link></li>
                {/* add conditional rendering for "X Items" text */}
                <li><Link to="./cart" >View Cart</Link></li>
            </ul>
        </nav>
    )
}