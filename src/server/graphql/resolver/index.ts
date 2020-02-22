import { getTopPage } from "./query";

export const resolvers = {
  Page: {
    __resolveType(parent) {
      return null;
    }
  },
  Query: {
    getTopPage
  },
};
