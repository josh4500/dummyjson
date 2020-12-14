const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
  }
  type Mutation {
    register(UserInfo: UserInfo!): User
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!!",
  },
  Mutation: {},
};

module.exports = { typeDefs, resolvers };
