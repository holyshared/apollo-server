import { GraphQLContext } from "../../context";
import { GraphQLResolveInfo } from "graphql";
import { MergeInfo } from "graphql-tools";

import { TopPage } from "../types";

type ParentField = {};

type GraphQLVariables = {};

export const getTopPage = async (
  _parent: ParentField,
  _args: GraphQLVariables,
  _context: GraphQLContext,
  _info: GraphQLResolveInfo & { mergeInfo: MergeInfo },
): Promise<TopPage> => {
  return {
    loginUser: {
      name: "guest",
      loggedIn: false,
    },
  };
};
