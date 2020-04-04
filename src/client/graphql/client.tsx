import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginUser = {
  __typename?: "LoginUser";
  name?: Maybe<Scalars["String"]>;
  loggedIn?: Maybe<Scalars["Boolean"]>;
};

export type Page = {
  loginUser?: Maybe<LoginUser>;
};

export type Query = {
  __typename?: "Query";
  getTopPage?: Maybe<TopPage>;
};

export type TopPage = Page & {
  __typename?: "TopPage";
  loginUser?: Maybe<LoginUser>;
};

export type GetTopPageQueryVariables = {};

export type GetTopPageQuery = { __typename?: "Query" } & {
  page: Maybe<
    { __typename?: "TopPage" } & {
      loginUser: Maybe<{ __typename?: "LoginUser" } & Pick<LoginUser, "name" | "loggedIn">>;
    }
  >;
};

export const GetTopPageDocument = gql`
  query getTopPage {
    page: getTopPage {
      loginUser {
        name
        loggedIn
      }
    }
  }
`;

/**
 * __useGetTopPageQuery__
 *
 * To run a query within a React component, call `useGetTopPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTopPageQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetTopPageQuery, GetTopPageQueryVariables>,
) {
  return ApolloReactHooks.useQuery<GetTopPageQuery, GetTopPageQueryVariables>(
    GetTopPageDocument,
    baseOptions,
  );
}
export function useGetTopPageLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTopPageQuery, GetTopPageQueryVariables>,
) {
  return ApolloReactHooks.useLazyQuery<GetTopPageQuery, GetTopPageQueryVariables>(
    GetTopPageDocument,
    baseOptions,
  );
}
export type GetTopPageQueryHookResult = ReturnType<typeof useGetTopPageQuery>;
export type GetTopPageLazyQueryHookResult = ReturnType<typeof useGetTopPageLazyQuery>;
export type GetTopPageQueryResult = ApolloReactCommon.QueryResult<
  GetTopPageQuery,
  GetTopPageQueryVariables
>;
