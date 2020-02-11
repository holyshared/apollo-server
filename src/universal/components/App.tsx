import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { TopPage } from '../components/pages/TopPage';
import { APage } from '../components/pages/APage';
import { BPage } from '../components/pages/BPage';

export const App = () => {
  return (
    <article>
      <nav>
        <ul>
          <li><Link to="/">Top</Link></li>
          <li><Link to="/a">A</Link></li>
          <li><Link to="/b">B</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/a"><APage /></Route>
        <Route path="/b"><BPage /></Route>
        <Route path="/"><TopPage /></Route>
      </Switch>
    </article>
  );
};
