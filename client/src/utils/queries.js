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
                    category {
                        _id
                        name
                    }
                }
            }
        }
    }
`;

export const QUERY_PRODUCTS = gql`
    query products($categoryName: String!) {
        products(categoryName: $categoryName) {
            _id
            name
            price
            image
            category {
                _id
                name
            }
        }
    }
`;