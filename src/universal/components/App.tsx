import React, { PropsWithChildren, FunctionComponentElement } from "react";
import { StaticRouter } from "react-router";
import { Main } from "./Main";
import { client } from "../graphql";
import { ApolloProvider } from "@apollo/react-hooks";

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
