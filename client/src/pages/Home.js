import React from 'react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    // useNavigate hook will redirect user to another route
    const navigate = useNavigate();
    // function to handle button clicks
    function handleClick(path) {
        navigate(path)
    }

    return (
        <div>
            <div className="hero">
                <h1>Tagline here</h1>
                <button 
                onClick={() => handleClick('./subscribe')}
                className="btn-warning"
                >
                    Get Started</button>
                <button 
                className="btn-warning"
                onClick={() => handleClick('./bundles')}
                >
                    Shop Bundles</button>
            </div>
            <div className="best-sellers">
                <h2>Best Sellers</h2>
                <div className="product-list">
                    <ProductCard />
                </div>
                <button data-set-theme="" data-act-class="ACTIVECLASS"></button>
<button data-set-theme="dark" data-act-class="ACTIVECLASS"></button>
<button data-set-theme="pink" data-act-class="ACTIVECLASS"></button>
            </div>
        </div>      
    )
}

