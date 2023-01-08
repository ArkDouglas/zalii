// Login.jsx
// replace fetchAPI with whatever you're using to connect to WPGraphQL.
import Image from "next/image";

import { gql, useQuery } from "@apollo/client";
const providersQuery = gql`
  query loginClients {
    loginClients {
      clientId
      authorizationUrl
      provider
      name
    }
  }
`;
export default function Providers() {
  const { data, loading, error } = useQuery(providersQuery);
  if (loading) {
    return (
      <h2>
        <a
          href="#loading"
          aria-hidden="true"
          className="aal_anchor"
          id="loading"
        >
          <svg
            aria-hidden="true"
            className="aal_svg"
            height="16"
            version="1.1"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            ></path>
          </svg>
        </a>
        Loading...
      </h2>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }
  //if statement to check for google
  function check_provider(client) {
    let provider_set = <></>;
    console.log("inside provider");
    console.log(client);
    if (client.provider == "GOOGLE") {
      console.log("its google");
      provider_set = (
        <>
          {provider_set}
          <div
            id="google_provider"
            className="container justify-center flex flex-col items-center"
          >
            <a
              href={client.authorizationUrl}
              className="text-center justify-between mt-4 w-full rounded-lg hover:bg-blue-200 bg-blue-500 w-inline-block mx-auto py-2 px-4  text-white"
            >
              <Image
                src="/Google-Icon.png"
                className="google-icon bg-white rounded-lg"
                width="30"
                height="30"
              />
              <div className="w-inline-block mx-4 my-2">Log In with google</div>
            </a>
          </div>
        </>
      );
    }
    return provider_set;
  }
  return (
    <>
      {data?.loginClients.map((client) => {
        return check_provider(client);
        console.log(client);
      })}

      <div
        id="social-logins"
        className="container mt-4 justify-center flex flex-col py-10 px-10 mx-0 min-w-full"
      >
        <div
          id="facebook_provider"
          className="container flex flex-col items-center"
        >
          <button
            href="#"
            className="mt-4 w-full rounded-lg justify-between hover:bg-blue-200 bg-blue-900 w-inline-block mx-auto py-2 px-4  text-white"
          >
            <Image
              src="/FB-Icon.png"
              loading="lazy"
              alt="Facebook icon"
              className="fb-icon rounded-lg"
              width="30"
              height="30"
            />
            <div className="w-inline-block mx-4 my-2">Log In with FaceBook</div>
          </button>
        </div>
        <div
          id="apple_provider"
          className="container flex flex-col items-center"
        >
          <button
            href="#"
            className="mt-4 w-full rounded-lg justify-between hover:bg-gray-600 bg-black w-inline-block mx-auto py-2 px-4  text-white"
          >
            <Image
              src="/Apple-Icon.png"
              loading="lazy"
              alt="Apple icon"
              className="apple-icon rounded-lg"
              width="30"
              height="30"
            />
            <div className="w-inline-block mx-4 my-2">Log In with APPLE</div>
          </button>
        </div>
      </div>
    </>
  );
}
