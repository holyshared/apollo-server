import React, { useState, FunctionComponentElement } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Header } from "../Header";

const GET_TOP_PAGE = gql`
  query getTopPage {
    page: getTopPage {
      loginUser {
        name
        loggedIn
      }
    }
  }
`;

const Opened = (): FunctionComponentElement<{}> => <p>opened</p>;

export const TopPage = (): FunctionComponentElement<{}> => {
  const [opened, open] = useState(false);
  const click = (): void => open(!opened);
  const { loading, error, data } = useQuery(GET_TOP_PAGE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;
  const { page: { loginUser } } = data;
  return (
    <React.Fragment>
      <Header>
        <title>Top</title>
        <meta name="keywords" content="blog" />
        <meta name="description" content={loginUser.name} />
      </Header>
      <h1>Top</h1>
      <p>{loginUser.name}</p>
      <p>
        <button type="button" onClick={click}>
          Click
        </button>
      </p>
      {opened ? <Opened /> : null}
    </React.Fragment>
  );
};
