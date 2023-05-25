import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { ADD_TO_CART } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';

export default function ProductCard({ productId, price, image, name }) {
    const [addFeedback, setAddFeedback] = useState(false);
    const [addProduct] = useMutation(ADD_TO_CART);

    function handleAdd() {
        if (!Auth.loggedIn()) {
            return alert('You must be logged in to add items to your cart.');
        }
        addProduct({
            variables: {
                productId,
                quantity: 1
            },
            refetchQueries: [{ query: QUERY_USER }],
        });
        // setAddFeedback to true to display "Added!" on the button
        setAddFeedback(true);
        // setAddFeedback back to false after 1 second
        setTimeout(() => setAddFeedback(false), 1000);
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img 
                src={`/images/${image}`} 
                alt={name}
                className=" w-full h-64" 
                />
                </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-lg" >${price}</p>
                <div className="card-actions justify-end">
                    <button
                        className={`btn ${addFeedback ? "btn-success" : "btn-primary"}`}
                        onClick={handleAdd}
                    >
                        {addFeedback ? "Added!" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}

        // <div className="card">
        //     <img src={`/images/${image}`} alt={name} />
        //     <div className="card-body">
        //         <h3>{name}</h3>
        //         <p>${price}</p>
        //         <button onClick={handleAdd}>Add to Cart</button>
        //     </div>
        // </div>