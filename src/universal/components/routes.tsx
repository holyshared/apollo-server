import * as React from 'react';
import { TopPage } from "./pages/TopPage";
import { APage } from "./pages/APage";
import { BPage } from "./pages/BPage";
import { UserPage } from "./pages/UserPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RouteProps, RouteComponentProps, StaticContext } from "react-router";

interface LoadableRouteProps extends RouteProps {
  loadData?: (match: any) => Promise<any>;
}

export const routes: LoadableRouteProps[] = [
  {
    path: "/",
    component: TopPage,
    exact: true,
  },
  {
    path: "/a",
    component: APage,
  },
  {
    path: "/b",
    component: BPage,
  },
  {
    path: "/users/:id",
    loadData: (match: any) => {
      if (Number(match.params.id) === 1) {
        return Promise.resolve({ name: "test user" });
      } else {
        return Promise.resolve(null);
      }
    },
    render: (props: RouteComponentProps<{ id: string }, { data?: { name: string } } & StaticContext, {}>) => {
      const { staticContext } = props;
      const data = staticContext.data ? staticContext.data : null;
      if (!data) {
        return <NotFoundPage />;
      }
      return <UserPage {...data} />;
    } 
  },
  {
    component: NotFoundPage
  }
];
