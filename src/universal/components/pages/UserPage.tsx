import React, { FunctionComponentElement } from "react";
import { Header } from "../Header";

export const UserPage = (): FunctionComponentElement<{}> => {
  return (
    <React.Fragment>
      <Header>
        <title>User</title>
      </Header>
      <h1>User: a</h1>
    </React.Fragment>
  );
};
