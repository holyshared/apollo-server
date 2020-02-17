import React, { PropsWithChildren, FunctionComponentElement } from "react";
import { Helmet } from "react-helmet";

type Props = {};

export const Header = (props: PropsWithChildren<Props>): FunctionComponentElement<Props> => {
  const { children } = props;
  return (
    <Helmet titleTemplate="%s | app">
      <meta charSet="utf-8" />
      {children}
    </Helmet>
  );
};
