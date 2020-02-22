export type GraphQLContext = {};

export type GraphQLContextArgs = {
  req: Request;
  res: Response;
};

export const buildContext = async (_args: GraphQLContextArgs): Promise<GraphQLContext> => {
  return {};
};
