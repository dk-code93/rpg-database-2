const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String

    }

    type Auth {
        token: ID!
        user: User
    }

    type Stats {
        int: Number
        dex: Number
        str: Number
        cha: Number
        wis: Number
        con: Number
    }

    type Character {
        _id: ID!
        name: String!
        image: String
        description: String
        class: String!
        level: Number!
        base_hp: Number!
        stats: Stats!
    }

    type Query {
        user(userId: ID!): User
        users: [User]!
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createCharacter(name: String!, image: String, description: String, class: String!, level: Number): Character
    }
`;

module.exports = typeDefs;