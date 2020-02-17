import React, { useState, FunctionComponentElement } from "react";
import { Header } from "../Header";

const Opened = () => (<p>opened</p>);

export const TopPage = (): FunctionComponentElement<{}> => {
  const [opened, open] = useState(false);
  const click = () => open(!opened);
  return (
    <React.Fragment>
      <Header>
        <title>Top</title>
        <meta name="keywords" content="blog" />
      </Header>
      <h1>Top</h1>
      <p><button type="button" onClick={click}>Click</button></p>
      {opened ? <Opened /> : null}
    </React.Fragment>
  );
};
