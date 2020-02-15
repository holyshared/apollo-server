import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../universal/components/Main";

export const AppShell = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};