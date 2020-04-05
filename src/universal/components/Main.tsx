import React, { FunctionComponentElement } from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";

export const Main = (): FunctionComponentElement<{}> => {
  return (
    <React.Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/a">A</Link>
          </li>
          <li>
            <Link to="/b">B</Link>
          </li>
        </ul>
      </nav>
      {renderRoutes(routes)}
    </React.Fragment>
  );
};
