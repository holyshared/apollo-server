import React, { ReactNode } from 'react';

type Props = {
  title: string,
  children?: ReactNode
};

export const Html = (props: Props): ReactNode => {
  const { title, children } = props;
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <article id="app">
          {children}
        </article>
      </body>
    </html>);
};
