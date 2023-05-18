const { AuthenticationError } = require('apollo-server-express');
const { User, Product } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        products: async () => {
            return Product.find();
        },

        productsInCart: async (parent, { ids }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You need to be logged in!');
            }
            const products = await Product.find({
                _id: { $in: ids }
            });
            return { products };
        },
    },

    Mutation: {
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!profile) {
                throw new AuthenticationError('No user with these credentials found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('No user with these credentials found!');
            }

            const token = signToken(user);
            return { token, user };
        },

        addProduct: async (parent, { name, price, imageURL, category}, context) => {
            if (!context.user || !context.user.admin) {
              throw new AuthenticationError('You must be an admin to do this');
            }
      
            await Product.create({ name, price, imageURL, category });
          },
      
          updateProduct: async (parent, { _id, name, price, imageURL,
          category }, context) => {
            if (!context.user || !context.user.admin) {
              throw new AuthenticationError('You must be an admin to do this');
            }
      
            await Product.findOneAndUpdate(
              _id,
              { name, price, imageURL, category },
              {
                new: true,
                runValidators: true
              }
            );
          },
      
          removeProduct: async (parent, { _id }, context) => {
            if (!context.user || !context.user.admin) {
              throw new AuthenticationError('You must be an admin to do this');
            }
      
            Product.findOneAndDelete({ _id });
          },
        },
};

module.exports = resolvers;