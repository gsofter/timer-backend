import { ApolloServer, gql } from "apollo-server";
import{ schema } from "./schema/timeentry-schema";
import { resolvers } from "./resolvers/timeentry-resolver";

const server = new ApolloServer({ typeDefs: schema, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
