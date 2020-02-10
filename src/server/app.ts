import { Request, Response, NextFunction } from "express";
import express from 'express';
import { logger } from './logger';

const app = express();

app.set("trust proxy", 1);

app.use(
  express.static("public", {
    maxAge: Number(process.env.ASSETS_MAX_AGE),
  }),
);

app.use((err, req: Request, res: Response, _: NextFunction) => {
  if (err.status) {
    return res.status(err.status).send(err.message);
  }
  return res.status(500).send(err.message);
});

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