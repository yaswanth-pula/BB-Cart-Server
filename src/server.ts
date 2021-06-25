import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import dataSources from "./datasources";
import { connectToDB } from "./utils/db";

connectToDB();

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

const port = process.env.PORT || 5000;
server.listen(port).then(({ url }) => {
  console.log(`Graphql Server Running at ${url}`);
});
