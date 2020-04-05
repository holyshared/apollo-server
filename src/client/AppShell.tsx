import React, { FunctionComponentElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { Main } from "../universal/components/Main";
import { client } from "../universal/graphql";

const globalScope = window as Window & typeof globalThis & { __APP_DATA: any };
const data = globalScope.__APP_DATA;

export const AppShell = (): FunctionComponentElement<{}> => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Main staticContext={{ data }} />
      </BrowserRouter>
    </ApolloProvider>
  );
};
