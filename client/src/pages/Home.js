import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
    return (
        <div>
            <div className="hero">
                <h1>Tagline here</h1>
                <button>Get Started</button>
                <button>Shop Bundles</button>
            </div>
            <div className="best-sellers">
                <h2>Best Sellers</h2>
                <div className="product-list">
                    <ProductCard />
                </div>
            </div>
        </div>      
    )
}

