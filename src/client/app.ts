import React from "react";
import ReactDOM from "react-dom";
import { AppShell } from "./AppShell";

const render = React.createFactory(AppShell);
const page = render({ });

ReactDOM.hydrate(page, document.getElementById("app"));
