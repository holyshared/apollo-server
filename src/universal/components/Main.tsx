import React, { FunctionComponentElement } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { RouteProps } from "react-router";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { routes } from "./routes";

interface LoadableRouteProps extends RouteProps {
  loadData?: (match: any) => Promise<any>;
}

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
      <Switch>
        {routes.map((route, i) => (
          <Route<LoadableRouteProps> key={i} {...route} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
};
