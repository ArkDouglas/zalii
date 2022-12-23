import { gql, useQuery } from "@apollo/client";
import __ from 'underscore';
const providersQuery = gql(
    `query loginClients {
    loginClients {
      clientId
      authorizationUrl
      provider
      name
    }
  }
  `
);

export default function Form() {
    const { loading, error, data } = useQuery(providersQuery);
    return (
        <>

            {
                data?.loginClients.map(
                    (client) => (
                        <a key={client.clientId} href={client.authorizationUrl}>
                            {__('Login with: ', 'my-handle') + client.name}
                        </a>
                    )
                )

            }
            {console.log("data")
            }
            {console.log(data)
            }
        </>
    )
}