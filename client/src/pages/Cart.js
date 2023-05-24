import React from 'react';
import CartItem from '../components/CartItem';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { CHECKOUT } from '../utils/mutations';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N6mkHFXTaRsxdE8rkITpBkJS7j32tZkbkgieNxGsLpkOdfobbXkx6loxjsZfPiCZH2JaHSuqpyUvYYhX0uKinto00v9UdqGpr');

export default function Cart() {
    const { loading, error, data } = useQuery(QUERY_USER);
    console.log(data)
    const [checkout] = useMutation(CHECKOUT);
    const userData = data?.me || {};

    function calculateTotal() {
        let sum = 0;
        userData.cart.forEach(item => {
            sum += item.quantity * item.product.price;
        });
        return sum.toFixed(2);
    }

    async function handleCheckout() {
        const stripe = await stripePromise;
        // create a new checkout session
        const { data } = await checkout();
        const session = data.checkout.session;
        // redirect to stripe checkout
        await stripe.redirectToCheckout({ sessionId: session });
      }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return (
        <div>
            <h1>Your Cart</h1>
            {userData.cart?.length ? (
                <div>
                    {userData.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <div>
                        <h3>Total: ${calculateTotal()} </h3>
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            ) : <h3>There are currently no items in your cart!</h3>}
        </div>
    )
}