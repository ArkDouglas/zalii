// pages/api/auth/[provider].jsx
import { gql } from "@apollo/client";
import { withIronSessionApiRoute } from "iron-session/next";
import client from "lib/apollo-client";
import { sessionOptions } from "lib/session";
async function authenticate(provider, code, state) {
  const variables = {
    input: {
      provider,

      code,

      state
    }
  };


  // replace fetchAPI with whatever you're using to connect to WPGraphQL.
  const loginMutation = gql
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
                user { 
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
    ;
  const { loading, error, data } = await client.mutate({
    mutation: loginMutation, variables: { provider: provider, code: code, state: state }
  });

  return data;
}



export default withIronSessionApiRoute(async (req, res) => {
  try {
    const {
      code, // The Authorization code from the Provider
      state, // The State used to validate request authenticity
      provider, // the catch-all param.
    } = await req.query

    // Authenticate the user with WPGraphQL.
    const data = await authenticate(provider, code, state);

    const user = { data }

    // We now have the auth/refresh tokens for a validated WPUser, lets store them.
    console.log('user' + user)
    for (var dd in user.data) {
      console.log("dd1 :  " + dd)


    }
    for (var dd in user.data.login.user) {
      console.log("dd4:  " + dd)

    }
    console.log('email : ' + user.data.login.user.email)
    console.log('name : ' + user.data.login.user.name)
    console.log('username : ' + user.data.login.user.username)
    console.log('avatar : ' + user.data.login.user.avatar.url)

    // Stored as :
    // user.data.login.user
    req.session.user = { user: user.data.login.user };
    await req.session.save();

    // Redirect the user from the api route back to the app.
    res.redirect('/profile-sg');
  } catch (error) {
    // Do something if authentication fails.
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error);
  }
}, sessionOptions);

