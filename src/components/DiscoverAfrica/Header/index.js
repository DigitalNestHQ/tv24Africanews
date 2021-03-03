import React from "react";
import logo from "./logo.png";
import "./index.css";

const Header = () => {
  return (
    <header className="discover-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="discover_header">
        <nav className="discover_nav">
          <ul>
            <li className="nav-items">
              <a className="nav-links discover" href="/">
                HOME
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="/vod">
                VOD
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="/discover">
                DISCOVER AFRICA
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="/politics">
                POLITICS & GOVERNANCE
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="/business">
                BUSINESS
              </a>
            </li>
            <li className="nav-items">
              <a className="nav-links discover" href="/entertainment">
                ENTERTAINMENT
              </a>
            </li>
            <li className="nav-items" id="last">
              <a className="nav-links discover" href="/lifestyle">
                LIFESTYLE
              </a>
            </li>
          </ul>
        </nav>
        <h1>DISCOVER AFRICA</h1>
        <div className="africa-auth">
          <a href="/login">SIGN IN</a>
          <a id="subscribe" href="/subscribe">
            SUBSCRIBE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
