import React from 'react';
import { Helmet } from "react-helmet";

export const TopPage = () => {
  return (
    <React.Fragment>
      <Helmet titleTemplate="%s | site">
        <meta charSet="utf-8" />
        <title>Top</title>
        <meta name="keywords" content="blog" />
      </Helmet>
      <h1>Top</h1>
    </React.Fragment>
  );
};
