import React from 'react';
import ReactDOM from "react-dom";
import { AppShell } from "./AppShell";

const render = React.createFactory(AppShell);
const page = render({});

ReactDOM.render(page, document.getElementById("app"));
