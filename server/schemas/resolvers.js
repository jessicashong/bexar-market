const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Business } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        products: async () => {
            return await Product.find();
        },
        product: async (parent, { productId }) =>
            Product.findById(productId).populate('category'),
        businesses: async () => {
            return await Business.find();
        },
        me: async (parent, args, context) => {
            if(context.user) {
                return User.findOne({ _id: context.user._id }).populate('favorites')
            }
            throw new AuthenticationError('You need to be logged in.');
        }
    },
    Mutation: {
        addUser: async (parent, { userName, email, password }) => {
            const user = await User.create({ userName, email, password });
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if(context.user) {
                return User.findByIdAndUpdate(context.user._id, args, {
                    new: true,
                });
            }
            throw new AuthenticationError('You need to be logged in.');
        },
        addProduct: ,
        updateProduct: async (parent, args, context) => {
            if(context.product){
                return Product.findByIdAndUpdate(context.product.productId, args, {
                    new: true,
                });
            }
        },
        deleteProduct: async (parent, args, context) => {
            if(context.product){
                return Product.findByIdAndDelete(context.product.productId, args, {
                    new: true,
                });
            }
        },
        addBusiness: ,
        updateBusiness: ,
        addFavorite: ,
        deleteFavorite: ,
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