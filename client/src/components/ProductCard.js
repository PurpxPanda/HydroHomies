import React from 'react';

export default function ProductCard({ name, price, image }) {

    return (
        <div className="card">
            <img src={image} alt={name} />
            <div className="card-body">
                <h3>{name}</h3>
                <p>${price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
