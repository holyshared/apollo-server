import React, { FunctionComponentElement } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header";
import { NotFoundPage } from "../pages/NotFoundPage";

export const UserPage = (): FunctionComponentElement<{}> => {
  const params = useParams<{ id: string }>();

  if (Number(params.id) !== 1) {
    return <NotFoundPage />;
  }

  return (
    <React.Fragment>
      <Header>
        <title>User</title>
      </Header>
      <h1>User: {params.id}</h1>
    </React.Fragment>
  );
};
