const { gql } = require ('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: id
    name: String
}

type Product {
    _id: id
    title: String
    price: Int
    category: Category
    description: String
    image: String
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

type Checkout {
    session: ID
}

type Auth {
    toke: ID
    user: User
}

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Order
    checkout(products: [ID]!): Checkout
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;