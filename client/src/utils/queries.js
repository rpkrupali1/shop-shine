import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
    _id
    name
    price
    description
    image
    quantity
    category {
      _id
      name
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      price
      description
      category {
        name
        _id
      }
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          price
          description
          image
        }
      }
    }
  }
`;



export const USER = gql `
query User {
  user {
    _id
    firstName
    lastName
    email
    orders {
      _id
    purchaseDate
    products {
      _id
      name
      price
      category {
        _id
        name
      }
      description
      image
      quantity
    }
  }
}
}
`;