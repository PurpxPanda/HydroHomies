const { AuthenticationError } = require('apollo-server-express');
const { User, Product } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51N6mkHFXTaRsxdE8yCemQKA900zn66VbBiyq8V57t2dzgwuJIYKb0fD1PVHzUWP6oIUcWhXRVLtmzBMRdQvWacCg00ZpX0BTbZ')

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

    // This code is most likely not needed because the me query has cart

    //   cart: async (parent, { ids }, context) => {
    //     if (!context.user) {
    //       throw new AuthenticationError('You need to be logged in!');
    //     }

    //     const user = await User.findById(context.user._id);
    //     const cartItems = user.cart.filter(
    //       cartItem => ids.includes(cartItem.product.toString())
    //       );

    //     if (!cartItems) {
    //       throw new Error('No products found in cart');
    //     }

    //     return cartItems;
    //   },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with these credentials found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('No user with these credentials found!');
      }

      const token = signToken(user);
      return { token, user };
    },

    addProductToCart: async (parent, { productId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const cartProduct = await Product.findById(productId);

      if (!cartProduct) {
        throw new Error('No product with this id found');
      }

      const user = await User.findByIdAndUpdate(
        context.user._id,
        { $push: { cart: { product: cartProduct, quantity: 1 } } },
        { new: true, runValidators: true }
      );

      return user;
    },

    updateProductInCart: async (parent, { productId, increment }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const user = await User.findOne(
        { _id: context.user._id, 'cart.product': productId }
      );

      if (!user) {
        throw new Error('User not found');
      }

      let productInCart = user.cart.find(item => item.product.equals(productId));

      if (!productInCart) {
        throw new Error('Product not in cart');
      }

      // Calculate new quantity based on whether the increment argument is true or false
      let newQuantity = increment ? productInCart.quantity + 1 : productInCart.quantity - 1;

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id, 'cart.product': productId },
        { $set: { 'cart.$.quantity': newQuantity } },
        { new: true }
      );

      return updatedUser;
    },


    removeProductFromCart: async (parent, { productId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { cart: { product: productId } } },
        { new: true }
      );

      return user;
    },

    checkout: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const user = await User.findOne({ _id: context.user._id });
      const url = new URL(context.headers.referer).origin;

      // convert cart items to stripe format
      const line_items = user.cart.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.product.name,
            // convert the price to cents for stripe format
            unit_amount: item.product.price * 100,
          },
        },
        quantity: item.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return session.id;
    },

    clearCart: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const user = await User.findByIdAndUpdate(
        context.user._id,
        { $set: { cart: [] } },
        { new: true }
      );

      return user;
    },

  },
};

module.exports = resolvers;