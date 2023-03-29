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
    addProduct: async (parent, { product }, context) => {
      console.log(context);
      if (context.business) {
        const product = await Product.create({ product });
        return { product };
      }
      throw new AuthenticationError('You must be logged in as a business.')
    } ,
    updateProduct: async (parent, args, context) => {
      if(context.product){
        return Product.findByIdAndUpdate(context.product.productId, args, {
          new: true,
        });
      }
      throw new AuthenticationError('You must be logged in as a business.')
    },
    deleteProduct: async (parent, args, context) => {
      if(context.product){
        return Product.findByIdAndDelete(context.product.productId, args, {
          new: true,
        });
      }
      throw new AuthenticationError('You must be logged in as a business.')
    },
    addBusiness: async (parent, args, context) => {
      const business = await Business.create(args);
      const token = signToken(business);
      return { token, business };
    },
    updateBusiness: async (parent, args, context) => {
      if (context.business) {
        return await Business.findByIdAndUpdate(context.business._id, args, { new: true });
      }
      throw new AuthenticationError('You must be logged in as a business.');
    },
    addFavorite: async (parent, { product }, context) => {
      console.log(context);
      if (context.user){
        const favorites = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { favorites: product } },
          { new: true }
        );
        return favorites;
      }
      throw new AuthenticationError('You must be logged in.');
    },
    deleteFavorite: async (parent, { productId }, context) => {
      if (context.user) {
        const favorites = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { favorites: { productId: productId } } },
          { new: true }
        );
        return favorites;
      }
      throw new AuthenticationError('You must be logged in.');
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