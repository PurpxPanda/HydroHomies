import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password){
        token
        profile {
            _id
            name
            email
            cart {
                quantity
                product {
                    _id
                    name
                    price
                    image
                    category{
                      _id
                      name
                    }
                }
            }
        }
    }
}
`;

export const ADD_USER = gql`
    mutation addUser($name: String!, $email: String!, $password: String!) {
        addUser(name: $name, email: $email, password: $password){
            token
            profile {
                _id
                name
                email
            }
        }
    }
`;

export const ADD_TO_CART = gql`
    mutation addProductToCart($productId: ID!, $quantity: Int!) {
        addProductToCart(productId: $productId, quantity: $quantity) {
            _id
            name
            email
            cart {
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

export const UPDATE_PRODUCT = gql`
    mutation updateProductInCart($productId: ID!, $increment: Boolean!) {
        updateProductInCart(productId: $productId, increment: $increment) {
            _id
            name
            email
            cart {
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

export const REMOVE_PRODUCT = gql`
    mutation removeProductFromCart($productId: ID!) {
        removeProductFromCart(productId: $productId) {
            _id
            name
            email
            cart {
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

export const CHECKOUT = gql`
  mutation Checkout {
    checkout
  }
`;

export const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart {
      _id
      name
      email
      cart {
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