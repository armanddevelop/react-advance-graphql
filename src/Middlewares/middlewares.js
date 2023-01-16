import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    const authToken = JSON.parse(token);
    const { tokenData } = authToken;
    operation.setContext({
      headers: {
        authorization: "bearer " + tokenData,
      },
    });
  }
  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    sessionStorage.removeItem("token");
    window.location = "/user";
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: "https://petgram-server-react-advance-armanddevelop.vercel.app/graphql",
    }),
  ]),
});
