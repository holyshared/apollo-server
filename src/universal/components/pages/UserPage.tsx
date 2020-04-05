import React, { FunctionComponentElement } from "react";
import { Header } from "../Header";

export const UserPage = (props): FunctionComponentElement<{}> => {
  return (
    <React.Fragment>
      <Header>
        <title>User</title>
      </Header>
      <h1>User: {props.name}</h1>
    </React.Fragment>
  );
};
