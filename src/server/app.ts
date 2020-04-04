import React from "react";
import { Request, Response, NextFunction } from "express";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import express from "express";
import { logger } from "./logger";
import { graphqlServer } from "./graphql";
import { App } from "../universal/components/App";
import { matchPath } from "react-router-dom";
import { routes } from "../universal/components/routes";

const app = express();

app.set("trust proxy", 1);

app.use(
  express.static("public", {
    maxAge: Number(process.env.ASSETS_MAX_AGE),
  }),
);

app.use((req: Request, _res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

graphqlServer.applyMiddleware({ app });

app.use((req: Request, res: Response, _: NextFunction) => {
  const promises = [];
  const context: { url?: string; statusCode?: number } = {};

  routes.some((route) => {
    const match = matchPath(req.path, route);
    if (match && route.loadData) {
      promises.push(route.loadData(match));
    }
    return match;
  });

  Promise.all(promises).then((data) => {
    const render = React.createFactory(App);

    const loadedData = data ? data[0]: null;
    const renderedComponent = render({ url: req.url, context: { ...context, data: loadedData } });
    const html = renderToString(renderedComponent);
    const helmet = Helmet.renderStatic();

    const result = `
  <!doctype html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <article id="app">${html}</article>
      <script type="text/javascript">
        window.__APP_DATA = ${JSON.stringify(loadedData)};
      </script>
      <script type="text/javascript" src="/assets/js/bundle.js"></script>
      <script type="text/javascript" src="/assets/js/app.js"></script>
    </body>
  </html>
  `;

    if (context.url) {
      res.writeHead(302, { Location: context.url });
      res.end();
    } else {
      if (context.statusCode) {
        res.statusCode = context.statusCode;
      }
      res.write(result);
      res.end();
    }
  });
});

app.use((err, req: Request, res: Response, _: NextFunction) => {
  if (err.status) {
    return res.status(err.status).send(err.message);
  }
  return res.status(500).send(err.message);
});

/*
app.get('/', actions.top);
app.get('/a', actions.a);
app.get('/b', actions.b);
*/

const server = app.listen(process.env.PORT || 3000);

const processExit = (): void => {
  logger.info("worker %d start shutdown", process.pid);

  if (!server) {
    return;
  }

  server.close(() => {
    logger.info("worker %d shutdown is complete", process.pid);
    process.exit();
  });
};

process.on("SIGINT", processExit);
process.on("SIGTERM", processExit);
