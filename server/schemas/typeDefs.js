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
    
    }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    addProduct(name: String!, price: Float!): Product
    updateProduct(_id: ID!, name: String!, price: Float!): Product
    removeProduct(_id: ID!): Product
}
`

module.exports = typeDefs