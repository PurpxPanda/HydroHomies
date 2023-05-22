import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CLEAR_CART } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';

export default function Success() {

    const navigate = useNavigate();
    const [clearCart] = useMutation(CLEAR_CART, {
        // refetch query to update the cart
        refetchQueries: [{ query: QUERY_USER }],
        // wait for refetch to complete before resolving promise from mutation
        awaitRefetchQueries: true
    });

    // clear cart when stripe session is complete
    useEffect(() => {
        async function clear() {
            await clearCart();
        }
        clear();
    }, [clearCart])

    function handleClick() {
        navigate('/')
    }

    return (
        <div>
            <h1>Thank you for your purchase!</h1>
            <button onClick={handleClick} >Continue Shopping</button>
        </div>
    )
}