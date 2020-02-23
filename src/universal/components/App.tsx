import React, { PropsWithChildren, FunctionComponentElement } from "react";
import fetch from "isomorphic-fetch";
import { StaticRouter } from "react-router";
import { Main } from "./Main";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  credentials: "same-origin",
  fetch,
});

export type Props = {
  url: string;
  context: {};
};

export const App = (props: PropsWithChildren<Props>): FunctionComponentElement<Props> => {
  const { url, context } = props;
  return (
    <ApolloProvider client={client}>
      <StaticRouter location={url} context={context}>
        <Main />
      </StaticRouter>
    </ApolloProvider>
  );
};
