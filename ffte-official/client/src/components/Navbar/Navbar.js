import React from "react";
import { Link } from "react-router-dom";
import navbarStyles from "./navbar.module.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className={navbarStyles.wrapper}>
        <div className={navbarStyles.menu_nav}>
          <ul className={navbarStyles.list}>
            <Link className={navbarStyles.zoom} to="/">
              <li>
                <h2>HOME</h2>
              </li>
            </Link>
            <Link className={navbarStyles.zoom} to="/artist">
              <li>
                <h2>ARTIST</h2>
              </li>
            </Link>
            <Link className={navbarStyles.zoom} to="/shop">
              <li>
                <h2>SHOP</h2>
              </li>
            </Link>
            <a
              className={navbarStyles.zoom}
              href="http://ffteblog.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <h2>BLOG</h2>
              </li>
            </a>
            <Link className={navbarStyles.zoom} to="/connect">
              <li>
                <h2>CONNECT</h2>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
