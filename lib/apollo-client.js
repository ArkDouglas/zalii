import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
    credentials: 'same-origin',
    cache: new InMemoryCache(),
});

export default client;

