import { getTopPage } from "./query";

type ParentField = {};

export const resolvers = {
  Page: {
    __resolveType(_parent: ParentField): null {
      return null;
    },
  },
  Query: {
    getTopPage,
  },
};
