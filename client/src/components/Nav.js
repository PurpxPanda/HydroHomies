import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="./subscribe" >Subscribe</Link></li>
                <li><Link to="./bundles" >Bundles</Link></li>
                <li className="dropdown" >
                    <Link to="./products" >Products</Link>
                    <div className="dropdown-content" >
                        <Link to="./flasks" >Flasks</Link>
                        <Link to="./flavor-packs" >Flavor Packs</Link>
                    </div>
                </li>
                {/* logo here */}
                <img src="" />
                <li><Link to="./home" >Home</Link></li>
                <li><Link to="./login" >Login</Link></li>
                {/* add conditional rendering for "X Items" text */}
                <li><Link to="./cart" >View Cart</Link></li>
            </ul>
        </nav>
    )
}