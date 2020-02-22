import { gql } from "apollo-server-express";

import { typeDefs as def } from "./typedef";
import { query } from "./query";

export const typeDefs = gql`
  ${def}
  ${query}
`;
