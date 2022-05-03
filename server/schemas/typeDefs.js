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

}

type Mutation {
    
}
`;

module.exports = typeDefs;