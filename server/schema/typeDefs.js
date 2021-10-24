const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [String]!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        addBook(userId: ID!, book: String!): User
        removeUser(userId: ID!): User
        removeBook(userId: ID!, skill: String!): User
    }
`;

module.exports = typeDefs;
