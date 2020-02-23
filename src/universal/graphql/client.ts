import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch";

const DEVELOPMENT_HOST = "localhost:5000";
const PRODUCTION_HOST = process.env.HOST_NAME;

const isBrowser = typeof window === "object";
const isProduction = process.env.NODE_ENV === 'production';

export const GRAPHQL_ENDPOINT = (function(): string {
  let protocol = "http:";
  let host = DEVELOPMENT_HOST;
  if (isBrowser && window.location.host !== DEVELOPMENT_HOST) {
    host = window.location.host;
    protocol = window.location.protocol;
  } else if (!isBrowser && isProduction) {
    host = PRODUCTION_HOST;
  }
  return `${protocol}//${host}`;
})();

export const client = new ApolloClient({
  uri: `${GRAPHQL_ENDPOINT}/graphql`,
  credentials: "same-origin",
  fetch,
});
