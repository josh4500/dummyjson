const { gql } = require("apollo-server-express");

let post = [
  { post_id: 1, post: "All is well" },
  { post_id: 2, post: "All is well" },
  { post_id: 3, post: "All is well" },
];

const typeDefs = gql`
  type Query {
    hello: String!
  }
  type User {
    id: ID!
    username: String!
  }
  input UserInfo {
    username: String!
    password: String!
  }
  type Mutation {
    register(UserInfo: UserInfo!): User
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!!",
  },
  Mutation: {
    register: () => ({
      id: 12345,
      username: "Davinci",
    }),
  },
};

module.exports = { typeDefs, resolvers };
