import React from "react";
import { Link } from "react-router-dom";
import "./allNews.css";
const ShareNews = (props) => {
  return (
    <div className="news-icons">
      <h4>
        <i className="fas fa-share"></i>
        <Link to="/" className="link">
          <span className="d fb">
            <i className="fab fa-facebook"></i> facebook{" "}
          </span>
        </Link>
        <Link to="/" className="link">
          <span className="d lnk">
            <i className="fab fa-linkedin"></i> likedin{" "}
          </span>
        </Link>
        <Link to="/" className="link">
          <span className="d twt">
            <i className="fab fa-twitter"></i> Twitter{" "}
          </span>
        </Link>
      </h4>
    </div>
  );
};

export default ShareNews;
