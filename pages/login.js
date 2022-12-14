import Providers from "components/Providers";
import useUser from "lib/useUser";
import { useState } from "react";
export default function Login() {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/profile-sg",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  return (
    <>
      <div className="login">
        <Providers></Providers>
        {/* <Form
          errorMessage={errorMsg}
          onSubmit={async function handleSubmit(event) {
            event.preventDefault();

            const body = {
              username: event.currentTarget.username.value,
            };

            try {
              mutateUser(
                await fetchJson("/api/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(body),
                }),
                false,
              );
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message);
              } else {
                console.error("An unexpected error happened:", error);
              }
            }
          }}
        /> */}
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}

// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//       query loginClients {
//         loginClients {
//           clientId
//           authorizationUrl
//           provider
//           name
//     }
//   }
//     `,
//   });

//   return {
//     props: {
//       countries: data.countries.slice(0, 4),
//     },
//   };
// }
