import React, { FunctionComponentElement } from "react";
import { Header } from "../Header";

interface UserPageProps {
  name: string;
}

export const UserPage = (props: UserPageProps): FunctionComponentElement<UserPageProps> => {
  return (
    <React.Fragment>
      <Header>
        <title>User</title>
      </Header>
      <h1>User: {props.name}</h1>
    </React.Fragment>
  );
};
