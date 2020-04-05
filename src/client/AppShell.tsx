import React, { FunctionComponentElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Main } from "../universal/components/Main";
import { client } from "../universal/graphql";

export const AppShell = ({
  staticContext,
}: {
  staticContext: { data?: any; error?: { message: string } };
}): FunctionComponentElement<{}> => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Main staticContext={staticContext} />
      </BrowserRouter>
    </ApolloProvider>
  );
};
