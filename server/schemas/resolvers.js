const { AuthenticationError } = require('apollo-server-express');
const { Character, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
          return User.find().populate('characters').populate('favorites');
        },
        user: async (_parent, { userId }) => {
          return User.findOne({ _id: userId });
        },
    },
    Mutation: {
        addUser: async (_parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
      
            return { token, user };
        },
        login: async (_parent, { email, password }) => {

            const user = await User.findOne({ email: email });
      
            if (!user) {
              throw new AuthenticationError('No user with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
        },
        createCharacter: async (_parent, info, third) => {
          console.log('info:', info)
          console.log('third', third)
        }
    },
};

module.exports = resolvers;