import classNames from "classnames/bind";
import styles from "./Navigation.module.scss";

export default function NavigationMenu({ className, children }) {
  let cx = classNames.bind(styles);

  return (
    <nav className={className}>
      <div className="container">
        <ul className={cx("navbar-nav")}>
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/design">
              Photobooks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/authenticate">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/api/logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
