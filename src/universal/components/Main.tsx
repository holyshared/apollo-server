import React, { FunctionComponentElement } from "react";
import { Link } from "react-router-dom";
import { StaticContext } from "react-router";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";

interface MainProps {
  staticContext?: StaticContext & { data?: any; error?: { message: string } };
}

export const Main = (props: MainProps): FunctionComponentElement<MainProps> => {
  const extraProps = props.staticContext ? { staticContext: props.staticContext } : {};
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
      {renderRoutes(routes, extraProps)}
    </React.Fragment>
  );
};
