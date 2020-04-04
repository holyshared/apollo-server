import React, { ReactNode, PropsWithChildren, FunctionComponentElement } from "react";
import { Route, RouteComponentProps } from "react-router-dom";

type Props = {
  code: number;
};

type RouteRenderer = RouteComponentProps<{}>;

export const Status = ({
  code,
  children,
}: PropsWithChildren<Props>): FunctionComponentElement<Props> => {
  const render = (props: RouteRenderer): ReactNode => {
    const { staticContext } = props;
    if (staticContext) {
      staticContext.statusCode = code;
    }
    return children;
  };

  return <Route render={render} />;
};
