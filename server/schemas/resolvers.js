const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Business } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        // products: async (parent, { category, name }) => {
        
        // },
        users: {

        },
        businesses: {

        },
        me: {
            
        }
    },
    Mutation: {
        addUser: async (parent, { userName, email, password }) => {

        },
        updateUser: async (parent, { userName, email, password }) => {

        },
        updateProduct: async (parent, { _id, quantity }) => {
            
        },
        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email });

            if(!user){
                throw new AuthenticationError('Incorrect username or password.');
            }

            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw){
                throw new AuthenticationError('Incorrect username or password.');
            }
            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;