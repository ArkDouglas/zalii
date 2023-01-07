export default function Dashboard() {
  return (
    <div>
      {/*  This site was created in Webflow. https://www.webflow.com  */}
      {/*  Last Published: Fri Nov 04 2022 03:00:22 GMT+0000 (Coordinated Universal Time)  */}
      <meta charSet="utf-8" />
      <title>Dashboard</title>
      <meta content="Dashboard" property="og:title" />
      <meta content="Dashboard" property="twitter:title" />
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
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="nav-container">
          <a href="#" className="w-nav-brand">
            <img
              src="images/Zalii-Logo.png"
              loading="lazy"
              alt="Zalii Logo
"
              className="logo"
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a
              href="https://zalii-book-website.webflow.io/"
              className="nav-link w-nav-link"
            >
              Home
            </a>
            <a href="#" className="nav-link w-nav-link">
              Photobooks
            </a>
            <a
              href="https://zalii-book-website.webflow.io/sign-up"
              className="nav-link w-nav-link"
            >
              sign up
            </a>
            <a
              href="https://zalii-book-website.webflow.io/log-in"
              className="nav-link w-nav-link"
            >
              log in
            </a>
          </nav>
          <div className="menu-button w-nav-button">
            <div className="icon w-icon-nav-menu" />
          </div>
        </div>
      </div>
      <div className="hero-section-ua wf-section">
        <div className="hero-container--ua">
          <h1 className="heading--ua">My Dashboard</h1>
          <p className="paragraph-ua">Hi, Pick a Project to Get Started.</p>
          <div className="w-layout-grid grid-3">
            <a
              href="https://zalii-book-website.webflow.io/invite-users"
              className="invite-users-button w-inline-block"
            >
              <img
                src="images/Invite-Users-Button.png"
                loading="lazy"
                alt="Invite users
"
              />
            </a>
            <a href="#" className="design-book-button w-inline-block">
              <img
                src="images/Design-Book-Button.png"
                loading="lazy"
                alt="Design book
"
              />
            </a>
            <a href="#" className="order-book-button w-inline-block">
              <img
                src="images/Order-Book-Button.png"
                loading="lazy"
                alt="Order book
"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer wf-section">
        <div className="footer-container">
          <div className="w-layout-grid _5-col-grid">
            <div
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ad87-d3982caf"
              className="empty-div"
            />
            <div
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ad88-d3982caf"
              className="div-block"
            >
              <div className="subheading-footer">Contact Us</div>
              <div className="text-block">
                Have Questions?
                <br />
                Email us at{" "}
                <a href="#" className="link-2">
                  support@zalii.com
                </a>
              </div>
              <div className="text-block">© 2022 Zalii</div>
            </div>
            <div
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ad93-d3982caf"
              className="div-block"
            >
              <div className="subheading-footer">Links</div>
              <ul role="list" className="w-list-unstyled">
                <li>
                  <a href="#" className="link">
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="link">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
            <div
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ada0-d3982caf"
              className="div-block"
            >
              <div className="subheading-footer">Social Media</div>
            </div>
            <div
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ada3-d3982caf"
              className="empty-div"
            />
          </div>
        </div>
      </div>
      {/* [if lte IE 9]><![endif] */}
    </div>
  );
}
