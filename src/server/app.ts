import { Request, Response, NextFunction } from "express";
import express from 'express';
import { logger } from './logger';
import * as actions from './actions';

const app = express();

app.set("trust proxy", 1);

app.use(
  express.static("public", {
    maxAge: Number(process.env.ASSETS_MAX_AGE),
  }),
);

app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

app.use((err, req: Request, res: Response, _: NextFunction) => {
  if (err.status) {
    return res.status(err.status).send(err.message);
  }
  return res.status(500).send(err.message);
});

app.get('/', actions.top);
app.get('/a', actions.a);
app.get('/b', actions.b);

const server = app.listen(process.env.PORT || 3000);

const processExit = () => {
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
