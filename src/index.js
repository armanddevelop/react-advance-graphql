import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { AppProvider } from "./Context";

const client = new ApolloClient({
  uri: "https://petgram-server-react-advance-armanddevelop.vercel.app/graphql",
  cache: new InMemoryCache(),
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>
);
