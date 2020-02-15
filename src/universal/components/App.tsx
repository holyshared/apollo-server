import React from 'react';
import { StaticRouter } from 'react-router';
import { Main } from './Main';

export type Props = {
  url: string,
  context: any
};

export const App = (props: Props) => {
  const { url, context } = props;
  return (
    <StaticRouter location={url} context={context}>
      <Main />
    </StaticRouter>
  );
};
