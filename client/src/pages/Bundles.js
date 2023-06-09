import React from 'react';
import ProductCard from '../components/ProductCard';

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';

export default function Bundles() {
    const { loading, error, data } = useQuery(QUERY_PRODUCTS, {
        variables: { categoryName: 'Bundles' }
    });
    const products = data?.products || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return (
        <div>
            <div className="flex justify-center" >
                <h1 className="text-4xl" >Bundles</h1>
            </div>
            <div className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
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
        </div>
    )
}