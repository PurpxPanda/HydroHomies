const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    cart: [CartItem!]!
}

type Product {
    _id: ID
    name: String!
    price: Float!
    image: String!
    category: Category!
}

type CartItem {
    product: Product!
    quantity: Int!
}

type Category {
    _id: ID
    name: String!
}

type Checkout {
    session: ID
}

type Auth {
    token: ID!
    profile: User
    }

type Query {
    me: User
    products(categoryName: String): [Product!]!
    checkout(products: [ID!]!): Checkout
    }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addProductToCart(productId: ID!, quantity: Int!): User
    updateProductInCart(productId: ID!, increment: Boolean!): User
    removeProductFromCart(productId: ID!): User
    checkout: ID!
    clearCart: User
}
`

module.exports = typeDefs