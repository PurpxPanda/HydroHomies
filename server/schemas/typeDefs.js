const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    admin: Boolean!
}

type Product {
    _id: ID
    name: String!
    price: Float!
    image: String!
    category: String!
}

type MultipleProducts {
    products: [Product]
}

type Auth {
    token: ID!
    profile: User
    }

type Query {
    me: User
    products: MultipleProducts
    productsInCart(ids: [ID]!): MultipleProducts
    }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addProduct(name: String!, price: Float!, image: String!, category: String!): Product
    updateProduct(_id: ID!, name: String!, price: Float!, image: String!, category: String!): Product
    removeProduct(_id: ID!): Product
}
`

module.exports = typeDefs