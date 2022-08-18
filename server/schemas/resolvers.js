const { Character, User } = require('../models');

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
    },
};

module.exports = resolvers;