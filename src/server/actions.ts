import * as React from 'react';
import { Request, Response, NextFunction } from "express";
import { renderToNodeStream } from 'react-dom/server';
import { TopPage } from '../universal/components/pages/TopPage';
import { APage } from '../universal/components/pages/APage';
import { BPage } from '../universal/components/pages/BPage';

const DOCTYPE = "<!DOCTYPE html>";

export const top = (req: Request, res: Response, _: NextFunction) => {
  const page = React.createFactory(TopPage);
  res.type("html");
  res.write(DOCTYPE);
  return renderToNodeStream(page()).pipe(res);
};

export const a = (req: Request, res: Response, _: NextFunction) => {
  const page = React.createFactory(APage);
  res.type("html");
  res.write(DOCTYPE);
  return renderToNodeStream(page()).pipe(res);
};

export const b = (req: Request, res: Response, _: NextFunction) => {
  const page = React.createFactory(BPage);
  res.type("html");
  res.write(DOCTYPE);
  return renderToNodeStream(page()).pipe(res);
};
