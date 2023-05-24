import React from 'react';
import ProductCard from '../components/ProductCard';

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';

export default function Bundles() {
    const { loading, error, data } = useQuery(QUERY_PRODUCTS, {
        variables: { categoryName: 'Bundles' }
    });
    const products = data?.products || [];
    console.log(products)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }



    return (
        <div>
            {products.map(product => (
                <ProductCard 
                key={product._id} 
                price={product.price}
                image={product.image}
                name={product.name}
                productId={product._id}
                />
            ))}
        </div>
    )
}