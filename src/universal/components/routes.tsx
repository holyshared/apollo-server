import { TopPage } from "../components/pages/TopPage";
import { APage } from "../components/pages/APage";
import { BPage } from "../components/pages/BPage";
import { UserPage } from "../components/pages/UserPage";

import { RouteProps } from "react-router";

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
    component: UserPage,
    loadData: (match: any) => {
      if (Number(match.params.id) === 1) {
        return Promise.resolve({ name: "test user" });
      } else {
        return Promise.resolve(null);
      }
    },
  },
];
