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
        <div className="flex items-center my-8 ml-8">
            <img 
            src={`/images/${item.product.image}`} 
            alt={item.product.name} 
            className="w-24 h-24" 
            />
            <div className="ml-4">
                <h2 className="text-xl">{item.product.name}</h2>
                    <p className="mt-2">Price: ${item.product.price}</p>
                <div className="flex items-center mt-2" >
                    {item.quantity > 1 && (
                        <button
                            onClick={() => handleUpdate(false)}
                            className="text-xl btn btn-circle btn-sm"
                        >
                            -
                        </button>
                    )}
                    <p className="mx-2" >Qty: {item.quantity}</p>
                    <button
                        onClick={() => handleUpdate(true)}
                        className="text-xl btn btn-circle btn-sm"
                    >
                        +
                    </button>
                </div>
                <div className="card-actions mt-4">
                    <button
                        className="btn btn-primary"
                        onClick={handleRemove}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

//  <div>
//     <h3>{item.product.name}</h3>
//     {item.quantity > 1 && (
//         <button 
//         onClick={() => handleUpdate(false)}
//         className="btn btn-circle"
//         >
//             -
//         </button>
//     )}
//     <p>Quantity: {item.quantity}</p>
//     <button 
//     onClick={() => handleUpdate(true)}
//     className="btn btn-circle"
//     >
//         +
//         </button>
//     <p>Price: ${item.product.price}</p>
//     <button onClick={handleRemove}>Remove</button>
// </div> 

{/* <button className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
<button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button> */}