import React from 'react';
import { Helmet } from "react-helmet";

export const APage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>A</h1>
    </React.Fragment>
  );
};
