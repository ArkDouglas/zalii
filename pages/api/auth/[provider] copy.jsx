// pages/api/auth/[provider].jsx
import { gql, useQuery } from "@apollo/client";

import { sessionOptions } from "lib/session";

import { withIronSessionApiRoute } from "iron-session/next";


const QUERY = gql(`
    mutation loginWithOAuth(
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
        }`);

// export async function authenticate(provider, code, state) {

//     console.log("provider" + provider)
//     console.log("code" + code)
//     console.log("state" + state)

//     console.log('####4')
//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;
//     console.log('####5')

//     return data;
// }

console.log('####5')

export function sessionHandler(req, res) {
    try {
        const {
            code, // The Authorization code from the Provider
            state, // The State used to validate request authenticity
            provider, // the catch-all param.
        } = req.query
        console.log('vars')
        console.log(code, state, provider)
        // Authenticate the user with WPGraphQL.
        console.log('1');
        console.log('2');
        const variables = {
            input: {
                provider,
                code,
                state
            }
        };

        const { loading, error, data } = useQuery(QUERY, { variables: { variables } });

        // We now have the auth/refresh tokens for a validated WPUser, lets store them.

        const user = { data }
        console.log('3');

        console.log('user' + user)
        console.log(user.user)

        for (var dd in user.user) {
            console.log("dd :  " + dd)
            console.log("dt :  " + dd.email)


        }
        req.session.user = { user: user.user };
        req.session.save();
        for (var dd in req.session.user.user) {
            console.log("dxd :  " + dd)
            console.log("dxd :  " + dd.email)

        }
        // Redirect the user from the api route back to the app.
        res.redirect('/profile-sg');
    } catch (error) {
        // Do something if authentication fails.
        console.log("an error occured", error);

        const { response: fetchResponse } = error;
        res.status(fetchResponse?.status || 500).json(error);
    }
};


export default withIronSessionApiRoute(sessionHandler, sessionOptions)


