import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="menu-nav">
          <ul>
            <Link className="zoom" to="/">
              <li>
                <h2>HOME</h2>
              </li>
            </Link>
            <Link className="zoom" to="/artist">
              <li>
                <h2>ARTIST</h2>
              </li>
            </Link>
            <Link className="zoom" to="/shop">
              <li>
                <h2>SHOP</h2>
              </li>
            </Link>
            <a className="zoom" href="http://ffteblog.com">
              <li>
                <h2>BLOG</h2>
              </li>
            </a>
            <Link className="zoom" to="/connect">
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
