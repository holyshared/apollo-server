import React, { PropsWithChildren, FunctionComponentElement } from "react";

import { StaticRouter } from "react-router";
import { Main } from "./Main";

export type Props = {
  url: string;
  context: {};
};

export const App = (props: PropsWithChildren<Props>): FunctionComponentElement<Props> => {
  const { url, context } = props;
  return (
    <StaticRouter location={url} context={context}>
      <Main />
    </StaticRouter>
  );
};
