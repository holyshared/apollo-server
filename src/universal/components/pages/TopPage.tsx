import React from 'react';

export const Html = (props) => {
  const { children } = props;
  return (
    <html>
      <head>
        <title>Top</title>
      </head>
      <body>
        <article id="app">
          {children}
        </article>
      </body>
    </html>);
};

export const TopPage = () => {
  return (
  <Html>
    <h1>Top</h1>
  </Html>);
};
