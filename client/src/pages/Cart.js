import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { CHECKOUT } from '../utils/mutations';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N6mkHFXTaRsxdE8rkITpBkJS7j32tZkbkgieNxGsLpkOdfobbXkx6loxjsZfPiCZH2JaHSuqpyUvYYhX0uKinto00v9UdqGpr');

export default function Cart() {
    const { loading, error, data: userData } = useQuery(QUERY_USER);
    // useNavigate hook will redirect user to another route
    const navigate = useNavigate();
    // function to handle button clicks
    function handleClick() {
        navigate('/bundles')
    }

    const [getCheckout, { data: checkoutData }] = useMutation(CHECKOUT);
    const userCart = userData?.me?.cart || [];

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
            <div className="flex justify-center" >
                <h1 className="text-4xl" >Your Cart</h1>
            </div>
            <div className="fixed top-0 right-0 mr-4 mt-14 z-10" >
                <div className="card bg-base-100 w-64">
                    <div className="card-body">
                        <h3 className="text-center text-xl">Total: ${calculateTotal()}</h3>
                        <button
                            onClick={handleCheckout}
                            className="btn btn-primary mt-4"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8" >
                {userCart.length ? (
                    <div>
                        {userCart.map(item => (
                            <CartItem key={item.product._id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div>
                        <h3 className="text-center text-2xl mb-4">Uh-oh, bro! Your cart is as empty as an ocean with no waves!</h3>
                        <p className="text-center text-lg mb-4">Be a homie and start sipping sustainably to inspire change.</p>
                        <div className="flex justify-center mb-4">
                            <button
                                className="btn btn-primary"
                                onClick={handleClick}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
