import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CLEAR_CART } from '../utils/mutations';

export default function Success() {

    const [clearCart] = useMutation(CLEAR_CART);
    const navigate = useNavigate();
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