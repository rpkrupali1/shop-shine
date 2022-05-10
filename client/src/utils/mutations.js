import { gql } from '@apollo/client';

export const ADD_USER = gql `
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      user {
        _id,
        firstName,
        lastName,
        email
      },
      token
    }
  }
`;

export const LOGIN = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql` 
mutation UpdateUser {
    updateUser {
      email
    }
  }
`;

export const ADD_CONTACT = gql`
mutation Contact($name: String!, $email: String!, $message: String!) {
    contact(name: $name, email: $email, message: $message) {
      name
      email
      message
    }
  }
`;

export const ADD_ORDER = gql`
mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      products {
        _id
        name
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
mutation updateProduct($_id: ID!, $quantity: Int!) {
    updateProduct(_id: $_id, quantity: $quantity) {
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
  `;