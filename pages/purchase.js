export default function Purchase() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Purchase</title>
      <meta content="Purchase" property="og:title" />
      <meta content="Purchase" property="twitter:title" />
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
      <div className="hero-section-ps wf-section">
        <div className="hero-container--ps">
          <div className="ps-div-block">
            <img
              src="images/Book-Preview.png"
              loading="lazy"
              alt="Book preview place holder
"
              className="ps-stock-image"
            />
          </div>
        </div>
        <div className="w-layout-grid grid-4">
          <div
            id="w-node-_3fa353c1-e9bf-e5fb-b85a-fa72b20faaf2-4f7931a5"
            className="ps-div-block-2"
          >
            <div className="ps-text-block">
              Every aspect of this design is customizable by adding text,
              changing layouts, adding/removing stickers or backgrounds.
            </div>
          </div>
          <div
            id="w-node-_1bdac351-27f3-2588-abea-943bd33f7de2-4f7931a5"
            className="div-block-8-copy"
          >
            <div className="ps-price">$48.94</div>
            <a href="#" className="order-button w-button">
              Buy Book
            </a>
          </div>
        </div>
      </div>
      <div className="footer wf-section">
        <div className="footer-container">
          <div className="w-layout-grid _5-col-grid">
            <div
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ad87-4f7931a5"
              className="empty-div"
            />
            <div
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ad88-4f7931a5"
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
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ad93-4f7931a5"
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
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ada0-4f7931a5"
              className="div-block"
            >
              <div className="subheading-footer">Social Media</div>
            </div>
            <div
              id="w-node-_43303c22-7556-f068-aa1c-b56d11c9ada3-4f7931a5"
              className="empty-div"
            />
          </div>
        </div>
      </div>
      {/* [if lte IE 9]><![endif] */}
    </div>
  );
}
