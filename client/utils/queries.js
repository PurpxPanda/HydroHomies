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
                }
            }
        }
    }
`;

export const QUERY_PRODUCTS = gql`
    {
        products {
            _id
            name
            price
            image
        }
    }
`;