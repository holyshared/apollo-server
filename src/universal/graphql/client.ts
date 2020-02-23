import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

const DEVELOPMENT_HOST = "localhost:5000";

export const GRAPHQL_ENDPOINT = (function(): string {
  let protocol = "http:";
  let host = DEVELOPMENT_HOST;
  if (typeof window === "object" && window.location.host !== DEVELOPMENT_HOST) {
    host = window.location.host;
    protocol = window.location.protocol;
  }
  return `${protocol}//${host}`;
})();

export const client = new ApolloClient({
  uri: `${GRAPHQL_ENDPOINT}/graphql`,
  credentials: "same-origin",
  fetch,
});
