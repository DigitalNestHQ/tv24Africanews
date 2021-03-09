import React from "react";
import {
  Link,
} from "react-router-dom";
import logo from "../../../../assets/images/TV24Ergb.png";
import { pageurl } from "../../../../utils/constants";
import TopNav from "../../topnav";
import "./nav.css";
import "../../header.css";

const Navbar = () => {
  return (
    <div className="Navigation">
      <TopNav />
      <header>
        <div className="container-fluid">
          <nav className="navbar d-print navbar-expand-lg navbar-light navigation py-3 px-1 ">
            <Link
              to={pageurl.HOMEPAGE}
              className="navbar-brand logo"
              style={{ color: "#fff" }}
            >
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <i style={{ color: "#E7332B" }} className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0 nav-mn">
                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-3"
                    activeclassname="activeLink"
                    exact
                    to={pageurl.HOMEPAGE}
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link ml-lg-3"
                    activeclassname="activeLink"
                    href={pageurl.DISCOVERAFRICA}
                  >
                    DISCOVER AREA
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-3"
                    activeclassname="activeLink"
                    to={pageurl.GOVERNANCE}
                  >
                    POLITICS/GOVERNAANCE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-3"
                    activeclassname="activeLink"
                    to={pageurl.BUSINESS}
                  >
                    BUSINESS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-3"
                    activeclassname="activeLink"
                    to={pageurl.ENTERTAINMENT}
                  >
                    ENTERTAINMENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link ml-lg-3"
                    activeclassname="activeLink"
                    to={pageurl.LIFESTYLE}
                  >
                    LIFESTYLE
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0 nav-sub-i">
                <li className="nav-item hd-bd">
                  <Link
                    // path={withRouter(pageurl.SIGNIN)}
                    to="/login"
                    className="nav-link mt-3 mt-lg-0 px-4 text-white nav-sub-tp"
                  >
                    <i className="fas fa-sign-in-alt"></i>
                    SIGN IN
                  </Link>
                </li>
                <li className="nav-item hd-bd">
                  <Link
                    to="/subscribe"
                    className="nav-link nav-sub mt-3 mt-lg-0"
                  >
                    subscribe
                  </Link>
                  <i className="fas fa-search"></i>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
