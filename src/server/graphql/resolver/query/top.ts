import { GraphQLContext } from "../../context";
import { GraphQLResolveInfo } from "graphql";
import { MergeInfo } from "graphql-tools";

type ParentField = {};

type GraphQLVariables = {};

type GraphQLResponse = {
  loginUser?: {
    name: string;
    loggedIn: boolean;
  };
};

export const getTopPage = async (
  _parent: ParentField,
  _args: GraphQLVariables,
  _context: GraphQLContext,
  _info: GraphQLResolveInfo & { mergeInfo: MergeInfo },
): Promise<GraphQLResponse> => {
  return {
    loginUser: {
      name: "guest",
      loggedIn: false,
    },
  };
};
