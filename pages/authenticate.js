export default function Authenticate() {
  return (
    <>
      <div>
        {/*  This site was created in Webflow. https://www.webflow.com  */}
        {/*  Last Published: Fri Nov 04 2022 03:00:22 GMT+0000 (Coordinated Universal Time)  */}
        <meta charSet="utf-8" />
        <title>Log In</title>
        <meta content="Log In" property="og:title" />
        <meta content="Log In" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="css/webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="css/zalii-book-website.webflow.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* [if lt IE 9]><![endif] */}
        <link
          href="images/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="images/webclip.png" rel="apple-touch-icon" />
        <div className="log-in-screen wf-section">
          <div className="log-in-screen-container">
            <div className="w-layout-grid grid">
              <div
                id="w-node-_294ddaec-aea3-d142-50f9-4c8dd29dac2f-faf66e46"
                className="lc-content-left"
              >
                <div className="subheading-lc">#1 Rated in Photo Books</div>
                <ul role="list" className="list w-list-unstyled">
                  <li>
                    <div className="lc-textblock">Designs You'll Love</div>
                    <div className="lc-textblock-2">
                      Or create your own with Blank Canvas
                    </div>
                  </li>
                  <li>
                    <div className="lc-textblock">Your Story, Your way</div>
                    <div className="lc-textblock-2">
                      Enjoy full creative freedom with our editor
                    </div>
                  </li>
                  <li>
                    <div className="lc-textblock">
                      100% Happiness Guaranteed
                    </div>
                    <div className="lc-textblock-2">
                      We're here to help from start to finish
                    </div>
                  </li>
                </ul>
                <img
                  src="images/Image.png"
                  loading="lazy"
                  alt="Stock image
"
                  className="image--2"
                  width={306}
                />
              </div>
              <div
                id="w-node-_957fa653-6934-0071-e6df-8cf6204331ee-faf66e46"
                className="lc-content-right"
              >
                <div className="lc-textblock-2-586">
                  <a
                    href="https://zalii-book-website.webflow.io/sign-up"
                    className="lc-link"
                  >
                    Sign Up
                  </a>
                </div>
                <div className="form-block w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    className="form"
                  >
                    <input
                      type="email"
                      className="text-field-2 w-input"
                      maxLength={256}
                      name="email"
                      data-name="Email"
                      placeholder="Email Address"
                      id="email"
                      required
                    />
                    <input
                      type="text"
                      className="text-field-3 w-input"
                      maxLength={256}
                      name="field"
                      data-name="Field"
                      placeholder="Password"
                      id="field"
                      required
                    />
                    <input
                      type="submit"
                      defaultValue="Log In with email"
                      data-wait="Please wait..."
                      className="form-button w-button"
                    />
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
                <div className="or-text-block">Or</div>
                <a href="#" className="google-button--lc w-inline-block">
                  <img
                    src="images/Google-Icon.png"
                    loading="lazy"
                    alt="Google icon"
                    className="google-icon"
                  />
                  <div className="button-fonts">Log In with google</div>
                </a>
                <a href="#" className="facebook-button--lc w-inline-block">
                  <img
                    src="images/FB-Icon.png"
                    loading="lazy"
                    alt="FB icon"
                    className="fb-icon"
                  />
                  <div className="button-fonts">Log In with Facebook</div>
                </a>
                <a href="#" className="apple-button--lc w-inline-block">
                  <img
                    src="images/Apple-Icon.png"
                    loading="lazy"
                    alt="Apple Icon
"
                    className="apple-icon"
                  />
                  <div className="button-fonts">Log In with Apple</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>
    </>
  );
}
