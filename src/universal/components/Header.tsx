import React, { ReactNode } from 'react';
import { Helmet } from "react-helmet";

type Props = {
  children?: ReactNode
};

export const Header = (props: Props) => {
  const { children } = props;
  return (
    <Helmet titleTemplate="%s | app">
      <meta charSet="utf-8" />
      {children}
    </Helmet>
  );
};
