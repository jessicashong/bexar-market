const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
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
    category: Category
    products: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  type BusinessAuth {
    token: ID!
    business: Business
  }

  input ProductInput {
    name: String
    description: String
    image: String
    price: Float
    quantity: Int
  }

  input BusinessInput {
    _id: ID
    email: String
    businessName: String
    description: String
    image: String
    category: CategoryInput
    products: [ProductInput]
  }

  input CategoryInput {
    _id: ID
    name: String
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
    updateProduct(product: ProductInput): Product
    deleteProduct(_id: ID!): Product
    addBusiness(businessName: String!, email: String!, password: String!): BusinessAuth
    updateBusiness(business: BusinessInput): Business
    addFavorite(product: ProductInput): User
    deleteFavorite(_id: ID!): User
    login(email: String!, password: String!): Auth
    businessLogin(email: String!, password: String!): BusinessAuth
  }
`;

module.exports = typeDefs;
