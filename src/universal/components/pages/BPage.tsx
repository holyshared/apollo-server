import React, { FunctionComponentElement } from "react";
import { Header } from "../Header";

export const BPage = (): FunctionComponentElement<{}> => {
  return (
    <React.Fragment>
      <Header>
        <title>B</title>
      </Header>
      <h1>B</h1>
    </React.Fragment>
  );
};
