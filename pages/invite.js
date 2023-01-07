export default function Invite() {
  return (
    <div>
      {/*  This site was created in Webflow. https://www.webflow.com  */}
      {/*  Last Published: Fri Nov 04 2022 03:00:22 GMT+0000 (Coordinated Universal Time)  */}
      <meta charSet="utf-8" />
      <title>Invite Users</title>
      <meta content="Invite Users" property="og:title" />
      <meta content="Invite Users" property="twitter:title" />
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
      <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link href="images/webclip.png" rel="apple-touch-icon" />
      <div className="invite-users-screen wf-section">
        <div className="invite-users-screen-container">
          <div className="subheading-iu">Invite users to Zalii</div>
          <div className="div-block-iu">
            <div className="text-block-iu">
              Want to collaborate with family members?
              <br />
              Enter their emails below!
            </div>
          </div>
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form-iu"
            >
              <input
                type="email"
                className="iu-text-field w-input"
                maxLength={256}
                name="email"
                data-name="Email"
                placeholder="Email Address"
                id="email"
                required
              />
              <div className="div-block-iu-2">
                <label className="radio-button-field w-radio">
                  <input
                    type="radio"
                    data-name="Radio"
                    id="radio"
                    name="radio"
                    defaultValue="Radio"
                    className="w-form-formradioinput w-radio-input"
                  />
                  <span className="w-form-label" htmlFor="radio">
                    Member
                  </span>
                </label>
                <label className="radio-button-field-2 w-radio">
                  <input
                    type="radio"
                    data-name="Radio 2"
                    id="radio-2"
                    name="radio-2"
                    defaultValue="Radio 2"
                    className="w-form-formradioinput w-radio-input"
                  />
                  <span
                    className="radio-button-label w-form-label"
                    htmlFor="radio-2"
                  >
                    Viewer (Read-only)
                  </span>
                </label>
              </div>
              <input
                type="submit"
                defaultValue="Invite"
                data-wait="Please wait..."
                className="form-button-iu w-button"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
      {/* [if lte IE 9]><![endif] */}
    </div>
  );
}
