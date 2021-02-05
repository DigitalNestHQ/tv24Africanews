import React from "react";
import {pageurl} from '../../utils/constants';

import "./error404.css";


const Error404 = () => {
  return (
    <div className="error404-page">
      <div className="text-center heading-title">
        <h1 className="error404-heading">Oops!</h1>
        <p className="error404-text mb-5">Error 404: Page Not Found</p>
        <a className="error404-btn" href={pageurl.HOMEPAGE}>
										Go back Home
									</a>
      </div>

    </div>
  );
};

export default Error404;
