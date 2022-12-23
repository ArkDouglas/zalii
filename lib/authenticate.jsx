import { gql } from "@apollo/client";

const Authenticator = (provider, code, state) => {
 
    
    console.log("provider" + provider)
    console.log("code" + code)
    console.log("state" + state)

    // replace fetchAPI with whatever you're using to connect to WPGraphQL.
    const QUERY = gql(
        `mutation loginWithOAuth(
            $provider: LoginProviderEnum!, 
            $code:     String!,            
            $state:    String,             
            ) {
            login(
                input: {
                provider: $provider
                oauthResponse: {
                    state: $state,
                    code: $code, 
                }
                }
            ) {
                authToken
                authTokenExpiration
                refreshToken
                refreshTokenExpiration
                user { # The authenticated WordPress user.
                            id
                    name
                    email
                    username
                    avatar {
                        url
                    }

                }
            }
        }`
    );
        const { loading, error, data } = useQuery(QUERY, { variables: { provider,code,state } });

        console.log('authenticate data: ', data)
    return data;
}

export default function Authenticate(provider, code, state) {
    console.log('authenticate: ', provider, code, state)
    return (Authenticator(provider, code, state))
}
