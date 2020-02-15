import React from 'react';
import { Status } from "./Status";
import { Header } from "../Header";

export const NotFoundPage = () => {
  return (
    <Status code={404}>
      <Header>
        <title>not found</title>
      </Header>
      <h1>Not found</h1>
    </Status>
  );
};
