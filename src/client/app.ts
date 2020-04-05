import React from "react";
import ReactDOM from "react-dom";
import { AppShell } from "./AppShell";

const staticContext: { data?: any; error?: { message: string } } = (function () {
  const context = {};

  const globalScope = window as Window &
    typeof globalThis & { __APP_DATA: any; __APP_ERROR: { message?: string } };
  const data = globalScope.__APP_DATA;
  const error = globalScope.__APP_ERROR;

  delete globalScope.__APP_DATA;
  delete globalScope.__APP_ERROR;

  if (data) Object.assign(context, { data });
  if (error) Object.assign(context, { error });
  return context;
})();

const render = React.createFactory(AppShell);
const page = render({ staticContext });

ReactDOM.hydrate(page, document.getElementById("app"));
