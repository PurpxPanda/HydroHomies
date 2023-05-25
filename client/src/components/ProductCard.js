import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { ADD_TO_CART } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';

export default function ProductCard({ productId, price, image, name }) {
    const [loginError, setLoginError] = useState(false);
    const [addFeedback, setAddFeedback] = useState(false);
    const [addProduct] = useMutation(ADD_TO_CART);

    function handleAdd() {
        if (!Auth.loggedIn()) {
            // display alert for 1 second if user is not logged in
            setLoginError(true);
            setTimeout(() => setLoginError(false), 1000);

            return
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
                    {loginError && (
                        <div className="alert alert-warning shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>Please log in to add items to your cart</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}