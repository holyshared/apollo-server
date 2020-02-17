import React, { FunctionComponentElement } from "react";
import { Header } from "../Header";

export const TopPage = (): FunctionComponentElement<{}> => {
  return (
    <React.Fragment>
      <Header>
        <title>Top</title>
        <meta name="keywords" content="blog" />
      </Header>
      <h1>Top</h1>
    </React.Fragment>
  );
};
