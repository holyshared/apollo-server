import React from 'react';
import { StaticRouter } from 'react-router';
import { App } from './App';

export type Props = {
  url: string,
  context: any
};

export const Main = (props: Props) => {
  const { url, context } = props;
  return (
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );
};
