import React from 'react';
import CartItem from '../components/CartItem';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

export default function Cart() {
    const { loading, data } = useQuery(QUERY_USER);
    const userData = data?.me || {};

    function calculateTotal() {
        let sum = 0;
        userData.cart.forEach(item => {
            sum += item.quantity * item.product.price;
        });
        return sum.toFixed(2);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Your Cart</h1>
            <div>
                {userData.cart.map(item => (
                    <CartItem key={item._id} item={item} />
                ))}
            </div>
            <div>
                <h3>Total: ${calculateTotal()} </h3>
                <button>Checkout</button>
            </div>
        </div>

    )
}



