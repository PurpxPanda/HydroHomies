import React, { useEffect } from 'react';
import CartItem from '../components/CartItem';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { CHECKOUT } from '../utils/mutations';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N6mkHFXTaRsxdE8rkITpBkJS7j32tZkbkgieNxGsLpkOdfobbXkx6loxjsZfPiCZH2JaHSuqpyUvYYhX0uKinto00v9UdqGpr');

export default function Cart() {
    const { loading, error, data: userData } = useQuery(QUERY_USER);
    const [getCheckout, { data: checkoutData }] = useMutation(CHECKOUT);
    const userCart = userData?.me?.cart || [];
    console.log(userCart)

    function calculateTotal() {
        let sum = 0;
        userCart.forEach(item => {
            sum += item.quantity * item.product.price;
        });
        return sum.toFixed(2);
    }

    function prepareCheckout() {
        // prepare checkout data here, this depends on how your QUERY_CHECKOUT is structured
        // typically you'll want to extract ids and quantities from cart items
        const productIds = userCart.map(item => item.product._id)

        // call the lazy query with checkout items
        getCheckout({ variables: { products: productIds } });
    }
    // ensures that the checkoutData object is available before redirecting to Stripe
    useEffect(() => {
        if (checkoutData) {
            console.log(checkoutData);
    
            const handleStripe = async () => {
                const stripe = await stripePromise;
                const session = checkoutData.checkout.session;
                await stripe.redirectToCheckout({ sessionId: session });
            };
    
            handleStripe();
        }
    }, [checkoutData]);

    async function handleCheckout() {
        prepareCheckout();
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
            {userCart.length ? (
                <div>
                    {userCart.map(item => (
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
