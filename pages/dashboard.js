export default function Dashboard() {
  return (
    <div>
      <div className="hero-section-ua wf-section">
        <div className="hero-container--ua">
          <h1 className="heading--ua">My Dashboard</h1>
          <p className="paragraph-ua">Hi, Pick a Project to Get Started.</p>
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
    </div>
  );
}
