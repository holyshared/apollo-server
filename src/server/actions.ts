import * as React from 'react';
import { Request, Response, NextFunction } from "express";
import { renderToNodeStream } from 'react-dom/server';
import { TopPage } from '../client/components/pages/TopPage';

const DOCTYPE = "<!DOCTYPE html>";

export const top = (req: Request, res: Response, _: NextFunction) => {
  const page = React.createFactory(TopPage);
  res.type("html");
  res.write(DOCTYPE);
  return renderToNodeStream(page()).pipe(res);
};
