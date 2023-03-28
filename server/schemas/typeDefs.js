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
    favorites: [Product]
  }

  type Business {
    _id: ID
    email: String
    businessName: String
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
    business: BusinessInput
  }

  input BusinessInput {
    _id: ID!
    email: String
    businessName: String
    description: String
    image: String
    category: CategoryInput
    products: [ProductInput]
  }

  input CategoryInput {
    name: String
  }


  type Query {
    categories: [Category]
    products: [Product]
    product(productId: ID!): Product
    businesses: [Business]
    me: User
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    updateUser(userName: String, email: String, password: String): User
    addProduct(product: ProductInput): Product
    updateProduct(product: ProductInput): Product
    deleteProduct(productId: ID!): Product
    addBusiness(business: BusinessInput): Auth
    updateBusiness(business: BusinessInput): Business
    addFavorite(product: ProductInput): User
    deleteFavorite(productId: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
