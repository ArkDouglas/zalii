export default function Design() {
  return (
    <div>
      {/*  This site was created in Webflow. https://www.webflow.com  */}
      {/*  Last Published: Fri Nov 04 2022 03:00:22 GMT+0000 (Coordinated Universal Time)  */}
      <meta charSet="utf-8" />
      <title>Book Design</title>
      <meta content="Book Design" property="og:title" />
      <meta content="Book Design" property="twitter:title" />
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
        className="navbar--3 w-nav"
      >
        <div className="nav-container--3">
          <a href="#" className="w-nav-brand">
            <img
              src="images/Zalii-Logo.png"
              loading="lazy"
              alt="Zalii Logo
"
              className="logo"
            />
          </a>
          <nav role="navigation" className="nav-menu-3 w-nav-menu">
            <a href="#" className="bd-share-button w-button">
              Share
            </a>
            <a href="#" className="bd-saved-button w-button">
              Saved
            </a>
            <a href="#" className="bd-preview-button w-button">
              Preview
            </a>
            <a href="#" className="bd-order-button w-button">
              Order
            </a>
          </nav>
          <div className="menu-button w-nav-button">
            <div className="icon w-icon-nav-menu" />
          </div>
        </div>
      </div>
      <div className="book-design-container wf-section">
        <div className="add-photos-container">
          <div className="ap-div-block-1">
            <div className="ap-title">Photos</div>
            <img
              src="images/Close-Button.png"
              loading="lazy"
              alt="Close button"
              className="close-button"
            />
          </div>
          <a href="#" className="ap-button w-button">
            Add Photos
          </a>
          <div className="ap-div-block-2">
            <img
              src="images/purple-check-box.png"
              loading="lazy"
              alt="Purple check box
"
              className="purple-check-box"
            />
            <div className="ap-text-block">Hide used photos</div>
          </div>
          <div className="ap-div-block-3">
            <div className="ap-div-block-4">
              <img
                src="images/Upload-Instructions.png"
                loading="lazy"
                alt="Upload place holder"
                className="quick-start"
              />
            </div>
          </div>
        </div>
        <div className="main-work-space">
          <div className="ws-menu">
            <img
              src="images/Delete-Pages-Button.png"
              loading="lazy"
              alt="Delete pages button"
              className="delete-pages"
            />
            <img
              src="images/Undo-Button.png"
              loading="lazy"
              alt="Undo button"
              className="undo"
            />
            <img
              src="images/Redo-Button.png"
              loading="lazy"
              alt="Redo button"
              className="redo"
            />
            <img
              src="images/Add-Pages.png"
              loading="lazy"
              alt="Add pages button"
              className="add-pages"
            />
          </div>
          <div className="book-preview">
            <div className="ws-text-block">Drop photo here.</div>
          </div>
        </div>
        <div className="right-menu">
          <div className="rm-div-block">
            <div className="rm-text-block">Select a layout below</div>
          </div>
          <div className="w-layout-grid row-1">
            <div
              id="w-node-_3d16be10-bd7e-f716-37cb-b6e16fdfafb4-cfc750a5"
              className="column-1"
            >
              <img
                src="images/Layout.png"
                loading="lazy"
                alt="Layout place holder"
                className="place-holder"
              />
              <div className="rm-text-block">Front Inside</div>
            </div>
            <div
              id="w-node-e1755345-3567-1190-172c-85f075c0b8cf-cfc750a5"
              className="column-2"
            >
              <img
                src="images/Layout.png"
                loading="lazy"
                alt="Layout place holder"
                className="place-holder"
              />
              <div className="rm-text-block">1</div>
            </div>
            <div
              id="w-node-_0813b25a-6946-3675-1762-3dade02eaf7c-cfc750a5"
              className="column-1"
            >
              <img
                src="images/Layout.png"
                loading="lazy"
                alt="Layout place holder"
              />
              <div className="rm-text-block">2</div>
            </div>
            <div
              id="w-node-_19edf110-ce92-4236-8788-4a0d5feaf99e-cfc750a5"
              className="column-2"
            >
              <img
                src="images/Layout.png"
                loading="lazy"
                alt="Layout place holder"
              />
              <div className="rm-text-block">3</div>
            </div>
            <div
              id="w-node-_254d0b30-92dc-a798-be33-4c28d11d522e-cfc750a5"
              className="column-1"
            >
              <img
                src="images/Layout.png"
                loading="lazy"
                alt="Layout place holder"
              />
              <div className="rm-text-block">4</div>
            </div>
            <div
              id="w-node-_64a5d785-3d82-83ea-1aae-b851bff3d046-cfc750a5"
              className="column-2"
            >
              <img
                src="images/Layout.png"
                loading="lazy"
                alt="Layout place holder"
              />
              <div className="rm-text-block">5</div>
            </div>
          </div>
        </div>
      </div>
      {/* [if lte IE 9]><![endif] */}
    </div>
  );
}
