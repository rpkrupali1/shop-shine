const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    name: String
}

type Product {
    _id: ID
    name: String
    price: Float
    category: Category
    description: String
    image: String
    quantity: Int
}

type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
}

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
}

type Contact {
    _id: ID
    name: String
    email: String
    message: String
}

type Checkout {
    session: ID
}

type Auth {
    token: ID
    user: User
}

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Order
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    updateProduct(_id: ID!, quantity: Int!): Product
    contact(name: String!, email: String!, message: String!): Contact
}
`;

module.exports = typeDefs;