import React from 'react';
import { Helmet } from "react-helmet";

export const TopPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Top</h1>
    </React.Fragment>
  );
};
