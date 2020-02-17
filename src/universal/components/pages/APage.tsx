import React, { FunctionComponentElement } from "react";
import { Header } from "../Header";

export const APage = (): FunctionComponentElement<{}> => {
  return (
    <React.Fragment>
      <Header>
        <title>A</title>
      </Header>
      <h1>A</h1>
    </React.Fragment>
  );
};
