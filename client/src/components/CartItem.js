import React from 'react';

import { useMutation } from '@apollo/client';
import { UPDATE_PRODUCT, REMOVE_PRODUCT } from '../utils/mutations';
import { QUERY_USER } from '../utils/queries';

export default function CartItem({ item }) {
    const [updateProduct] = useMutation(UPDATE_PRODUCT);
    const [removeProduct] = useMutation(REMOVE_PRODUCT);

    function handleUpdate(increment) {
        updateProduct({
            // increment is passed in and the add/subtract buttons will be set to true/false
            variables: { productId: item.product._id, increment },
            // refetch the QUERY_USER query to update the cart
            refetchQueries: [{ query: QUERY_USER }]
        });
    }

    function handleRemove() {
        removeProduct({
            variables: { productId: item.product._id },
            refetchQueries: [{ query: QUERY_USER }]
        });
    }

    return (
        <div>
            <h3>{item.product.name}</h3>
            {item.quantity > 1 && (
                <button onClick={() => handleUpdate(false)}>
                    -
                </button>
            )}
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleUpdate(true)}>+</button>
            <p>Price: ${item.product.price}</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}