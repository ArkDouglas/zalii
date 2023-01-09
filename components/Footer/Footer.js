import classNames from "classnames/bind";

import styles from "./Footer.module.scss";

let cx = classNames.bind(styles);

/**
 * The Blueprint's Footer component
 * @return {React.ReactElement} The Footer component.
 */
export default function Footer({ menuItems }) {
  return (
    <footer className={cx("footer")}>
      <div className="footer wf-section">
        <div className="footer-container">
          <div className="w-layout-grid _5-col-grid">
            <div className="empty-div" />
            <div className="div-block">
              <div className="subheading-footer">Contact Us</div>
              <div className="text-block">
                Have Questions?
                <br />
                Email us at{" "}
                <a href="#" className="link-2">
                  support@zalii.com
                </a>
              </div>
              <div className="text-block">© 2023 Zalii</div>
            </div>
            <div className="div-block">
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
            <div className="div-block">
              <div className="subheading-footer">Social Media</div>
            </div>
            <div className="empty-div" />
          </div>
        </div>
      </div>
    </footer>
  );
}
