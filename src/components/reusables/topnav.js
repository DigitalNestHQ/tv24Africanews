import React from "react";
import "./header.css";

function topNav(props) {
  const getDate = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    return `${day}/ ${month}/ ${year}`;
  };
  return (
    <div className="top-nav">
      <p className="text-white" style={{ marginBottom: "0px" }}>
        {" "}
        <span>Welcome Adeola Konga</span> <span>{getDate()}</span>{" "}
      </p>
      <ul className="soc-nav" style={{ marginBottom: "0px" }}>
        <li>
          <a href="/">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default topNav;
