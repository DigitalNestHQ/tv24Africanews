import React from "react";
import {Link } from "react-router-dom";
import logo from "./logo.png";
import "./index.css";

const Header = () => {
  return (
    <header className="discover-container">
      <div className="logo-container">
        <Link to="/" >
        <img src={logo} alt="logo" style={{"width": "75px"}}/>
        </Link>
      </div>
      <div className="discover_header">
        <nav className="discover_nav">
          <ul>
            <li className="nav-items">
              <Link className="nav-links discover" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover" to="/vod">
                VOD
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover" to="/discover">
                DISCOVER AFRICA
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover" to="/politics">
                POLITICS & GOVERNANCE
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover" to="/business">
                BUSINESS
              </Link>
            </li>
            <li className="nav-items">
              <Link className="nav-links discover" to="/entertainment">
                ENTERTAINMENT
              </Link>
            </li>
            <li className="nav-items" id="last">
              <Link className="nav-links discover" to="/lifestyle">
                LIFESTYLE
              </Link>
            </li>
          </ul>
        </nav>
        <h1>DISCOVER AFRICA</h1>
        <div className="africa-auth">
          <Link to="/login">SIGN IN</Link>
          <Link id="subscribe" to="/subscribe">
            SUBSCRIBE
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
