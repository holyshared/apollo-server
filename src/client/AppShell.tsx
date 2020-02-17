import React, { FunctionComponentElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { Main } from "../universal/components/Main";

export const AppShell = (): FunctionComponentElement<{}> => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};
