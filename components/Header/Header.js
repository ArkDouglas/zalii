import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavigationMenu from "../NavigationMenu";

import styles from "./Header.module.scss";
let cx = classNames.bind(styles);
/**
 *
 * A Header component
 * @param {Props} props The props object.
 * @param {string} props.className An optional className to be added to the container.
 * @return {React.ReactElement} The FeaturedImage component.
 */
export default function Header({ className, menuItems }) {
  const [isNavShown, setIsNavShown] = useState(false);

  const headerClasses = cx("header", className);
  const navClasses = cx(
    "primary-navigation",
    isNavShown ? cx("show") : undefined
  );

  return (
    <header className={headerClasses}>
      sdfd
      <div className="container">
        <div className={cx("bar")}>
          <div className={cx("logo")}>
            <Link href="/">
              <a title="Home">
                <Image
                  src="/logo.png"
                  width={200}
                  height={40}
                  alt="logo"
                  layout="responsive"
                />
              </a>
            </Link>
          </div>
          <button
            type="button"
            className={cx("nav-toggle")}
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={cx("primary-navigation")}
            aria-expanded={isNavShown}
          >
            <FaBars />
          </button>
          <NavigationMenu
            id={cx("primary-navigation")}
            className={navClasses}
            menuItems={menuItems}
          ></NavigationMenu>
        </div>
      </div>
    </header>
  );
}
