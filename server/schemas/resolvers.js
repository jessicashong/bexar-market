const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Business, Favorites } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async () => {
      return await Product.find();
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
    businesses: async () => {
      return await Business.find().populate('category').populate('products');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('favorites');
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
    addProduct: async (parent, { productName, description, image, price, quantity }, context) => {
      if (context.user) {
        const product = await Product.create({ productName: productName,
          description: description,
          image: image,
          price: price,
          quantity: quantity })
        const addProduct = await Business.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { products: product } },
          { new: true }
        );
        return addProduct;
      }
      throw new AuthenticationError('You must be logged in as a business.');
    },
    updateProduct: async (parent, { productId, productName, description, image, price, quantity }, context) => {
      if (context.product) {
        const product = await Product.findOneAndUpdate(productId, {
          productName,
          description,
          image,
          price,
          quantity
        },
        {
          new: true,
          runValidators: true,
        }
        );
        await Business.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { products: product } },
          { new: true, runValidators: true }
        );
        return product;
      }
      throw new AuthenticationError('You must be logged in as a business.');
    },
    deleteProduct: async (parent, { productId }, context) => {
      if (context.user) {
        console.log('1st user', context.user);
        console.log('1st prod', productId);
        const product = await Product.findOneAndDelete({
          _id: productId
        });
        console.log('2nd user', context.user._id);
        console.log('2nd prod', product);
        await Business.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { products: product._id } },
          { new: true, runValidators: true }
        );
        return product;
      }
      throw new AuthenticationError('You must be logged in as a business.');
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
    addFavorite: async (parent, { productId }, context) => {
      console.log(context.user._id);
      if (context.user) {
        const product = Product.findById(productId);
        const favorites = await User.findOneAndUpdate(context.user._id,
          { $addToSet: { favorites: product } },
          { new: true, runValidators: true }
        );
        console.log('favorites:', favorites);
        return favorites;
      }
      throw new AuthenticationError('You must be logged in.');
    },
    deleteFavorite: async (parent, { _id }, context) => {
      if (context.user) {
        const favorites = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { favorites: { _id: _id } } },
          { new: true }
        );
        return favorites;
      }
      throw new AuthenticationError('You must be logged in.');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log('LOGIN:', user);
      if (!user) {
        throw new AuthenticationError('Incorrect email or password.');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password.');
      }
      const token = signToken(user);
      return { token, user };
    },
    businessLogin: async (parent, { email, password }) => {
      const business = await Business.findOne({ email });

      if (!business) {
        console.log(business);
        throw new AuthenticationError('Incorrect business email or password.');
      }

      const correctPw = await business.isCorrectPassword(password);
      if (!correctPw) {
        console.log(correctPw);
        throw new AuthenticationError('Incorrect business email or password.');
      }
      const token = signToken(business);
      return { token, business };
    }
  }
};

module.exports = resolvers;
