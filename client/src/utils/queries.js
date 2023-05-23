import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        me {
            _id
            name
            email
            cart {
                _id
                quantity
                product {
                    _id
                    name
                    price
                    image
                    category
                }
            }
        }
    }
`;

export const QUERY_PRODUCTS = gql`
    query products($categoryId: ID!) {
        products(categoryId: $categoryId) {
        _id
        name
        price
        image
        category
            }
    }
`;