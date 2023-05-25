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
            <div className="Support">
                <h2>Supporting the Earth one bottle at a time</h2>
                <div className="product-list">
                    <ProductCard />
            </div>
        </div>
        </div>
    )
}


    



