import React, { FunctionComponentElement } from "react";
import { Header } from "../Header";

export const UserPage = (props): FunctionComponentElement<{}> => {
  const { staticContext } = props;

  let data = { name: 'oops!!' };
  if (staticContext) {
    data = staticContext.data;
  } else {
    const a = window as Window & typeof globalThis & { __APP_DATA: { name: string } };
    data = a.__APP_DATA;
  }

  return (
    <React.Fragment>
      <Header>
        <title>User</title>
      </Header>
      <h1>User: {data.name}</h1>
    </React.Fragment>
  );
};
