import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <header className="contact-header">
    <nav className="contact-header-nav">
      <Link to="/">
        <img src={logo} alt="logo" className="contact-logo logo" />
      </Link>
      <ul className="cont_lists">
        <li className="nav-items">
          <Link className="nav-links " href="#">
            HOME
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-links " href="#">
            VOB
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-links " href="#">
            DISCOVER AFRICA
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-links " href="#">
            POLITICS & GOVERNANCE
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-links " href="#">
            BUSINESS
          </Link>
        </li>
        <li className="nav-items">
          <Link className="nav-links " href="#">
            ENTERTAINMENT
          </Link>
        </li>
        <li className="nav-items" id="last">
          <Link className="nav-links " id="last" href="/">
            LIFESTYLE
          </Link>
        </li>
      </ul>
    </nav>
    <div className="hero">
      <div className="africa-auth">
        <Link to="/login">SIGN IN</Link>
        <Link id="subscribe" to="/subscribe">
          SUBSCRIBE
        </Link>
      </div>
      <h1>CONTACT US</h1>
    </div>
  </header>
);

export default Header;
