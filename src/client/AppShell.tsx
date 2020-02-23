import React, { FunctionComponentElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../universal/components/Main";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-fetch";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  credentials: "same-origin",
  fetch,
});

export const AppShell = (): FunctionComponentElement<{}> => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ApolloProvider>
  );
};
