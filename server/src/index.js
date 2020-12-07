require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DB"));

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log("Server is running at port 4000"));
