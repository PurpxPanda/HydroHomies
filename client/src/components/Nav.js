import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

export default function Nav() {
    return (
        <nav>
            <ul>
                {/* <li><Link to="/subscribe" >Subscribe</Link></li> */}
                <li><Link to="/bundles" >Bundles</Link></li>
                <li className="dropdown" >
                    <Link to="/products" >Products</Link>
                    <div className="dropdown-content" >
                        <Link to="/flasks" >Flasks</Link>
                        <Link to="/flavor-packs" >Flavor Packs</Link>
                    </div>
                </li>
                {/* logo here */}
                <img src="" />
                <li><Link to="/" >Home</Link></li>
                {!Auth.loggedIn() ? (
                <li><Link to="/login" >Login</Link></li>) : (
                <li> <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a></li>)
                }
                {/* add conditional rendering for "X Items" text */}
                <li><Link to="/cart" >View Cart</Link></li>
            </ul>
        </nav>
    )
}