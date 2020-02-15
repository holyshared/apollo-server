import React, { ReactNode } from 'react';
import { Route } from "react-router-dom";

type Props = {
  code: number,
  children?: ReactNode
};

type StaticContext = {
  status: number,
};

export const Status = ({ code, children }: Props) => {
  const render = ({ staticContext }: { staticContext: StaticContext }) => {
    if (staticContext) {
      staticContext.status = code;
    }
    return children;
  };

  return (
    <Route render={render} />
  );
};