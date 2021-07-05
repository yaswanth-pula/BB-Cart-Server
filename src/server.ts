import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs, resolvers } from "./schema";
import dataSources from "./datasources";
import { connectToDB } from "./utils/db";
import Authenticate from "./auth";

connectToDB();

const app = express();
const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({ req }) => ({
    user: Authenticate(req),
  }),
});

server.applyMiddleware({ app, path: "/graphql" });

const port = process.env.PORT || 5000;
app.listen({ port }, () => {
  console.log(
    `Graphql Server Started on http://localhost:5000${server.graphqlPath}`
  );
});
