import React from 'react';
import ProductCard from '../components/ProductCard';

import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';

function Products() {
    const { loading, data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    // need logic to account for admin changes to products in db

    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}