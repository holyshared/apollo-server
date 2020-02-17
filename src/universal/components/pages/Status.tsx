import React, { ReactNode, PropsWithChildren, FunctionComponentElement } from "react";
import { Route } from "react-router-dom";

type Props = {
  code: number;
};

type StaticContext = {
  status: number;
};

export const Status = ({
  code,
  children,
}: PropsWithChildren<Props>): FunctionComponentElement<Props> => {
  const render = ({ staticContext }: { staticContext: StaticContext }): ReactNode => {
    if (staticContext) {
      staticContext.status = code;
    }
    return children;
  };

  return <Route render={render} />;
};
