import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./schema";
import { resolvers } from "./resolver";
import { buildContext } from "./context";

export const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: buildContext,
});
