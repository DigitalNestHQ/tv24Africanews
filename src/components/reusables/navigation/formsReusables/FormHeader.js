import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/TV24Ergb.png";
import "./formHeader.css"

const FormHeader = () => {
  return (
    // <Router>
      <header className="formHeader container-fluid">
        <div className="logo">
          <Link to="/"><img src={logo} alt="app logo" /></Link>
        </div>
        <div className="links">
          <Link className="links-item lnk1" to="/sign-up">Sign Up</Link>
          <Link className="links-item lnk2" to="/subscribe">Subscribe</Link>
        </div>
      </header>
    // </Router>
  );
};

export default FormHeader;
