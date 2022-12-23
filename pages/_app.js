import fetchJson from "lib/fetchJson";
import { SWRConfig } from "swr";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SWRConfig>
  );
}

export default MyApp;
