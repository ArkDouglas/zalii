import { ApolloProvider } from "@apollo/client";
import { Layout } from "components/index";
import ThemeStyles from "components/ThemeStyles/ThemeStyles";
import client from "lib/apollo-client";
import fetchJson from "lib/fetchJson";
import "normalize.css/normalize.css";

import "styles/main.scss";
import { SWRConfig } from "swr";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: fetchJson,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <ApolloProvider client={client}>
          {/* Wrap the component in a Layout component https://nextjs.org/docs/basic-features/layouts  */}
          <Layout>
            <ThemeStyles />

            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </SWRConfig>
    </>
  );
}

export default MyApp;
