import React, { FunctionComponentElement } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { TopPage } from "../components/pages/TopPage";
import { APage } from "../components/pages/APage";
import { BPage } from "../components/pages/BPage";
import { UserPage } from "../components/pages/UserPage";
import { NotFoundPage } from "../components/pages/NotFoundPage";

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
        <Route path="/a" component={APage} />
        <Route path="/b" component={BPage} />
        <Route path="/users/:id" component={UserPage} />
        <Route exact path="/" component={TopPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
};
