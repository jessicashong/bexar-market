const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    productId: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
    business: Business
  }

  type User {
    _id: ID
    userName: String
    email: String
    vendor: Boolean
  }

  type Business {
    _id: ID
    name: String
    description: String
    image: String
    category: [Category]
    products: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  input ProductInput {
    name: String
    productId: ID!
    description: String
    image: String
    price: Float
    quantity: Int
    business: Business
  }

  input BusinessInput {
    name: String
    description: String
    image: String
    category: [Category]
    products: [Product]
  }

  type Query {
    categories: [Category]
    products: [Product]
    product(_id: ID!): Product
    businesses: [Business]
    me: User
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    addProduct(product: ProductInput): Business
    updateProduct(productId: ID!, quantity: Int!): Business
    deleteproduct(productId: ID!): Business
    addBusiness(business: BusinessInput): Business
    updateBusiness(_id: ID!, business: BusinessInput): Business
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
