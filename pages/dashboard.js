import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "lib/session";

export default function Dashboard(user) {
  return (
    <div>
      <div className="hero-section-ua wf-section">
        <div className="hero-container--ua">
          <h1 className="heading--ua">Hi {user.user.name}</h1>
          <p className="paragraph-ua">Pick a Project to Get Started.</p>
          <div className="w-layout-grid grid-3">
            <a href="/invite" className="invite-users-button w-inline-block">
              <img
                src="/Invite-Users-Button.png"
                loading="lazy"
                alt="Invite family"
              />
            </a>
            <a href="#" className="design-book-button w-inline-block">
              <img
                src="/Design-Book-Button.png"
                loading="lazy"
                alt="Design book"
              />
            </a>
            <a href="#" className="order-book-button w-inline-block">
              <img
                src="/Order-Book-Button.png"
                loading="lazy"
                alt="Order book"
              />
            </a>
          </div>
        </div>
      </div>
      {user && (
        <>
          <p style={{ fontStyle: "italic" }}></p>

          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({
  req,
  res,
}) {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user: { isLoggedIn: false, login: "", avatarUrl: "" },
      },
    };
  }

  return {
    props: { user: req.session.user.user },
  };
},
sessionOptions);
