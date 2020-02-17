import { Request, Response, NextFunction } from "express";
import express from "express";
import { logger } from "./logger";
import React from "react";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { App } from "../universal/components/App";

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

app.use((req: Request, res: Response, _: NextFunction) => {
  const context: { url?: string, status?: number } = {};
  const render = React.createFactory(App);

  const renderedComponent = render({ url: req.url, context });
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
    <article id="app">
      ${html}
    </article>
    <script type="text/javascript" src="/assets/js/bundle.js"></script>
    <script type="text/javascript" src="/assets/js/app.js"></script>
  </body>
</html>
`;

  if (context.url) {
    res.writeHead(302, { Location: context.url });
    res.end();
  } else {
    if (context.status) {
      res.statusCode = context.status;
    }
    res.write(result);
    res.end();
  }
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
