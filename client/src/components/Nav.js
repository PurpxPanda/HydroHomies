import React from 'react';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>Subscribe</li>
                <li>Bundles</li>
                <li>Products</li>
                <img src="" />
                {/* needs conditional rendering for Admin user only */}
                <li>Admin</li>
                <li>Home</li>
                <li>Login</li>
                {/* add conditional rendering for "X Items" text */}
                <li>View Cart</li>
            </ul>
        </nav>
    )
}